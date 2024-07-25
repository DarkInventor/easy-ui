"use client";

import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import React from 'react'

function EzDocs() {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-10">
         <div className="w-full sm:w-1/2 p-4 space-y-4 mt-5">
         <CardTitle className='text-4xl'>Easy Dashboard</CardTitle>
         <CardDescription className='text-lg'>Simple dashboard built using Shadcn charts</CardDescription>
         <Badge className="hidden sm:inline-block bg-green-500 text-white" variant="default">Our personal fav for building simple Dashboards ❤️</Badge>
         </div>
      <div className="w-full sm:w-1/2 p-4 border rounded-lg ">
        <video muted loop className="w-full h-auto" autoPlay>
          <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-dashboard.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="sm:w-1/2 p-4">       
        <div className="flex justify-between">
          <Button className="w-1/2 px-4 py-4 mr-2 " type="submit" onClick={() => {
              const link = document.createElement('a');
              link.href = 'https://github.com/DarkInventor/easy-dashboard/archive/refs/heads/main.zip';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }} >Download Template</Button>
          <Button className="w-1/2 px-4 py-4 border shadow-sm ml-2 hover:bg-accent hover:text-accent-foreground " variant= "outline" type="submit"  onClick={() => window.open('https://easy-dashboard-three.vercel.app/', '_blank')}>Live Preview<Icons.externalLink className="ml-1 p-1" /> </Button>
        </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold pt-10">Why Should I Use This Template?</h2>
        <p>Looking for a simple yet powerful dashboard to jumpstart your project? Easy Dashboard template is designed with the Shadcn Charts, Radix UI and Rechart. It has latest tech stack, offering a sleek, modern design that’s easy to use and configure. Here’s why this template is perfect for you:</p>
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
          <li>Shadcn UI/Shadcn Charts</li>
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

export default EzDocs