"use client";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
const JsonEditor = ({className, value, onChange}:{className?:string, value:string, onChange:any }) => {

  return (

    <AceEditor
      placeholder={"Enter JSON here"}
      defaultValue={value}
      mode="javascript"
      theme="monokai"
      fontSize={16}
      width={'100%'}
      height={'100%'}
      onChange={onChange}
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

export default JsonEditor