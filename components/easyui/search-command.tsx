"use client"

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

//   const handleOpen = () => {
//     if (navigationIndex >= 0 && navigationIndex < filteredTags.length) {
//       const tag = filteredTags[navigationIndex].tag
//       handleTagSelect(tag)
//     }
//   }

//   const handleParent = () => {
//     if (currentPage === "tags") {
//       setCurrentPage("main")
//     }
//   }

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
                        className={`px-2 py-2 rounded-lg cursor-pointer ${
                          index === navigationIndex
                            ? "bg-black/10 dark:bg-white/20 text-gray-700 dark:text-white"
                            : ""
                        } hover:bg-black/5 dark:hover:bg-white/10 text-black dark:text-gray-300 transition-colors`}
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
