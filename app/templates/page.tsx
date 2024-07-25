"use client";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import {
  MagicCard,
  MagicContainer,
} from "@/components/magicui/magic-card";
import SparklesText from "@/components/magicui/sparkles-text";
import Link from "next/link";

export default function TemplatePage() {
  // Function to handle video play
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video');
    if (video) video.play();
  };

  // Function to handle video pause
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video');
    if (video) video.pause();
  };

  return (
    <MagicContainer
      className="flex h-auto min-h-[500px] w-full flex-wrap gap-4 px-3 lg:px-10 sm:px-2 md:px-10 mt-10 justify-center items-center pb-0 lg:pb-10 md:pb-20 sm:pb-20 mb-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full text-center item-center justify-center">
      {/* <Link href="/ez-tmp"> */}
          <MagicCard
            className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"  
            onClick={() => window.location.href='/ez-tmp'}
             onMouseEnter={handleMouseEnter} // Add this line
            onMouseLeave={handleMouseLeave} // And this line
          >
            <div className="sm:hidden">
              <img src="/eztmp1-img.png" alt="Easy Template" className="w-full h-auto" />
            </div>
            <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
              <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/eztmp1.mp4" type="video/mp4" />
            </video>
            <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">Easy Template</h2>
            <p className="text-base text-gray-600 dark:text-gray-400">Template suitable for SaaS Products</p>
          </MagicCard>
          {/* </Link> */}
        {/* </a> */}
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"  
          onClick={() => window.location.href='/designfast'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="sm:hidden">
            <img src="/designfast-img.png" alt="Designfast" className="w-full h-auto" />
          </div>
          <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
            <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/designfast.mp4" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">Designfast</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Minimal template designed for Service business</p>
        </MagicCard>
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"  
          onClick={() => window.location.href='/quotesai'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="sm:hidden">
            <img src="/quotesai-img.png" alt="QuotesAI" className="w-full h-auto" />
          </div>
          <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
            <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/quotesai.mp4" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">QuotesAI</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Ready-to-use Micro SaaS template with NextAuth built-in. Stripe Coming soon.</p>
        </MagicCard>
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"  
          onClick={() => window.location.href='/retro'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="sm:hidden">
            <img src="/retro.png" alt="QuotesAI" className="w-full h-auto" />
          </div>
          <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
            <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/retro.mp4" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">Retro</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Retro themed Template</p>
        </MagicCard>
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"  
          onClick={() => window.location.href='/ez-waitlist'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="sm:hidden">
            <img src="/easy-waitlist.png" alt="EasyWaitlist" className="w-full h-auto" />
          </div>
          <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
            <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-waitlist.mp4" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">Easy Waitlist</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Waitlist Page for pre-launching product or to find PMF</p>
        </MagicCard>
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"  
          onClick={() => window.location.href='/ez-chatbot'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="sm:hidden">
            <img src="/easy-chatbot.png" alt="EasyWaitlist" className="w-full h-auto" />
          </div>
          <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
            <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-chatbot.mp4" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">Easy Chatbot</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Ready-to-integrate Chatbot Template</p>
        </MagicCard>
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"  
          onClick={() => window.location.href='/ez-docs'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="sm:hidden">
            <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/Screenshot%202024-07-16%20at%2010.13.43%E2%80%AFAM.png" alt="EasyWaitlist" className="w-full h-auto" />
          </div>
          <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
            <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/EasyDocs.mp4" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">Easy Docs</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Simplest implementation of Fumadocs</p>
        </MagicCard>
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"  
          onClick={() => window.location.href='/ez-nextui'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="sm:hidden">
            <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/Screenshot%202024-07-18%20at%201.35.27%E2%80%AFPM.png" alt="EasyWaitlist" className="w-full h-auto" />
          </div>
          <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
            <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-nextui.mp4" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">Easy NextUI</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Landing page built using NextUI</p>
        </MagicCard>
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"  
          onClick={() => window.location.href='/ez-portfolio'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="sm:hidden">
            <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/Screenshot%202024-07-19%20at%203.33.40%E2%80%AFAM.png" alt="EasyWaitlist" className="w-full h-auto" />
          </div>
          <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
            <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-portfolio.mp4" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">Easy Portfolio</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Portfolio template with Blog</p>
        </MagicCard>
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"  
          onClick={() => window.location.href='/ez-landing-docs'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="sm:hidden">
            <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-landing-docs.png" alt="EasyWaitlist" className="w-full h-auto" />
          </div>
          <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
            <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-landing-docs.mp4" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">Easy Landing Docs</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Landing page with docs</p>
        </MagicCard>
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-6 lg:p-10 sm:p-0 md:p-10 shadow-2xl"  
          onClick={() => window.location.href='/ez-dashboard'}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="sm:hidden">
            <img src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/easy-dashboard.png" alt="EasyWaitlist" className="w-full h-auto" />
          </div>
          <video muted loop className="hidden sm:block sm:w-[90%] sm:h-[90%] w-full h-auto">
            <source src="https://pub-0cd6f9d4131f4f79ac40219248ae64db.r2.dev/ez-dashboard.mp4" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">Easy Dashboard UI</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Dashboard UI built using Shadcn Charts</p>
        </MagicCard>
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-10 shadow-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        > 
          <div className="flex flex-col items-center justify-center h-full">
            
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200"><SparklesText text="Expected 50+" /></h2>
            <p className="text-xl text-center sm:text-left text-gray-600 dark:text-gray-400">new high quality templates</p>
          </div>
        </MagicCard>
      </div>
    </MagicContainer>
  );
}