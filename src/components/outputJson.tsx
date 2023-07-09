"use client";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/ext-language_tools";

const JsonAiOutput = ({className, json, setJson}:{className?:string, json:string, setJson:(value:string)=>void }) => {

  return (

    <AceEditor
      placeholder={"Ai Generated JSON will be displayed here"}
      value={json}
      readOnly={true}
      mode="javascript"
      theme="terminal"
      fontSize={16}
      width={'100%'}
      height={'100%'}
      onChange={(value) => {
        setJson(value)
      }}
      className={'w-full h-full min-h-[500px] min-w-[200px]'}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true
      }}
      editorProps={{$blockScrolling: true}}
    />
  )
}

export default JsonAiOutput