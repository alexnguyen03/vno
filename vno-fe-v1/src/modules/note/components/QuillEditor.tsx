'use client';

import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

interface QuillEditorProps {
  value?: string; // JSON string Delta
  onChange?: (value: string) => void;
}

const toolbarOptions = [
  [{ font: [] }, { size: [] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ header: '1' }, { header: '2' }, 'blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
  [{ direction: 'rtl' }, { align: [] }],
  ['link', 'image', 'video', 'formula'],
  ['clean'],
];

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        modules: {
          toolbar: toolbarOptions,
        },
        theme: 'snow',
      });

      quillRef.current.on('text-change', () => {
        const delta = quillRef.current!.getContents();
        onChange?.(JSON.stringify(delta));
      });
    }
  }, [onChange]);

  // Khi value (JSON Delta) thay đổi, cập nhật nội dung editor
  useEffect(() => {
    if (quillRef.current && value) {
      try {
        const delta = JSON.parse(value);
        quillRef.current.setContents(delta);
      } catch (error) {
        console.error('Invalid Delta JSON', error);
      }
    }
  }, [value]);

  return <div ref={editorRef} style={{ minHeight: 200 }} />;
};

export default QuillEditor;
