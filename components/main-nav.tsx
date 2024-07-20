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
        <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/logo.svg" className="size-7" alt="Logo" />
        <span className="font-bold sm:inline-block">
          {siteConfig.name}
        </span>
        <Badge className="hidden sm:inline-block" variant="secondary">Beta</Badge>
      </Link>
      <nav className="hidden lg:flex lg:items-center lg:gap-6 text-sm">
        <Link
          href="/templates"
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
            "transition-colors hover:text-foreground/80 flex items-center",
            pathname?.startsWith("/blocks")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          GitHub <Icons.externalLink className="ml-2 size-4" />
        </Link>
        <Link
          href="https://mvp.easyui.pro/"
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