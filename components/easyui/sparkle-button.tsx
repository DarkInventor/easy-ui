import React, { CSSProperties, useEffect, useRef, useState } from "react"

import { Button } from "../ui/button"

const RANDOM = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

interface SparkleProps {
  text: string
  size: any
  variant: any
}

const SparkleButton = ({ text, size, variant }: SparkleProps) => {
  const [isActive, setIsActive] = useState(false)
  const particlesRef = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    particlesRef.current.forEach((P) => {
      if (P) {
        P.style.setProperty("--x", `${RANDOM(20, 80)}`)
        P.style.setProperty("--y", `${RANDOM(20, 80)}`)
        P.style.setProperty("--duration", `${RANDOM(6, 20)}`)
        P.style.setProperty("--delay", `${RANDOM(1, 10)}`)
        P.style.setProperty("--alpha", `${RANDOM(40, 90) / 100}`)
        P.style.setProperty(
          "--origin-x",
          `${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%`
        )
        P.style.setProperty(
          "--origin-y",
          `${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%`
        )
        P.style.setProperty("--size", `${RANDOM(40, 90) / 100}`)
      }
    })
  }, [])

  return (
    // @ts-ignore
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-transparent">
      <div className="sparkle-button relative">
        <Button
          className="relative text-sm py-3 px-5 rounded-full flex items-center gap-1 whitespace-nowrap transition-all duration-250 cursor-pointer"
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}           
          size={size}
          variant={variant}
          style={
            {
              "--active": isActive ? "1" : "0",
              "--cut": "0.1em",
              background: `
              radial-gradient(
                40% 50% at center 100%,
                hsl(270 calc(var(--active) * 97%) 72% / var(--active)),
                transparent
              ),
              radial-gradient(
                80% 100% at center 120%,
                hsl(260 calc(var(--active) * 97%) 70% / var(--active)),
                transparent
              ),
              hsl(260 calc(var(--active) * 97%) calc((var(--active) * 44%) + 12%))
            `,
              boxShadow: `
              0 0 calc(var(--active) * 6em) calc(var(--active) * 3em) hsl(260 97% 61% / 0.75),
              0 0.05em 0 0 hsl(260 calc(var(--active) * 97%) calc((var(--active) * 50%) + 30%)) inset,
              0 -0.05em 0 0 hsl(260 calc(var(--active) * 97%) calc(var(--active) * 60%)) inset
            `,
              transform: `scale(calc(1 + (var(--active) * 0.1)))`,
            } as CSSProperties
          }
        >
          <span
            className="text relative z-10 translate-x-[2%] -translate-y-[6%] "
            style={{
              background: `linear-gradient(90deg, hsl(0 0% calc((var(--active) * 100%) + 65%)), hsl(0 0% calc((var(--active) * 100%) + 26%)))`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {text}
          </span>
          <svg
            className="sparkle w-6 h-6 ml-3 relative z-10 -translate-x-[25%] -translate-y-[5%]"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
           
            <path
              d="M10 7L15 12L10 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                color: `hsl(0 0% calc((var(--active, 0) * 70%) + 20%))`,
                // animation: isActive ? 'bounce 0.6s' : 'none',
                animationDelay: "calc((0.25s * 1.5) + (0.1s * 1s))",
                // @ts-ignore
                "--scale": "0.5",
              }}
            />
            <path
              d="M15 12H3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                color: `hsl(0 0% calc((var(--active, 0) * 70%) + 20%))`,
                // animation: isActive ? 'bounce 0.6s' : 'none',
                animationDelay: "calc((0.25s * 1.5) + (0.2s * 1s))",
                // @ts-ignore
                "--scale": "1.5",
              }}
            />
          </svg>
          <div
            className="spark absolute inset-0 rounded-full rotate-0 overflow-hidden"
            style={{
              mask: "linear-gradient(white, transparent 50%)",
              animation: "flip 3.6s infinite steps(2, end)",
            }}
          >
            <div
              className="spark-rotate absolute w-[200%] aspect-square top-0 left-1/2 -translate-x-1/2 -translate-y-[15%] -rotate-90 animate-rotate"
              style={{
                opacity: `calc((var(--active)) + 0.4)`,
                background:
                  "conic-gradient(from 0deg, transparent 0 340deg, white 360deg)",
              }}
            />
          </div>
          <div
            className="backdrop absolute rounded-full transition-all duration-250"
            style={{
              inset: "var(--cut)",
              background: `
                   radial-gradient(
                     40% 50% at center 100%,
                     hsl(270 calc(var(--active) * 97%) 72% / var(--active)),
                     transparent
                   ),
                   radial-gradient(
                     80% 100% at center 120%,
                     hsl(260 calc(var(--active) * 97%) 70% / var(--active)),
                     transparent
                   ),
                   hsl(260 calc(var(--active) * 97%) calc((var(--active) * 44%) + 12%))
                 `,
            }}
          />
        </Button>
        <div
          className="particle-pen absolute w-[200%] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]"
          style={{
            WebkitMask: "radial-gradient(white, transparent 65%)",
            opacity: isActive ? "1" : "0",
            transition: "opacity 0.25s",
          }}
        >
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
               // @ts-ignore
              ref={(el) => (particlesRef.current[index] = el)}
              className="particle absolute animate-float-out"
              style={
                {
                  "--duration": `calc(var(--duration, 1) * 1s)`,
                  "--delay": `calc(var(--delay, 0) * -1s)`,
                  width: "calc(var(--size, 0.25) * 1rem)",
                  aspectRatio: "1",
                  top: "calc(var(--y, 50) * 1%)",
                  left: "calc(var(--x, 50) * 1%)",
                  opacity: "var(--alpha, 1)",
                  animationDirection: index % 2 === 0 ? "reverse" : "normal",
                  animationPlayState: isActive ? "running" : "paused",
                  transformOrigin:
                    "var(--origin-x, 1000%) var(--origin-y, 1000%)",
                } as CSSProperties
              }
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 0L9.08257 5.17647L13.5 7.5L9.08257 9.82353L7.5 15L5.91743 9.82353L1.5 7.5L5.91743 5.17647L7.5 0Z"
                  fill="hsl(260, 97%, 61%)"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SparkleButton
