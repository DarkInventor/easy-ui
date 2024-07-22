"use client"

import React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

function EzPortfolio() {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-10">
      <div className="w-full sm:w-1/2 p-4 space-y-4 mt-5">
        <CardTitle className="text-4xl">Easy Portfolio</CardTitle>
        <CardDescription className="text-lg">
          Portfolio template with Blog
        </CardDescription>
        {/* <Badge className="hidden sm:inline-block" variant="default">Built for people willing to integrate chatbot or develop AI app.</Badge> */}
      </div>
      <div className="w-full sm:w-1/2 p-4 border rounded-lg ">
        <video muted loop className="w-full h-auto" autoPlay>
          <source
            src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-portfolio.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="sm:w-1/2 p-4">
        <div className="flex justify-between">
          <Button
            className="w-1/2 px-4 py-4 mr-2 "
            type="submit"
            onClick={() => {
              const link = document.createElement("a")
              link.href =
                "https://github.com/DarkInventor/easy-portfolio/archive/refs/heads/main.zip"
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }}
          >
            Download Template
          </Button>
          <Button
            className="w-1/2 px-4 py-4 border shadow-sm ml-2 hover:bg-accent hover:text-accent-foreground"
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

        <div className="space-y-4">
          <h2 className="text-2xl font-bold pt-10">
            Why Should I Use This Template?
          </h2>
          <p>
            This template is built using Next.js, Tailwind CSS, Headless UI, and
            MDX to showcase your projects, skills, and experiences in one place.
            Here’s why this template is perfect for you:
          </p>
          <ul className="list-disc pl-5 space-y-2 ">
            <li>✅ Save your time</li>
            <li>✅ No need to learn advanced animations</li>
            <li>✅ Easy to configure and change</li>
            <li>✅ 1-click download and setup</li>
            <li>✅ 5 minutes to update the text and images</li>
            <li>✅ Deploy live to Vercel</li>
          </ul>
          {/* <h3 className="text-xl font-semibold">Features</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Header Section</li>
          <li>Hero Section</li>
          <li>Social Media Section</li>
          <li>Call To Action Section</li>
          <li>Mobile Responsive </li>
        </ul> */}
          <h3 className="text-xl font-semibold">Tech Stack</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Headless UI</li>
            <li>MDX</li>
            <li>Vercel</li>
          </ul>
          <h3 className="text-xl font-semibold">Project Structure</h3>
          <ul className="list-disc space-y-2">
            <li className="flex items-start space-x-2">
              <span className="inline-block px-2 py-1 text-sm font-mono text-gray-800 bg-gray-100 rounded-full">
                /pages
              </span>
              <span>
                Contains Next.js pages including the updated meta tags.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="inline-block px-2 py-1 text-sm font-mono text-gray-800 bg-gray-100 rounded-full">
                /components
              </span>
              <span>Houses reusable React components for the website.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="inline-block px-2 py-1 text-sm font-mono text-gray-800 bg-gray-100 rounded-full">
                /images
              </span>
              <span>Stores images used in the portfolio.</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="inline-block px-2 py-1 text-sm font-mono text-gray-800 bg-gray-100 rounded-full">
                /styles
              </span>
              <span>
                Contains Tailwind CSS configuration and utility classes.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="inline-block px-2 py-1 text-sm font-mono text-gray-800 bg-gray-100 rounded-full">
                /lib
              </span>
              <span>
                Includes additional libraries or utilities for the project.
              </span>
            </li>
          </ul>

          <h3 className="text-xl font-semibold">Quick Setup</h3>
          <ul className="list-disc pl-5 space-y-2">
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
          <p>
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
