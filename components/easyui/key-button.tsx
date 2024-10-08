"use client"

import React from "react"
import { Button } from "@/components/ui/button"


interface KeyButtonProps {
  text: string
  size: any
  variant: any
}

function KeyButton({ text, size, variant }: KeyButtonProps) {
  return (
    <div className="flex mx-auto justify-center text-center items-center align-center py-20">
       
      <Button
        className="group relative inline-flex items-center justify-center rounded-full bg-neutral-950  pl-6 pr-12 font-medium text-neutral-50 transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] before:absolute before:inset-0 before:-z-10 before:block before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:animate-shimmer_3s_linear_infinite border-2 border-transparent border-l-neutral-700 border-r-neutral-700 hover:border-transparent hover:border-l-white hover:border-r-white hover:bg-black hover:animate-none"
        variant={variant}
        size={size}
      >
        <span className="z-10  ">{text}</span>
        <div className="absolute right-1 inline-flex h-10 w-10 items-center py-1 justify-end rounded-full bg-neutral-700  transition-[width] group-hover:w-[calc(100%-8px)]">
          <div className="mr-2 flex items-center justify-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-neutral-50"
              style={
                {
                  "--svg-animation": "spin-around 2s infinite linear",
                } as React.CSSProperties
              }
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </Button>
    </div>
  )
}

export default KeyButton
