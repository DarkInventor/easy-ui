"use client"

import React, { useState } from "react"
import { Copy, Check, RotateCcw, CheckIcon, CopyIcon, CreditCard, MapPin, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RainbowButton } from "@/components/ui/rainbow-button"
import FileUploadZone from "@/components/easyui/file-upload-card"


export default function FileUpload() {
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
    window.open(`https://v0.dev/chat/api/open?url=https://easyui.pro/v0-preview/file-upload-card.json`, '_blank')
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
          Upload Button
        </CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
          Upload button to upload single or multiple files.
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
          
                    <FileUploadZone />

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
import FileUploadZone from "@/components/easyui/file-upload-card"
import React from 'react'

function Home() {
  return (
      <FileUploadZone />
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
          {`npx shadcn@latest add "https://easyui.pro/components-json/file-upload-card.json"`}
        </code>
      </pre>
    </div>
  </div>
</TabsContent>
<TabsContent value="manual">
  <div className="pl-4">
    <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/ui/file-upload.tsx</span></p>
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
        {"\"use client\"\n\nimport type React from \"react\"\nimport { useState, useRef } from \"react\"\nimport { Upload, FileUp, Share2, Loader2, X, Image, File, UploadCloudIcon, Video } from \"lucide-react\"\nimport { motion, AnimatePresence } from \"framer-motion\"\nimport { Card, CardContent } from \"@/components/ui/card\"\nimport { Progress } from \"@/components/ui/progress\"\nimport { Button } from \"@/components/ui/button\"\n\nconst FileUploadZone = () => {\n  const [draggedZone, setDraggedZone] = useState<number | null>(null)\n  const [files, setFiles] = useState<File[]>([])\n  const [uploading, setUploading] = useState(false)\n  const [progress, setProgress] = useState(0)\n  const fileInputRef = useRef<HTMLInputElement>(null)\n\n  const handleDragEnter = (index: number) => (e: React.DragEvent) => {\n    e.preventDefault()\n    setDraggedZone(index)\n  }\n\n  const handleDragLeave = (e: React.DragEvent) => {\n    e.preventDefault()\n    setDraggedZone(null)\n  }\n\n  const simulateUpload = async (newFiles: File[]) => {\n    setUploading(true)\n    setProgress(0)\n\n    for (let i = 0; i <= 100; i += 10) {\n      await new Promise((resolve) => setTimeout(resolve, 200))\n      setProgress(i)\n    }\n\n    setFiles((prevFiles) => [...prevFiles, ...newFiles])\n    setUploading(false)\n  }\n\n  const handleDrop = (index: number) => async (e: React.DragEvent) => {\n    e.preventDefault()\n    setDraggedZone(null)\n    const droppedFiles = Array.from(e.dataTransfer.files)\n    if (droppedFiles.length > 0) {\n      await simulateUpload(droppedFiles)\n    }\n  }\n\n  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {\n    const selectedFiles = Array.from(e.target.files || [])\n    if (selectedFiles.length > 0) {\n      await simulateUpload(selectedFiles)\n    }\n  }\n\n  const removeFile = (index: number) => {\n    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))\n  }\n\n  const zones = [\n    {\n      title: \"Upload Images\",\n      subtitle: \"Drop images here\",\n      icon: Image,\n      gradient: \"from-purple-400 via-pink-500 to-red-500\",\n      rotate: \"-rotate-2\",\n    },\n    {\n      title: \"Upload Videos\",\n      subtitle: \"Drop videos here\",\n      icon: Video,\n      gradient: \"from-blue-400 via-teal-500 to-green-500\",\n      rotate: \"\",\n    },\n    {\n      title: \"Upload Files\",\n      subtitle: \"Drop files here\",\n      icon: UploadCloudIcon,\n      gradient: \"from-yellow-400 via-orange-500 to-red-500\",\n      rotate: \"rotate-3\",\n    },\n  ]\n\n  return (\n    <Card className=\"mx-auto w-full max-w-[300px] lg:max-w-[500px] overflow-hidden rounded-[1rem]\">\n      <CardContent className=\"p-6 py-10 cursor:pointer\">\n        <div className=\"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6\">\n          {zones.map((zone, index) => (\n            <div key={index} className={`relative ${zone.rotate}`}>\n              <motion.div\n                onDragEnter={handleDragEnter(index)}\n                onDragOver={(e: { preventDefault: () => any }) => e.preventDefault()}\n                onDragLeave={handleDragLeave}\n                onDrop={handleDrop(index)}\n                whileHover={{ y: -4, scale: 1.02 }}\n                whileTap={{ scale: 0.98 }}\n                className=\"group relative h-full\"\n              >\n                <div\n                  className={`\n                    absolute inset-0 -z-10 rounded-xl bg-gradient-to-br ${zone.gradient}\n                    opacity-0 blur-md transition-opacity duration-300\n                    ${draggedZone === index ? \"opacity-70\" : \"group-hover:opacity-70\"}\n                  `}\n                />\n                <Card className=\"relative h-full rounded-[1rem] overflow-hidden border-2 border-dashed border-gray-200 dark:border-gray-800 transition-colors duration-300 group-hover:border-transparent\">\n                  <CardContent className=\"flex h-full flex-col items-center justify-center p-6 text-center\">\n                    <motion.div\n                      whileHover={{ scale: 1.1, rotate: 10 }}\n                      className=\"rounded-full bg-gray-100 dark:bg-gray-800 p-3 mb-4\"\n                    >\n                      <zone.icon className=\"h-8 w-8 text-gray-500\" />\n                    </motion.div>\n                    <h3 className=\"mb-1 text-sm font-medium\">{zone.title}</h3>\n                    <p className=\"text-xs text-gray-500\">{zone.subtitle}</p>\n                  </CardContent>\n                </Card>\n              </motion.div>\n            </div>\n          ))}\n        </div>\n\n        {(uploading || files.length > 0) && (\n          <div className=\"mb-6\">\n            <Progress value={uploading ? progress : 100} className=\"h-2 mb-2\" />\n            <p className=\"text-sm text-gray-500 mb-2\">\n              {uploading ? `Uploading... ${progress}%` : `${files.length} file(s) uploaded`}\n            </p>\n            <AnimatePresence>\n              {files.map((file, index) => (\n                <motion.div\n                  key={`${file.name}-${index}`}\n                  initial={{ opacity: 0, y: -10 }}\n                  animate={{ opacity: 1, y: 0 }}\n                  exit={{ opacity: 0, y: -10 }}\n                  className=\"flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-[1rem] p-2 mb-2\"\n                >\n                  <span className=\"truncate max-w-[80%] text-sm text-gray-700 dark:text-gray-300 ml-2\">{file.name}</span>\n                  <Button\n                    variant=\"ghost\"\n                    size=\"icon\"\n                    onClick={() => removeFile(index)}\n                    className=\"h-6 w-6 p-0 hover:bg-gray-200 dark:hover:bg-gray-700\"\n                  >\n                    <X className=\"h-4 w-4\" />\n                  </Button>\n                </motion.div>\n              ))}\n            </AnimatePresence>\n          </div>\n        )}\n\n        <div className=\"text-center\">\n          <input type=\"file\" ref={fileInputRef} onChange={handleFileSelect} className=\"hidden\" multiple />\n          <Button\n            onClick={() => fileInputRef.current?.click()}\n            // className=\"bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600\"\n            disabled={uploading}\n            className=\"rounded-[1rem] mt-5\"\n          >\n            {uploading ? (\n              <>\n                <Loader2 className=\"mr-2 h-4 w-4 animate-spin\" />\n                Uploading...\n              </>\n            ) : (\n              <>\n                <Upload className=\"mr-2 h-4 w-4\" />\n                Choose Files\n              </>\n            )}\n          </Button>\n        </div>\n      </CardContent>\n    </Card>\n  )\n}\n\nexport default FileUploadZone\n\n"}
            </code></pre>

            </div>
  </div>

  <p className="mt-5 font-semibold leading-7 tracking-tight ml-5">Update the import paths to match your project setup.</p>
</TabsContent>
</Tabs>
    </div>
  )
}