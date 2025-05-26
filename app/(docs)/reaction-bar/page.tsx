"use client"

import React, { useState } from "react"
import { Copy, Check, RotateCcw, CheckIcon, CopyIcon, CreditCard, MapPin, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { ReactionBar } from "@/components/easyui/reaction-bar"

const reactions = [
    { id: "like", emoji: "👍", label: "Like", color: "rgb(var(--color-like))" },
    { id: "love", emoji: "❤️", label: "Love", color: "rgb(var(--color-love))" },
    { id: "haha", emoji: "😂", label: "Haha", color: "rgb(var(--color-haha))" },
    { id: "wow", emoji: "😮", label: "Wow", color: "rgb(var(--color-wow))" },
    { id: "sad", emoji: "😢", label: "Sad", color: "rgb(var(--color-sad))" },
    { id: "angry", emoji: "😡", label: "Angry", color: "rgb(var(--color-angry))" },
  ]

export default function ReactionBarComponent() {
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
    window.open(`https://v0.dev/chat/api/open?url=https://easyui.pro/v0-preview/reaction-bar.json`, '_blank')
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
          Reaction Bar
        </CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
          Hover to react :)
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
          
            <main className="flex min-h-auto flex-col items-center justify-center p-10 bg-background">
      <div className="bg-card border border-border rounded-[1rem] max-w-md w-full">
        <div className="rounded-none border-b p-20">
          {/* <img
            src="https://www.istockphoto.com/resources/images/PhotoFTLP/P2-NOV-iStock-1979951980.jpg"
            alt="Post image"
            className="w-full h-auto rounded-t-lg"
          /> */}
          <h1>Hey, Hover on emoji to react.</h1>
        </div>
        <div className="px-4 py-3 flex items-center justify-between">
          <ReactionBar
            reactions={reactions}
            defaultReaction={reactions[0]}
            onReactionSelect={(reaction) => console.log("Selected reaction:", reaction)}
            variant="ghost"
            size="sm"
            showLabel
            imageSize={20}
            popoverPosition="top"
            popoverClassName="bg-secondary"
            emojiSize={16}
            className="ml-1"
          />
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-full">Easy UI</button>
        </div>
      </div>
    </main>

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
import { ReactionBar } from "@/components/ui/reaction-bar"
import React from 'react'

const reactions = [
    { id: "like", emoji: "👍", label: "Like", color: "rgb(var(--color-like))" },
    { id: "love", emoji: "❤️", label: "Love", color: "rgb(var(--color-love))" },
    { id: "haha", emoji: "😂", label: "Haha", color: "rgb(var(--color-haha))" },
    { id: "wow", emoji: "😮", label: "Wow", color: "rgb(var(--color-wow))" },
    { id: "sad", emoji: "😢", label: "Sad", color: "rgb(var(--color-sad))" },
    { id: "angry", emoji: "😡", label: "Angry", color: "rgb(var(--color-angry))" },
  ]

function Home() {
  return (
      <main className="flex min-h-auto flex-col items-center justify-center p-10 bg-background">
      <div className="bg-card border border-border rounded-[1rem] max-w-md w-full">
        <div className="rounded-none border-b p-20">
          <h1>Hey, Hover on emoji to react.</h1>
        </div>
        <div className="px-4 py-3 flex items-center justify-between">
          <ReactionBar
            reactions={reactions}
            defaultReaction={reactions[0]}
            onReactionSelect={(reaction) => console.log("Selected reaction:", reaction)}
            variant="ghost"
            size="sm"
            showLabel
            imageSize={20}
            popoverPosition="top"
            popoverClassName="bg-secondary"
            emojiSize={16}
            className="ml-1"
          />
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-full">Easy UI</button>
        </div>
      </div>
    </main>
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

      <div className="w-full sm:w-1/2 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="mt-5 mb-5 text-xl font-semibold leading-7 tracking-tight lg:text-2xl ml-0">
          Post Reaction (Example)
        </CardTitle>
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
        {/* <RainbowButton className="z-50 mr-2 h-8 cursor-pointer rounded-xl px-4 font-semibold"  onClick={handleOpenInV0}>
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
        </RainbowButton> */}
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
          
            <main className="flex min-h-auto flex-col items-center justify-center p-10 bg-background">
      <div className="bg-card border border-border rounded-[1rem] max-w-md w-full">
        <div className="rounded-2xl ">
          <img
            src="https://www.istockphoto.com/resources/images/PhotoFTLP/P2-NOV-iStock-1979951980.jpg"
            alt="Post image"
            className="w-full h-auto rounded-t-2xl"
          />
        </div>
        <div className="px-4 py-3 flex items-center justify-between">
          <ReactionBar
            reactions={reactions}
            defaultReaction={reactions[0]}
            onReactionSelect={(reaction) => console.log("Selected reaction:", reaction)}
            variant="ghost"
            size="lg"
            showLabel
            imageSize={20}
            popoverPosition="top"
            popoverClassName="bg-secondary"
            emojiSize={20}
            className="ml-1"
          />
          <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-full">Easy UI</button>
        </div>
      </div>
    </main>

          </div>
        </TabsContent>
        <TabsContent value="code">      
          <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
            {/* <p className="font-semibold mt-5 tracking-tight leading-7">
              Step 2: Use the FireflyButton component in your desired page or component:
            </p> */}
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => handleCopy("codeBlock3", setCopied2)}
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
                <code id="codeBlock3" className="text-left language-js text-sm">
                  {`
import { ReactionBar } from "@/components/ui/reaction-bar"
import React from 'react'

const reactions = [
    { id: "like", emoji: "👍", label: "Like", color: "rgb(var(--color-like))" },
    { id: "love", emoji: "❤️", label: "Love", color: "rgb(var(--color-love))" },
    { id: "haha", emoji: "😂", label: "Haha", color: "rgb(var(--color-haha))" },
    { id: "wow", emoji: "😮", label: "Wow", color: "rgb(var(--color-wow))" },
    { id: "sad", emoji: "😢", label: "Sad", color: "rgb(var(--color-sad))" },
    { id: "angry", emoji: "😡", label: "Angry", color: "rgb(var(--color-angry))" },
  ]

function Home() {
  return (
       <main className="flex min-h-auto flex-col items-center justify-center p-10 bg-background">
        <div className="bg-card border border-border rounded-[1rem] max-w-md w-full">
            <div className="rounded-2xl ">
            <img
                src="https://www.istockphoto.com/resources/images/PhotoFTLP/P2-NOV-iStock-1979951980.jpg"
                alt="Post image"
                className="w-full h-auto rounded-t-2xl"
            />
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
            <ReactionBar
                reactions={reactions}
                defaultReaction={reactions[0]}
                onReactionSelect={(reaction) => console.log("Selected reaction:", reaction)}
                variant="ghost"
                size="lg"
                showLabel
                imageSize={20}
                popoverPosition="top"
                popoverClassName="bg-secondary"
                emojiSize={20}
                className="ml-1"
            />
            <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-full">Easy UI</button>
            </div>
        </div>
    </main>
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
          {`npx shadcn@latest add "https://easyui.pro/components-json/reaction-bar.json"`}
        </code>
      </pre>
    </div>
  </div>
</TabsContent>
<TabsContent value="manual">
  <div className="pl-4">
    <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/ui/reaction-bar.tsx</span></p>
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
        {"\"use client\"\n\nimport * as React from \"react\"\nimport { cva, type VariantProps } from \"class-variance-authority\"\nimport { motion, AnimatePresence } from \"framer-motion\"\nimport Image from \"next/image\"\n\nimport { cn } from \"@/lib/utils\"\n\nconst reactionBarVariants = cva(\n  \"inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50\",\n  {\n    variants: {\n      variant: {\n        default: \"bg-primary text-primary-foreground hover:bg-primary/90\",\n        outline: \"border border-input bg-background hover:bg-accent hover:text-accent-foreground\",\n        ghost: \"hover:bg-accent hover:text-accent-foreground\",\n      },\n      size: {\n        default: \"h-10 w-10\",\n        sm: \"h-8 w-8\",\n        lg: \"h-12 w-12\",\n      },\n    },\n    defaultVariants: {\n      variant: \"default\",\n      size: \"default\",\n    },\n  },\n)\n\nexport interface Reaction {\n  id: string\n  emoji: string\n  label: string\n  color: string\n}\n\nexport interface ReactionBarProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement>,\n    VariantProps<typeof reactionBarVariants> {\n  reactions: Reaction[]\n  defaultReaction?: Reaction\n  onReactionSelect?: (reaction: Reaction | null) => void\n  popoverPosition?: \"top\" | \"bottom\"\n  showLabel?: boolean\n  imageSize?: number\n  emojiSize?: number\n  popoverClassName?: string\n  defaultImage?: string\n}\n\nconst ReactionBar = React.forwardRef<HTMLButtonElement, ReactionBarProps>(\n  (\n    {\n      className,\n      variant,\n      size,\n      reactions,\n      defaultReaction,\n      onReactionSelect,\n      popoverPosition = \"top\",\n      showLabel = false,\n      imageSize = 20,\n      emojiSize = 24,\n      popoverClassName,\n      defaultImage,\n      ...props\n    },\n    ref,\n  ) => {\n    const [selectedReaction, setSelectedReaction] = React.useState<Reaction | null>(null)\n    const [isHovering, setIsHovering] = React.useState(false)\n    const [isMobileOpen, setIsMobileOpen] = React.useState(false)\n\n    const handleReactionSelect = (reaction: Reaction) => {\n      const newReaction = reaction.id === selectedReaction?.id ? null : reaction\n      setSelectedReaction(newReaction)\n      setIsHovering(false)\n      setIsMobileOpen(false)\n      onReactionSelect?.(newReaction)\n    }\n\n    const handleClick = (e: React.MouseEvent) => {\n      if (window.innerWidth < 768) {\n        e.preventDefault()\n        setIsMobileOpen(!isMobileOpen)\n      } else {\n        handleReactionSelect(selectedReaction || defaultReaction || reactions[0])\n      }\n    }\n\n    const renderContent = () => {\n      if (defaultImage && !selectedReaction) {\n        return (\n          <Image\n            src={defaultImage || \"/placeholder.svg\"}\n            alt=\"\"\n            width={imageSize}\n            height={imageSize}\n            className=\"object-cover rounded-full\"\n          />\n        )\n      }\n      return (\n        <motion.span\n          initial={{ scale: 1 }}\n          animate={{ scale: selectedReaction ? 1.2 : 1 }}\n          transition={{ type: \"spring\", stiffness: 300, damping: 10 }}\n          style={{ fontSize: `${emojiSize}px`, display: \"inline-block\" }}\n        \n        >\n          {selectedReaction ? selectedReaction.emoji : defaultReaction?.emoji || \"👍\"}\n        </motion.span>\n      )\n    }\n\n    return (\n      <div className=\"relative inline-block\">\n        {/* @ts-ignore */}\n        <motion.button\n          className={cn(reactionBarVariants({ variant, size, className }))}\n          ref={ref}\n          onMouseEnter={() => setIsHovering(true)}\n          onMouseLeave={() => setIsHovering(false)}\n          onClick={handleClick}\n          aria-label={selectedReaction ? selectedReaction.label : defaultReaction?.label || \"React\"}\n          whileHover={{ scale: 1.05 }}\n          whileTap={{ scale: 0.95 }}\n          {...props}\n        >\n          {renderContent()}\n          {showLabel && <span className=\"ml-2\">{(selectedReaction || defaultReaction || reactions[0]).label}</span>}\n        </motion.button>\n\n        <AnimatePresence>\n          {(isHovering || isMobileOpen) && (\n            <motion.div\n              initial={{ opacity: 0, y: popoverPosition === \"top\" ? 10 : -10 }}\n              animate={{ opacity: 1, y: 0 }}\n              exit={{ opacity: 0, y: popoverPosition === \"top\" ? 10 : -10 }}\n              transition={{ duration: 0.2 }}\n              className={cn(\n                \"absolute left-0 bg-popover rounded-full shadow-lg flex p-1.5 z-50\",\n                \"dark:bg-popover-dark\",\n                popoverPosition === \"top\" ? \"bottom-full mb-2\" : \"top-full mt-2\",\n                \"md:w-auto w-[200px] md:flex-nowrap flex-wrap justify-center\",\n                popoverClassName,\n              )}\n              onMouseEnter={() => setIsHovering(true)}\n              onMouseLeave={() => setIsHovering(false)}\n            >\n              {reactions.map((reaction) => (\n                <motion.button\n                  key={reaction.id}\n                  className={cn(\n                    \"p-2 rounded-full transition-all\",\n                    selectedReaction?.id === reaction.id && \"bg-accent dark:bg-accent-dark\",\n                  )}\n                  style={{\n                    background: selectedReaction?.id === reaction.id ? `${reaction.color}20` : \"transparent\",\n                  }}\n                  whileHover={{\n                    scale: 1.2,\n                    backgroundColor: `${reaction.color}30`,\n                  }}\n                  whileTap={{ scale: 0.95 }}\n                  onClick={(e) => {\n                    e.stopPropagation()\n                    handleReactionSelect(reaction)\n                  }}\n                  aria-label={reaction.label}\n                >\n                  <motion.span\n                    style={{ fontSize: `${emojiSize}px`, display: \"inline-block\" }}\n                    whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}\n                    transition={{ duration: 0.5 }}\n                  >\n                    {reaction.emoji}\n                  </motion.span>\n                </motion.button>\n              ))}\n            </motion.div>\n          )}\n        </AnimatePresence>\n      </div>\n    )\n  },\n)\nReactionBar.displayName = \"ReactionBar\"\n\nexport { ReactionBar, reactionBarVariants }\n\n"}
            </code></pre>

            </div>
  </div>

  <p className="mt-5 font-semibold leading-7 tracking-tight ml-5">Update the import paths to match your project setup.</p>
</TabsContent>
</Tabs>
    </div>
  )
}