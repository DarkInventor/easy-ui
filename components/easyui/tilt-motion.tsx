"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface TiltMotionProps {
  children: React.ReactNode
  tiltFactor?: number
  perspective?: number
  scale?: number
  transitionDuration?: number
}

export const TiltMotion: React.FC<TiltMotionProps> = ({
  children,
  tiltFactor = 15,
  perspective = 1000,
  scale = 1.05,
  transitionDuration = 0.5,
}) => {
  const [isHovering, setIsHovering] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [elementSize, setElementSize] = useState({ width: 0, height: 0 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const rotateX = useTransform(ySpring, [-elementSize.height / 2, elementSize.height / 2], [tiltFactor, -tiltFactor])
  const rotateY = useTransform(xSpring, [-elementSize.width / 2, elementSize.width / 2], [-tiltFactor, tiltFactor])

  useEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setElementSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        })
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const centerX = elementSize.width / 2
    const centerY = elementSize.height / 2
    x.set(mouseX - centerX)
    y.set(mouseY - centerY)
  }

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => {
    setIsHovering(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{
        perspective,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: isHovering ? scale : 1,
          z: isHovering ? 50 : 0,
        }}
        transition={{
          duration: transitionDuration,
          type: "spring",
          ...springConfig,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

