import { useState, useRef, useEffect, useCallback, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { specContent } from './data';
import { useUploadedFiles, UploadedFile } from './UploadContext';
import {
  Clock, MoreVertical, GripVertical, Plus,
  Type, Heading1, List, ListOrdered, Minus,
  Paperclip, X, ArrowLeft,
  ChevronRight, FileCode,
} from 'lucide-react';
import { ScreenPromptsModal } from './ScreenPromptsModal';

// ── Types ────────────────────────────────────────────────────────────────────

type BlockType = 'heading' | 'paragraph' | 'bullet-list' | 'numbered-list' | 'divider' | 'attachment' | 'screen-prompts';

interface Block {
  id: string;
  type: BlockType;
  content: string;
  fileName?: string;
  fileSize?: string;
}

type SlashMenuView = 'main' | 'assets';

// ── Seed blocks ──────────────────────────────────────────────────────────────

function sectionsToBlocks(sections: typeof specContent.sections): Block[] {
  const blocks: Block[] = [];
  sections.forEach((section) => {
    blocks.push({ id: `h-${section.id}`, type: 'heading', content: section.heading });
    blocks.push({ id: `p-${section.id}`, type: 'paragraph', content: section.content });
    // Seed a screen-prompts block after the first section
    if (section.id === sections[0].id) {
      blocks.push({
        id: `sp-seed-${section.id}`,
        type: 'screen-prompts',
        content: '',
        fileName: 'story3.1_screen-prompts',
      });
    }
  });
  return blocks;
}

// ── TOC Icon ─────────────────────────────────────────────────────────────────

function TocIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <rect x="1" y="2" width="4" height="2" rx="0.5" fill="currentColor" />
      <rect x="1" y="7" width="4" height="2" rx="0.5" fill="currentColor" />
      <rect x="1" y="12" width="4" height="2" rx="0.5" fill="currentColor" />
      <rect x="7" y="2" width="8" height="2" rx="0.5" fill="currentColor" />
      <rect x="7" y="7" width="8" height="2" rx="0.5" fill="currentColor" />
      <rect x="7" y="12" width="8" height="2" rx="0.5" fill="currentColor" />
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function SpecEditorView() {
  const [blocks, setBlocks] = useState<Block[]>(() => sectionsToBlocks(specContent.sections));
  const [tocOpen, setTocOpen] = useState(true);
  const [focusedBlockId, setFocusedBlockId] = useState<string | null>(null);

  // Slash menu state – hoisted so we can control submenu from parent
  const [slashMenuBlockId, setSlashMenuBlockId] = useState<string | null>(null);
  const [slashMenuView, setSlashMenuView] = useState<SlashMenuView>('main');

  // Screen prompts modal
  const [screenPromptsOpen, setScreenPromptsOpen] = useState(false);

  const editorRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<Record<string, HTMLElement | null>>({});

  const { files: uploadedFiles } = useUploadedFiles();

  const headings = blocks.filter((b) => b.type === 'heading');

  const scrollToBlock = (blockId: string) => {
    const el = blockRefs.current[blockId];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const editable = el.querySelector('[contenteditable]') as HTMLElement;
      if (editable) editable.focus();
    }
  };

  const updateBlock = useCallback((id: string, content: string) => {
    setBlocks((prev) => prev.map((b) => (b.id === id ? { ...b, content } : b)));
  }, []);

  const addBlockAfter = useCallback((afterId: string, type: BlockType = 'paragraph', extra?: Partial<Block>) => {
    const newId = `block-${Date.now()}`;
    setBlocks((prev) => {
      const idx = prev.findIndex((b) => b.id === afterId);
      const copy = [...prev];
      copy.splice(idx + 1, 0, { id: newId, type, content: '', ...extra });
      return copy;
    });
    if (type !== 'attachment') {
      setTimeout(() => {
        const el = blockRefs.current[newId];
        if (el) (el.querySelector('[contenteditable]') as HTMLElement)?.focus();
      }, 50);
    }
    return newId;
  }, []);

  const deleteBlock = useCallback((id: string) => {
    setBlocks((prev) => (prev.length <= 1 ? prev : prev.filter((b) => b.id !== id)));
  }, []);

  const changeBlockType = useCallback((id: string, type: BlockType) => {
    setBlocks((prev) => prev.map((b) => (b.id === id ? { ...b, type } : b)));
  }, []);

  // Insert a screen-prompts block after the slash-command block
  const insertScreenPrompts = useCallback((blockId: string) => {
    addBlockAfter(blockId, 'screen-prompts', { fileName: 'story3.1_screen-prompts' });
    setBlocks((prev) =>
      prev.map((b) => (b.id === blockId ? { ...b, content: '' } : b))
    );
    setSlashMenuBlockId(null);
    setSlashMenuView('main');
  }, [addBlockAfter]);

  // Insert an asset attachment after the slash-command block
  const insertAsset = useCallback((blockId: string, file: UploadedFile) => {
    addBlockAfter(blockId, 'attachment', { fileName: file.name, fileSize: file.size });
    // Clear slash content on the originating block (it became '/')
    setBlocks((prev) =>
      prev.map((b) => (b.id === blockId ? { ...b, content: '' } : b))
    );
    setSlashMenuBlockId(null);
    setSlashMenuView('main');
  }, [addBlockAfter]);

  const closeSlashMenu = useCallback(() => {
    setSlashMenuBlockId(null);
    setSlashMenuView('main');
  }, []);

  const openSlashMenu = useCallback((blockId: string) => {
    setSlashMenuBlockId(blockId);
    setSlashMenuView('main');
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>, block: Block) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        addBlockAfter(block.id);
      }
      if (e.key === 'Backspace' && block.content === '' && block.type !== 'heading') {
        e.preventDefault();
        const idx = blocks.findIndex((b) => b.id === block.id);
        if (idx > 0) {
          const prevBlock = blocks[idx - 1];
          deleteBlock(block.id);
          setTimeout(() => {
            const el = blockRefs.current[prevBlock.id];
            if (el) {
              const editable = el.querySelector('[contenteditable]') as HTMLElement;
              if (editable) {
                editable.focus();
                const range = document.createRange();
                const sel = window.getSelection();
                range.selectNodeContents(editable);
                range.collapse(false);
                sel?.removeAllRanges();
                sel?.addRange(range);
              }
            }
          }, 50);
        }
      }
      if (e.key === '/' && block.content === '') {
        openSlashMenu(block.id);
      }
      if (e.key === 'Escape' && slashMenuBlockId === block.id) {
        closeSlashMenu();
      }
    },
    [blocks, addBlockAfter, deleteBlock, openSlashMenu, closeSlashMenu, slashMenuBlockId]
  );

  return (
    <div className="flex h-full p-4 gap-0">
      <div className="flex flex-1 min-w-0 border border-[#e5e5e5] rounded-xl overflow-hidden bg-white">
        {/* TOC */}
        <AnimatePresence initial={false}>
          {tocOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 220, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="border-r border-[#e5e5e5] flex flex-col bg-white overflow-hidden shrink-0"
            >
              <div className="w-[220px] min-w-[220px] flex flex-col h-full">
                <div className="h-[48px] flex items-center px-4 border-b border-[#e5e5e5] bg-[#fbfbfb] shrink-0">
                  <span className="text-[14px] text-[#111827] whitespace-nowrap" style={{ fontWeight: 500 }}>Table of Contents</span>
                </div>
                <div className="flex-1 overflow-y-auto py-2">
                  {headings.map((heading) => (
                    <button
                      key={heading.id}
                      onClick={() => scrollToBlock(heading.id)}
                      className="w-full text-left px-4 py-1.5 text-[14px] text-[#171717] hover:bg-gray-50 transition-colors truncate"
                      style={{ fontWeight: 600 }}
                      title={heading.content}
                    >
                      {heading.content}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Editor */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Toolbar */}
          <div className="h-[48px] min-h-[48px] bg-[#fbfbfb] border-b border-[#e5e5e5] flex items-center justify-between px-4 shrink-0">
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className={`p-1.5 rounded transition-colors ${tocOpen ? 'bg-gray-200 text-[#111827]' : 'hover:bg-gray-100 text-[#737373]'}`}
              title="Toggle Table of Contents"
            >
              <TocIcon />
            </button>
            <div className="flex items-center gap-1.5">
              <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                <Clock className="w-4 h-4 text-[#737373]" />
              </button>
              <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                <MoreVertical className="w-4 h-4 text-[#737373]" />
              </button>
            </div>
          </div>

          {/* Document body */}
          <div className="flex-1 overflow-y-auto" ref={editorRef}>
            <div className="max-w-[780px] mx-auto px-8 py-8">
              {blocks.map((block, index) => (
                <div
                  key={block.id}
                  ref={(el) => { blockRefs.current[block.id] = el; }}
                  className="group relative"
                  onMouseEnter={() => setFocusedBlockId(block.id)}
                  onMouseLeave={() => setFocusedBlockId(null)}
                >
                  {/* Block controls */}
                  {block.type !== 'attachment' && (
                    <div className={`absolute -left-10 top-0 flex items-center gap-0.5 transition-opacity ${focusedBlockId === block.id ? 'opacity-100' : 'opacity-0'}`}>
                      <button
                        onClick={() => addBlockAfter(index > 0 ? blocks[index - 1].id : block.id, 'paragraph')}
                        className="p-0.5 rounded hover:bg-gray-100 text-[#9ca3af] hover:text-[#374151]"
                        title="Add block"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <div className="p-0.5 rounded hover:bg-gray-100 text-[#9ca3af] cursor-grab">
                        <GripVertical className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  {/* Block rendering */}
                  {block.type === 'divider' ? (
                    <div className="py-4"><hr className="border-[#e5e5e5]" /></div>
                  ) : block.type === 'attachment' ? (
                    <AttachmentBlock
                      block={block}
                      onDelete={() => deleteBlock(block.id)}
                      isHovered={focusedBlockId === block.id}
                    />
                  ) : block.type === 'screen-prompts' ? (
                    <ScreenPromptsBlock
                      block={block}
                      onDelete={() => deleteBlock(block.id)}
                      isHovered={focusedBlockId === block.id}
                      onOpen={() => setScreenPromptsOpen(true)}
                    />
                  ) : (
                    <EditableBlock
                      block={block}
                      onInput={(content) => updateBlock(block.id, content)}
                      onKeyDown={(e) => handleKeyDown(e, block)}
                      onDelete={() => deleteBlock(block.id)}
                      showSlashMenu={slashMenuBlockId === block.id}
                      slashMenuView={slashMenuView}
                      uploadedFiles={uploadedFiles}
                      onSlashSelect={(type) => {
                        changeBlockType(block.id, type);
                        closeSlashMenu();
                      }}
                      onOpenAssetSubmenu={() => setSlashMenuView('assets')}
                      onAssetSelect={(file) => insertAsset(block.id, file)}
                      onBackToMain={() => setSlashMenuView('main')}
                      onCloseSlash={closeSlashMenu}
                      onInsertScreenPrompts={() => insertScreenPrompts(block.id)}
                    />
                  )}
                </div>
              ))}

              {/* Add block */}
              <button
                onClick={() => addBlockAfter(blocks[blocks.length - 1].id)}
                className="flex items-center gap-2 text-[#9ca3af] hover:text-[#374151] py-4 transition-colors text-[14px]"
              >
                <Plus className="w-4 h-4" />
                <span>Add a block</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Screen prompts modal */}
      <ScreenPromptsModal
        open={screenPromptsOpen}
        onClose={() => setScreenPromptsOpen(false)}
      />
    </div>
  );
}

// ── Attachment block ──────────────────────────────────────────────────────────

function AttachmentBlock({ block, onDelete, isHovered }: { block: Block; onDelete: () => void; isHovered: boolean }) {
  const { openLightbox, files } = useUploadedFiles();

  const handleClick = () => {
    // Try to find the matching uploaded file; if not found, synthesise one
    const match = files.find((f) => f.name === block.fileName);
    const file = match ?? {
      id: block.id,
      name: block.fileName ?? 'Untitled file',
      size: block.fileSize ?? '',
      type: 'image',
    };
    openLightbox(file);
  };

  return (
    <div className="flex items-center gap-1.5 py-1 group/att">
      <Paperclip className="w-[14px] h-[14px] text-[#6b7280] shrink-0" />
      <button
        onClick={handleClick}
        className="text-[16px] text-[#0050c9] underline underline-offset-2 cursor-pointer hover:text-[#003da5] transition-colors truncate leading-[32px] text-left"
        style={{ fontFamily: "'Inter', sans-serif" }}
        title={block.fileName}
      >
        {block.fileName || 'Untitled file'}
      </button>
      {block.fileSize && (
        <span className="text-[12px] text-[#9ca3af] shrink-0">({block.fileSize})</span>
      )}
      <button
        onClick={onDelete}
        className={`ml-1 p-0.5 rounded text-[#9ca3af] hover:text-[#d20f1f] hover:bg-red-50 transition-all ${isHovered ? 'opacity-100' : 'opacity-0 group-hover/att:opacity-100'}`}
        title="Remove attachment"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

// ── Screen prompts block ──────────────────────────────────────────────────────

function ScreenPromptsBlock({ block, onDelete, isHovered, onOpen }: { block: Block; onDelete: () => void; isHovered: boolean; onOpen: () => void }) {
  return (
    <div className="flex items-center gap-1.5 py-1 group/att">
      <FileCode className="w-[14px] h-[14px] text-[#6b7280] shrink-0" />
      <button
        onClick={onOpen}
        className="text-[16px] text-[#0050c9] underline underline-offset-2 cursor-pointer hover:text-[#003da5] transition-colors truncate leading-[32px] text-left"
        style={{ fontFamily: "'Inter', sans-serif" }}
        title={block.fileName}
      >
        {block.fileName || 'Untitled file'}
      </button>
      <button
        onClick={onDelete}
        className={`ml-1 p-0.5 rounded text-[#9ca3af] hover:text-[#d20f1f] hover:bg-red-50 transition-all ${isHovered ? 'opacity-100' : 'opacity-0 group-hover/att:opacity-100'}`}
        title="Remove attachment"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

// ── Slash menu items ──────────────────────────────────────────────────────────

const MAIN_SLASH_ITEMS = [
  { type: 'paragraph' as BlockType, icon: Type, label: 'Text', desc: 'Start writing plain text' },
  { type: 'heading' as BlockType, icon: Heading1, label: 'Heading', desc: 'Add a section heading' },
  { type: 'bullet-list' as BlockType, icon: List, label: 'Bullet List', desc: 'Create a bulleted list' },
  { type: 'numbered-list' as BlockType, icon: ListOrdered, label: 'Numbered List', desc: 'Create a numbered list' },
  { type: 'divider' as BlockType, icon: Minus, label: 'Divider', desc: 'Insert a horizontal rule' },
];

// ── Editable block ────────────────────────────────────────────────────────────

function EditableBlock({
  block,
  onInput,
  onKeyDown,
  onDelete,
  showSlashMenu,
  slashMenuView,
  uploadedFiles,
  onSlashSelect,
  onOpenAssetSubmenu,
  onAssetSelect,
  onBackToMain,
  onCloseSlash,
  onInsertScreenPrompts,
}: {
  block: Block;
  onInput: (content: string) => void;
  onKeyDown: (e: KeyboardEvent<HTMLElement>) => void;
  onDelete: () => void;
  showSlashMenu: boolean;
  slashMenuView: SlashMenuView;
  uploadedFiles: UploadedFile[];
  onSlashSelect: (type: BlockType) => void;
  onOpenAssetSubmenu: () => void;
  onAssetSelect: (file: UploadedFile) => void;
  onBackToMain: () => void;
  onCloseSlash: () => void;
  onInsertScreenPrompts: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (ref.current && ref.current.textContent !== block.content) {
      ref.current.textContent = block.content;
    }
  }, []);

  const handleInput = () => {
    if (ref.current) onInput(ref.current.textContent || '');
  };

  const blockClass = (() => {
    switch (block.type) {
      case 'heading': return 'text-[30px] leading-[40px] py-3 outline-none';
      case 'bullet-list': return 'text-[18px] leading-[32px] py-1 outline-none pl-6 before:content-["•"] before:absolute before:left-0 before:text-[#374151] relative';
      case 'numbered-list': return 'text-[18px] leading-[32px] py-1 outline-none pl-6 relative';
      default: return 'text-[18px] leading-[32px] py-1 outline-none';
    }
  })();

  const fontWeight = block.type === 'heading' ? 600 : 400;

  return (
    <div className="relative">
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        className={`${blockClass} text-black cursor-text`}
        style={{ fontWeight, fontFamily: "'Inter', sans-serif" }}
        onInput={handleInput}
        onKeyDown={(e) => {
          if (showSlashMenu && e.key === 'Escape') { onCloseSlash(); return; }
          onKeyDown(e);
        }}
        onFocus={() => setIsEditing(true)}
        onBlur={() => {
          setIsEditing(false);
          setTimeout(() => onCloseSlash(), 200);
        }}
      />

      {/* Placeholder */}
      {block.content === '' && !isEditing && (
        <div className={`absolute top-0 left-0 pointer-events-none text-[#9ca3af] ${blockClass}`} style={{ fontWeight }}>
          {block.type === 'heading' ? 'Heading' : "Type '/' for commands"}
        </div>
      )}

      {/* Slash command menu */}
      {showSlashMenu && (
        <div className="absolute left-0 top-full mt-1 z-50 w-[260px] bg-white border border-[#e5e5e5] rounded-[10px] shadow-[0px_8px_24px_rgba(0,0,0,0.12)] overflow-hidden">
          {slashMenuView === 'main' ? (
            <MainSlashMenu
              onSelect={onSlashSelect}
              onOpenAssets={onOpenAssetSubmenu}
              onInsertScreenPrompts={onInsertScreenPrompts}
            />
          ) : (
            <AssetSubMenu
              files={uploadedFiles}
              onBack={onBackToMain}
              onSelect={onAssetSelect}
            />
          )}
        </div>
      )}
    </div>
  );
}

// ── Main slash menu ───────────────────────────────────────────────────────────

function MainSlashMenu({
  onSelect,
  onOpenAssets,
  onInsertScreenPrompts,
}: {
  onSelect: (type: BlockType) => void;
  onOpenAssets: () => void;
  onInsertScreenPrompts: () => void;
}) {
  return (
    <div className="py-1">
      {MAIN_SLASH_ITEMS.map(({ type, icon: Icon, label, desc }) => (
        <button
          key={type}
          onMouseDown={(e) => { e.preventDefault(); onSelect(type); }}
          className="flex items-center gap-3 w-full px-3 py-2.5 text-left hover:bg-[#f9f9f9] transition-colors group"
        >
          <div className="w-8 h-8 rounded-[6px] border border-[#e5e5e5] bg-white flex items-center justify-center shrink-0 group-hover:border-[#d1d5db]">
            <Icon className="w-4 h-4 text-[#374151]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] text-[#111827]" style={{ fontWeight: 500 }}>{label}</p>
            <p className="text-[12px] text-[#9ca3af] truncate">{desc}</p>
          </div>
        </button>
      ))}

      {/* Divider */}
      <div className="h-px bg-[#f0f0f0] mx-3 my-1" />

      {/* Asset item — highlighted per Figma */}
      <button
        onMouseDown={(e) => { e.preventDefault(); onOpenAssets(); }}
        className="flex items-center gap-3 w-full px-3 py-2.5 text-left hover:bg-[#fff5f5] transition-colors group"
      >
        <div className="w-8 h-8 rounded-[6px] border border-[#e5e5e5] bg-white flex items-center justify-center shrink-0 group-hover:border-[#fca5a5]">
          <Paperclip className="w-4 h-4 text-[#374151]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] text-[#111827]" style={{ fontWeight: 500 }}>Asset</p>
          <p className="text-[12px] text-[#9ca3af] truncate">Add an uploaded image or file</p>
        </div>
        <ChevronRight className="w-4 h-4 text-[#9ca3af] shrink-0" />
      </button>

    </div>
  );
}

// ── Asset submenu ─────────────────────────────────────────────────────────────

function AssetSubMenu({
  files,
  onBack,
  onSelect,
}: {
  files: UploadedFile[];
  onBack: () => void;
  onSelect: (file: UploadedFile) => void;
}) {
  return (
    <div className="py-1">
      {/* Back header */}
      <button
        onMouseDown={(e) => { e.preventDefault(); onBack(); }}
        className="flex items-center gap-2 w-full px-3 py-2.5 text-[13px] text-[#374151] hover:bg-[#f9f9f9] transition-colors border-b border-[#f0f0f0]"
        style={{ fontWeight: 500 }}
      >
        <ArrowLeft className="w-4 h-4 text-[#6b7280]" />
        Back
      </button>

      {/* File list */}
      {files.length === 0 ? (
        <div className="px-3 py-4 text-center">
          <p className="text-[12px] text-[#9ca3af]">No uploaded files yet.</p>
          <p className="text-[11px] text-[#9ca3af] mt-0.5">Use the upload icon in the sidebar to add files.</p>
        </div>
      ) : (
        <div className="py-1">
          {files.map((file) => (
            <button
              key={file.id}
              onMouseDown={(e) => { e.preventDefault(); onSelect(file); }}
              className="flex items-center gap-3 w-full px-3 py-2.5 text-left hover:bg-[#f9f9f9] transition-colors"
            >
              <div className="w-7 h-7 rounded-[6px] bg-[#f5f5f5] border border-[#e5e5e5] flex items-center justify-center shrink-0">
                <Paperclip className="w-3.5 h-3.5 text-[#6b7280]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] text-[#111827] truncate" style={{ fontWeight: 500 }} title={file.name}>
                  {file.name}
                </p>
                {file.size && <p className="text-[11px] text-[#9ca3af]">{file.size}</p>}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}