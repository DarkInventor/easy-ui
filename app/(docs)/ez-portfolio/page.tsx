"use client"

import React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import AdBanner from "@/components/ad-banner"
import { Icons } from "@/components/icons"

function EzPortfolio() {
  return (
<div className="flex flex-wrap justify-center gap-4 pb-10 max-w-full min-w-full px-2 lg:px-20">
     <div className="w-full sm:w-2/3 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">Easy Portfolio</CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
          Portfolio template with Blog
        </CardDescription>
        {/* <Badge className="hidden sm:inline-block" variant="default">Built for people willing to integrate chatbot or develop AI app.</Badge> */}
      </div>
      
       <div className="lg:min-w-[900px] px-1 lg:px-2 sm:w-1/2 p-1 lg:p-2 ">
        <video muted loop className="w-full h-auto border lg:border-none rounded-lg lg:rounded-xl shadow-2xl" autoPlay>
          <source
            src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-portfolio.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    <div className="sm:w-1/2 p-1 flex-col flex lg:min-w-[900px]">
        <div className="flex justify-between">
        <Button
            className="w-1/2 px-0 py-4 mr-2 group"
            type="submit"
            onClick={() => window.open("https://premium.easyui.pro/pricing-section", "_blank")}
          >
            Buy Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide ml-1 lucide-arrow-right size-4 transition-all duration-300 ease-out group-hover:translate-x-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Button>
          <Button
            className="w-1/2 px-0 py-4 border shadow-sm ml-2 hover:bg-accent hover:text-accent-foreground"
            variant="outline"
            type="submit"
            onClick={() =>
              window.open("https://kathann.vercel.app/home", "_blank")
            }
          >
            Live Preview
            <Icons.externalLink className="ml-1 p-1" />{" "}
          </Button>
        </div>

        <div className="space-y-4 lg:min-w-full max-w-full flex-col">
          <h2 className="text-2xl font-bold pt-10 min-w-full max-w-full flex leading-7">
            Why Should I Use This Template?
          </h2>
          <p className="min-w-full max-w-full flex text-md tracking-tight font-[500] leading-7">
            This template is built using Next.js, Tailwind CSS, Headless UI, and
            MDX to showcase your projects, skills, and experiences in one place.
            Here’s why this template is perfect for you:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-md tracking-tight font-[500] mb-0 lg:pb-2 leading-7">
            <li>✅ Save your time</li>
            <li>✅ No need to learn advanced animations</li>
            <li>✅ Easy to configure and change</li>
            <li>✅ 1-click download and setup</li>
            <li>✅ 5 minutes to update the text and images</li>
            <li>✅ Deploy live to Vercel</li>
          </ul>
          {/* <h3 className="text-2xl font-semibold leading-7">Features</h3>
          <ul className="list-disc pl-5 space-y-2 text-md tracking-tight font-[500] leading-7">
            <li>Header Section</li>
            <li>Hero Section</li>
            <li>Pricing Section</li>
            <li>Call To Action Section</li>
            <li>Footer Section</li>
            <li>Mobile Responsive Navbar</li>
          </ul> */}
          <h3 className="text-2xl font-semibold leading-7">Tech Stack</h3>
          <div className="flex flex-wrap justify-start -m-2 dark:text-white leading-7">
            <div className="p-2"><Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-base py-0 px-4">React</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-base py-0 px-4">Next.js</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-base py-0 px-4">Tailwind CSS</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-base py-0 px-4">Shadcn UI</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-yellow-500 to-red-600 text-white text-base py-0 px-4">Headless UI</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-base py-0 px-4">MDX</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-gray-500 to-gray-700 text-white text-base py-0 px-4">Vercel</Badge></div>
          </div>
          <h3 className="text-2xl font-semibold leading-7">Quick Setup</h3>
          <ul className="list-disc pl-5 space-y-2 text-md tracking-tight font-[500] leading-7">
            <li>
              1-Click Download and Setup: Get started instantly with our easy
              setup process.
            </li>
            <li>
              5 Minutes to Update: Quickly update text and images to match your
              brand.
            </li>
            <li>
              Deploy to Vercel: Easily deploy your site live with Vercel’s
              seamless integration.
            </li>
          </ul>
          <p className="leading-7 tracking-tight pt-0 lg:pt-5">
            Get started today and bring your website to life with minimal effort
            and maximum impact!
          </p>
        </div>
        <div className="text-center mt-8">
          <p className="text-md text-gray-600 dark:text-white">
            Credits to{" "}
            <a
              href="https://www.linkedin.com/in/victoria-jordan01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-white font-bold hover:underline"
            >
              Victoria Jordan{" "}
            </a>
            for this fantastic template.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EzPortfolio
