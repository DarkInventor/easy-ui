// "use client"

// import Link from "next/link"
// import { CheckIcon, ChevronRight, ChevronRightIcon } from "lucide-react"

// import { siteConfig } from "@/config/site"
// import { Button, buttonVariants } from "@/components/ui/button"
// import { Icons } from "@/components/icons"
// import { MainNav } from "@/components/main-nav"
// import { ThemeToggle } from "@/components/theme-toggle"

// import { AnimatedSubscribeButton } from "./magicui/animated-subscribe-button"
// import { cn } from "@/lib/utils"

// export function SiteHeader() {
//   return (
//     <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-1">
//       <div className="container flex h-14 max-w-screen-2xl items-center">
//         <MainNav />
//         <div className="flex flex-1 items-center justify-end space-x-4">
//           <nav className="flex items-center space-x-2">
//             <div className="sm:block hidden lg:block">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() =>
//                   window.open(
//                     "https://discord.gg/7yTP7KGK",
//                     "_blank"
//                   )
//                 }
//               >
//                 <Icons.discord
//                   width="23"
//                   height={23}
//                   className="text-gray-500 dark:text-gray-600"
//                 />
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() =>
//                   window.open(
//                     "https://github.com/DarkInventor/easy-ui",
//                     "_blank"
//                   )
//                 }
//               >
//                 <Icons.github
//                   width="20"
//                   className="text-gray-500 dark:text-gray-600"
//                 />
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() =>
//                   window.open(
//                     "https://x.com/kathanmehtaa",
//                     "_blank"
//                   )
//                 }
//               >
//                 <Icons.twitter width="20" className="text-gray-500 dark:text-gray-600" />
//               </Button>
//               <ThemeToggle />
//             </div>
//             <a
//               href="https://premium.easyui.pro/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={cn(
//                 buttonVariants({
//                   variant: "default",
//                   size: "sm",
//                 }),
//                 "gap-2 whitespace-pre md:flex",
//                 "group relative text-sm font-semibold ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
//               )}
//             >
//               Get Easy UI Premium
//               <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
//             </a>
//             {/* } */}
//             {/* changeText={
//                 <a className="group inline-flex items-center" href="/login">
//                 Login{" "}
//                 <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </a>
//               }
//             /> */}
//           </nav>
//         </div>
//       </div>
//     </header>
//   )
// }

"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  CheckIcon,
  ChevronRight,
  ChevronRightIcon,
  Menu,
  X,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { AnimatedSubscribeButton } from "./magicui/animated-subscribe-button"
import { Badge } from "./ui/badge"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-1">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Hamburger menu for small and medium screens */}
        <button className="lg:hidden mr-4 " onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panel-left-open h-6 w-6"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 3v18"></path><path d="m14 9 3 3-3 3"></path></svg>
        </button>

        {/* Logo for large screens */}
        {/* <Link href="/" className="hidden lg:flex items-center space-x-2">
          <Icons.logo />
          <span className="font-bold">{siteConfig.name}</span>
        </Link> */}

        {/* Main navigation for large screens */}
        <div className="hidden lg:block ">
          <MainNav />
        </div>

        {/* Right-side content */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <div className="hidden lg:flex items-center space-x-2">
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open("https://discord.gg/9PZpwYXA", "_blank")
                }
              >
                <Icons.discord
                  width="23"
                  height={23}
                  className="text-gray-500 dark:text-gray-600"
                />
              </Button> */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open(
                    "https://github.com/DarkInventor/easy-ui",
                    "_blank"
                  )
                }
              >
                <Icons.github
                  width="20"
                  className="text-gray-500 dark:text-gray-600"
                />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open("https://x.com/kathanmehtaa", "_blank")
                }
              >
                <Icons.twitter
                  width="20"
                  className="text-gray-500 dark:text-gray-600"
                />
              </Button>
              <ThemeToggle />
            </div>
            <a
              href="https://premium.easyui.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "sm",
                }),
                "gap-2 whitespace-pre md:flex rounded-[1rem]",
                "group relative text-sm font-semibold ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
              )}
            >
              Get Easy UI Premium
              <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </a>
          </nav>
        </div>
      </div>

      {/* Side menu for small and medium screens */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-black dark:bg-black dark:text-white  transform z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col h-full p-0 py-6 z-60">
          <div className="flex items-center justify-between mb-0 m-2 z-60">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <img
                src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/logo.svg"
                className="size-7"
                alt="Logo"
              />
              <span className="font-bold sm:inline-block">
                {siteConfig.name}
              </span>
              <Badge className="hidden sm:inline-block" variant="secondary">
                Beta
              </Badge>
            </Link>
            <button onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4  bg-white text-black dark:bg-black dark:text-white ml-0 py-10 pl-4 z-60">
            <Link href="/" className="text-foreground hover:text-foreground/80 text-sm">
              Home
            </Link>
            <Link
              href="/templates"
              className="text-foreground hover:text-foreground/80 text-sm"
            >
              Templates
            </Link>
            <Link
              href="/components"
              className="text-foreground hover:text-foreground/80 text-sm"
            >
              Components
            </Link>
            <Link
              href="/easy-mvp-pricing"
              className="text-foreground hover:text-foreground/80 text-sm"
            >
              Pricing
            </Link>
            <Link href="https://premium.easyui.pro/" target="_blank" className="text-foreground hover:text-foreground/80 text-sm inline-flex items-center">Premium Templates<Icons.externalLink className="ml-2 size-4" /></Link>
            <Link href="https://mvp.easyui.pro/" target="_blank" className="text-foreground hover:text-foreground/80 text-sm inline-flex items-center">Easy MVP<Icons.externalLink className="ml-2 size-4" /></Link>
          
          <p className="mt-auto flex flex-col space-y-4 leading-7 tracking-tight text-xs text-muted-foreground dark:text-gray-400  bg-white font-semibold dark:bg-black z-60"> Socials</p>
            {/* <Button
              variant="ghost"
              onClick={() =>
                window.open("https://discord.gg/9PZpwYXA", "_blank")
              }
              className="flex items-start justify-start !px-0 !h-4 "
            >
              <Icons.discord className="mr-2 h-4 w-4" />
              Discord
            </Button> */}
            <Button
              variant="ghost"
              onClick={() =>
                window.open("https://github.com/DarkInventor/easy-ui", "_blank")
              }
              className="flex items-start justify-start !px-0 !h-4 "
            >
              <Icons.github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                window.open("https://x.com/kathanmehtaa", "_blank")
              }
              className="flex items-start justify-start !px-0 !h-4 border-b pb-20"
            >
              <Icons.twitter className="mr-2 h-4 w-4" />
              Twitter
            </Button>
            <div className="flex justify-center mt-10 rounded-lg border-gray-200 dark:border-gray-700 pb-4">
              <ThemeToggle />
            </div>
          {/* </div> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
