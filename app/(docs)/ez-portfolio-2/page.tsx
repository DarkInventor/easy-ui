"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import AdBanner from "@/components/ad-banner"
import { Icons } from "@/components/icons"
import Link from "next/link"

const EzPortfolioII = () => {
  return (
    <div className="flex min-w-full max-w-full flex-wrap justify-center gap-4 px-2 pb-10 lg:px-20">
     <div className="md:lg-5 mt-3 w-full space-y-4 p-2 sm:w-2/3 lg:mt-5">
        <CardTitle className="text-3xl leading-7 tracking-tight">Easy Portfolio Ⅱ</CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
          Portfolio template
        </CardDescription>
      </div>

       <div className="p-1 sm:w-1/2 lg:min-w-[900px] lg:p-2 ">
        <video muted loop className="h-auto w-full rounded-lg border shadow-2xl lg:rounded-xl lg:border-none" autoPlay>
          <source
            src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-portfolio-2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    <div className="flex flex-col p-1 sm:w-1/2 lg:min-w-[900px]">
        <div className="flex justify-between">
        <Button
            className="group mr-2 w-1/2 rounded-xl px-0 py-4"
            asChild
          >
            <Link href="https://github.com/adel-gu/my-website/archive/refs/heads/main.zip" target="_blank">
              Download Template <Icons.externalLink className="ml-1 p-1" />
            </Link>
          </Button>
          <Button
            className="ml-2 w-1/2 rounded-xl border px-0 py-4 shadow-sm hover:bg-accent hover:text-accent-foreground"
            variant="outline"
            asChild
          >
            <Link href="https://www.adelguitoun.com/" target="_blank">
              Live Preview
              <Icons.externalLink className="ml-1 p-1" />{" "}
            </Link>
          </Button>
        </div>

        <div className="max-w-full flex-col space-y-4 lg:min-w-full">
          <h2 className="flex min-w-full max-w-full pt-10 text-2xl font-bold leading-7">
            Why Should I Use This Template?
          </h2>
          <p className="text-md flex min-w-full max-w-full font-[500] leading-7 tracking-tight">
            This template is built using Next.js, Tailwind CSS, and Magic UI to showcase your projects, skills, testimonials, and experiences in one place.
            Here&apos;s why this template is perfect for you:
          </p>
          <ul className="text-md mb-0 list-disc space-y-2 pl-5 font-[500] leading-7 tracking-tight lg:pb-2">
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
          <div className="-m-2 flex flex-wrap justify-start leading-7 dark:text-white">
            <div className="p-2"><Badge className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-0 text-base text-white">React</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-green-500 to-blue-600 px-4 py-0 text-base text-white">Next.js</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-0 text-base text-white">Tailwind CSS</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-0 text-base text-white">Shadcn UI</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-yellow-500 to-red-600 px-4 py-0 text-base text-white">Magic UI</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-gray-500 to-gray-700 px-4 py-0 text-base text-white">Vercel</Badge></div>
          </div>
          <h3 className="text-2xl font-semibold leading-7">Quick Setup</h3>
          <ul className="text-md list-disc space-y-2 pl-5 font-[500] leading-7 tracking-tight">
            <li>
              1-Click Download and Setup: Get started instantly with our easy
              setup process.
            </li>
            <li>
              5 Minutes to Update: Quickly update text and images to match your
              brand.
            </li>
            <li>
              Deploy to Vercel: Easily deploy your site live with Vercel&apos;s
              seamless integration.
            </li>
          </ul>
          <p className="pt-0 leading-7 tracking-tight lg:pt-5">
            Get started today and bring your website to life with minimal effort
            and maximum impact!
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="text-md text-gray-600 dark:text-white">
            Credits to{" "}
            <a
              href="https://www.linkedin.com/in/adelguitoun/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gray-500 hover:underline dark:text-white"
            >
              Adel Guitoun{" "}
            </a>
            for this fantastic template.
          </p>
        </div>
      </div>
    </div>
  )
}
export default EzPortfolioII