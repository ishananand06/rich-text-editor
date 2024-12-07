import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Header from "./components/Header";
import Body from "./components/body";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from '@tiptap/extension-text-style';
import FontSize from "tiptap-extension-font-size";
import { Color } from '@tiptap/extension-color';

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
      FontFamily,
      TextStyle,
      FontSize.configure({
        types: ['textStyle'], 
      }),
      Color
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
