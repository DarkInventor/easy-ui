"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

export interface RainbowButtonProps extends ButtonProps {
  rainbowIntensity?: number
  rainbowDuration?: number
}

export function ColoredButton({ children, rainbowIntensity = 1, rainbowDuration = 3, ...props }: RainbowButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      className="relative inline-block"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-[0.50rem] z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: rainbowIntensity }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-full h-full rounded-[0.50rem]"
            style={{
              background: "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)",
              backgroundSize: "400% 400%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: rainbowDuration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
      <Button
        {...props}
        className={`relative z-10 transition-colors duration-300 ${
          isHovered ? "bg-transparent hover:bg-transparent" : ""
        } ${props.className || ""}`}
      >
        {children}
      </Button>
    </motion.div>
  )
}

