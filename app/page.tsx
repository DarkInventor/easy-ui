"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Footer } from "react-day-picker"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Announcement } from "@/components/announcement"
import CTASection from "@/components/cta-section"
import { Icons } from "@/components/icons"
import AvatarCircles from "@/components/magicui/avatar-circles"
import { BorderBeamm } from "@/components/magicui/border-beam"
import LinearGradient from "@/components/magicui/linear-gradient"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

import FaqPage from "./faqs/page"
import Features from "./features/page"
import OrbitingCirclesDemo from "./integrations/page"
import PricingPage from "./pricing/page"
import MarqueeDemo from "./testimonials/page"

// Corrected the path for FAQPage import

export default function IndexPage() {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ]
  return (
    <section id="hero">
      <div className="flex flex-col items-start gap-6 mt-20 px-7 text-center md:items-center pb-0 lg:pb-14 md:pb-14 sm:pb-0">
        <Announcement />
        <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
          <h1 className="relative mx-0 max-w-[43.5rem] text-balance bg-gradient-to-br from-black from-50% to-neutral-200/60 bg-clip-text pt-5 text-left text-5xl font-semibold tracking-tighter text-transparent sm:text-7xl md:mx-auto md:px-4 md:py-2 md:text-center md:text-7xl lg:text-7xl dark:text-white">
            Templates for Web Designers
          </h1>
          <span className="text-neutral-90 absolute -top-3.5 left-0 z-10 rotate-3 whitespace-nowrap rounded-full bg-neutral-800 px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white md:top-12 md:-rotate-12">
            100% high-quality
          </span>
        </div>
        <p className="max-w-xl text-balance text-left text-base tracking-tight text-black md:text-center md:text-lg dark:font-medium dark:text-white">
          50+ free and animated templates built with{" "}
          <span className="font-bold text-black dark:text-white">Next.js, React</span>,{" "}
          <span className="font-bold text-black dark:text-white">
            Typescript
          </span>
          ,{" "}
          <span className="font-bold text-black dark:text-white">
            Tailwind CSS
          </span>
       
          , and{" "}
          <span className="font-bold text-black dark:text-white">
            Framer Motion
          </span>
          .
          <br />
        </p>
        <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
            <Link
              href="/templates"
              // eslint-disable-next-line tailwindcss/no-contradicting-classname
              className={cn(
                buttonVariants({
                  variant: "default",
                  size: "lg",
                }),
                "gap-2 whitespace-pre md:flex",
                "group relative w-full gap-1 rounded-full text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
              )}
            >
              Browse Templates
              <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://mvp.easyui.pro/"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                }),
                "gap-2 whitespace-pre md:flex",
                "group relative w-full overflow-hidden rounded-full text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-black dark:hover:ring-offset-black "
              )}
            >
              Get Easy MVP
              <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="flex max-w-xl flex-row items-center justify-between text-balance p-5 text-left text-base tracking-tight text-black md:text-center md:text-base dark:font-medium dark:text-white">
          <span className="mr-2 font-300 text-gray-600 dark:text-gray-400 text-md">
            Trusted by
          </span>
          <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
        </div>
        <MarqueeDemo />
      </div>

      <div className="pt-12 sm:pt-8 lg:pt-25 mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold">
          Frequently asked questions
        </h2>
        <p className="text-muted-foreground max-w-[85%] pb-1 sm:pb-1 lg:pb-10 leading-normal sm:text-lg sm:leading-7">
          Get detailed answers to common inquiries.
        </p>
      </div>

      <div className="container my-10 sm:my-0 lg:my-0 md:my-0 flex max-w-[58rem] flex-col items-center justify-between gap-4 py-0">
        <FaqPage />
      </div>
      <CTASection />
    </section>
  )
}
