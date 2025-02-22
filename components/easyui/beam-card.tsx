"use client"

import * as React from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

interface BeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  beamColor?: string
  glowColor?: string
  borderColor?: string
  hoverColor?: string
}

export const BeamCard = React.forwardRef<HTMLDivElement, BeamCardProps>(
  (
    {
      className,
      children,
      beamColor = "#3b82f6",
      glowColor = "rgba(59, 130, 246, 0.5)",
      borderColor = "bg-gray-300 dark:bg-gray-700",
      hoverColor = "rgba(59, 130, 246, 0.2)",
      ...props
    },
    ref,
  ) => {
    const [hovered, setHovered] = React.useState(false)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }

    const glowStyle = useMotionTemplate`radial-gradient(
      150px circle at ${mouseX}px ${mouseY}px,
      ${glowColor},
      transparent 80%
    )`

    return (
      // @ts-ignore
      <motion.div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl p-[1px] transition-colors duration-300",
          "bg-slate-100 dark:bg-slate-800",
          className,
        )}
        style={{ background: borderColor }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ background: hovered ? hoverColor : borderColor }}
        {...props}
      >
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
          style={{ background: glowStyle }}
          animate={{ opacity: hovered ? 1 : 0 }}
        />
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${beamColor}, transparent)`,
            opacity: 0.5,
            left: "-100%",
          }}
          animate={{
            left: "100%",
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
        />
        <div className="relative rounded-[11px] bg-white dark:bg-black p-5 md:p-6">{children}</div>
      </motion.div>
    )
  },
)
BeamCard.displayName = "BeamCard"

