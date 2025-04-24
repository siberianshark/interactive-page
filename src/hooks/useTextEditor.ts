import { useRef } from 'react';

export const useTextEditor = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);

  const formatText = (command: string, value: string = '') => {
    if (editorRef.current) {
      document.execCommand(command, false, value);
    }
  };

  const saveText = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      localStorage.setItem('editorContent', content);
    }
  };

  const loadText = () => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent && editorRef.current) {
      editorRef.current.innerHTML = savedContent;
    }
  };

  return {
    editorRef,
    formatText,
    saveText,
    loadText,
  };
};
