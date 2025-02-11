"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import AdBanner from "@/components/ad-banner"
import { BellRing, CheckIcon, ClipboardList, Flag, Folder, StickyNote, Trophy } from "lucide-react"
import CreateNewComponent from "@/components/easyui/create-new"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { RotateCcw } from "lucide-react"
import { CopyIcon } from "@radix-ui/react-icons"
import LaunchPad from "@/components/easyui/launchpad"
import KeyButton from "@/components/easyui/key-button"
import SparkleButton from "@/components/easyui/sparkle-button"
import { RainbowButton } from "@/components/ui/rainbow-button"
  
function SparkleButtonComponent() {
  const [key, setKey] = React.useState(0); // State to trigger re-render
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
    window.open(`https://v0.dev/chat/api/open?url=https://easyui.pro/v0-preview/sparkle-button.json`, '_blank')
  }
  
  return (
    <div className="flex flex-wrap justify-start gap-4 pb-10 max-w-full min-w-full px-0 lg:px-20">
      <div className="w-full sm:w-1/2 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">Sparkle Button</CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">Click or Hover to see the Spark.</CardDescription>
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
        {/* @ts-ignore */}
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
          <div className="flex items-center justify-center max-w-full mx-auto px-4 py-0.5 border rounded-lg h-[400px]">
            <Button onClick={() => setKey((prev) => prev + 1)} className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1" variant="ghost">
              <RotateCcw size={16} />
            </Button>
            {/* @ts-ignore */}
            <SparkleButton text="Sparkle Button" size="lg" />
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
                 
                  <pre className="ml-2 py-2 pb-2 pl-2 font-sm"><code id="codeBlock2" className="text-left language-js text-sm"> 
{`"use client"

import SparkleButton from "@/components/easyui/sparkle-button"
import React from "react"


function Home() {
  return (
    <div className="flex flex-col mx-auto justify-center text-center items-center align-center py-20">
      <SparkleButton text="Sparkle Button" size="lg" />    
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
          {`npx shadcn@latest add "https://easyui.pro/components-json/sparkle-button.json"`}
        </code>
      </pre>
    </div>
  </div>
</TabsContent>
<TabsContent value="manual">
  <div className="pl-4">
    <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/easyui/sparkle-button.tsx</span></p>
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
import React, { CSSProperties, useEffect, useRef, useState } from "react"

import { Button } from "../ui/button"

const RANDOM = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

interface SparkleProps {
  text: string
  size: string
  variant: string
}

const SparkleButton = ({ text, size, variant }: SparkleProps) => {
  const [isActive, setIsActive] = useState(false)
  const particlesRef = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    particlesRef.current.forEach((P) => {
      if (P) {
        P.style.setProperty("--x", \`\${RANDOM(20, 80)}\`)
        P.style.setProperty("--y", \`\${RANDOM(20, 80)}\`)
        P.style.setProperty("--duration", \`\${RANDOM(6, 20)}\`)
        P.style.setProperty("--delay", \`\${RANDOM(1, 10)}\`)
        P.style.setProperty("--alpha", \`\${RANDOM(40, 90) / 100}\`)
        P.style.setProperty(
          "--origin-x",
          \`\${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%\`
        )
        P.style.setProperty(
          "--origin-y",
          \`\${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%\`
        )
        P.style.setProperty("--size", \`\${RANDOM(40, 90) / 100}\`)
      }
    })
  }, [])

  return (
    <div className="flex items-center justify-center w-full h-full bg-transparent overflow-hidden">
      <div className="sparkle-button relative">
        <Button
          className="relative text-2xl text-sm py-3 px-5 rounded-full flex items-center gap-1 whitespace-nowrap transition-all duration-250 cursor-pointer"
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          size={size}
          variant={variant}
          style={
            {
              "--active": isActive ? "1" : "0",
              "--cut": "0.1em",
              background: \`
              radial-gradient(
                40% 50% at center 100%,
                hsl(270 calc(var(--active) * 97%) 72% / var(--active)),
                transparent
              ),
              radial-gradient(
                80% 100% at center 120%,
                hsl(260 calc(var(--active) * 97%) 70% / var(--active)),
                transparent
              ),
              hsl(260 calc(var(--active) * 97%) calc((var(--active) * 44%) + 12%))
            \`,
              boxShadow: \`
              0 0 calc(var(--active) * 6em) calc(var(--active) * 3em) hsl(260 97% 61% / 0.75),
              0 0.05em 0 0 hsl(260 calc(var(--active) * 97%) calc((var(--active) * 50%) + 30%)) inset,
              0 -0.05em 0 0 hsl(260 calc(var(--active) * 97%) calc(var(--active) * 60%)) inset
            \`,
              transform: \`scale(calc(1 + (var(--active) * 0.1)))\`,
            } as CSSProperties
          }
        >
          <span
            className="text relative z-10 translate-x-[2%] -translate-y-[6%] "
            style={{
              background: \`linear-gradient(90deg, hsl(0 0% calc((var(--active) * 100%) + 65%)), hsl(0 0% calc((var(--active) * 100%) + 26%)))\`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {text}
          </span>
          <svg
            className="sparkle w-6 h-6 ml-3 relative z-10 -translate-x-[25%] -translate-y-[5%]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 7L15 12L10 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                color: \`hsl(0 0% calc((var(--active, 0) * 70%) + 20%))\`,
                // animation: isActive ? 'bounce 0.6s' : 'none',
                animationDelay: "calc((0.25s * 1.5) + (0.1s * 1s))",
                "--scale": "0.5",
              }}
            />
            <path
              d="M15 12H3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                color: \`hsl(0 0% calc((var(--active, 0) * 70%) + 20%))\`,
                // animation: isActive ? 'bounce 0.6s' : 'none',
                animationDelay: "calc((0.25s * 1.5) + (0.2s * 1s))",
                "--scale": "1.5",
              }}
            />
          </svg>
          <div
            className="spark absolute inset-0 rounded-full rotate-0 overflow-hidden"
            style={{
              mask: "linear-gradient(white, transparent 50%)",
              animation: "flip 3.6s infinite steps(2, end)",
            }}
          >
            <div
              className="spark-rotate absolute w-[200%] aspect-square top-0 left-1/2 -translate-x-1/2 -translate-y-[15%] -rotate-90 animate-rotate"
              style={{
                opacity: \`calc((var(--active)) + 0.4)\`,
                background:
                  "conic-gradient(from 0deg, transparent 0 340deg, white 360deg)",
              }}
            />
          </div>
          <div
            className="backdrop absolute rounded-full transition-all duration-250"
            style={{
              inset: "var(--cut)",
              background: \`
                   radial-gradient(
                     40% 50% at center 100%,
                     hsl(270 calc(var(--active) * 97%) 72% / var(--active)),
                     transparent
                   ),
                   radial-gradient(
                     80% 100% at center 120%,
                     hsl(260 calc(var(--active) * 97%) 70% / var(--active)),
                     transparent
                   ),
                   hsl(260 calc(var(--active) * 97%) calc((var(--active) * 44%) + 12%))
                 \`,
            }}
          />
        </Button>
        <div
          className="particle-pen absolute w-[200%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
          style={{
            WebkitMask: "radial-gradient(white, transparent 65%)",
            opacity: isActive ? "1" : "0",
            transition: "opacity 0.25s",
          }}
        >
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              ref={(el) => (particlesRef.current[index] = el)}
              className="particle absolute animate-float-out"
              style={
                {
                  "--duration": \`calc(var(--duration, 1) * 1s)\`,
                  "--delay": \`calc(var(--delay, 0) * -1s)\`,
                  width: "calc(var(--size, 0.25) * 1rem)",
                  aspectRatio: "1",
                  top: "calc(var(--y, 50) * 1%)",
                  left: "calc(var(--x, 50) * 1%)",
                  opacity: "var(--alpha, 1)",
                  animationDirection: index % 2 === 0 ? "reverse" : "normal",
                  animationPlayState: isActive ? "running" : "paused",
                  transformOrigin:
                    "var(--origin-x, 1000%) var(--origin-y, 1000%)",
                } as CSSProperties
              }
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 0L9.08257 5.17647L13.5 7.5L9.08257 9.82353L7.5 15L5.91743 9.82353L1.5 7.5L5.91743 5.17647L7.5 0Z"
                  fill="hsl(260, 97%, 61%)"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SparkleButton
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

export default SparkleButtonComponent
