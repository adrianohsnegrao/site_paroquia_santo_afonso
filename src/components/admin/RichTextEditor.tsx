'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
} from 'lucide-react';

interface RichTextEditorProps {
  content?: string;
  onChange: (html: string) => void;
  className?: string;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const buttons = [
    {
      icon: <Bold className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold'),
      title: 'Negrito',
    },
    {
      icon: <Italic className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic'),
      title: 'Itálico',
    },
    {
      icon: <Heading2 className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive('heading', { level: 2 }),
      title: 'Título 2',
    },
    {
      icon: <Heading3 className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: editor.isActive('heading', { level: 3 }),
      title: 'Título 3',
    },
    {
      icon: <List className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive('bulletList'),
      title: 'Lista com marcadores',
    },
    {
      icon: <ListOrdered className="w-4 h-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive('orderedList'),
      title: 'Lista numerada',
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-1 rounded-t-xl border-b border-brand-green-deep/[0.08] bg-brand-cream/40 p-2">
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={btn.onClick}
          type="button"
          title={btn.title}
          className={`rounded-lg p-2 transition-colors ${
            btn.isActive
              ? 'bg-brand-green/12 text-brand-green-dark'
              : 'text-brand-green-deep/55 hover:bg-brand-green-deep/[0.06] hover:text-brand-green-deep'
          } focus:outline-none focus:ring-2 focus:ring-brand-green`}
        >
          {btn.icon}
        </button>
      ))}
    </div>
  );
};

export function RichTextEditor({ content = '', onChange, className = '' }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base focus:outline-none min-h-[150px] p-4 max-w-none prose-headings:font-serif prose-headings:text-brand-green-deep prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-a:text-brand-green hover:prose-a:text-brand-green-dark',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className={`flex flex-col rounded-xl bg-white ring-1 ring-inset ring-brand-green-deep/[0.12] transition focus-within:ring-2 focus-within:ring-brand-green ${className}`}>
      <MenuBar editor={editor} />
      <div className="flex-1 overflow-y-auto">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
