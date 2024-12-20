// "use client"

// import React from "react"

// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardDescription, CardTitle } from "@/components/ui/card"
// import { Icons } from "@/components/icons"
// import AdBanner from "@/components/ad-banner"
// import { Check } from "lucide-react"

// function EzPremium() {
//   return (
//     <div className="flex flex-wrap justify-center gap-4 pb-10 max-w-full min-w-full px-0 lg:px-20">
//       <div className="w-full sm:w-2/3 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
//         <CardTitle className="text-3xl tracking-tight leading-7">Easy Premium</CardTitle>
//         <CardDescription className="text-balance text-lg text-muted-foreground">
//         Pre-built Boilerplate with Supabase, stripe, magic ui and more.
//         </CardDescription>
//       </div>
      
//        <div className="lg:min-w-[900px] px-1 lg:px-2 sm:w-1/2 p-1 lg:p-2 ">
//         <video muted loop className="w-full h-auto border lg:border-none rounded-lg lg:rounded-xl shadow-2xl" autoPlay>
//           <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-premium.mp4" type="video/mp4" />
//         </video>
//       </div>
//     <div className="sm:w-1/2 p-1 flex-col flex lg:min-w-[900px]">
//         <div className="flex justify-between">
//           <Button
//             className="w-1/2 px-0 py-4 mr-2 group"
//             onClick={() => {
//               const link = document.createElement('a');
//               link.href = 'https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easyui-premium-main.zip';
//               document.body.appendChild(link);
//               link.click();
//               document.body.removeChild(link);
//             }}
//           >
//             Download Template
//           </Button>
//           <Button
//             className="w-1/2 px-0 py-4 border shadow-sm ml-2 hover:bg-accent hover:text-accent-foreground"
//             variant="outline"
//             type="submit"
//             onClick={() =>
//               window.open("https://premium.easyui.pro/", "_blank")
//             }
//           >
//             Live Preview
//             <Icons.externalLink className="ml-1 p-1" />{" "}
//           </Button>
//         </div>

//         <div className="space-y-4 lg:min-w-full max-w-full flex-col">
//           <h2 className="text-2xl font-bold pt-10 min-w-full max-w-full flex leading-7">
//             Why Should I Use This Template?
//           </h2>
//           <p className="min-w-full max-w-full flex text-md tracking-tight font-[500] leading-7">
//           Looking for a simple yet powerful boilerplate to build a modern app (with features like supabase authentication, stripe payments, FumaDocs MDX Documentation, API routes, static pages for docs ...etc) would work in Next.js and server components.
//           <br />
//           This boilerplate is built with the latest tech stack, offering a sleek, modern design that’s easy to use and configure. Here’s why this template is perfect for you:
//           </p>
//           <ul className="list-disc pl-5 space-y-2 text-md tracking-tight font-[500] mb-0 lg:pb-2 leading-7">
//             <li>✅ Save 100+ hours of work</li>
//             <li>✅ No need to learn advanced animations</li>
//             <li>✅ Easy to configure and change</li>
//             <li>✅ 1-click download and setup</li>
//             <li>✅ 5 minutes to update the text and images</li>
//             <li>✅ Deploy live to Vercel</li>
//           </ul>
//           <h3 className="text-2xl font-semibold leading-7">Tech Stack</h3>
//           {/* <div className="flex flex-wrap justify-start -m-2 dark:text-white leading-7">
//             <div className="p-2"><Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-base py-0 px-4">React</Badge></div>
//             <div className="p-2"><Badge className="bg-gradient-to-r from-green-500 to-blue-600 text-white text-base py-0 px-4">Next.js</Badge></div>
//             <div className="p-2"><Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-base py-0 px-4">Tailwind CSS</Badge></div>
//             <div className="p-2"><Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-base py-0 px-4">Daisy UI</Badge></div>
//             <div className="p-2"><Badge className="bg-gradient-to-r from-yellow-500 to-red-600 text-white text-base py-0 px-4">Framer Motion</Badge></div>
//             <div className="p-2"><Badge className="bg-gradient-to-r from-gray-500 to-gray-700 text-white text-base py-0 px-4">Vercel</Badge></div>
//           </div> */}
//            <div className=" mx-auto pb-3 px-0">
//       <div className="space-y-6">
//         {/* <h2 className="text-3xl font-bold tracking-tight">
//           Built with the latest technologies
//         </h2> */}
        
//         <p className="text-gray-500 dark:text-gray-400 text-lg">
//           This template is built with the latest technologies and best practices in mind.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
//           <div className="flex items-center space-x-3">
//             <div className="flex-shrink-0">
//               <Check className="h-5 w-5 text-green-500" />
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="text-base font-medium">Next.js</span>
//               <span className="text-sm text-gray-500 dark:text-gray-400">v14</span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-3">
//             <div className="flex-shrink-0">
//               <Check className="h-5 w-5 text-green-500" />
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="text-base font-medium">React</span>
//               <span className="text-sm text-gray-500 dark:text-gray-400">v18.3</span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-3">
//             <div className="flex-shrink-0">
//               <Check className="h-5 w-5 text-green-500" />
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="text-base font-medium">TypeScript</span>
//               <span className="text-sm text-gray-500 dark:text-gray-400">v5</span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-3">
//             <div className="flex-shrink-0">
//               <Check className="h-5 w-5 text-green-500" />
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="text-base font-medium">TailwindCSS</span>
//               <span className="text-sm text-gray-500 dark:text-gray-400">v3.4</span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-3">
//             <div className="flex-shrink-0">
//               <Check className="h-5 w-5 text-green-500" />
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="text-base font-medium">Framer Motion</span>
//               <span className="text-sm text-gray-500 dark:text-gray-400">v11.3</span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-3">
//             <div className="flex-shrink-0">
//               <Check className="h-5 w-5 text-green-500" />
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="text-base font-medium">next-themes</span>
//               <span className="text-sm text-gray-500 dark:text-gray-400">v0.3</span>
//             </div>
//           </div>

//           {/* <div className="flex items-center space-x-3">
//             <div className="flex-shrink-0">
//               <Check className="h-5 w-5 text-green-500" />
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="text-base font-medium">radix-ui</span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-3">
//             <div className="flex-shrink-0">
//               <Check className="h-5 w-5 text-green-500" />
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="text-base font-medium">shadcn/ui</span>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//           <h3 className="text-2xl font-semibold leading-7">Quick Setup</h3>
//           <ul className="list-disc pl-5 space-y-2 text-md tracking-tight font-[500] leading-7">
//             <li>
//               1-Click Download and Setup: Get started instantly with our easy setup process.
//             </li>
//             <li>
//               5 Minutes to Update: Quickly update text and images to match your brand.
//             </li>
//             <li>
//               Deploy to Vercel: Easily deploy your site live with Vercel’s seamless integration.
//             </li>
//           </ul>
//           <p className="leading-7 tracking-tight pt-0 lg:pt-5">
//             Get started today and bring your website to life with minimal effort and maximum impact!
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default EzPremium


"use client";

import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronDown, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Icons } from "@/components/icons"

export default function EzPremium() {
  const features = [
    "Landing Page with 14+ sections",
    "Header Section",
    "Hero Section",
    "Logos Section",
    "Featured Section",
    "Showcase Section",
    "Testimonial Highlight Section",
    "Templates Section",
    "Testimonials Section",
    "Pricing Section",
    "FAQ Section",
    "CTA Section",
    "Footer Section",
    "Authentication + Stripe + Crisp",
    "Supabase Authentication",
    "Crisp Integration",
    "Stripe Payment",
    "PostgreSQL Database",
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
    { name: "Supabse", version: "Latest" },
    { name: "Stripe", version: "Latest" },
    { name: "FumaDocs", version: "Latest" },
    { name: "Crisp", version: "Latest" },
  ]

  return (
    <div className="container mx-auto px-4 py-8 lg:max-w-[65%]">
      <Card className="mb-0 border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Easy Premium</CardTitle>
          <CardDescription className="text-xl">
            Pre-built Boilerplate with Supabase, Stripe, Magic UI and more.
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
              <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-premium.mp4" type="video/mp4" />
              Your browser does not support the video tag.
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
              className="flex-1"
              variant="outline"
              onClick={() => window.open("https://premium.easyui.pro/", "_blank")}
            >
              Live Preview
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Why Should I Use This Template?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Looking for a simple yet powerful boilerplate to build a modern app (with features like Supabase authentication, Stripe payments, FumaDocs MDX Documentation, API routes, static pages for docs, etc.) that would work in Next.js and server components? This boilerplate is built with the latest tech stack, offering a sleek, modern design that&apos;s easy to use and configure.
          </p>
          <ul className="list-none space-y-2 mb-4">
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
              <Check className="mr-2 h-5 w-5 text-green-500" />
              5 minutes to update the text and images
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
                <span className="text-sm text-muted-foreground">{tech.version}</span>
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
            <li>One-Click Download and Setup: Get started instantly with our easy setup process.</li>
            <li>5 Minutes to Update: Quickly update text and images to match your brand.</li>
            <li>Deploy to Vercel: Easily deploy your site live with Vercel&apos;s seamless integration.</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}