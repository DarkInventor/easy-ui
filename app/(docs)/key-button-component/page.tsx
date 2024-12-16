"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import AdBanner from "@/components/ad-banner"
import { BellRing, ClipboardList, Flag, Folder, StickyNote, Trophy } from "lucide-react"
import CreateNewComponent from "@/components/easyui/create-new"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { RotateCcw } from "lucide-react"
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons"
import LaunchPad from "@/components/easyui/launchpad"
import KeyButton from "@/components/easyui/key-button"

function KeyButtonComponent() {
  const [key, setKey] = React.useState(0); 
  const [activeTab, setActiveTab] = useState("cli")
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    const codeElement = document.getElementById('codeBlock3')
    const copycode3 = codeElement ? codeElement.textContent : ''
    if (copycode3) {
      navigator.clipboard.writeText(copycode3).then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
      })
    }
  }

  return (
    <div className="flex flex-wrap justify-start gap-4 pb-10 max-w-full min-w-full px-0 lg:px-20">
      <div className="w-full sm:w-1/2 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">Key Button</CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">Click or Hover</CardDescription>
      </div>
      
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none  bg-transparent p-0">
            <TabsTrigger value="preview" className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative rounded-md" key={key}>
          <div className="flex items-center justify-center max-w-full mx-auto px-4 py-0.5 border rounded-lg h-[400px]">
            <Button onClick={() => setKey((prev) => prev + 1)} className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1" variant="ghost">
              <RotateCcw size={16} />
            </Button>
            {/* @ts-ignore */}
            <KeyButton text="Key Button" size="lg" />
          </div>
        </TabsContent>
        <TabsContent value="code">
        
     
              <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
              {/* <p className="font-semibold mt-5 tracking-tight leading-7">Step 2: Update the import paths and run this code.</p> */}
                <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
               
                <button onClick={() => { 
                      const codeElement = document.getElementById('codeBlock2');
                      const copycode2 = codeElement ? codeElement.textContent : '';
                      if (copycode2) {
                        navigator.clipboard.writeText(copycode2).then(() => {
                          alert('Code copied to clipboard!');
                        });
                      }
                    }}
                    className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg bg-transparent px-3 py-1 text-white" title="Copy code to clipboard">
                    <CopyIcon className="text-black hover:text-gray-400 active:text-blue-700 h-4 dark:text-white" />
              </button>
                 
                  <pre className="ml-2 py-2 pb-2 pl-2 font-sm">
                    <code id="codeBlock2" className="text-left language-js text-sm"> 
{`"use client"

import KeyButton from "@/components/easyui/key-button"
import React from "react"


function Home() {
  return (
    <div className="flex flex-col mx-auto justify-center text-center items-center align-center py-20">
      <KeyButton text="Key Button" size="lg" />    
    </div>
  )
}

export default Home
`}
            {/* </div> */}
            </code></pre>
            </div>
          </div>

        
        </TabsContent>
      </Tabs>


      <p className="mt-5 mb-5 text-xl font-semibold leading-7 tracking-tight lg:text-2xl ml-0">Installation</p>

<Tabs defaultValue="cli" className="relative mr-auto w-full" onValueChange={setActiveTab}>
<div className="flex items-center justify-between pb-3">
  <TabsList className="w-full justify-start rounded-none bg-transparent p-0">
    <TabsTrigger
      value="cli"
      className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
    >
      CLI
    </TabsTrigger>
    <TabsTrigger
      value="manual"
      className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
    >
      Manual
    </TabsTrigger>
  </TabsList>
</div>
<TabsContent value="cli">
  <div className="md:lg-3 ml-3 flex w-full max-w-full flex-col space-y-4 lg:ml-4">
    {/* <p className="mt-5 text-xl font-semibold leading-7 tracking-tight lg:text-2xl">Installation</p> */}
    <div className="relative w-full max-w-full rounded-md border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
      <button 
        onClick={copyToClipboard}
        className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg bg-transparent px-3 py-1 text-white" 
        title={isCopied ? "Copied!" : "Copy code to clipboard"}
      >
        {isCopied ? (
          <CheckIcon className="h-4 text-green-500" />
        ) : (
          <CopyIcon className="h-4 text-black hover:text-gray-400 active:text-blue-700 dark:text-white" />
        )}
      </button>
      <pre className="font-sm ml-2 max-w-full overflow-x-auto rounded-2xl py-4 pl-2">
        <code id="codeBlock3" className="language-js block w-full text-left text-sm"> 
          {`npx shadcn@latest add "https://easyui.pro/components-json/key-button.json"`}
        </code>
      </pre>
    </div>
  </div>
</TabsContent>
<TabsContent value="manual">
  <div className="pl-4">
    <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/easyui/key-button.tsx</span></p>
      <div className="font-sm relative w-full rounded-md border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
        <button onClick={() => { 
                const codeElement = document.getElementById('codeBlock');
                const codeToCopy = codeElement ? codeElement.textContent : '';
                // @ts-ignore
                navigator.clipboard.writeText(codeToCopy).then(() => {
                  alert('Code copied to clipboard!');
                });
              }}
              className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg px-3 py-1 text-white" title="Copy code to clipboard">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5C6.895 5 6 5.895 6 7v10c0 1.105.895 2 2 2h8c1.105 0 2-.895 2-2V7c0-1.105-.895-2-2-2H8zm0 0V3c0-1.105.895-2 2-2h4c1.105 0 2 .895 2 2v2m-6 4h4" />
              </svg> */}
              <CopyIcon className="h-4 text-black hover:text-gray-400 active:text-blue-700 dark:text-white" style={{ backdropFilter: 'blur(20px)' }} />
        </button>
        <pre className="font-sm ml-2 min-h-[600px] py-2 pl-2 sm:min-h-[300px] lg:min-h-[600px]"><code id="codeBlock"  className="language-js text-left text-sm ">              
{`
"use client"

import React from "react"

import { Button } from "../ui/button"

interface KeyButtonProps {
  text: string
  size: string
  variant: string
}

function KeyButton({ text, size, variant }: KeyButtonProps) {
  return (
    <div className="flex mx-auto justify-center text-center items-center align-center py-20">
      <Button
        className="group relative inline-flex items-center justify-center rounded-full bg-neutral-950  pl-6 pr-12 font-medium text-neutral-50 transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] before:absolute before:inset-0 before:-z-10 before:block before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:animate-shimmer_3s_linear_infinite border-2 border-transparent border-l-neutral-700 border-r-neutral-700 hover:border-transparent hover:border-l-white hover:border-r-white hover:bg-black hover:animate-none"
        variant={variant}
        size={size}
      >
        <span className="z-10  ">{text}</span>
        <div className="absolute right-1 inline-flex h-10 w-10 items-center py-1 justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
          <div className="mr-2 flex items-center justify-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-neutral-50"
              style={
                {
                  "--svg-animation": "spin-around 2s infinite linear",
                } as React.CSSProperties
              }
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </Button>
    </div>
  )
}

export default KeyButton
`}
            </code></pre>

            </div>
  </div>

  <p className="mt-5 font-semibold leading-7 tracking-tight ml-5">Update the import paths to match your project setup.</p>
</TabsContent>
</Tabs>
      
    {/* <div className="py-10 ml-3">
    <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">Credits</h2>
    <p className="leading-7 [&:not(:first-child)]:mt-6 tracking tight">Credit to <a href="https://github.com/vaunblu/lab/blob/main/src/app/create-new/page.tsx" className="underline italic font-semibold" target="_blank" rel="noopener noreferrer">@vaunblu</a> for the inspiration behind this component.</p>
    </div> */}
    </div>
  )
}

export default KeyButtonComponent
