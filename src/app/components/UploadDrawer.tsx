import { useRef, useState, useEffect } from 'react';
import { Paperclip, Upload, MoreVertical, Pencil, Trash2, Check, X } from 'lucide-react';
import { useUploadedFiles, UploadedFile } from './UploadContext';

interface UploadDrawerProps {
  onClose: () => void;
}

export function UploadDrawer({ onClose }: UploadDrawerProps) {
  const { files, setFiles, openLightbox } = useUploadedFiles();
  const [dragging, setDragging] = useState(false);
  const [contextMenuId, setContextMenuId] = useState<string | null>(null);
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const renameInputRef = useRef<HTMLInputElement>(null);
  const contextMenuRef = useRef<HTMLDivElement>(null);

  // Close context menu on outside click
  useEffect(() => {
    if (!contextMenuId) return;
    const handler = (e: MouseEvent) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(e.target as Node)) {
        setContextMenuId(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [contextMenuId]);

  // Focus rename input when it mounts
  useEffect(() => {
    if (renamingId && renameInputRef.current) {
      renameInputRef.current.focus();
      renameInputRef.current.select();
    }
  }, [renamingId]);

  const addFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const added = Array.from(newFiles).map((f) => ({
      id: Math.random().toString(36).slice(2),
      name: f.name.replace(/\.[^.]+$/, ''),
      size: f.size > 1024 * 1024
        ? `${(f.size / 1024 / 1024).toFixed(1)} MB`
        : `${Math.round(f.size / 1024)} KB`,
      type: f.type.startsWith('image/') ? 'image' : 'text',
    }));
    setFiles((prev) => [...prev, ...added]);
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    setContextMenuId(null);
  };

  const startRename = (file: UploadedFile) => {
    setRenameValue(file.name);
    setRenamingId(file.id);
    setContextMenuId(null);
  };

  const commitRename = () => {
    if (!renamingId) return;
    const trimmed = renameValue.trim();
    if (trimmed) {
      setFiles((prev) =>
        prev.map((f) => (f.id === renamingId ? { ...f, name: trimmed } : f))
      );
    }
    setRenamingId(null);
  };

  const cancelRename = () => setRenamingId(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    addFiles(e.dataTransfer.files);
  };

  return (
    <div className="w-[220px] bg-white border-r border-[#e7e7e7] h-full flex flex-col shadow-[4px_0_16px_rgba(0,0,0,0.08)]">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-[#e7e7e7] shrink-0">
        <p className="text-[14px] text-[#111827]" style={{ fontWeight: 600 }}>Assets</p>
        <p className="text-[12px] text-[#6b7280] mt-0.5">Uploaded files</p>
      </div>

      {/* Upload button */}
      <div className="px-4 py-3 shrink-0">
        <button
          onClick={() => inputRef.current?.click()}
          className="w-full flex items-center justify-center gap-2 bg-[#d20f1f] hover:bg-[#b80d1a] text-white text-[13px] rounded-[6px] py-[7px] transition-colors"
          style={{ fontWeight: 500 }}
        >
          <Upload className="w-3.5 h-3.5" />
          Upload File
        </button>
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>

      {/* File list */}
      <div
        className={`flex-1 overflow-y-auto px-2 pb-4 relative transition-colors ${dragging ? 'bg-[#fff5f5]' : ''}`}
        onDragOver={(e) => {
          if (!e.dataTransfer.types.includes('application/x-upload-file')) {
            e.preventDefault();
            setDragging(true);
          }
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
      >
        {files.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-2 text-center px-4">
            <div className="w-10 h-10 rounded-full bg-[#f9f9f9] border border-dashed border-[#ccc] flex items-center justify-center">
              <Upload className="w-4 h-4 text-[#9ca3af]" />
            </div>
            <p className="text-[12px] text-[#9ca3af]">Drop files here or click<br />Upload File above</p>
          </div>
        ) : (
          <div className="flex flex-col gap-0.5 pt-1">
            {files.map((file) => (
              <FileRow
                key={file.id}
                file={file}
                isRenaming={renamingId === file.id}
                renameValue={renameValue}
                renameInputRef={renameInputRef}
                isContextOpen={contextMenuId === file.id}
                contextMenuRef={contextMenuRef}
                onRenameChange={setRenameValue}
                onRenameCommit={commitRename}
                onRenameCancel={cancelRename}
                onOpenLightbox={() => openLightbox(file)}
                onOpenContext={(e) => {
                  e.stopPropagation();
                  setContextMenuId((prev) => (prev === file.id ? null : file.id));
                }}
                onRename={() => startRename(file)}
                onDelete={() => removeFile(file.id)}
              />
            ))}
          </div>
        )}

        {/* OS drop overlay */}
        {dragging && (
          <div className="absolute inset-0 border-2 border-dashed border-[#d20f1f] rounded pointer-events-none bg-[#fff5f5]/80 flex items-center justify-center">
            <p className="text-[12px] text-[#d20f1f]" style={{ fontWeight: 600 }}>Drop to upload</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── File Row ─────────────────────────────────────────────────────────────────

function FileRow({
  file,
  isRenaming,
  renameValue,
  renameInputRef,
  isContextOpen,
  contextMenuRef,
  onRenameChange,
  onRenameCommit,
  onRenameCancel,
  onOpenLightbox,
  onOpenContext,
  onRename,
  onDelete,
}: {
  file: UploadedFile;
  isRenaming: boolean;
  renameValue: string;
  renameInputRef: React.RefObject<HTMLInputElement | null>;
  isContextOpen: boolean;
  contextMenuRef: React.RefObject<HTMLDivElement | null>;
  onRenameChange: (v: string) => void;
  onRenameCommit: () => void;
  onRenameCancel: () => void;
  onOpenLightbox: () => void;
  onOpenContext: (e: React.MouseEvent) => void;
  onRename: () => void;
  onDelete: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`flex items-center gap-2 px-2 py-[7px] rounded-[6px] transition-colors ${
          hovered || isContextOpen ? 'bg-[#f5f5f5]' : ''
        }`}
      >
        {/* Paperclip */}
        <Paperclip className="w-3.5 h-3.5 text-[#9ca3af] shrink-0" />

        {/* Name / rename input */}
        <div className="flex-1 min-w-0">
          {isRenaming ? (
            <div className="flex items-center gap-1">
              <input
                ref={renameInputRef}
                value={renameValue}
                onChange={(e) => onRenameChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onRenameCommit();
                  if (e.key === 'Escape') onRenameCancel();
                }}
                className="flex-1 min-w-0 text-[12px] text-[#111827] border border-[#0050c9] rounded-[4px] px-1.5 py-0.5 outline-none bg-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <button
                onClick={onRenameCommit}
                className="p-0.5 text-[#059669] hover:bg-green-50 rounded transition-colors"
                title="Confirm"
              >
                <Check className="w-3 h-3" />
              </button>
              <button
                onClick={onRenameCancel}
                className="p-0.5 text-[#9ca3af] hover:bg-gray-100 rounded transition-colors"
                title="Cancel"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenLightbox}
              className="w-full text-left"
              title={file.name}
            >
              <p className="text-[12px] text-[#374151] truncate leading-tight hover:text-[#0050c9] transition-colors">
                {file.name}
              </p>
              <p className="text-[10px] text-[#9ca3af]">{file.size}</p>
            </button>
          )}
        </div>

        {/* 3-dot menu button */}
        {!isRenaming && (
          <button
            onClick={onOpenContext}
            className={`p-0.5 rounded transition-all text-[#9ca3af] hover:text-[#374151] hover:bg-gray-200 shrink-0 ${
              hovered || isContextOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            title="More options"
          >
            <MoreVertical className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Context menu dropdown */}
      {isContextOpen && (
        <div
          ref={contextMenuRef}
          className="absolute right-0 top-full mt-0.5 z-50 w-[140px] bg-white border border-[#e5e5e5] rounded-[8px] shadow-[0px_8px_24px_rgba(0,0,0,0.12)] overflow-hidden py-1"
          style={{ zIndex: 100 }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); onRename(); }}
            className="flex items-center gap-2.5 w-full px-3 py-2 text-left hover:bg-[#f9f9f9] transition-colors"
          >
            <Pencil className="w-3.5 h-3.5 text-[#374151]" />
            <span className="text-[13px] text-[#111827]" style={{ fontWeight: 500 }}>Rename</span>
          </button>
          <div className="h-px bg-[#f0f0f0] mx-2" />
          <button
            onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="flex items-center gap-2.5 w-full px-3 py-2 text-left hover:bg-[#fff5f5] transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5 text-[#d20f1f]" />
            <span className="text-[13px] text-[#d20f1f]" style={{ fontWeight: 500 }}>Delete</span>
          </button>
        </div>
      )}
    </div>
  );
}
