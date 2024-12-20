"use client"

import React, { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string
  textSize: string
  className?: string
  fontWeight?: React.CSSProperties["fontWeight"]
}

export default function GlitchText({
  text,
  textSize,
  className = "",
  fontWeight = "normal",
}: GlitchTextProps) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let currentIndex = 0
    const fullText = text
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)
    return () => clearInterval(typingInterval)
  }, [text])

  return (
    <div
      className={`glitch-wrapper ${className} dark:text-white text-black`}
      style={{ fontSize: textSize, fontWeight }}
    >
      <div className="glitch" data-text={displayedText}>
        {displayedText}
      </div>
      <style jsx>{`
        .glitch-wrapper {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: transparent;
        }
        .glitch {
          position: relative;
          letter-spacing: 3px;
          z-index: 1;
        }
        .glitch:before,
        .glitch:after {
          display: block;
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
        }
        .glitch:before {
          animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
            infinite;
          color: #00ffff;
          z-index: -1;
        }
        .glitch:after {
          animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
            both infinite;
          color: #ff00ff;
          z-index: -2;
        }
        @keyframes glitch-it {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          to {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  )
}
