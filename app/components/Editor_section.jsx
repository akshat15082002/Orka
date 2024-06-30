"use client"
import Editor from "@monaco-editor/react";
import { useRef } from "react";
import { memo } from "react";
import langs from "../constants/langs";



const Editor_section = memo(function Editor_section({handleEditorChange,comment,Language}){
  // const Editor_main_section = (handleEditorChange,comment,Language)=>{
    console.log("@@@@@@@@@@@ EDITOR RERENDERING @@@@@@@@@@@@@@@@@@");
  let monaco_ref = useRef(null);
  let editor_ref = useRef(null);
  const defaultLanguage = "python";
  // console.log("rendering editor again\n");
  // console.log("comment in editor is : ",comment);
  // console.log("lang in editor is ", Language);

  if(monaco_ref != null){
    // console.log("monaco ref is ",monaco_ref.current);
    // console.log("editor ref is ",editor_ref.current);
    (monaco_ref.current)?.editor.setModelLanguage(editor_ref.current.getModel(), Language);
    (monaco_ref.current)?.editor
  }

  function handleEditorDidMount(editor,monaco){
    monaco_ref.current = monaco;
    editor_ref.current = editor;
    // console.log("added monaco and editor refernces!!!");
  }
  //todo: opens
  handleEditorChange(comment);
  //todo: closes

 

  return (
    <div style={{border:"1px solid grey",borderRight:"0px", borderRadius:"2px", height:"80vh"}}>
    <Editor
      height="80vh"
      defaultLanguage={defaultLanguage}
      language={Language}
      defaultValue={comment}
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      path={Language}
      options={{
        quickSuggestions: false,
        scrollBeyondLastLine: false,
        wordWrap:"on"
      }}
      // theme="vs-dark"
      
    />
  </div>
  )
}
)


export default Editor_section