"use client"

import { useEffect, useRef, useState } from 'react'
import { Youtube } from 'lucide-react'

export default function HexagonHero() {
  const patternRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: -10 })

  useEffect(() => {
    const patternElement = patternRef.current
    if (!patternElement) return

    const countY = Math.ceil(patternElement.clientHeight / 40) + 10
    const countX = Math.ceil(patternElement.clientWidth / 108) + 60

    for (let i = 0; i < countY; i++) {
      for (let j = 0; j < countX; j++) {
        const hexagon = document.createElement("div")
        hexagon.className = "absolute w-11 h-[50px] bg-no-repeat bg-contain"
        hexagon.style.backgroundImage = "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODcgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMi4xOTg3MyAyNi4xNTQ3TDQzLjUgMi4zMDk0TDg0LjgwMTMgMjYuMTU0N1Y3My44NDUzTDQzLjUgOTcuNjkwNkwyLjE5ODczIDczLjg0NTNWMjYuMTU0N1oiIGZpbGw9IiMxMzEyMTciIHN0cm9rZT0iIzEzMTIxNyIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=')"
        hexagon.style.top = `${i * 40}px`
        hexagon.style.left = `${j * 48 + ((i * 24) % 48)}px`
        patternElement.appendChild(hexagon)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="bg-[#131217] w-full h-screen relative grid place-content-center font-['Montserrat'] overflow-hidden">
      <h1 className="sm:text-2xl font-bold text-white relative z-10 text-center lg:text-8xl">Hexagons</h1>
      <div 
        id="gradient" 
        className="w-[400px] h-[400px] absolute top-[-200px] left-[-200px]"
        style={{
          background: 'radial-gradient(#ff8811, transparent 50%)',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      />
      <div id="pattern" ref={patternRef} className="absolute top-[-44px] left-[-50px] right-0 bottom-0" />
      <div className="links fixed bottom-0 left-0 p-2 font-['Montserrat'] text-lg font-normal flex flex-col gap-2 border-t border-r border-white/30 rounded-tr-lg">
        <a 
          href="https://youtu.be/4cI3NSPHRoY" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white no-underline flex justify-between items-center opacity-50 hover:opacity-100 transition-opacity"
        >
          Watch on
          <Youtube className="ml-2 flex-shrink-0 stroke-[#dd2d4a]" />
        </a>
      </div>
    </div>
  )
}

