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
import { RainbowButton } from "@/components/ui/rainbow-button"

const actionItems = [
    {
      link: "https://easyui.pro",
      icon: <Folder />,
      name: "Project",
    },
    {
      link: "/task",
      icon: <ClipboardList />,
      name: "Task",
    },
    {
      link: "/note",
      icon: <StickyNote />,
      name: "Note",
    },
    {
      link: "/goal",
      icon: <Trophy />,
      name: "Goal",
    },
    {
      link: "/milestone",
      icon: <Flag />,
      name: "Milestone",
    },
    {
      link: "/reminder",
      icon: <BellRing />,
      name: "Reminder",
    },
  ];
  
function CreateNewComponentt() {
  const [key, setKey] = React.useState(0); // State to trigger re-render
  const [isCopied, setIsCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("cli")

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
    window.open(`https://v0.dev/chat/api/open?url=https://easyui.pro/v0-preview/create-new.json`, '_blank')
  }

  return (
    <div className="flex min-w-full max-w-full flex-wrap justify-start gap-4 px-0 pb-10 lg:px-20">
      <div className="md:lg-5 mt-3 w-full space-y-4 p-2 sm:w-1/2 lg:mt-5">
        <CardTitle className="text-3xl leading-7 tracking-tight">Create New</CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
          A popup card that displays multiple choices.
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
          <div className="mx-auto flex h-[400px] max-w-full items-center justify-center rounded-lg border px-4 py-0.5">
            <Button onClick={() => setKey((prev) => prev + 1)} className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1" variant="ghost">
              <RotateCcw size={16} />
            </Button>
            <CreateNewComponent actions={actionItems} />
          </div>
        </TabsContent>
        <TabsContent value="code">

              <div className="md:lg-3 ml-3 flex flex-col space-y-4 lg:ml-4">
              {/* <p className="mt-5 font-semibold leading-7 tracking-tight">Step 2: Update the import paths and run this code.</p> */}
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
import React from "react";
import CreateNewComponent from "../components/easyui/create-new"; 
import { Folder, ClipboardList, StickyNote, Trophy, Flag, BellRing } from "lucide-react"; 

const actionItems = [
  {
    link: "https://easyui.pro",
    icon: <Folder />,
    name: "Project",
  },
  {
    link: "/task",
    icon: <ClipboardList />,
    name: "Task",
  },
  {
    link: "/note",
    icon: <StickyNote />,
    name: "Note",
  },
  {
    link: "/goal",
    icon: <Trophy />,
    name: "Goal",
  },
  {
    link: "/milestone",
    icon: <Flag />,
    name: "Milestone",
  },
  {
    link: "/reminder",
    icon: <BellRing />,
    name: "Reminder",
  },
];

function HomePage() {
  return (
    <div>
      <CreateNewComponent actions={actionItems} />
    </div>
  );
}

export default HomePage;
`}
            {/* </div> */}
            </code></pre>
            </div>
          </div>

          <div className="md:lg-3 ml-3 mt-5 px-4 lg:ml-1">
      <h2 className="mb-5 scroll-m-20 border-b pb-2 text-2xl font-semibold leading-7 tracking-tight dark:border-gray-700">Props</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-900">
            <th className="border border-gray-300 px-4 py-2 text-left dark:border-gray-700">Prop Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left dark:border-gray-700">Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left dark:border-gray-700">Description</th>
            <th className="border border-gray-300 px-4 py-2 text-left dark:border-gray-700">Default Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">actions</td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">ActionItem[]</td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">Array of actions containing link, icon, and name.</td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">None</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">status</td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">string</td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">The current status of the component.</td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">idle</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">setStatus</td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">React.Dispatch&lt;React.SetStateAction&lt;string&gt;&gt;</td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">Function to set the status of the component.</td>
            <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">null</td>
          </tr>
        </tbody>
      </table>
    </div>
        
        
        </TabsContent>
      </Tabs>

      <p className="mt-5 mb-5 text-xl font-semibold leading-7 tracking-tight lg:text-2xl">Installation</p>

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
                {`npx shadcn@latest add "https://easyui.pro/components-json/create-new.json"`}
              </code>
            </pre>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="manual">
        <div className="pl-4">
          <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/easyui/create-new.tsx</span></p>
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
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Transition,
} from "framer-motion"
import { Plus, X } from "lucide-react"

const transition: Transition = { type: "spring", bounce: 0, duration: 0.4 }

const Context = React.createContext<{
  status: string
  setStatus: React.Dispatch<React.SetStateAction<string>>
}>({ status: "", setStatus: () => null })

interface ActionItem {
  link: string
  icon: React.ReactNode
  name: string
}

interface InnerContentProps {
  actions: ActionItem[]
}

function InnerContent({ actions }: InnerContentProps) {
  const ctx = React.useContext(Context)
  const isOpen = ctx.status === "open"
  const isHovered = ctx.status === "hovered"

  return (
    <AnimatePresence>
      {isOpen || isHovered ? (
        <motion.div
          layoutId="container"
          style={{ borderRadius: 22 }}
          className="dark:bg-gray-900 bg-[#f7f6ef] tracking-tight text-[#6b6967] shadow-mixed ring-2 ring-black/[8%] dark:bg-black dark:text-white dark:border dark:border-gray-800"
        >
          <div className="flex w-full items-center justify-between py-2.5 pl-5 pr-2.5">
            <motion.span layoutId="label" className="relative">
              Create New
            </motion.span>
            <div className="relative">
              <AnimatePresence>
                {isHovered && (
                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="absolute -left-11 top-0.5 text-sm text-[#6b6967]/70"
                  >
                    Close
                  </motion.p>
                )}
              </AnimatePresence>
              <motion.button
                layout
                onClick={() => ctx.setStatus("idle")}
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: -20, y: 10 }}
                transition={{ ...transition, delay: 0.15 }}
                whileTap={{
                  scale: 0.9,
                  transition: { ...transition, duration: 0.2 },
                }}
                onHoverStart={() => ctx.setStatus("hovered")}
                onHoverEnd={() => ctx.setStatus("open")}
                className="size-6 flex items-center justify-center rounded-full bg-[#b8b6af] dark:bg-transparent"
              >
                <X
                  strokeWidth={4}
                  className="size-4 text-tight text-[#fafafa]"
                />
              </motion.button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              isHovered
                ? { opacity: 1, scaleX: 0.95, scaleY: 0.92 }
                : { opacity: 1 }
            }
            exit={{ opacity: 0 }}
            className="flex flex-col gap-2.5 rounded-[22px] bg-[#fafafa] p-2.5 shadow-[0_-3px_3px_-1.5px_rgba(0,0,0,0.08)] ring-1 ring-black/[8%] dark:bg-black dark:text-white dark:border dark:border-gray-800"
          >
            <div className="grid grid-cols-3 gap-2.5 text-[#b8b6af]">
              {actions.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    window.open(item.link, "_blank")
                    ctx.setStatus("idle")
                  }}
                  className="size-24 grid cursor-pointer place-items-center rounded-2xl bg-[#fefefe] transition duration-500 ease-in-out hover:bg-[#f6f4f0] dark:hover:bg-gray-700 hover:duration-200 active:scale-90 dark:bg-black dark:shadow-xl dark:text-white dark:border dark:border-gray-900"
                >
                  <div className="flex flex-col items-center gap-2">
                    {item.icon}
                    <p className="text-[#6b6967]">{item.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.button
          layoutId="container"
          onClick={() => ctx.setStatus("open")}
          whileTap={{ scale: 0.95 }}
          style={{ borderRadius: 22 }}
          className="flex items-center gap-1.5 bg-[#fafafa] px-5 py-2.5 tracking-tight text-[#202020] shadow-mixed ring-1 ring-black/[8%] transition-[box-shadow,background-color] hover:bg-[#e0deda] active:shadow-none dark:bg-black dark:text-white dark:border dark:border-gray-700 dark:hover:bg-gray-800"
        >
          <Plus strokeWidth={1} />
          Create New
        </motion.button>
      )}
    </AnimatePresence>
  )
}`}
                  </code></pre>

                  </div>
        </div>

        <p className="mt-5 font-semibold leading-7 tracking-tight ml-5">Update the import paths to match your project setup.</p>
      </TabsContent>
    </Tabs>
    <div className="ml-3 py-10">
    <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">Credits</h2>
    <p className="tracking tight leading-7 [&:not(:first-child)]:mt-6">Credit to <a href="https://github.com/vaunblu/lab/blob/main/src/app/create-new/page.tsx" className="font-semibold italic underline" target="_blank" rel="noopener noreferrer">@vaunblu</a> for the inspiration behind this component.</p>
    </div>
    </div>
  )
}

export default CreateNewComponentt
