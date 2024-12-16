"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import AdBanner from "@/components/ad-banner"
import { BellRing, ClipboardList, Command, Flag, Folder, StickyNote, Trophy } from "lucide-react"
import CreateNewComponent from "@/components/easyui/create-new"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { RotateCcw } from "lucide-react"
import { CopyIcon } from "@radix-ui/react-icons"
import LaunchPad from "@/components/easyui/launchpad"
import KeyButton from "@/components/easyui/key-button"
import SparkleButton from "@/components/easyui/sparkle-button"
import SearchCommand from "@/components/easyui/search-command"
  
function SearchCommandComponent() {
    const tagsData = [
        { tag: 'React', url: 'https://reactjs.org/' },
        { tag: 'Next.js', url: 'https://nextjs.org/' },
        { tag: 'Tailwind', url: 'https://tailwindcss.com/' },
        { tag: 'TypeScript', url: 'https://www.typescriptlang.org/' },
        { tag: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { tag: 'Vue.js', url: 'https://vuejs.org/' },
        { tag: 'Angular', url: 'https://angular.io/' },
        { tag: 'Svelte', url: 'https://svelte.dev/' },
        { tag: 'Node.js', url: 'https://nodejs.org/' },
        { tag: 'GraphQL', url: 'https://graphql.org/' },
      ];

  const [key, setKey] = React.useState(0); // State to trigger re-render

  return (
    <div className="flex flex-wrap justify-start gap-4 pb-10 max-w-full min-w-full px-0 lg:px-20">
      <div className="w-full sm:w-1/2 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">Command Search</CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">Click <Command className="inline h-4 w-4"/>K to use.</CardDescription>
      </div>
      
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none  bg-transparent p-0">
            <TabsTrigger value="preview" className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none">
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative rounded-md" key={key}>
          <div className="flex items-center justify-center max-w-full mx-auto px-4 py-0.5 border rounded-lg h-[400px]">
            <Button onClick={() => setKey((prev) => prev + 1)} className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1" variant="ghost">
              <RotateCcw size={16} />
            </Button>
            <span className="text-balance text-lg text-muted-foreground">Press <Command className="inline h-4 w-4"/>+K to preview.</span>
            <SearchCommand tagsData={tagsData} />
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3 z-0">
            <h2 className="font-semibold mt-12 scroll-m-20 border-b pb-2 text-2xl tracking-tight first:mt-0 leading-7">
              Installation
            </h2>
            <p className="font-semibold mt-5 tracking-tight leading-7">Step 1: Copy and paste the following code into your<span className="font-normal italic"> components/key-button.tsx</span></p>
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-sm">
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
                    <CopyIcon className="text-black hover:text-gray-400 active:text-blue-700 h-4 dark:text-white" style={{ backdropFilter: 'blur(20px)' }} />
              </button>
              <pre className="ml-2 py-2 pb-2 pl-2 font-sm min-h-[600px] lg:min-h-[600px] sm:min-h-[300px]"><code id="codeBlock"  className="text-left language-js text-sm ">
              {`"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CommandIcon,
  HashIcon,
  RotateCcwIcon,
  XIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

type Page = "main" | "tags" | "parent"

type TagData = {
  tag: string
  url: string
}

type FullFeaturedCommandPaletteProps = {
  tagsData: TagData[]
}

export default function SearchCommand({
  tagsData,
}: FullFeaturedCommandPaletteProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [theme] = React.useState<"light" | "dark">("light")
  const [currentPage, setCurrentPage] = React.useState<Page>("main")
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])
  const [navigationIndex, setNavigationIndex] = React.useState(-1)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const filteredTags = tagsData
    ? tagsData.filter(({ tag }) =>
        tag.toLowerCase().includes(search.toLowerCase())
      )
    : []

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const handleNavigate = (direction: "up" | "down") => {
    setNavigationIndex((prev) => {
      if (direction === "up") {
        return prev > 0 ? prev - 1 : filteredTags.length - 1
      } else {
        return prev < filteredTags.length - 1 ? prev + 1 : 0
      }
    })
  }

  if (!open) {
    return null
  }

  return (
    <div className="fixed top-20 py-10 lg:py-20 px-4 left-0 right-0 h-auto flex items-center justify-center transition-colors duration-300 bg-transparent pointer-events-none dark:bg-transparent ">
      <div className="pointer-events-auto">
        <motion.div
          initial={false}
          animate={
            open ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }
          }
          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          className="relative max-w-sm px-4 lg:w-full md:w-full lg:max-w-3xl md:max-w-xl"
        >
          <Command className="rounded-xl shadow-lg backdrop-blur-xl bg-transparent dark:border-gray-900 dark:border text-black dark:text-gray-100 leading-7 tracking-tight ">
            <div className="flex items-center border-b border-1 border-gray-200 dark:border-gray-700 px-3">
              <CommandInput
                placeholder="Type a command or search"
                value={search}
                onValueChange={setSearch}
                className="flex h-14 w-[650px] rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 dark:placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 tracking-tight leading-7"
              />
              <kbd className="hidden sm:inline-flex h-8 select-none items-center gap-1 rounded p-2 ml-[-20px] mr-2 font-mono text-[12px] font-medium bg-gray-200 dark:bg-gray-900 text-black dark:text-gray-300">
                {/* ⌘K */}
                <CommandIcon className="h-3 w-3 bg-transparent text-black dark:text-white" />
                K
              </kbd>
            </div>
            <CommandList className="max-h-[400px] overflow-y-auto overflow-x-hidden p-2">
              <CommandEmpty className="py-6 text-center">
                <HashIcon className="w-12 h-12 mx-auto mb-4 text-gray-600 dark:text-gray-400" />
                <h3 className="text-lg font-semibold mb-1">No tags found</h3>
                <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
                  &quot;{search}&quot; did not match any tags currently used in
                  projects. Please try again or create a new tag.
                </p>
                <Button
                  variant="outline"
                  className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
                  onClick={() => setSearch("")}
                >
                  Clear search
                </Button>
              </CommandEmpty>
              <CommandGroup
                className="text-gray-500 font-bold tracking-tight leading-7 "
                heading="Tags"
              >
                <AnimatePresence>
                  {filteredTags.map(({ tag, url }, index) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="font-normal text-md"
                      onClick={() => (window.location.href = url)}
                    >
                      <CommandItem
                        className={\`px-2 py-2 rounded-lg cursor-pointer \${
                          index === navigationIndex
                            ? "bg-black/10 dark:bg-white/20 text-gray-700 dark:text-white"
                            : ""
                        } hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-gray-300 transition-colors\`}
                      >
                        <a
                          href={url}
                          className={
                            selectedTags.includes(tag) ? "font-bold" : ""
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          {tag}
                        </a>
                      </CommandItem>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </CommandGroup>
            </CommandList>
            <div className="flex flex-wrap items-center justify-between gap-2 border-t px-2 py-2 text-sm border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage("tags")}
                >
                  <HashIcon className="h-4 w-4" />
                </Button>
                <span className="hidden sm:block">tags</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleNavigate("up")}
                >
                  <ChevronUpIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => handleNavigate("down")}
                >
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
                <span className="hidden sm:block">navigate</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => {
                    setSearch("")
                    setSelectedTags([])
                    setNavigationIndex(-1)
                  }}
                >
                  <RotateCcwIcon className="h-4 w-4" />
                </Button>
                <span className="hidden sm:block">reset</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setOpen(false)}
                >
                  <XIcon className="h-4 w-4" />
                </Button>
                <span className="hidden sm:block mr-2">close</span>
              </div>
            </div>
          </Command>
        </motion.div>
      </div>
    </div>
  )
}
`}
                  </code></pre>
                </div>
              </div>

              <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
              <p className="font-semibold mt-5 tracking-tight leading-7">Step 2: Update the import paths and run this code.</p>
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
{`import SearchCommand from '@/components/easyui/search-command'
import React from 'react'

function Home() {
  const tagsData = [
    { tag: 'React', url: 'https://reactjs.org/' },
    { tag: 'Next.js', url: 'https://nextjs.org/' },
    { tag: 'Tailwind', url: 'https://tailwindcss.com/' },
    { tag: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { tag: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { tag: 'Vue.js', url: 'https://vuejs.org/' },
    { tag: 'Angular', url: 'https://angular.io/' },
    { tag: 'Svelte', url: 'https://svelte.dev/' },
    { tag: 'Node.js', url: 'https://nodejs.org/' },
    { tag: 'GraphQL', url: 'https://graphql.org/' },
  ];

  return (
    <SearchCommand tagsData={tagsData} />
  )
}

export default Home;
`}
            {/* </div> */}
            </code></pre>
            </div>
          </div>

          {/* <div className="mt-5 px-4 ml-3 lg:ml-1 md:lg-3"> */}
      {/* <h2 className="text-2xl font-semibold mb-5 tracking-tight leading-7 border-b dark:border-gray-700 pb-2 scroll-m-20">Props</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
      <thead>
        <tr className="bg-gray-100 dark:bg-gray-900">
          <th className="border border-gray-300 px-4 py-2 dark:border-gray-700">Prop Name</th>
          <th className="border border-gray-300 px-4 py-2 dark:border-gray-700">Type</th>
          <th className="border border-gray-300 px-4 py-2 dark:border-gray-700">Description</th>
          <th className="border border-gray-300 px-4 py-2 dark:border-gray-700">Default Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">id</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">Number</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
            Unique identifier for each application.
          </td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">-</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">name</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">String</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
            Name of the application.
          </td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">-</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">icon</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">String</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
            URL or path to the application&apos;s icon image.
          </td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">-</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">category</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">String</td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">
            Category to which the application belongs.
          </td>
          <td className="border border-gray-300 px-4 py-2 dark:border-gray-700">-</td>
        </tr>
      </tbody>
    </table> */}
    {/* </div> */}
        
        
        </TabsContent>
      </Tabs>
      
    {/* <div className="py-10 ml-3">
    <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">Credits</h2>
    <p className="leading-7 [&:not(:first-child)]:mt-6 tracking tight">Credit to <a href="https://github.com/vaunblu/lab/blob/main/src/app/create-new/page.tsx" className="underline italic font-semibold" target="_blank" rel="noopener noreferrer">@vaunblu</a> for the inspiration behind this component.</p>
    </div> */}
    </div>
  )
}

export default SearchCommandComponent
