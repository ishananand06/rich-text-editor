import { EditorContent } from "@tiptap/react";

const Body = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null; // Prevent rendering if editor is not ready
  }

  return (
    <div className="editor-area container mt-4">
      <div className="editor-content border p-3" style={{ minHeight: "500px" }}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Body;
