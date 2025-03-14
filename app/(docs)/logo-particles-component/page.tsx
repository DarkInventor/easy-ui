"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import AdBanner from "@/components/ad-banner"
import { BellRing, CheckIcon, ClipboardList, ExternalLink, Flag, Folder, StickyNote, Trophy } from "lucide-react"
import CreateNewComponent from "@/components/easyui/create-new"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { RotateCcw } from "lucide-react"
import { CopyIcon } from "@radix-ui/react-icons"
import LaunchPad from "@/components/easyui/launchpad"
import KeyButton from "@/components/easyui/key-button"
import SparkleButton from "@/components/easyui/sparkle-button"
import GlitchText from "@/components/easyui/glitch-text"
import LogoParticles from "@/components/easyui/logo-particles"
import { RainbowButton } from "@/components/ui/rainbow-button"
  
function LogoParticle() {
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


  const handleOpenInV0 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.open(`https://v0.dev/chat/api/open?url=https://easyui.pro/v0-preview/glitch-text.json`, '_blank')
  }


  return (
    <div className="flex min-w-full max-w-full flex-wrap justify-start gap-4 px-0 pb-10 lg:px-20">
      <div className="md:lg-5 mt-3 w-full space-y-4 p-2 sm:w-1/2 lg:mt-5">
        <CardTitle className="text-3xl leading-7 tracking-tight">Logo Particles</CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">Glitch text animation with typing effect.</CardDescription>
      </div>
      
      <Tabs defaultValue="preview" className="relative z-0 mr-auto w-full">
      <div className="flex items-center justify-between pb-3 ">
      <TabsList className="z-50 grow justify-start rounded-none bg-transparent p-0">
          <TabsTrigger 
            value="preview" 
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger 
            value="code" 
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Code
          </TabsTrigger>
        </TabsList>
        
        <RainbowButton className="z-50 mr-2 h-8 cursor-pointer rounded-xl px-4 font-semibold"  onClick={handleOpenInV0}>
          <span className="flex items-center text-sm font-semibold leading-7 ">
            Open in 
            <svg 
              fill="currentColor" 
              viewBox="0 0 40 20" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true" 
              className="ml-1 inline-block size-6"
            >
              <path d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"></path>
              <path d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"></path>
            </svg>
          </span>
        </RainbowButton>
      </div>

        <TabsContent value="preview" className="relative rounded-md" key={key}>
          <div className="mx-auto flex h-[400px] max-w-full items-center justify-center rounded-lg border px-4 py-0.5">
            <Button onClick={() => setKey((prev) => prev + 1)} className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1" variant="ghost">
              <RotateCcw size={16} />
            </Button>
         
                <LogoParticles 
                text="Easy UI"
                fontSize={80}
                primaryColor="white"
                scatteredColor="#00DCFF"
                backgroundColor="black"
              />
      
           
          </div>
        </TabsContent>
        <TabsContent value="code">
     

              <div className="md:lg-3 ml-3 flex flex-col space-y-4 lg:ml-4">
              {/* <p className="font-semibold mt-5 tracking-tight leading-7">Step 2: Update the import paths and run this code.</p> */}
                <div className="relative w-full rounded-md border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
               
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
                    <CopyIcon className="h-4 text-black hover:text-gray-400 active:text-blue-700 dark:text-white" />
              </button>
                 
                  <pre className="font-sm ml-2 py-2 pl-2"><code id="codeBlock2" className="language-js text-left text-sm"> 
{`
import GlitchEffect from '@/components/easyui/glitch-effect';
import React from 'react'

function Home() {
  return (
    <GlitchEffect text='Easy UI is Awesome' textSize='100px' fontWeight="500" />
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

      <p className="my-5 ml-0 text-xl font-semibold leading-7 tracking-tight lg:text-2xl">Installation</p>

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
          {`npx shadcn@latest add "https://easyui.pro/components-json/glitch-text.json"`}
        </code>
      </pre>
    </div>
  </div>
</TabsContent>
<TabsContent value="manual">
  <div className="pl-4">
    <p className="mb-5 mt-0 font-semibold leading-7 tracking-tight">Copy and paste the following code into your <span className="font-normal italic">Components/easyui/glitch-text.tsx</span></p>
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
        {`"use client"

import React, { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string;
  textSize: string;
  className?: string;
  fontWeight?: React.CSSProperties["fontWeight"];
}

export default function GlitchText({
  text,
  textSize,
  className = "",
  fontWeight = "normal",
}: GlitchTextProps) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let currentIndex = 0;
    const fullText = text;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <div
      className={\`glitch-wrapper \${className} dark:text-white text-black\`}
      style={{ fontSize: textSize, fontWeight }}
    >
      <div className="glitch" data-text={displayedText}>
        {displayedText}
      </div>
      <style jsx>{\`
        .glitch-wrapper {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: transparent;
        }
        .glitch {
          position: relative;
          letter-spacing: 3px;
          z-index: 1;
        }
        .glitch:before,
        .glitch:after {
          display: block;
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
        }
        .glitch:before {
          animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
            infinite;
          color: #00ffff;
          z-index: -1;
        }
        .glitch:after {
          animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
            both infinite;
          color: #ff00ff;
          z-index: -2;
        }
        @keyframes glitch-it {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          to {
            transform: translate(0);
          }
        }
      \`}</style>
    </div>
  )
}`}
            </code></pre>

            </div>
  </div>

  <p className="ml-5 mt-5 font-semibold leading-7 tracking-tight">Update the import paths to match your project setup.</p>
</TabsContent>
</Tabs>
      
    {/* <div className="py-10 ml-3">
    <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">Credits</h2>
    <p className="leading-7 [&:not(:first-child)]:mt-6 tracking tight">Credit to <a href="https://github.com/vaunblu/lab/blob/main/src/app/create-new/page.tsx" className="underline italic font-semibold" target="_blank" rel="noopener noreferrer">@vaunblu</a> for the inspiration behind this component.</p>
    </div> */}
    </div>
  )
}

export default LogoParticle
