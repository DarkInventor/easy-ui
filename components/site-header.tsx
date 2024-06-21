"use client"

import Link from "next/link"
import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { AnimatedSubscribeButton } from "./magicui/animated-subscribe-button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-1">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-6">
            <div className="sm:block">
             

              {/* <AnimatedSubscribeButton
              // buttonColor="#000000"
              buttonTextColor="#ffffff"
              subscribeStatus={false}
              initialText={ */}
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
                  window.open(
                    "https://x.com/kathanmehtaa",
                    "_blank"
                  )
                }
              >
                <Icons.twitter width="20" className="text-gray-500 dark:text-gray-600" />
              </Button>
              <ThemeToggle />
            </div>
            {/* } */}
            {/* changeText={
                <a className="group inline-flex items-center" href="/login">
                Login{" "}
                <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              }
            /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
