"use client";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import {
  MagicCard,
  MagicContainer,
} from "@/components/magicui/magic-card";
import SparklesText from "@/components/magicui/sparkles-text";

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
      className="flex h-auto min-h-[500px] w-full flex-wrap gap-4 px-10 mt-10 justify-center items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-10 shadow-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video muted loop className="w-full h-auto">
            <source src="/eztmp1.mp4" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">Easy Template</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Template suitable for SaaS Products</p>
        </MagicCard>
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-10 shadow-2xl "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video muted loop className="w-full h-auto">
            <source src="/designfast.mp4" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">Designfast</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Minimal template designed for Service business</p>
        </MagicCard>
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-10 shadow-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video muted loop className="w-full h-auto">
            <source src="/quotesai.mp4" type="video/mp4" />
          </video>
          <h2 className="mt-4 text-lg font-bold text-gray-800 dark:text-gray-200">QuotesAI</h2>
          <p className="text-base text-gray-600 dark:text-gray-400">Ready-to-use Micro SaaS template built with NextAuth + Stripe support</p>
        </MagicCard>
        <MagicCard
          className="group cursor-pointer flex flex-col items-center justify-center overflow-hidden p-10 shadow-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        > 
          <div className="flex flex-col items-center justify-center h-full">
            
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200"><SparklesText text="Expected 50+" /></h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">new high quality templates</p>
          </div>
        </MagicCard>
      </div>
    </MagicContainer>
  );
}
