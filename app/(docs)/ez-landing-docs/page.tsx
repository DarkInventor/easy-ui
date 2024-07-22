"use client";

import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'

function EzNextUI() {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-10">
         <div className="w-full sm:w-1/2 p-4 space-y-4 mt-5">
         <CardTitle className='text-4xl'>Easy Landing Docs</CardTitle>
         <CardDescription className='text-lg'>High Quality template with Landing Page and Documentation Section</CardDescription>
         <Badge className="hidden sm:inline-block" variant="green">Aceternity UI + Shadcn UI Combo</Badge>
         </div>
      <div className="w-full sm:w-1/2 p-4 border rounded-lg ">
        <video muted loop className="w-full h-auto" autoPlay>
          <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-landing-docs.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="sm:w-1/2 p-4">       
        <div className="flex justify-between">
          <Button className="w-1/2 px-4 py-4 mr-2 " type="submit" onClick={() => {
              const link = document.createElement('a');
              link.href = 'https://github.com/DarkInventor/easy-landing-docs/archive/refs/heads/main.zip';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }} >Download Template</Button>
          <Button className="w-1/2 px-4 py-4 border shadow-sm ml-2 hover:bg-accent hover:text-accent-foreground " variant= "outline" type="submit"  onClick={() => window.open('https://easy-landing-docs.vercel.app/', '_blank')}>Live Preview<Icons.externalLink className="ml-1 p-1" /> </Button>
        </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold pt-10">Why Should I Use This Template?</h2>
        <p>This template is built specially for Aceternity UI Lovers ❤️, UI/Component or Any Libary Builders, Indiehackers, Software Devs, and Software Entrepreneurs. Here’s why this template is perfect for you:</p>
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
          <li>Aceternity UI</li>
          <li>Shadcn UI</li>
          <li>Framer Motion</li>
          <li>Vercel</li>        
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

export default EzNextUI