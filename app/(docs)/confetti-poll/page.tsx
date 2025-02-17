"use client"

import React, { useState } from "react"
import { Copy, Check, RotateCcw, CheckIcon, CopyIcon, CreditCard, MapPin, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Poll, type PollOption } from "@/components/easyui/confetti-poll"

export default function ConfettiPoll() {
  const [pollData, setPollData] = useState({
    question: "Quiz Time in the Turing Health Community! 🎉\nWhat's your go-to healthy snack? 🤔",
    options: [
      { id: "1", text: "Fresh Fruit", votes: 3, percentage: 82.3 },
      { id: "2", text: "Veggie Sticks", votes: 1, percentage: 17.6 },
      { id: "3", text: "Avocado Toast", votes: 1, percentage: 39.4 },
    ] as PollOption[],
    author: {
      name: "Kathan Mehta",
      username: "kathanmehtaa",
      avatar:
        "/bird.jpg",
    },
    stats: {
      views: 122,
      likes: 21,
      comments: 2,
    },
    totalVotes: 10,
    showResults: false,
    userVote: null,
  })

  const handleVote = (optionId: string) => {
    // @ts-ignore
    setPollData((prev) => ({
      ...prev,
      showResults: true,
      userVote: optionId,
      totalVotes: prev.totalVotes + 1,
      options: prev.options.map((option) => {
        if (option.id === optionId) {
          const newVotes = option.votes + 1
          const newTotalVotes = prev.totalVotes + 1
          return {
            ...option,
            votes: newVotes,
            percentage: (newVotes / newTotalVotes) * 100,
          }
        }
        return {
          ...option,
          percentage: (option.votes / (prev.totalVotes + 1)) * 100,
        }
      }),
    }))
  }

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
    window.open(`https://v0.dev/chat/api/open?url=https://easyui.pro/v0-preview/confetti-poll.json`, '_blank')
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
          Confetti Poll
        </CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
          Reusable Poll component with Confetti animation
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
          
         
        {/* <div className="px-4 flex items-center justify-between p-10"> */}
      {/* <main className="min-h-auto flex items-center justify-center ">  */}
      <Poll {...pollData} onVote={handleVote} />
    {/* </main> */}
      {/* </div> */}
   

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
                  {`"use client"

import { useState } from "react"
import { Poll, type PollOption } from "@/components/ui/confetti-poll"

export default function Home() {
  const [pollData, setPollData] = useState({
    question: "Quiz Time in the Turing Health Community! 🎉\n What's your go-to healthy snack? 🤔",
    options: [
      { id: "1", text: "Fresh Fruit", votes: 3, percentage: 2.9 },
      { id: "2", text: "Veggie Sticks", votes: 18, percentage: 17.6 },
      { id: "3", text: "Avocado Toast", votes: 81, percentage: 79.4 },
    ] as PollOption[],
    author: {
      name: "Kathan Mehta",
      username: "kathanmehtaa",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2011.51.35%E2%80%AFAM-MWggRTUphPO3n2x57LKWOY9cxGr1jW.png",
    },
    stats: {
      views: 5874,
      likes: 215,
      comments: 11,
    },
    totalVotes: 102,
    showResults: false,
    userVote: null,
  })

  const handleVote = (optionId: string) => {
    setPollData((prev) => ({
      ...prev,
      showResults: true,
      userVote: optionId,
      totalVotes: prev.totalVotes + 1,
      options: prev.options.map((option) => {
        if (option.id === optionId) {
          const newVotes = option.votes + 1
          const newTotalVotes = prev.totalVotes + 1
          return {
            ...option,
            votes: newVotes,
            percentage: (newVotes / newTotalVotes) * 100,
          }
        }
        return {
          ...option,
          percentage: (option.votes / (prev.totalVotes + 1)) * 100,
        }
      }),
    }))
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
      <Poll {...pollData} onVote={handleVote} />
    </main>
  )
}
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
          {`npx shadcn@latest add "https://easyui.pro/components-json/confetti-poll.json"`}
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
        {"\"use client\"\n\nimport * as React from \"react\"\nimport { useState } from \"react\"\nimport { Eye, Heart, MessageSquare, Bookmark, MoreHorizontal } from \"lucide-react\"\nimport { cn } from \"@/lib/utils\"\nimport { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\"\nimport confetti from \"canvas-confetti\"\n\n// Types\nexport interface PollOption {\n  id: string\n  text: string\n  votes: number\n  percentage: number\n}\n\nexport interface PollProps extends React.HTMLAttributes<HTMLDivElement> {\n  question: string\n  options: PollOption[]\n  onVote?: (optionId: string) => void\n  showResults?: boolean\n  totalVotes?: number\n  userVote?: string | null\n  author?: {\n    name: string\n    username: string\n    avatar: string\n  }\n  stats?: {\n    views?: number\n    likes?: number\n    comments?: number\n  }\n}\n\n// Component\nconst Poll = React.forwardRef<HTMLDivElement, PollProps>(\n  (\n    {\n      className,\n      question,\n      options: initialOptions,\n      onVote,\n      showResults: initialShowResults = false,\n      totalVotes: initialTotalVotes,\n      userVote: initialUserVote = null,\n      author,\n      stats: initialStats,\n      ...props\n    },\n    ref,\n  ) => {\n    const [hasVoted, setHasVoted] = useState(Boolean(initialUserVote))\n    const [selectedOption, setSelectedOption] = useState<string | null>(initialUserVote)\n    const [pollOptions, setPollOptions] = useState<PollOption[]>(initialOptions)\n    const [showResults, setShowResults] = useState(initialShowResults)\n    const [stats, setStats] = useState(initialStats)\n    const [isLiked, setIsLiked] = useState(false)\n\n    const totalVotes = initialTotalVotes || pollOptions.reduce((sum, option) => sum + option.votes, 0)\n\n    const handleVote = (optionId: string) => {\n      if (hasVoted) return\n\n      setSelectedOption(optionId)\n      setPollOptions((prev) =>\n        prev.map((option) => ({\n          ...option,\n          votes: option.id === optionId ? option.votes + 1 : option.votes,\n        })),\n      )\n\n      confetti({\n        particleCount: 100,\n        spread: 70,\n        origin: { y: 0.6 },\n      })\n\n      setHasVoted(true)\n      setShowResults(true)\n      onVote?.(optionId)\n    }\n\n    const handleLike = () => {\n      setIsLiked((prev) => !prev)\n      setStats((prev) => ({\n        ...prev,\n        // @ts-ignore\n        likes: prev.likes + (isLiked ? -1 : 1),\n      }))\n    }\n\n    return (\n      <div\n        ref={ref}\n        className={cn(\n          \"w-full max-w-[598px] bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl mt-20 mb-20\",\n          className,\n        )}\n        {...props}\n      >\n        <div className=\"p-4\">\n          {/* Author Section */}\n          {author && (\n            <div className=\"flex items-start justify-between gap-2 mb-3\">\n              <div className=\"flex gap-3\">\n                <Avatar className=\"h-10 w-10 rounded-full\">\n                  <AvatarImage src={author.avatar} alt={`@${author.username}`} />\n                  <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>\n                </Avatar>\n                <div>\n                  <div className=\"flex items-center gap-1 text-[15px] leading-5\">\n                    <span className=\"font-bold text-gray-900 dark:text-gray-100\">{author.name}</span>\n                    <span className=\"text-gray-500 dark:text-gray-400\">@{author.username}</span>\n                  </div>\n                </div>\n              </div>\n              <button className=\"text-gray-500 hover:text-gray-900 dark:hover:text-gray-100\">\n                <MoreHorizontal className=\"h-5 w-5\" />\n              </button>\n            </div>\n          )}\n\n          {/* Poll Content */}\n          <div className=\"mb-3\">\n            <p className=\"text-[15px] leading-5 text-gray-900 dark:text-gray-100 whitespace-pre-wrap\">{question}</p>\n          </div>\n\n          <div className=\"mb-3\">\n            {pollOptions.map((option) => (\n              <button\n                key={option.id}\n                onClick={() => handleVote(option.id)}\n                disabled={hasVoted}\n                className={cn(\n                  \"w-full text-left relative py-1 mb-2\",\n                  showResults ? \"cursor-default\" : \"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800\",\n                )}\n              >\n                <div className=\"flex items-center\">\n                  {showResults && (\n                    <div\n                      className=\"absolute left-0 top-0 bottom-0 bg-blue-100 dark:bg-blue-900 rounded transition-all duration-500\"\n                      style={{ width: `${option.percentage}%` }}\n                    />\n                  )}\n                  <div className=\"relative flex justify-between items-center w-full z-10 px-3 py-2\">\n                    <span className=\"text-[15px] leading-5 text-gray-900 dark:text-gray-100\">{option.text}</span>\n                    {showResults && (\n                      <span className=\"text-[13px] leading-4 text-gray-500 dark:text-gray-400 ml-2\">\n                        {option.percentage.toFixed(1)}%\n                      </span>\n                    )}\n                  </div>\n                </div>\n              </button>\n            ))}\n          </div>\n\n          {showResults && (\n            <p className=\"text-[13px] leading-4 text-gray-500 dark:text-gray-400 mb-3\">\n              {totalVotes} votes · Final results\n            </p>\n          )}\n\n          {/* Stats Footer */}\n          {stats && (\n            <div className=\"flex items-center justify-between text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-3\">\n              <div className=\"flex space-x-6\">\n                <button className=\"group flex items-center hover:text-blue-500\">\n                  <Eye className=\"h-[18px] w-[18px] mr-2\" />\n                  <span className=\"text-[13px] leading-4 group-hover:text-blue-500\">\n                    {stats.views?.toLocaleString()}\n                  </span>\n                </button>\n                <button\n                  className={cn(\"group flex items-center\", isLiked ? \"text-pink-500\" : \"hover:text-pink-500\")}\n                  onClick={handleLike}\n                >\n                  <Heart className={cn(\"h-[18px] w-[18px] mr-2\", isLiked && \"fill-current\")} />\n                  <span\n                    className={cn(\"text-[13px] leading-4\", isLiked ? \"text-pink-500\" : \"group-hover:text-pink-500\")}\n                  >\n                    {stats.likes?.toLocaleString()}\n                  </span>\n                </button>\n                <button className=\"group flex items-center hover:text-blue-500\">\n                  <MessageSquare className=\"h-[18px] w-[18px] mr-2\" />\n                  <span className=\"text-[13px] leading-4 group-hover:text-blue-500\">\n                    {stats.comments?.toLocaleString()}\n                  </span>\n                </button>\n              </div>\n              <button className=\"flex items-center hover:text-blue-500\">\n                <Bookmark className=\"h-[18px] w-[18px] mr-2\" />\n                <span className=\"text-[13px] leading-4\">Save</span>\n              </button>\n            </div>\n          )}\n        </div>\n      </div>\n    )\n  },\n)\nPoll.displayName = \"Poll\"\n\nexport { Poll }\n\n"}
            </code></pre>

            </div>
  </div>

  <p className="mt-5 font-semibold leading-7 tracking-tight ml-5">Update the import paths to match your project setup.</p>
</TabsContent>
</Tabs>
    </div>
  )
}