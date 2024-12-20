"use client"

import React, { useState } from "react"
import { Check, CheckIcon, Copy, CopyIcon, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import FeatureCard from "@/components/easyui/feature-card"

export default function FeatureCardComponent() {
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

  const handleCopy = (
    id: string,
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const codeElement = document.getElementById(id)
    const codeToCopy = codeElement ? codeElement.textContent : ""
    if (codeToCopy) {
      navigator.clipboard.writeText(codeToCopy).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }

  const codeString = `export default function FeatureCard() {
    return (
      <div className="mx-auto flex h-[399px] w-full max-w-[343px] flex-col overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-md sm:h-[310px] sm:max-w-[510px]">
        <div className="flex grow flex-col p-4 sm:p-6">
          <div className="mb-4 grid grow grid-cols-1 gap-4 sm:mb-4 sm:grid-cols-3 sm:gap-6">
            {/* Card 1 */}
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent sm:-rotate-2">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-white  dark:bg-black p-3 transition-colors duration-300 group-hover:bg-opacity-90 sm:p-4">
                <div className="size-10 rounded-full bg-gradient-to-r from-green-300 to-yellow-300 sm:size-14" />
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="h-1.5 w-20 rounded-full bg-gray-300 sm:h-2 sm:w-24" />
                  <div className="h-1.5 w-24 rounded-full bg-gray-100 sm:h-2 sm:w-28" />
                </div>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white dark:bg-black dark:border-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-400 via-teal-500 to-green-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-white dark:bg-black p-3 transition-colors duration-300 group-hover:bg-opacity-90 sm:p-4">
                <div className="size-10 rounded-full bg-gradient-to-r from-green-300 to-orange-300 sm:size-14" />
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="h-1.5 w-20 rounded-full bg-gray-300 sm:h-2 sm:w-24" />
                  <div className="h-1.5 w-24 rounded-full bg-gray-100 sm:h-2 sm:w-28" />
                </div>
              </div>
            </div>
  
            {/* Card 3 */}
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white dark:bg-black dark:border-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent sm:rotate-2">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-white dark:bg-black p-3 transition-colors duration-300 group-hover:bg-opacity-90 sm:p-4">
                <div className="size-10 rounded-full bg-gradient-to-r from-pink-300 to-yellow-300 sm:size-14" />
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="h-1.5 w-20 rounded-full bg-gray-300 sm:h-2 sm:w-24" />
                  <div className="h-1.5 w-24 rounded-full bg-gray-100 sm:h-2 sm:w-28" />
                </div>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-200 dark:border-gray-700">
            <h2 className=" text-lg font-bold sm:mt-2 sm:text-xl ">Social</h2>
            <p className="text-xs text-gray-500 sm:text-sm">Write once, share with your friends</p>
          </div>
        </div>
      </div>
    )
}
`

  return (
    <div className="flex flex-wrap justify-start gap-4 pb-10 max-w-full min-w-full px-0 lg:px-20">
      <div className="w-full sm:w-1/2 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">
          Feature Card
        </CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
            A sleek, responsive feature card showcasing interactive features with hover effects and gradient accents.
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
          <div className="flex items-center justify-center max-w-full mx-auto px-4 py-0.5 border rounded-lg h-auto p-20">
            <Button
              onClick={() => setKey((prev) => prev + 1)}
              className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
              variant="ghost"
            >
              <RotateCcw size={16} />
            </Button>
            <div className="p-5">
              <FeatureCard />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code">        
          <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
            {/* <p className="font-semibold mt-5 tracking-tight leading-7">
              Step 2: Use the FireflyButton component in your desired page or
              component:
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
                  {`import FeatureCard from '@/components/easyui/feature-card';
import React from 'react'

function Home() {

  return (
    <FeatureCard />
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
          {`npx shadcn@latest add "https://easyui.pro/components-json/feature-card.json"`}
        </code>
      </pre>
    </div>
  </div>
</TabsContent>
<TabsContent value="manual">
  <div className="pl-4">
    <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/easyui/feature-card.tsx</span></p>
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
export default function FeatureCard() {
    return (
      <div className="mx-auto flex h-[399px] w-full max-w-[343px] flex-col overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-md sm:h-[310px] sm:max-w-[510px]">
        <div className="flex grow flex-col p-4 sm:p-6">
          <div className="mb-4 grid grow grid-cols-1 gap-4 sm:mb-4 sm:grid-cols-3 sm:gap-6">
            {/* Card 1 */}
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent sm:-rotate-2">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-white  dark:bg-black p-3 transition-colors duration-300 group-hover:bg-opacity-90 sm:p-4">
                <div className="size-10 rounded-full bg-gradient-to-r from-green-300 to-yellow-300 sm:size-14" />
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="h-1.5 w-20 rounded-full bg-gray-300 sm:h-2 sm:w-24" />
                  <div className="h-1.5 w-24 rounded-full bg-gray-100 sm:h-2 sm:w-28" />
                </div>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white dark:bg-black dark:border-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-400 via-teal-500 to-green-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-white dark:bg-black p-3 transition-colors duration-300 group-hover:bg-opacity-90 sm:p-4">
                <div className="size-10 rounded-full bg-gradient-to-r from-green-300 to-orange-300 sm:size-14" />
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="h-1.5 w-20 rounded-full bg-gray-300 sm:h-2 sm:w-24" />
                  <div className="h-1.5 w-24 rounded-full bg-gray-100 sm:h-2 sm:w-28" />
                </div>
              </div>
            </div>
  
            {/* Card 3 */}
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white dark:bg-black dark:border-gray-700 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-transparent sm:rotate-2">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70"></div>
              <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-white dark:bg-black p-3 transition-colors duration-300 group-hover:bg-opacity-90 sm:p-4">
                <div className="size-10 rounded-full bg-gradient-to-r from-pink-300 to-yellow-300 sm:size-14" />
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="h-1.5 w-20 rounded-full bg-gray-300 sm:h-2 sm:w-24" />
                  <div className="h-1.5 w-24 rounded-full bg-gray-100 sm:h-2 sm:w-28" />
                </div>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-200 dark:border-gray-700">
            <h2 className=" text-lg font-bold sm:mt-2 sm:text-xl ">Social</h2>
            <p className="text-xs text-gray-500 sm:text-sm">Write once, share with your friends</p>
          </div>
        </div>
      </div>
    )
}
`}
            </code></pre>

            </div>
  </div>

  <p className="mt-5 font-semibold leading-7 tracking-tight ml-5">Update the import paths to match your project setup.</p>
</TabsContent>
</Tabs>
    </div>
  )
}
