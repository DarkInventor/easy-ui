"use client"

import { useRef, useEffect, useState } from "react"

// Rename the component to match the import in page.tsx
export default function LogoParticles({
  text = "Easy UI",
  fontSize = 80,
  primaryColor = "white",
  scatteredColor = "#00DCFF",
  backgroundColor = "black",
}: {
  text?: string
  fontSize?: number
  primaryColor?: string
  scatteredColor?: string
  backgroundColor?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setIsMobile(window.innerWidth < 768) // Set mobile breakpoint
    }

    updateCanvasSize()

    let particles: {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      color: string
      scatteredColor: string
      life: number
      isAWS: boolean
    }[] = []

    let textImageData: ImageData | null = null

    // Replace the createTextImage function with a text-based version
    function createTextImage() {
      if (!ctx || !canvas) return 0

      // Ensure canvas has valid dimensions
      if (canvas.width <= 0 || canvas.height <= 0) {
        console.error("Canvas has invalid dimensions:", canvas.width, canvas.height)
        return 0
      }

      ctx.fillStyle = primaryColor
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()

      // Set font size based on mobile or desktop
      const actualFontSize = isMobile ? fontSize * 0.6 : fontSize
      ctx.font = `bold ${actualFontSize}px sans-serif`

      // Measure text width to center it
      const textMetrics = ctx.measureText(text)
      const textWidth = textMetrics.width

      // Calculate text height (approximation since measureText doesn't give height)
      // Using font metrics to estimate height
      const textHeight = actualFontSize

      // Position text in center of canvas
      const x = canvas.width / 2 - textWidth / 2
      const y = canvas.height / 2 + textHeight / 3 // Adjust vertical position

      // Draw the text at specific coordinates instead of using translate
      ctx.fillText(text, x, y)

      // Define a safe area to get image data from
      const padding = 20 // Add padding around text
      const safeX = Math.max(0, x - padding)
      const safeY = Math.max(0, y - textHeight - padding)
      const safeWidth = Math.min(canvas.width - safeX, textWidth + padding * 2)
      const safeHeight = Math.min(canvas.height - safeY, textHeight + padding * 2)

      // Only get image data if we have a valid area
      if (safeWidth > 0 && safeHeight > 0) {
        try {
          textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        } catch (e) {
          console.error("Error getting image data:", e)
          // Create a fallback 1x1 pixel image data
          textImageData = ctx.createImageData(1, 1)
        }
      } else {
        // Create a fallback 1x1 pixel image data
        textImageData = ctx.createImageData(1, 1)
      }

      ctx.restore()
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      return actualFontSize / 20 // Return scale factor
    }

    // Update the createParticle function to use a single color for scattered particles
    function createParticle(scale: number) {
      if (!ctx || !canvas || !textImageData) return null

      const data = textImageData.data
      const width = textImageData.width
      const height = textImageData.height

      // Safety check for valid dimensions
      if (width <= 0 || height <= 0) return null

      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)

        // Make sure we're within bounds
        if (x >= 0 && x < width && y >= 0 && y < height) {
          const index = (y * width + x) * 4 + 3
          if (index >= 0 && index < data.length && data[index] > 128) {
            return {
              x: x,
              y: y,
              baseX: x,
              baseY: y,
              size: Math.random() * 1 + 0.5,
              color: primaryColor,
              scatteredColor: scatteredColor,
              isAWS: false, // No longer needed but keeping for compatibility
              life: Math.random() * 100 + 50,
            }
          }
        }
      }

      return null
    }

    function createInitialParticles(scale: number) {
      for (let i = 0; i < 7000; i++) {
        const particle = createParticle(scale)
        if (particle) {
          particles.push(particle)
        }
      }
    }

    let animationFrameId: number

    // Update the animate function to use the backgroundColor
    function animate(scale: number) {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const { x: mouseX, y: mouseY } = mousePositionRef.current
      const maxDistance = 240

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance && (isTouchingRef.current || !("ontouchstart" in window))) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          const moveX = Math.cos(angle) * force * 60
          const moveY = Math.sin(angle) * force * 60
          p.x = p.baseX - moveX
          p.y = p.baseY - moveY

          ctx.fillStyle = p.scatteredColor
        } else {
          p.x += (p.baseX - p.x) * 0.1
          p.y += (p.baseY - p.y) * 0.1
          ctx.fillStyle = primaryColor
        }

        ctx.fillRect(p.x, p.y, p.size, p.size)

        p.life--
        if (p.life <= 0) {
          const newParticle = createParticle(scale)
          if (newParticle) {
            particles[i] = newParticle
          } else {
            particles.splice(i, 1)
            i--
          }
        }
      }

      const baseParticleCount = 7000
      const targetParticleCount = Math.floor(
        baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)),
      )
      while (particles.length < targetParticleCount) {
        const newParticle = createParticle(scale)
        if (newParticle) particles.push(newParticle)
      }

      animationFrameId = requestAnimationFrame(() => animate(scale))
    }

    const scale = createTextImage()
    createInitialParticles(scale)
    animate(scale)

    const handleResize = () => {
      updateCanvasSize()
      const newScale = createTextImage()
      particles = []
      createInitialParticles(newScale)
    }

    const handleMove = (x: number, y: number) => {
      mousePositionRef.current = { x, y }
    }

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        handleMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    const handleTouchStart = () => {
      isTouchingRef.current = true
    }

    const handleTouchEnd = () => {
      isTouchingRef.current = false
      mousePositionRef.current = { x: 0, y: 0 }
    }

    const handleMouseLeave = () => {
      if (!("ontouchstart" in window)) {
        mousePositionRef.current = { x: 0, y: 0 }
      }
    }

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("touchstart", handleTouchStart)
    canvas.addEventListener("touchend", handleTouchEnd)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchend", handleTouchEnd)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile, text, fontSize, primaryColor, scatteredColor, backgroundColor])

  // Update the div background color to match the backgroundColor prop
  return (
    <div className="relative w-full h-dvh flex flex-col items-center justify-center" style={{ backgroundColor }}>
      <canvas
        ref={canvasRef}
        className="w-full h-auto absolute top-0 left-0 touch-none"
        aria-label={`Interactive particle effect with text: ${text}`}
      />
    </div>
  )
}

