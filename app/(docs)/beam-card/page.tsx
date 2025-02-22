"use client"

import React, { useState } from "react"
import { Copy, Check, RotateCcw, CheckIcon, CopyIcon, CreditCard, MapPin, Plus, Github, Twitter, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { BeamCard } from "@/components/easyui/beam-card"
import { BeamButton } from "@/components/easyui/beam-button"

export default function BeamCardComponent() {
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
    window.open(`https://v0.dev/chat/api/open?url=https://easyui.pro/v0-preview/beam-card.json`, '_blank')
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
          Beam Card
        </CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
            Cards with Beam Animation 
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
          
         
            <div
      className={`flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 `}
    >
      <div className="w-full max-w-[80%] lg:max-w-[50%]">


        <div className="space-y-8">
          {/* Feature Card */}
          <BeamCard beamColor="#22d3ee" glowColor="rgba(34, 211, 238, 0.5)" hoverColor="rgba(34, 211, 238, 0.2)">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">
              Amazing Feature
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 md:mb-6">
              Experience the power of our cutting-edge technology with this amazing feature.
            </p>
            <BeamButton
              beamProps={{
                beamColor: "#22d3ee",
                glowColor: "rgba(34, 211, 238, 0.5)",
                hoverColor: "rgba(34, 211, 238, 0.2)",                
              }}
              className="border rounded-[0.75rem] text-sm "
            >
              Learn More
            </BeamButton>
          </BeamCard>

          {/* Pricing Card */}
          <BeamCard beamColor="#a855f7" glowColor="rgba(168, 85, 247, 0.5)" hoverColor="rgba(168, 85, 247, 0.2)">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Pro Plan</h2>
            <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6">
              $49<span className="text-base md:text-lg font-normal">/month</span>
            </p>
            <ul className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 md:mb-6 space-y-2">
              <li className="flex items-center">
                <Zap className="mr-2 h-4 w-4 text-purple-400" /> Advanced Features
              </li>
              <li className="flex items-center">
                <Zap className="mr-2 h-4 w-4 text-purple-400" /> Priority Support
              </li>
              <li className="flex items-center">
                <Zap className="mr-2 h-4 w-4 text-purple-400" /> Custom Integrations
              </li>
            </ul>
            <BeamButton
              beamProps={{
                beamColor: "#a855f7",
                glowColor: "rgba(168, 85, 247, 0.5)",
                hoverColor: "rgba(168, 85, 247, 0.2)",
              }}
              className="border rounded-[0.75rem] text-sm"
            >
              Choose Plan
            </BeamButton>
          </BeamCard>

          {/* Contact Card */}
          <BeamCard beamColor="#f43f5e" glowColor="rgba(244, 63, 94, 0.5)" hoverColor="rgba(244, 63, 94, 0.2)">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4">Get in Touch</h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 md:mb-6">
              Have questions? Our team is here to help you get started.
            </p>
            <div className="flex space-x-4">
              <BeamButton
                size="icon"
                beamProps={{
                  beamColor: "#f43f5e",
                  glowColor: "rgba(244, 63, 94, 0.5)",
                  hoverColor: "rgba(244, 63, 94, 0.2)",
                }}
                className="border rounded-[0.75rem] text-sm"
              >
                <Github className="h-4 w-4 md:h-4 md:w-4" />
              </BeamButton>
              <BeamButton
                size="icon"
                beamProps={{
                  beamColor: "#f43f5e",
                  glowColor: "rgba(244, 63, 94, 0.5)",
                  hoverColor: "rgba(244, 63, 94, 0.2)",
                }}
                className="border rounded-[0.75rem] "
              >
                <Twitter className="h-4 w-4 md:h-4 md:w-4" />
              </BeamButton>
            </div>
          </BeamCard>
        </div>
      </div>
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
                  {"import { Zap, Github, Twitter } from 'lucide-react'\nimport React from 'react'\nimport { BeamButton } from '@/components/ui/beam-button'\nimport { BeamCard } from '@/components/ui/beam-card'\n\nfunction Home() {\n  return (\n    <div\n    className={`flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 `}\n  >\n    <div className=\"w-full max-w-[80%] lg:max-w-[50%]\">\n\n\n      <div className=\"space-y-8\">\n        {/* Feature Card */}\n        <BeamCard beamColor=\"#22d3ee\" glowColor=\"rgba(34, 211, 238, 0.5)\" hoverColor=\"rgba(34, 211, 238, 0.2)\">\n          <h2 className=\"text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4\">\n            Amazing Feature\n          </h2>\n          <p className=\"text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 md:mb-6\">\n            Experience the power of our cutting-edge technology with this amazing feature.\n          </p>\n          <BeamButton\n            beamProps={{\n              beamColor: \"#22d3ee\",\n              glowColor: \"rgba(34, 211, 238, 0.5)\",\n              hoverColor: \"rgba(34, 211, 238, 0.2)\",                \n            }}\n            className=\"border rounded-[0.75rem] text-sm \"\n          >\n            Learn More\n          </BeamButton>\n        </BeamCard>\n\n        {/* Pricing Card */}\n        <BeamCard beamColor=\"#a855f7\" glowColor=\"rgba(168, 85, 247, 0.5)\" hoverColor=\"rgba(168, 85, 247, 0.2)\">\n          <h2 className=\"text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4\">Pro Plan</h2>\n          <p className=\"text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6\">\n            $49<span className=\"text-base md:text-lg font-normal\">/month</span>\n          </p>\n          <ul className=\"text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 md:mb-6 space-y-2\">\n            <li className=\"flex items-center\">\n              <Zap className=\"mr-2 h-4 w-4 text-purple-400\" /> Advanced Features\n            </li>\n            <li className=\"flex items-center\">\n              <Zap className=\"mr-2 h-4 w-4 text-purple-400\" /> Priority Support\n            </li>\n            <li className=\"flex items-center\">\n              <Zap className=\"mr-2 h-4 w-4 text-purple-400\" /> Custom Integrations\n            </li>\n          </ul>\n          <BeamButton\n            beamProps={{\n              beamColor: \"#a855f7\",\n              glowColor: \"rgba(168, 85, 247, 0.5)\",\n              hoverColor: \"rgba(168, 85, 247, 0.2)\",\n            }}\n            className=\"border rounded-[0.75rem] text-sm\"\n          >\n            Choose Plan\n          </BeamButton>\n        </BeamCard>\n\n        {/* Contact Card */}\n        <BeamCard beamColor=\"#f43f5e\" glowColor=\"rgba(244, 63, 94, 0.5)\" hoverColor=\"rgba(244, 63, 94, 0.2)\">\n          <h2 className=\"text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4\">Get in Touch</h2>\n          <p className=\"text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4 md:mb-6\">\n            Have questions? Our team is here to help you get started.\n          </p>\n          <div className=\"flex space-x-4\">\n            <BeamButton\n              size=\"icon\"\n              beamProps={{\n                beamColor: \"#f43f5e\",\n                glowColor: \"rgba(244, 63, 94, 0.5)\",\n                hoverColor: \"rgba(244, 63, 94, 0.2)\",\n              }}\n              className=\"border rounded-[0.75rem] text-sm\"\n            >\n              <Github className=\"h-4 w-4 md:h-4 md:w-4\" />\n            </BeamButton>\n            <BeamButton\n              size=\"icon\"\n              beamProps={{\n                beamColor: \"#f43f5e\",\n                glowColor: \"rgba(244, 63, 94, 0.5)\",\n                hoverColor: \"rgba(244, 63, 94, 0.2)\",\n              }}\n              className=\"border rounded-[0.75rem] \"\n            >\n              <Twitter className=\"h-4 w-4 md:h-4 md:w-4\" />\n            </BeamButton>\n          </div>\n        </BeamCard>\n      </div>\n    </div>\n  </div>\n  )\n}\n\nexport default Home"}
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
          {`npx shadcn@latest add "https://easyui.pro/components-json/beam-card.json"`}
        </code>
      </pre>
    </div>
  </div>
</TabsContent>
<TabsContent value="manual">
  <div className="pl-4">
    <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/ui/beam-card.tsx</span></p>
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
        {"\"use client\"\n\nimport * as React from \"react\"\nimport { motion, useMotionTemplate, useMotionValue } from \"framer-motion\"\nimport { cn } from \"@/lib/utils\"\n\ninterface BeamCardProps extends React.HTMLAttributes<HTMLDivElement> {\n  beamColor?: string\n  glowColor?: string\n  borderColor?: string\n  hoverColor?: string\n}\n\nexport const BeamCard = React.forwardRef<HTMLDivElement, BeamCardProps>(\n  (\n    {\n      className,\n      children,\n      beamColor = \"#3b82f6\",\n      glowColor = \"rgba(59, 130, 246, 0.5)\",\n      borderColor = \"bg-gray-300 dark:bg-gray-700\",\n      hoverColor = \"rgba(59, 130, 246, 0.2)\",\n      ...props\n    },\n    ref,\n  ) => {\n    const [hovered, setHovered] = React.useState(false)\n    const mouseX = useMotionValue(0)\n    const mouseY = useMotionValue(0)\n\n    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {\n      const rect = e.currentTarget.getBoundingClientRect()\n      mouseX.set(e.clientX - rect.left)\n      mouseY.set(e.clientY - rect.top)\n    }\n\n    const glowStyle = useMotionTemplate`radial-gradient(\n      150px circle at ${mouseX}px ${mouseY}px,\n      ${glowColor},\n      transparent 80%\n    )`\n\n    return (\n      <motion.div\n        ref={ref}\n        className={cn(\n          \"relative overflow-hidden rounded-xl p-[1px] transition-colors duration-300\",\n          \"bg-slate-100 dark:bg-slate-800\",\n          className,\n        )}\n        style={{ background: borderColor }}\n        onMouseMove={handleMouseMove}\n        onMouseEnter={() => setHovered(true)}\n        onMouseLeave={() => setHovered(false)}\n        animate={{ background: hovered ? hoverColor : borderColor }}\n        {...props}\n      >\n        <motion.div\n          className=\"absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300\"\n          style={{ background: glowStyle }}\n          animate={{ opacity: hovered ? 1 : 0 }}\n        />\n        <motion.div\n          className=\"absolute inset-0 rounded-xl\"\n          style={{\n            background: `linear-gradient(90deg, transparent, ${beamColor}, transparent)`,\n            opacity: 0.5,\n            left: \"-100%\",\n          }}\n          animate={{\n            left: \"100%\",\n          }}\n          transition={{\n            duration: 3,\n            repeat: Number.POSITIVE_INFINITY,\n            repeatDelay: 1,\n          }}\n        />\n        <div className=\"relative rounded-[11px] bg-white dark:bg-black p-5 md:p-6\">{children}</div>\n      </motion.div>\n    )\n  },\n)\nBeamCard.displayName = \"BeamCard\"\n\n"}
            </code></pre>

            </div>
  </div>
  <div className="pl-4 mt-5">
    <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/ui/beam-button.tsx</span></p>
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
        {"\"use client\"\n\nimport * as React from \"react\"\nimport { motion, useMotionTemplate, useMotionValue } from \"framer-motion\"\nimport { cn } from \"@/lib/utils\"\nimport { Slot } from \"@radix-ui/react-slot\"\nimport { cva, type VariantProps } from \"class-variance-authority\"\n\nconst beamButtonVariants = cva(\n  \"inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300\",\n  {\n    variants: {\n      variant: {\n        default:\n          \"bg-white text-slate-900 hover:bg-slate-100 dark:bg-black dark:text-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:\",\n        outline:\n          \"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:bg-black dark:hover:bg-slate-800 dark:hover:text-slate-50\",\n        ghost:\n          \"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 border border-transparent\",\n      },\n      size: {\n        default: \"h-9 px-4 py-2\",\n        sm: \"h-8 px-3 text-xs\",\n        lg: \"h-10 px-8\",\n        icon: \"h-9 w-9\",\n      },\n    },\n    defaultVariants: {\n      variant: \"default\",\n      size: \"default\",\n    },\n  },\n)\n\ninterface BeamButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement>,\n    VariantProps<typeof beamButtonVariants> {\n  asChild?: boolean\n  beamProps?: {\n    beamColor?: string\n    glowColor?: string\n    hoverColor?: string\n  }\n}\n\nconst BeamButton = React.forwardRef<HTMLButtonElement, BeamButtonProps>(\n  ({ className, variant, size, asChild = false, beamProps = {}, children, ...props }, ref) => {\n    const Comp = asChild ? Slot : \"button\"\n    const [hovered, setHovered] = React.useState(false)\n    const mouseX = useMotionValue(0)\n    const mouseY = useMotionValue(0)\n\n    const {\n      beamColor = \"#3b82f6\",\n      glowColor = \"rgba(59, 130, 246, 0.5)\",\n      hoverColor = \"rgba(59, 130, 246, 0.2)\",\n    } = beamProps\n\n    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {\n      const rect = e.currentTarget.getBoundingClientRect()\n      mouseX.set(e.clientX - rect.left)\n      mouseY.set(e.clientY - rect.top)\n    }\n\n    const glowStyle = useMotionTemplate`radial-gradient(\n      120px circle at ${mouseX}px ${mouseY}px,\n      ${glowColor},\n      transparent 80%\n    )`\n\n    return (\n      <motion.div\n        className=\"relative inline-flex overflow-hidden rounded-[0.75rem] transition-colors duration-300\"\n        style={{ background: hovered ? hoverColor : \"transparent\" }}\n                onMouseMove={handleMouseMove}\n        onMouseEnter={() => setHovered(true)}\n        onMouseLeave={() => setHovered(false)}\n      >\n        <motion.div\n          className=\"absolute inset-0 rounded-md opacity-0 transition-opacity duration-300\"\n          style={{ background: glowStyle }}\n          animate={{ opacity: hovered ? 1 : 0 }}\n        />\n        <Comp className={cn(beamButtonVariants({ variant, size, className }))} ref={ref} {...props}>\n          {children}\n        </Comp>\n      </motion.div>\n    )\n  },\n)\nBeamButton.displayName = \"BeamButton\"\n\nexport { BeamButton, beamButtonVariants }\n\n"}
            </code></pre>

            </div>
  </div>

  <p className="mt-5 font-semibold leading-7 tracking-tight ml-5">Update the import paths to match your project setup.</p>
</TabsContent>
</Tabs>
    </div>
  )
}