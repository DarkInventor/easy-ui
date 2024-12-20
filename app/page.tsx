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

import FaqPage from "./faqs/page"
import Features from "./features/page"
import OrbitingCirclesDemo from "./integrations/page"
import PricingPage from "./pricing/page"
import MarqueeDemo from "./testimonials/page"
import Showcase from "@/components/showcase"
import EasyHero from "@/components/easy-hero"
import ShowcaseGrid from "@/components/showcase"
import ROISection from "@/components/ROISection"

// Corrected the path for FAQPage import

export default function IndexPage() {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ]
  return (
    <section id="hero" suppressHydrationWarning>
      <div className="mx-auto mt-0 flex flex-col items-start gap-0 px-0 pb-0 text-center sm:pb-0 md:mt-10 md:items-center md:pb-14 lg:mt-20 lg:pb-14">
        <Announcement />     

      <EasyHero title="Starting your Next project ? Don't start from scratch" subtext='Kickstart with 50+ High Quality templates built with Next.js, React, Typescript, Tailwind CSS, and Framer Motion.' />
        <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-5 sm:max-w-lg sm:flex-row md:mx-auto px-8">
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
                "group relative w-full gap-1 rounded-[1rem] text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50"
              )}
            >
              Browse Templates
              <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://premium.easyui.pro/pricing-section"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                }),
                "gap-2 whitespace-pre md:flex",
                "group relative w-full overflow-hidden rounded-[1rem] text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-black dark:hover:ring-offset-black"
              )}
            >
              Get Easy UI Premium
              <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* <div className="flex max-w-xl flex-row items-center justify-between text-balance p-5 text-left text-base tracking-tight text-black md:text-center md:text-base dark:font-medium dark:text-white">
          <span className="mr-2 font-300 text-gray-600 dark:text-gray-400 text-md">
            Trusted by
          </span>
          <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
        </div>         */}
          <motion.div 
            className="mx-auto my-10 flex flex-col items-center justify-center gap-4 md:mb-0 lg:mb-0 px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="animate-pulse text-lg font-semibold">Featured on</span>
            <div className="z-50 flex items-center justify-center gap-4">
              <a href="https://sourceforge.net/p/easy-ui/" className="dark:hidden">
                <motion.img 
                  alt="Download Easy UI" 
                  src="https://sourceforge.net/sflogo.php?type=17&amp;group_id=3785509" 
                  width="200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </a>
              <a href="https://sourceforge.net/p/easy-ui/" className="hidden dark:block">
                <motion.img 
                  alt="Download Easy UI" 
                  src="https://sourceforge.net/sflogo.php?type=18&amp;group_id=3785509" 
                  width="200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </a>
              <a href='https://www.saashub.com/easy-ui-pro?utm_source=badge&utm_campaign=badge&utm_content=easy-ui-pro&badge_variant=color&badge_kind=approved' target='_blank' rel="noreferrer">
                <img src="https://cdn-b.saashub.com/img/badges/approved-color.png?v=1" alt="Easy UI Pro badge" style={{ maxWidth: "130px" }} className="ml-5"/>
              </a>
            </div>
          </motion.div>
        <ShowcaseGrid />
        
        <MarqueeDemo />
      </div>

    
      <ROISection />
      <div className="lg:pt-20 mx-auto flex max-w-[58rem] flex-col items-center space-y-4 pt-12 text-center sm:pt-8">
        <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-3xl">
          Frequently asked questions
        </h2>
        <p className="max-w-[85%] pb-1 leading-normal text-muted-foreground sm:pb-1 sm:text-lg sm:leading-7 lg:pb-10">
          Get detailed answers to common inquiries.
        </p>
      </div>

      <div className="container my-10 flex max-w-[58rem] flex-col items-center justify-between gap-4 py-0 sm:my-0 md:my-0 lg:my-0">
        <FaqPage />
      </div>
      <CTASection />
      {/* <SiteFooter className="border-t" /> */}
     
    </section>
  )
}
