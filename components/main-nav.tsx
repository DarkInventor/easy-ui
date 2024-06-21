"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Badge } from "./ui/badge"
// import { Badge } from "@/registry/new-york/ui/badge"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <img src="/logo.svg" className="size-8" alt="Logo" />
        <span className="font-bold sm:inline-block">
          {siteConfig.name}
        </span>
        <Badge className="hidden sm:inline-block" variant="secondary">Beta</Badge>
      </Link>
      <nav className="hidden lg:flex lg:items-center lg:gap-6 text-sm">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Templates
        </Link>
        
       
        <Link
          href={siteConfig.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link>
        <Link
          href="/blocks"
          className={cn(
            "transition-colors hover:text-foreground/80 flex items-center",
            pathname?.startsWith("/blocks")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Easy MVP <Icons.externalLink className="ml-2 size-4" />
        </Link>
      </nav>
    </div>
  )
}