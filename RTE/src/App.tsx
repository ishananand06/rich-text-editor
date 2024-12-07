import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Header from "./components/Header";
import Body from "./components/body";

function App() {
  // Initialize the editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["paragraph", "heading"],
      }),
      Underline,
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content: "<p>Start typing here...</p>",
  });

  return (
    <div>
      {/* Pass the editor instance to Header and Body */}
      <Header editor={editor} />
      <Body editor={editor} />
    </div>
  );
}

export default App;
