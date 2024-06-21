"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
// import MarqueeDemo from "./testimonials/page"
import { Footer } from "react-day-picker"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
// import { buttonVariants } from "@/registry/new-york/ui/button"
// import MailPage from "@/app/(app)/examples/mail/page"
import { buttonVariants } from "@/components/ui/button"
import { Announcement } from "@/components/announcement"
// import { Announcement } from "@/components/announcement"
// import { ExamplesNav } from "@/components/examples-nav"
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

import FaqPage from "./faqs/page"
import Features from "./features/page"
import OrbitingCirclesDemo from "./integrations/page"
// import  { SiteFooter }  from "../components/site-footer"
import PricingPage from "./pricing/page"
import MarqueeDemo from "./testimonials/page"
import { SiteHeader } from "@/components/site-header"
import CTASection from "@/components/cta-section"

// Corrected the path for FAQPage import

export default function IndexPage() {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ]
  return (
    // <div className="container relative overflow-hidden">
    <section id="hero">
      {/* <SiteHeader /> */}
      {/* <div className="relative min-h-screen overflow-hidden py-0 sm:py-0 md:py-0 lg:py-5"> */}
        {/* <div className="z-10 flex flex-col"> */}
          {/* <div > */}
            <div className="flex flex-col items-start gap-6 mt-20 px-7 text-center md:items-center pb-0 lg:pb-14 md:pb-14 sm:pb-0">
              <Announcement />             
               <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                <h1 className="relative mx-0 max-w-[43.5rem] text-balance bg-gradient-to-br from-black from-50% to-neutral-200/60 bg-clip-text pt-5 text-left text-5xl font-semibold tracking-tighter text-transparent sm:text-7xl md:mx-auto md:px-4 md:py-2 md:text-center md:text-7xl lg:text-7xl dark:text-white">
                  Templates  
                  for Web
               Designers
                </h1>
                <span className="text-neutral-90 absolute -top-3.5 left-0 z-10 rotate-3 whitespace-nowrap rounded-full bg-neutral-800 px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white md:top-12 md:-rotate-12">
                  100% high-quality
                </span>
              </div>
              <p className="max-w-xl text-balance text-left text-base tracking-tight text-black md:text-center md:text-lg dark:font-medium dark:text-white">
                50+ free and animated templates built with{" "}
                <span className="font-bold text-black dark:text-white">
                  React
                </span>
                ,{" "}
                <span className="font-bold text-black dark:text-white">
                  Typescript
                </span>
                ,{" "}
                <span className="font-bold text-black dark:text-white">
                  Tailwind CSS
                </span>
                ,{" "}
                <span className="font-bold text-black dark:text-white">
                  Magic-UI
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
                    href="/components"
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
                    href="/docs"
                    // eslint-disable-next-line tailwindcss/no-contradicting-classname
                    className={cn(
                      buttonVariants({
                        size: "lg",
                        variant: "outline",
                      }),
                      "gap-2 whitespace-pre md:flex",
                      "group relative w-full gap-1 overflow-hidden rounded-full text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-black dark:hover:ring-offset-black "
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

              {/* <div className="relative hidden rounded-xl lg:block">
                <img
                  src="/dashboard-dark.png"
                  alt="Hero Image"
                  className="hidden max-w-[1200px] rounded-[inherit] border object-contain shadow-lg dark:block"
                />
                <img
                  src="/dashboard-light.png"
                  alt="Hero Image"
                  className="block max-w-[1200px] rounded-[inherit] border object-contain shadow-lg dark:hidden"
                />

                <BorderBeamm size={250} duration={12} delay={9} />
                {/* <Features /> */}
              {/* </div> */} 

              {/* <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 pt-20 text-center">
                <h2 className="font-heading font-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold">
                  Features
                </h2>
                <p className="text-muted-foreground max-w-[85%] leading-normal sm:text-lg sm:leading-7">
                  This project is an experiment to see how a modern app, with
                  features like auth, subscriptions, API routes, and static
                  pages would work in Next.js 13 app dir.
                </p>
              </div> */}

              {/* <div className="container relative mx-auto mt-32 w-full max-w-[1000px]">
                <motion.span
                  animate={["initial"]}
                  whileHover={["hover"]}
                  variants={{
                    hover: {
                      scale: 1.1,
                      rotate: -6,
                      transition: {
                        duration: 0.2,
                      },
                    },
                    initial: {
                      y: [-8, 8],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    },
                  }}
                  className="absolute -top-16 left-0 right-auto cursor-pointer lg:-top-20"
                >
                  <span className="flex items-center">
                    <span className="mt-3 inline-block whitespace-nowrap rounded-full bg-neutral-800 px-4 py-1.5 text-[12px] font-semibold uppercase leading-5 tracking-wide text-white">
                      Features
                    </span>
                    <svg
                      className="mr-6 h-8 w-14 [transform:rotateY(180deg)rotateX(0deg)]"
                      width="45"
                      height="25"
                      viewBox="0 0 45 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                        fill="currentColor"
                        className="fill-gray-300 dark:fill-gray-700"
                      />
                    </svg>
                  </span>
                </motion.span>
                {/* </div>
              <div className="relative h-full overflow-hidden md:py-50"> */}
                {/* <Features />

                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 pt-20 text-center">
                  <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold">
                    Integrations
                  </h2>
                  <p className="text-muted-foreground max-w-[85%] pb-10 leading-normal sm:text-lg sm:leading-7">
                    Master Integration Like Pros
                  </p>
                  <OrbitingCirclesDemo />
                </div>
              </div>
            </div> */} 
            {/* <div className="mx-auto flex max-w-full flex-col items-center space-y-4 text-center pt-20">
                  <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Don't take our word for it
                  </h2>
                  <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 pb-10">
                    Hear what our satisfied customers have to say about us.
                  </p> */}
            <MarqueeDemo />
            </div>
            {/* <PricingPage /> */}

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
              {/* <SiteFooter /> */}
              
            </div>
            <CTASection />
            
            
            {/* <div className="container my-0 sm:my-0 lg:my-0 md:my-0 flex max-w-[58rem] flex-col items-center justify-between gap-4 py-0"> */}
              {/* <SiteFooter className="border-t" /> */}
            {/* </div> */}
            
          {/* </div> */}
          
        {/* </div> */}

        {/* <div className="container flex flex-col items-center justify-between gap-4  md:h-24 md:flex-row md:py-0"> */}
        {/* <hr /> */}

        {/* </div> */}
      {/* </div> */}
      
    </section>
    

  )
}
