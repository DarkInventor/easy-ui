"use client";

import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'

function EzPage() {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-10">
         <div className="w-full sm:w-1/2 p-4 space-y-4 mt-5">
         <CardTitle className='text-4xl'>QuotesAI</CardTitle>
         <CardDescription className='text-lg'>Ready-to-use Micro-SaaS with built-in NextAuth support.</CardDescription>
         <Badge className="hidden sm:inline-block" variant="destructive">We are currently working on this boilerplate. It might contain some bugs in it. (Beta)</Badge>
         </div>
      <div className="w-full sm:w-1/2 p-4 border rounded-lg ">
        <video muted loop className="w-full h-auto" autoPlay>
          <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/quotesai.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="sm:w-1/2 p-4">       
        <div className="flex justify-between">
          <Button className="w-1/2 px-4 py-4 mr-2 " type="submit" onClick={() => {
              const link = document.createElement('a');
              link.href = 'https://github.com/DarkInventor/quotes-template/archive/refs/heads/main.zip';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }} >Download Template</Button>
          <Button className="w-1/2 px-4 py-4 border shadow-sm ml-2 hover:bg-accent hover:text-accent-foreground " variant= "outline" type="submit"  onClick={() => window.open('https://quotes-template.vercel.app/', '_blank')}>Live Preview<Icons.externalLink className="ml-1 p-1" /> </Button>
        </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold pt-10">Why Should I Use This Template?</h2>
        <p>This template is built specially for Indiehackers, Software Devs, and Software Entrepreneurs. Here’s why this template is perfect for you:</p>
        <ul className="list-disc pl-5 space-y-2 ">
          <li>✅ Save 150+ hours of work </li>
          <li>✅ No need to learn advanced animations</li>
          <li>✅ Built in Authentication</li>
          <li>✅ Easy to configure and change</li>
          <li>✅ 1-click download and setup</li>
          <li>✅ 5 minutes to update the text and images</li>
          <li>✅ Deploy live to Vercel</li>
          <li>Stripe Integration <Badge className="hidden sm:inline-block" variant="secondary">Coming Soon</Badge></li>
        </ul>
        <h3 className="text-xl font-semibold">Features</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Header Section</li>
          <li>Hero Section</li>
          <li>Authentication</li>
          <li>Social Proof Section</li>
          <li>Pricing Section</li>
          <li>Call To Action Section</li>
          <li>Footer Section</li>
          <li>Mobile Responsive Navbar</li>
          <li>Payment Gateway <Badge className="hidden sm:inline-block" variant="secondary">Coming Soon</Badge></li>
        </ul>
        <h3 className="text-xl font-semibold">Tech Stack</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Prisma</li>
          <li>NextAuth</li>         
          <li>Magic UI</li>
          <li>Shadcn UI</li>
          <li>Stripe</li>
          <li>Vecrel</li>        
        </ul>
        <h3 className="text-xl font-semibold">Quick Setup</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>1-Click Download and Setup: Get started instantly with our easy setup process.</li>
          <li>5 Minutes to Update: Quickly update text and images to match your brand.</li>
          <li>Deploy to Vercel: Easily deploy your site live with Vercel’s seamless integration.</li>
        </ul>
        <p>Get started today and bring your website to life with minimal effort and maximum impact!</p>
      </div>
      </div>
      
    </div>
     
  )
}

export default EzPage