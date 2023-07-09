"use client";
// import JsonEditor from "@/components/inputJsonEditor";
// import JsonAiOutput from "@/components/outputJson";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";

import { useChat } from 'ai/react';

import dynamic from 'next/dynamic'

const JsonEditor = dynamic(
  () => import("@/components/inputJsonEditor"),
  { ssr: false }
)
const JsonAiOutput = dynamic(
  () => import("@/components/outputJson"),
  { ssr: false }
)


export default function Home() {

  const proomt = "You are a json generator ai, you will be given a json and as output you will give a sample json objects try to keep real like data and don't use placeholder text. Don't create more than 3 samples. ONLY OUTPUT JSON NOTHING ELSE."

  const { messages, append , setMessages } = useChat(
    {
      initialMessages: [
        {
          id:"1", role: "system", content: proomt
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
        id:"1", role: "system", content: proomt
      },
    ]);

    const element = document.getElementById("AiGenerated");
    element?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    append(
      {
        id: "sample-json", role: "user", content: inputJson
      },
    ).then(() => {
      console.log('appended')
      //scroll to #AiGenerated
    })
  }

  return (
    <main className="container flex min-h-screen flex-col items-center ">
      <div className={'grid grid-cols-5 gap-16 lg:gap-5 w-full min-h-[85vh]'}>
        <div className={'col-span-full lg:col-span-2 h-full'}>
          <h1 className={'w-full text-center text-lg font-bold p-2 bg-gray-200'}>
            Input Sample JSON Prompt
          </h1>
          <JsonEditor value={''} onChange={handleInputJsonChange}/>
        </div>
        <div className={'col-span-full lg:col-span-1 flex flex-col items-center justify-center'}>
          <Button
            variant={'default'}
            className={'w-full'}
            onClick={()=>{generateJson()}}
          >
            Generate
          </Button>
        </div>
        <div className={'col-span-full lg:col-span-2'} id={'AiGenerated'}>
          <h1 className={'w-full text-center text-lg font-bold p-2 bg-gray-200'}>
            AI Generated JSON
          </h1>
            <JsonAiOutput json={aiGeneratedJson} setJson={setAiGeneratedJson}/>
        </div>


      </div>
    </main>
  )
}
