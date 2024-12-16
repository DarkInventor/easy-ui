"use client"

import React from "react"
import Link from "next/link"
import { Check, ChevronDown, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

export default function EzGlow() {
  const features = [
    "Header Section",
    "Hero Section",
    "Social Proof Section",
    "Pricing Section",
    "Call To Action Section",
    "Footer Section",
    "Mobile Responsive Navbar",
  ]

  const techStack = [
    { name: "Next.js", version: "v14" },
    { name: "React", version: "v18.3" },
    { name: "TypeScript", version: "v5" },
    { name: "TailwindCSS", version: "v3.4" },
    { name: "Framer Motion", version: "v11.3" },
    { name: "next-themes", version: "v0.3" },
    { name: "Magic UI", version: "Latest" },
    { name: "Shadcn UI", version: "Latest" },
    // { name: "Supabse", version: "Latest" },
    // { name: "Stripe", version: "Latest" },
    // { name: "FumaDocs", version: "Latest" },
    // { name: "Crisp", version: "Latest" },
  ]

  return (
    <div className="container mx-auto px-4 py-8 lg:max-w-[65%]">
      <Card className="mb-0 border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Easy Glow</CardTitle>
          <CardDescription className="text-xl">
            Template for Startups
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video mb-6">
            <video
              className="w-full h-full object-cover rounded-lg shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-glow.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="sm:w-1/2 p-1 flex-col flex lg:min-w-[900px]">
            <div className="flex justify-between">
              <Button
                className="w-1/2 px-0 py-4 mr-2 group"
                type="submit"
                onClick={() =>
                  window.open(
                    "https://premium.easyui.pro/pricing-section",
                    "_blank"
                  )
                }
              >
                Buy Now <Icons.externalLink className="ml-1 p-1" />
              </Button>
              <Button
                className="flex-1"
                variant="outline"
                onClick={() =>
                  window.open("https://easy-glow.vercel.app/", "_blank")
                }
              >
                Live Preview
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4 border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Why Should I Use This Template?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            A beautiful yet effective template for your project. This Landing
            Page Template is designed to be practical and easy to use, featuring
            a clean design and animations that are simple to implement.
            
          
          </p>
          <span className="mt-4">This template is built with the latest tech stack, offering a sleek,
            modern design that&apos;s easy to use and configure. Here&apos;s why this
            template is perfect for you:</span>
          <ul className="list-none space-y-2 mb-0 mt-4">
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Save 100+ hours of work
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              No need to learn advanced animations
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Easy to configure and change
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              One-click download and setup
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />5 minutes to
              update the text and images
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-5 w-5 text-green-500" />
              Deploy live to Vercel
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8 border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Tech Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span className="font-medium">{tech.name}</span>
                <span className="text-sm text-muted-foreground">
                  {tech.version}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-none mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">All Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Quick Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              One-Click Download and Setup: Get started instantly with our easy
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
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
