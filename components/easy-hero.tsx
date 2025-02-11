"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FlipHorizontal2, FlipHorizontalIcon } from "lucide-react"
import { useTheme } from "next-themes"

interface EasyHeroProps {
  title: string
  subtext: string
}

// @ts-ignore
const EasyHero: React.FC<EasyHeroProps> = ({ title, subtext, heroimage }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setIsFlipping(false)
      setTheme(theme === "dark" ? "light" : "dark")
    }, 1000) // Wait for flip animation to finish before toggling theme
  }

  const flipVariant = {
    flipped: {
      rotateY: 90,
      scale: [0.4, 0.4, 0.4, 0.4],
      boxShadow: [
        "none",
        "1.8px 50.7px 51.4px -3.2px hsl(0 0% 0% / 0.32)",
        "1.8px 50.7px 51.4px -3.2px hsl(0 0% 0% / 0.32)",
        "none",
      ],
      transition: { duration: 0.8 },
    },
    notFlipped: {
      rotateY: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
      <motion.div
        className="absolute inset-0 size-full"
        style={{
          backgroundImage:
            theme === "dark"
              ? "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)" // gray-900 for dark mode
              : "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)", // light gray for light mode
          backgroundSize: "24px 24px",
        }}
        animate={
          isFlipping ? { opacity: 1, scale: 1.5 } : { opacity: 0.5, scale: 1 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <motion.div
        className="min-h-auto before:mask-[image:radial-gradient(ellipse_50%_50%_at_50%_50%,_#000_60%,_transparent_100%)] relative flex flex-col items-center justify-center bg-white px-2 text-gray-900 before:absolute before:inset-0 before:bg-[radial-gradient(#e5e7eb_1px,_transparent_1px)] before:bg-[length:16px_16px] dark:bg-black dark:text-white dark:before:bg-[radial-gradient(#1a202c_1px,_transparent_1px)]"
        variants={flipVariant}
        animate={isFlipping ? "flipped" : "notFlipped"}
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center "
          style={{
            backgroundImage: `url(${
              theme === "dark" ? "dark-theme-bg.jpg" : "light-theme-bg.jpg"
            })`,
          }}
        ></div>
        <main className="max-w-6xl justify-center mx-auto text-center py-2 relative z-10 flex flex-col items-center px-7">
          <header className="relative mb-0 px-4 sm:px-0 lg:px-8">
            <div className="max-w-full mx-auto">
              <div className="flex justify-between items-start">
                <h1 className="max-w-full text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight sm:leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40">
                  Starting your{" "}
                  <span className="inline-block bg-black dark:bg-white dark:text-black text-white px-3 sm:px-5 rounded-full my-2">
                    Next Project ?
                  </span>{" "}
                  Don&apos;t start from scratch
                </h1>
              </div>
            </div>
          </header>
          <div className="flex flex-row gap-0">
            <p className="mb-4 leading-7 mt-7 tracking-normal sm:max-w-xl md:max-w-[27.5rem] lg:max-w-[35.5rem] dark:text-gray-300 max-w-4xl text-gray-800 text-lg lg:text-xl">
              Kickstart with{" "}
              <span className="font-semibold">beautifully designed </span>
              website templates built with{" "}
              <span className="font-semibold">
                React, Typescript, Tailwind CSS,  
              </span>{" "}
              and <span className="font-semibold">Shadcn UI, Framer Motion</span>.
            </p>
          </div>
        </main>
      </motion.div>
    </>
  )
}
export default EasyHero
