"use client"

import React, { useState } from "react"
import { Copy, Check, RotateCcw, CheckIcon, CopyIcon, CreditCard, MapPin, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { ColoredButton } from "@/components/easyui/colored-button"

export default function ColoredButtonComponent() {
  const [key, setKey] = useState(0)
  const [copied1, setCopied1] = useState(false)
  const [copied2, setCopied2] = useState(false)
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
    window.open(`https://v0.dev/chat/api/open?url=https://easyui.pro/v0-preview/colored-button.json`, '_blank')
  }

  const handleCopy = (id: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
    const codeElement = document.getElementById(id)
    const codeToCopy = codeElement ? codeElement.textContent : ""
    if (codeToCopy) {
      navigator.clipboard.writeText(codeToCopy).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }

  return (
    <div className="flex flex-wrap justify-start gap-4 pb-10 max-w-full min-w-full px-0 lg:px-20 overflow-hidden">
      <div className="w-full sm:w-1/2 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">
          Button With Colored Hover
        </CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
          Hover to see effect
        </CardDescription>
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
          <div className="flex items-center justify-center max-w-full mx-auto px-4 py-0.5 border rounded-lg h-auto">
            <Button
              onClick={() => setKey((prev) => prev + 1)}
              className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
              variant="ghost"
            >
              <RotateCcw size={16} />
            </Button>
          
         
        <div className="px-4 flex items-center justify-between">
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <ColoredButton className="rounded-[0.50rem]">Default</ColoredButton>
      <ColoredButton className="rounded-[0.50rem]" variant="secondary">Secondary</ColoredButton>
      <ColoredButton className="rounded-[0.50rem]" variant="destructive">Destructive </ColoredButton>
      <ColoredButton className="rounded-[0.50rem]" variant="outline">Outline </ColoredButton>
      <ColoredButton className="rounded-[0.50rem]" variant="ghost">Ghost </ColoredButton>
      <ColoredButton className="rounded-[0.50rem]" size="sm">Small </ColoredButton>
      <ColoredButton className="rounded-[0.50rem]" size="lg">Large </ColoredButton>
      <ColoredButton className="rounded-[0.50rem]" disabled>Disabled </ColoredButton>
      <ColoredButton className="rounded-[0.50rem]" rainbowIntensity={0.5} rainbowDuration={5}>
        Custom 
      </ColoredButton>
    </main>
      </div>
   

          </div>
        </TabsContent>
        <TabsContent value="code">      
          <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
            {/* <p className="font-semibold mt-5 tracking-tight leading-7">
              Step 2: Use the FireflyButton component in your desired page or component:
            </p> */}
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => handleCopy("codeBlock2", setCopied2)}
                className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg bg-transparent px-3 py-1 text-white"
                title="Copy code to clipboard"
              >
                {copied2 ? (
                  <Check className="text-green-500 h-4 w-4" />
                ) : (
                  <Copy className="text-black hover:text-gray-400 active:text-blue-700 h-4 w-4 dark:text-white" />
                )}
              </button>

              <pre className="ml-2 py-2 pb-2 pl-2 font-sm">
                <code id="codeBlock2" className="text-left language-js text-sm">
                  {`
import { ColoredButton } from "@/components/ui/colored-button"
import React from 'react'

function Home() {
  return (
       <div className="px-4 py-3 flex items-center justify-between">
            <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
                <ColoredButton className="rounded-[0.50rem]">Default Rainbow Button</ColoredButton>
                <ColoredButton className="rounded-[0.50rem]" variant="secondary">Secondary Variant</ColoredButton>
                <ColoredButton className="rounded-[0.50rem]" variant="destructive">Destructive Variant</ColoredButton>
                <ColoredButton className="rounded-[0.50rem]" variant="outline">Outline Variant</ColoredButton>
                <ColoredButton className="rounded-[0.50rem]" variant="ghost">Ghost Variant</ColoredButton>
                <ColoredButton className="rounded-[0.50rem]" size="sm">Small Size</ColoredButton>
                <ColoredButton className="rounded-[0.50rem]" size="lg">Large Size</ColoredButton>
                <ColoredButton className="rounded-[0.50rem]" disabled>Disabled Button</ColoredButton>
                <ColoredButton className="rounded-[0.50rem]" rainbowIntensity={0.5} rainbowDuration={5}>
                    Custom Rainbow (50% intensity, 5s duration)
                </ColoredButton>
            </main>
        </div>
  )
}

export default Home
`}
                </code>
              </pre>
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
          {`npx shadcn@latest add "https://easyui.pro/components-json/colored-button.json"`}
        </code>
      </pre>
    </div>
  </div>
</TabsContent>
<TabsContent value="manual">
  <div className="pl-4">
    <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/ui/colored-button.tsx</span></p>
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
        <pre className="font-sm ml-2 min-h-[600px] py-2 pl-2 sm:min-h-[300px] lg:min-h-[600px] "><code id="codeBlock"  className="language-js text-left text-sm ">              
        {"\"use client\"\n\nimport * as React from \"react\"\nimport { motion } from \"framer-motion\"\nimport { Button } from \"@/components/ui/button\"\nimport type { ButtonProps } from \"@/components/ui/button\"\n\nexport interface RainbowButtonProps extends ButtonProps {\n  rainbowIntensity?: number\n  rainbowDuration?: number\n}\n\nexport function ColoredButton({ children, rainbowIntensity = 1, rainbowDuration = 3, ...props }: RainbowButtonProps) {\n  const [isHovered, setIsHovered] = React.useState(false)\n\n  return (\n    <motion.div\n      className=\"relative inline-block\"\n      onHoverStart={() => setIsHovered(true)}\n      onHoverEnd={() => setIsHovered(false)}\n    >\n      {isHovered && (\n        <motion.div\n          className=\"absolute inset-0 rounded-[0.50rem] z-0\"\n          initial={{ opacity: 0 }}\n          animate={{ opacity: rainbowIntensity }}\n          exit={{ opacity: 0 }}\n          transition={{ duration: 0.3 }}\n        >\n          <motion.div\n            className=\"w-full h-full rounded-[0.50rem]\"\n            style={{\n              background: \"linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)\",\n              backgroundSize: \"400% 400%\",\n            }}\n            animate={{\n              backgroundPosition: [\"0% 50%\", \"100% 50%\", \"0% 50%\"],\n            }}\n            transition={{\n              duration: rainbowDuration,\n              repeat: Number.POSITIVE_INFINITY,\n              ease: \"linear\",\n            }}\n          />\n        </motion.div>\n      )}\n      <Button\n        {...props}\n        className={`relative z-10 transition-colors duration-300 ${\n          isHovered ? \"bg-transparent hover:bg-transparent\" : \"\"\n        } ${props.className || \"\"}`}\n      >\n        {children}\n      </Button>\n    </motion.div>\n  )\n}\n\n"}
            </code></pre>

            </div>
  </div>

  <p className="mt-5 font-semibold leading-7 tracking-tight ml-5">Update the import paths to match your project setup.</p>
</TabsContent>
</Tabs>
    </div>
  )
}