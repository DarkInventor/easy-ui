"use client"

import React, { useState } from "react"
import { Copy, Check, RotateCcw, CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FireflyButton from "@/components/easyui/firefly-button"
import { RainbowButton } from "@/components/ui/rainbow-button"

export default function FireFlyButtonComponent() {
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
    window.open(`https://v0.dev/chat/api/open?url=https://easyui.pro/v0-preview/firefly-button.json`, '_blank')
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
    <div className="flex flex-wrap justify-start gap-4 pb-10 max-w-full min-w-full px-0 lg:px-20">
      <div className="w-full sm:w-1/2 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">
          Firefly Button
        </CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
          An interactive button with a glowing effect and animated fireflies.
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
          <div className="flex items-center justify-center max-w-full mx-auto px-4 py-0.5 border rounded-lg h-[400px]">
            <Button
              onClick={() => setKey((prev) => prev + 1)}
              className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
              variant="ghost"
            >
              <RotateCcw size={16} />
            </Button>
            <FireflyButton 
                text="Firefly Button" 
                backgroundColor="#ffa500"
                textColor="#ffffff"
                glowColor="#ff4500"
                fireflyCount={15}
                fontSize="1rem"
                padding="0.8rem 3rem"
                onClick={() => alert('Custom glowing button clicked!')}
            />
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
import FireflyButton from '@/components/easyui/firefly-button';
import React from 'react'

function MyComponent() {
  return (
    <FireflyButton 
      text="Glowing Button"
      backgroundColor="#ffa500"
      textColor="#ffffff"
      glowColor="#ff4500"
      fireflyCount={15}
      fontSize="1.2rem"
      padding="1.5rem 3rem"
      onClick={() => alert('Glowing button clicked!')}
    />
  )
}

export default MyComponent
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
          {`npx shadcn@latest add "https://easyui.pro/components-json/firefly-button.json"`}
        </code>
      </pre>
    </div>
  </div>
</TabsContent>
<TabsContent value="manual">
  <div className="pl-4">
    <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/easyui/firefly-button.tsx</span></p>
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

import React from 'react'
import { motion } from 'framer-motion'

interface FireflyButtonProps {
  text: string;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  glowColor?: string;
  fireflyCount?: number;
  fontSize?: string;
  padding?: string;
  className?: string;
}

export default function FireflyButton({
  text,
  onClick,
  backgroundColor = '#FFEB3B',
  textColor = '#000000',
  glowColor = '#FDFCA9',
  fireflyCount = 7,
  fontSize = '1rem',
  padding = '1rem 2rem',
  className = '',
}: FireflyButtonProps) {
  const dotVariants = {
    hover: { x: 0, y: 0 },
    initial: (i: number) => ({
      x: \`var(--starting-x-\${i})\`,
      y: \`var(--starting-y-\${i})\`
    })
  }

  const fireflyVariants = {
    hover: {
      opacity: 1,
      scale: 1.2,
      transition: {
        duration: 0.2
      }
    },
    initial: {
      opacity: 0,
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: \`0px 0px 30px 5px \${glowColor}, 0px 0px 30px 5px \${glowColor} inset\`,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    initial: {
      scale: 1,
      boxShadow: \`0px 0px 24px 0px \${glowColor}, 0px 0px 23px 0px \${glowColor} inset, 0px 0px 8px 0px \${glowColor}42\`
    }
  }

  return (
    <motion.button
      className={\`relative inline-block \${className}\`}
      whileHover="hover"
      initial="initial"
      onClick={onClick}
    >
      {[...Array(fireflyCount)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute block"
          variants={dotVariants}
          custom={i + 1}
          style={{
            '--starting-x-1': '30px',
            '--starting-y-1': '20px',
            '--starting-x-2': '40px',
            '--starting-y-2': '10px',
            '--starting-x-3': '-10px',
            '--starting-y-3': '20px',
            '--starting-x-4': '-30px',
            '--starting-y-4': '-5px',
            '--starting-x-5': '-40px',
            '--starting-y-5': '-20px',
            '--starting-x-6': '12px',
            '--starting-y-6': '-18px',
            '--starting-x-7': '6px',
            '--starting-y-7': '-20px',
            width: \`\${[6, 3, 4, 2, 5, 4, 3][i % 7]}px\`,
            height: \`\${[6, 3, 4, 2, 5, 4, 3][i % 7]}px\`,
            top: \`\${[2, 1, -8, 'auto', 'auto', 'auto', 'auto'][i % 7]}px\`,
            bottom: \`\${['auto', 'auto', 'auto', 4, -6, -12, -16][i % 7]}px\`,
            left: \`\${[-16, 0, 'auto', 'auto', 'auto', 30, 44][i % 7]}px\`,
            right: \`\${['auto', 'auto', 14, -14, -3, 'auto', 'auto'][i % 7]}px\`,
            opacity: \`\${[0.7, 0.7, 1, 0.9, 1, 0.7, 1][i % 7]}\`,
          }}
        >
          <motion.span
            className="block w-full h-full rounded-full"
            variants={fireflyVariants}
            style={{
              backgroundColor: glowColor,
              boxShadow: \`0px 0px 6px 0px \${glowColor}, 0px 0px 4px 0px \${glowColor} inset, 0px 0px 2px 1px \${glowColor}42\`
            }}
            animate={{
              x: [0, 3, -2, 2, -1, 0, -3, 0],
              y: [0, 1, 3, -2, 0, 2, -1, 0],
              transition: {
                duration: [14, 16, 20, 18, 22, 15, 19][i % 7],
                repeat: Infinity,
                ease: 'linear'
              }
            }}
          />
        </motion.span>
      ))}
      <motion.span
        className="relative z-10 inline-block rounded-full"
        variants={buttonVariants}
        style={{
          backgroundColor,
          color: textColor,
          padding,
          fontSize,
        }}
      >
        {text}
      </motion.span>
    </motion.button>
  )
}`}
            </code></pre>

            </div>
  </div>

  <p className="mt-5 font-semibold leading-7 tracking-tight ml-5">Update the import paths to match your project setup.</p>
</TabsContent>
</Tabs>
      
      <div className="py-10 ml-3">
        <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">Credits</h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 tracking-tight">Credit to <a href="https://codepen.io/ShaeSco/pen/xxeeeam" className="font-bold italic underline">@xxeeeam</a> for the inspiration behind this component.</p>
      </div>
    </div>
  )
}