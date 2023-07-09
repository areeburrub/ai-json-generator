"use client";
import JsonEditor from "@/components/inputJsonEditor";
import JsonAiOutput from "@/components/outputJson";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";

import { useChat } from 'ai/react';

export default function Home() {
  const { messages, append , setMessages } = useChat(
    {
      initialMessages: [
        {
          id:"1", role: "system", content: "You are a sample json generator ai, you will be given a sample json and in output you will give the array of 5 json objects with fake data. ONLY OUTPUT JSON NOTHING ELSE."
        },
        ]
    }
  )

  const [inputJson, setInputJson] = useState(
    `{}`
  )
  const [aiGeneratedJson, setAiGeneratedJson] = useState(
    `{}`
  )

  const handleInputJsonChange = (e:any) => {
    setInputJson(e);
  }

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].role === 'assistant') {
      setAiGeneratedJson(messages[messages.length - 1].content)
    }
    console.log(messages)
  }, [messages])

  function generateJson() {
    setMessages([
      {
        id:"1", role: "system", content: "You are a sample json generator ai, you will be given a sample json and in output you will give the array of 5 json objects with fake data. ONLY OUTPUT JSON NOTHING ELSE."
      },
    ]);

    append(
      {
        id:"sample-json", role: "user", content: inputJson
      },
    )
  }

  return (
    <main className="container flex min-h-screen flex-col items-center ">
      <div className={'grid grid-cols-5 gap-5 w-full h-[85vh]'}>
        <div className={'col-span-2'}>
          <h1 className={'w-full text-center text-lg font-bold p-2 bg-gray-200'}>
            Input Sample JSON Prompt
          </h1>
          <JsonEditor value={''} onChange={handleInputJsonChange}/>
        </div>
        <div className={'col-span-1 flex flex-col items-center justify-center'}>
          <Button
            variant={'default'}
            className={'w-full'}
            onClick={generateJson}
          >
            Generate
          </Button>
        </div>
        <div className={'col-span-2'}>
          <h1 className={'w-full text-center text-lg font-bold p-2 bg-gray-200'}>
            AI Generated JSON
          </h1>
            <JsonAiOutput json={aiGeneratedJson} setJson={setAiGeneratedJson}/>
        </div>


      </div>
    </main>
  )
}
