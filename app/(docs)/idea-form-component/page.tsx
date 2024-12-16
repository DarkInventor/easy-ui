"use client"

import React, { useState } from "react"
import { Copy, Check, RotateCcw, CopyIcon, CheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import IdeaForm from "@/components/easyui/idea-form"

function IdeaFormComponent() {
  const [key, setKey] = useState(0) // State to trigger re-render
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
          Idea Form
        </CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
          An interactive form for submitting ideas with animations and confetti effect.
        </CardDescription>
      </div>

      <Tabs defaultValue="preview" className="relative mr-auto w-full z-0">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none bg-transparent p-0 z-50">
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
            <IdeaForm
              buttonText="Share your thoughts"
              maxChars={500}
              placeholders={["What's on your mind?", "Any bright ideas?"]}
              backgroundColor="bg-black dark:bg-white"
              textColor="text-white dark:text-black"
              accentColor="bg-yellow-400"
              onLog={(idea) => console.log("Logged from parent:", idea)}
            />
          </div>
        </TabsContent>
        <TabsContent value="code">
  

          <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
            {/* <p className="font-semibold mt-5 tracking-tight leading-7">
              
              Step 2: Use the IdeaForm component in your desired page or component:
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
import IdeaForm from '@/components/easyui/idea-form';
import React from 'react'

function Home() {
  return (
    <IdeaForm
      buttonText="Share your thoughts"
      maxChars={500}
      placeholders={["What's on your mind?", "Any bright ideas?"]}
      backgroundColor="bg-black dark:bg-white"
      textColor="text-white dark:text-black"
      accentColor="bg-yellow-400"
      onLog={(idea) => console.log("Logged idea:", idea)}
    />
  )
}

export default Home
`}
                </code>
              </pre>
            </div>
          </div>
          {/* https://codepen.io/jkantner/pen/KKjowmN */}
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
          {`npx shadcn@latest add "https://easyui.pro/components-json/idea-form.json"`}
        </code>
      </pre>
    </div>
  </div>
</TabsContent>
<TabsContent value="manual">
  <div className="pl-4">
    <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/easyui/idea-form.tsx</span></p>
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

import React, { useEffect, useRef, useState } from "react"
import confetti from "canvas-confetti"
import { AnimatePresence, motion, useAnimation } from "framer-motion"

enum SubmitState {
  Default,
  Sending,
  Done,
}

enum Label {
  Sending = "Sending…",
  Sent = "Sent",
  Submit = "Submit",
}

interface IdeaFormProps {
  maxChars?: number
  placeholders?: string[]
  backgroundColor?: string
  textColor?: string
  accentColor?: string
  onSubmit?: (idea: string) => Promise<void>
  submitDelay?: number
  confettiConfig?: confetti.Options
  buttonText?: string
  onLog?: (idea: string) => void
}

export default function IdeaForm({
  maxChars = 500,
  placeholders = ["What's on your mind?", "Any bright ideas?"],
  backgroundColor = "bg-black dark:bg-white",
  textColor = "text-white dark:text-black",
  accentColor = "bg-yellow-400",
  onSubmit,
  submitDelay = 1000,
  confettiConfig = {
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  },
  buttonText = "Share your thoughts",
  onLog,
}: IdeaFormProps) {
  const [expanded, setExpanded] = useState(false)
  const [idea, setIdea] = useState("")
  const [submitState, setSubmitState] = useState(SubmitState.Default)
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const iconControls = useAnimation()

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        formRef.current &&
        !formRef.current.contains(e.target as Node) &&
        submitState === SubmitState.Default
      ) {
        setExpanded(false)
      }
    }

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && submitState === SubmitState.Default) {
        setExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    document.addEventListener("keydown", handleEscKey)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [submitState])

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [placeholders])

  useEffect(() => {
    const pulseAnimation = async () => {
      await iconControls.start({ scale: 1.2, transition: { duration: 0.3 } })
      await iconControls.start({ scale: 1, transition: { duration: 0.3 } })
    }
    pulseAnimation()
    const interval = setInterval(pulseAnimation, 3000)
    return () => clearInterval(interval)
  }, [iconControls])

  const handleToggle = () => {
    setExpanded(!expanded)
    if (!expanded) {
      setTimeout(() => textareaRef.current?.focus(), 0)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitState !== SubmitState.Default) return

    console.log(idea)

    if (onLog) {
      onLog(idea)
    }

    setSubmitState(SubmitState.Sending)

    if (onSubmit) {
      await onSubmit(idea)
    } else {
      await new Promise((resolve) => setTimeout(resolve, submitDelay))
    }

    setSubmitState(SubmitState.Done)

    confetti(confettiConfig)

    await new Promise((resolve) => setTimeout(resolve, 600))
    setExpanded(false)
    setTimeout(() => {
      setIdea("")
      setSubmitState(SubmitState.Default)
    }, 300)
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className={\`relative w-[250px] overflow-hidden rounded-[1em] shadow-lg \${
        expanded ? "bg-transparent" : \`\${backgroundColor} \${textColor}\`
      }\`}
      animate={{ height: expanded ? 200 : 46 }}
      transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1.35] }}
    >
      <motion.svg
        className="absolute top-3 left-3 w-6 h-6 text-current"
        viewBox="0 0 32 32"
        aria-hidden="true"
        animate={iconControls}
      >
        <g fill="currentColor">
          <path d="M16,2A10,10,0,0,0,6,12a9.19,9.19,0,0,0,3.46,7.62c1,.93,1.54,1.46,1.54,2.38h2c0-1.84-1.11-2.87-2.19-3.86A7.2,7.2,0,0,1,8,12a8,8,0,0,1,16,0,7.2,7.2,0,0,1-2.82,6.14c-1.07,1-2.18,2-2.18,3.86h2c0-.92.53-1.45,1.54-2.39A9.18,9.18,0,0,0,26,12,10,10,0,0,0,16,2Z" />
          <rect x="11" y="24" width="10" height="1" />
          <rect x="13" y="28" width="6" height="1" />
        </g>
      </motion.svg>
      <motion.button
        type="button"
        onClick={handleToggle}
        className={\`absolute inset-0 flex items-center pl-12 text-sm uppercase tracking-wider \${textColor}\`}
        animate={{ opacity: expanded ? 0 : 1 }}
        transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
      >
        {buttonText}
      </motion.button>
      <motion.div
        className={\`absolute inset-0 w-full h-full \${accentColor}\`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: expanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
        style={{ transformOrigin: "top" }}
      />
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-0 pt-6 pb-3 px-4 pl-20"
          >
            <label htmlFor="my-idea" className="sr-only">
              Idea
            </label>
            <textarea
              ref={textareaRef}
              id="my-idea"
              className="w-full h-24 bg-transparent text-black placeholder-gray-600 resize-none focus:outline-none"
              placeholder={placeholders[placeholderIndex]}
              value={idea}
              onChange={(e) => setIdea(e.target.value.slice(0, maxChars))}
              disabled={submitState !== SubmitState.Default}
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-600">
                {idea.length}/{maxChars}
              </span>
              <button
                type="submit"
                className={\`px-4 py-2 \${backgroundColor} \${textColor} rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-30 transition-all duration-300 ease-in-out hover:bg-opacity-80\`}
                disabled={
                  idea.length === 0 || submitState !== SubmitState.Default
                }
              >
                {submitState === SubmitState.Sending
                  ? Label.Sending
                  : submitState === SubmitState.Done
                  ? Label.Sent
                  : Label.Submit}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
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
    <p className="leading-7 [&:not(:first-child)]:mt-6 tracking-tight">Credit to <a href="https://codepen.io/jkantner/pen/KKjowmN " className="font-bold italic underline">@jkantner</a> for the inspiration behind this component.</p>
    </div>
    </div>
  )
}

export default IdeaFormComponent