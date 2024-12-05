import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline'; // Import Underline extension

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline, // Add Underline extension
    ],
    content: '<p>Hello, world!</p>',
  });

  if (!editor) {
    return null;
  }

  return (
    <div>
      <div className="toolbar mb-3">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className="btn btn-sm btn-outline-secondary">
          Bold
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="btn btn-sm btn-outline-secondary">
          Italic
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className="btn btn-sm btn-outline-secondary">
          Underline
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
