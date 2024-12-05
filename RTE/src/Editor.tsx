import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello, world!</p>", // Initial content
  });

  if (!editor) {
    return null; // In case editor is not yet initialized
  }

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
