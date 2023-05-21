import React from 'react';
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

function Editorial() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  }
  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16 m-3" style={{backgroundColor: '#f9fbfd'}}>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarStyle={{borderRadius : '20px',backgroundColor : '#edf2fa'}}
        editorStyle={{minHeight : '720px'}}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto rounded-full"
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
      />
    </div>
  );
}

export default Editorial;