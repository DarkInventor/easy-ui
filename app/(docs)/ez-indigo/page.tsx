"use client"

import React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import AdBanner from "@/components/ad-banner"

function EzIndigo() {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-10 max-w-full min-w-full px-2 lg:px-20">
     <div className="w-full sm:w-2/3 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">Easy Indigo</CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
            Indigo Gradient template.
        </CardDescription>
      </div>
      
      <div className="lg:min-w-[900px] px-1 lg:px-2 sm:w-1/2 p-1 lg:p-2 ">
        <video muted loop className="w-full h-auto border lg:border-none rounded-lg lg:rounded-xl shadow-2xl" autoPlay>
          <source
            src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-indigo.mp4"
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
            Buy Now <Icons.externalLink className="ml-1 p-1" />
          </Button>
          <Button
            className="w-1/2 px-0 py-4 border shadow-sm ml-2 hover:bg-accent hover:text-accent-foreground"
            variant="outline"
            type="submit"
            onClick={() =>
              window.open("https://easy-indigo.vercel.app/", "_blank")
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
            Looking for a simple yet beautiful website template to jumpstart your
            project? Our template is designed with the latest tech stack,
            offering a sleek, modern design that’s easy to use and configure.
            Here’s why this template is perfect for you:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-md tracking-tight font-[500] mb-0 lg:pb-2 leading-7">
            <li>✅ Save 100+ hours of work </li>
            <li>✅ No need to learn advanced animations</li>
            <li>✅ Easy to configure and change</li>
            <li>✅ 1-click download and setup</li>
            <li>✅ 5 minutes to update the text and images</li>
            <li>✅ Deploy live to Vercel</li>
          </ul>
          <h3 className="text-2xl font-semibold leading-7">Features</h3>
          <ul className="list-disc pl-5 space-y-2 text-md tracking-tight font-[500] leading-7">            
            <li>Hero Section</li>
            <li>Image Section</li>
            <li>2x Features Section</li>
            <li>Testimonial Section</li>
            <li>About Section</li>
            <li>Stats Section</li>
            <li>CTA Section</li>
            <li>Footer Section</li>
            <li>Mobile Responsive</li>
          </ul>
          <h3 className="text-2xl font-semibold leading-7">Tech Stack</h3>
          <div className="flex flex-wrap justify-start -m-2 dark:text-white leading-7">
            <div className="p-2"><Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-base py-0 px-4">React</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-base py-0 px-4">Next.js</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-base py-0 px-4">Tailwind CSS</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-base py-0 px-4">Aceternity UI</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-gray-500 to-gray-700 text-white text-base py-0 px-4">Shadcn UI</Badge></div>
            <div className="p-2"><Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-base py-0 px-4">Framer Motion</Badge></div>
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
              href="https://github.com/zouyuekun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-white font-bold hover:underline"
            >
              zouyuekun{" "}
            </a>
            for the fantastic hero section.
          </p>
        </div>
      </div>
     
    </div>
  )
}

export default EzIndigo
