import { useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  Editor,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";

const RichTextEditor = () => {
  const [value, setValue] = useState<any>();

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <EditorProvider>
        <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />
          <BtnBulletList />
          <Separator />
        </Toolbar>
        <Editor value={value} onChange={onChange}></Editor>
      </EditorProvider>
    </div>
  );
};

export default RichTextEditor;
