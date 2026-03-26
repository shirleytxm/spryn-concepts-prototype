import { createContext, useContext, useState } from 'react';

export interface UploadedFile {
  id: string;
  name: string;
  size: string;
  type: string;
}

const INITIAL_FILES: UploadedFile[] = [
  { id: '1', name: '3-1_screen-prompt-artifact_prompt-modal', size: '14 KB', type: 'image' },
  { id: '2', name: '3-1_reference-screen-in-line-for-epic-association', size: '22 KB', type: 'image' },
];

interface UploadContextValue {
  files: UploadedFile[];
  setFiles: React.Dispatch<React.SetStateAction<UploadedFile[]>>;
  lightboxFile: UploadedFile | null;
  openLightbox: (file: UploadedFile) => void;
  closeLightbox: () => void;
}

const UploadContext = createContext<UploadContextValue>({
  files: INITIAL_FILES,
  setFiles: () => {},
  lightboxFile: null,
  openLightbox: () => {},
  closeLightbox: () => {},
});

export function UploadProvider({ children }: { children: React.ReactNode }) {
  const [files, setFiles] = useState<UploadedFile[]>(INITIAL_FILES);
  const [lightboxFile, setLightboxFile] = useState<UploadedFile | null>(null);

  const openLightbox = (file: UploadedFile) => setLightboxFile(file);
  const closeLightbox = () => setLightboxFile(null);

  return (
    <UploadContext.Provider value={{ files, setFiles, lightboxFile, openLightbox, closeLightbox }}>
      {children}
    </UploadContext.Provider>
  );
}

export function useUploadedFiles() {
  return useContext(UploadContext);
}
