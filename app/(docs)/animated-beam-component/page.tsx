"use client"

import React, { useState } from "react"
import { Check, CheckIcon, Copy, CopyIcon, RotateCcw } from "lucide-react"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AnimatedBeamDemo } from "@/components/easyui/animated-beam";
// import PixelCards from "@/components/easyui/pixel-card"
import { RainbowButton } from "@/components/ui/rainbow-button"


export default function AnimatedBeamComponent() {
  const [key, setKey] = useState(0)
  const [copied1, setCopied1] = useState(false)
  const [copied2, setCopied2] = useState(false)
  const [activeTab, setActiveTab] = useState("cli")
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    const codeElement = document.getElementById('codeBlock3')
    const copycode3 = codeElement ? codeElement.textContent : ''
    if (copycode3) {
      navigator.clipboard.writeText(copycode3).then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
      })
    }
  }


const CustomIcons = {
    image1: () => <Image src="https://www.svgrepo.com/show/303201/facebook-like-logo.svg" alt="1Password" width={24} height={24} />,
    image2: () => <Image src="https://www.svgrepo.com/show/306500/openai.svg" alt="ActiveCampaign" width={30} height={30} />,
    image3: () => <Image src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" alt="React Logo" width={24} height={24} />,
    image4: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" width={24} height={24} />,
    image5: () => <Image src="https://www.svgrepo.com/show/303110/apple-black-logo.svg" alt="Netflix" width="24" height="24" />,
    image6: () => <Image src="https://www.svgrepo.com/show/303147/whatsapp-icon-logo.svg" alt="Robinhood" width={34} height={34} />,
    image7: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" width={24} height={24} />,
  };

  const handleCopy = (
    id: string,
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const codeElement = document.getElementById(id)
    const codeToCopy = codeElement ? codeElement.textContent : ""
    if (codeToCopy) {
      navigator.clipboard.writeText(codeToCopy).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }


  const handleOpenInV0 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.open(`https://v0.dev/chat/api/open?url=https://easyui.pro/v0-preview/animated-beam.json`, '_blank')
  }

const codeString = "\n'use client';\n\nimport React, { forwardRef, useRef, useEffect, useId, useState, RefObject } from 'react';\nimport { motion } from 'framer-motion';\n\n// Utility function for class names\nconst cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');\n\n// Icons object with SVG logos\nconst Icons = {\n  image1: () => (\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\">\n      <path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\" />\n      <circle cx=\"12\" cy=\"7\" r=\"4\" />\n    </svg>\n  ),\n  image2: () => (\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\">\n      <polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\" />\n    </svg>\n  ),\n  image3: () => (\n    <svg viewBox=\"0 0 24 24\" fill=\"none\">\n      <path d=\"M3 3h18v18H3V3z\" fill=\"#3178C6\" />\n      <path d=\"M17.2 15.2v2.4c.4.2.7.4 1.2.5.4.1.9.2 1.4.2.5 0 .9-.1 1.3-.2.4-.1.7-.3 1-.6.3-.2.5-.5.6-.9.1-.3.2-.7.2-1.1 0-.3 0-.6-.1-.9-.1-.2-.2-.5-.4-.7-.2-.2-.4-.4-.7-.6-.3-.2-.6-.4-1-.6-.3-.2-.6-.3-.8-.4-.2-.1-.4-.3-.6-.4-.1-.1-.2-.3-.3-.4 0-.2-.1-.3-.1-.5 0-.2 0-.3.1-.5.1-.1.2-.2.3-.3.1-.1.3-.2.5-.2.2-.1.4-.1.7-.1.2 0 .4 0 .6.1.2 0 .4.1.6.2.2.1.4.2.6.3.2.1.4.2.6.4v-2.2c-.3-.1-.7-.2-1-.3-.4-.1-.8-.1-1.3-.1-.5 0-.9.1-1.3.2-.4.1-.8.3-1.1.6-.3.2-.5.5-.7.9-.2.4-.3.8-.3 1.3 0 .7.2 1.3.6 1.8.4.5 1 .9 1.8 1.3.3.2.6.3.9.5.3.1.5.3.6.4.2.1.3.3.3.4.1.1.1.3.1.4 0 .1 0 .3-.1.4-.1.1-.1.2-.3.3-.1.1-.3.1-.4.2-.2 0-.4.1-.6.1-.5 0-1-.1-1.5-.3-.4 0-.9-.3-1.3-.6zm-4.8-3.3h2.9v-2h-8.1v2h2.9v8.2h2.3v-8.2z\" fill=\"#fff\" />\n    </svg>\n  ),\n  image4: () => (\n    <svg viewBox=\"0 0 24 24\" fill=\"none\">\n      <path d=\"M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.5 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.19 8.76 16.59 8.15C15.61 7.15 14.5 6 12 6ZM7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.81 15.24 7.41 15.85C8.39 16.85 9.5 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.19 14.76 11.59 14.15C10.61 13.15 9.5 12 7 12Z\" fill=\"#06B6D4\" />\n    </svg>\n  ),\n  image5: () => (\n    <svg viewBox=\"0 0 24 24\" fill=\"none\">\n      <path d=\"M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z\" fill=\"#000\" />\n    </svg>\n  ),\n  image6: () => (\n    <svg viewBox=\"0 0 24 24\" fill=\"none\">\n      <path d=\"M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\" fill=\"#61DAFB\" />\n      <path d=\"M12 9.86c-4.08 0-7.72 1.88-9.64 4.64C4.28 17.26 7.92 19.14 12 19.14c4.08 0 7.72-1.88 9.64-4.64-1.92-2.76-5.56-4.64-9.64-4.64zm0 8.28c-3.36 0-6.36-1.48-8-3.64 1.64-2.16 4.64-3.64 8-3.64s6.36 1.48 8 3.64c-1.64 2.16-4.64 3.64-8 3.64z\" fill=\"#61DAFB\" />\n      <path d=\"M12 4.5c-4.08 0-7.72 1.88-9.64 4.64C4.28 11.9 7.92 13.78 12 13.78c4.08 0 7.72-1.88 9.64-4.64C19.72 6.38 16.08 4.5 12 4.5zm0 8.28c-3.36 0-6.36-1.48-8-3.64 1.64-2.16 4.64-3.64 8-3.64s6.36 1.48 8 3.64c-1.64 2.16-4.64 3.64-8 3.64z\" fill=\"#61DAFB\" />\n    </svg>\n  ),\n  image7: () => (\n    <svg viewBox=\"0 0 24 24\" fill=\"none\">\n      <path d=\"M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z\" fill=\"#0055FF\" />\n    </svg>\n  ),\n};\n\n// AnimatedBeam component\ninterface AnimatedBeamProps {\n  className?: string;\n  containerRef: RefObject<HTMLElement>;\n  fromRef: RefObject<HTMLElement>;\n  toRef: RefObject<HTMLElement>;\n  curvature?: number;\n  reverse?: boolean;\n  pathColor?: string;\n  pathWidth?: number;\n  pathOpacity?: number;\n  gradientStartColor?: string;\n  gradientStopColor?: string;\n  delay?: number;\n  duration?: number;\n  startXOffset?: number;\n  startYOffset?: number;\n  endXOffset?: number;\n  endYOffset?: number;\n  dotted?: boolean;\n  dotSpacing?: number;\n}\n\nconst AnimatedBeam: React.FC<AnimatedBeamProps> = ({\n  className,\n  containerRef,\n  fromRef,\n  toRef,\n  curvature = 0,\n  reverse = false,\n  duration = Math.random() * 3 + 4,\n  delay = 0,\n  pathColor = 'gray',\n  pathWidth = 2,\n  pathOpacity = 0.2,\n  gradientStartColor = '#4d40ff',\n  gradientStopColor = '#4043ff',\n  startXOffset = 0,\n  startYOffset = 0,\n  endXOffset = 0,\n  endYOffset = 0,\n  dotted = false,\n  dotSpacing = 6,\n}) => {\n  const id = useId();\n  const [pathD, setPathD] = useState('');\n  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });\n  const strokeDasharray = dotted ? `${dotSpacing} ${dotSpacing}` : 'none';\n  const gradientCoordinates = reverse\n    ? {\n        x1: ['90%', '-10%'],\n        x2: ['100%', '0%'],\n        y1: ['0%', '0%'],\n        y2: ['0%', '0%'],\n      }\n    : {\n        x1: ['10%', '110%'],\n        x2: ['0%', '100%'],\n        y1: ['0%', '0%'],\n        y2: ['0%', '0%'],\n      };\n\n  useEffect(() => {\n    const updatePath = () => {\n      if (containerRef.current && fromRef.current && toRef.current) {\n        const containerRect = containerRef.current.getBoundingClientRect();\n        const rectA = fromRef.current.getBoundingClientRect();\n        const rectB = toRef.current.getBoundingClientRect();\n\n        const svgWidth = containerRect.width;\n        const svgHeight = containerRect.height;\n        setSvgDimensions({ width: svgWidth, height: svgHeight });\n\n        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;\n        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;\n        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;\n        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;\n\n        const controlY = startY - curvature;\n        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;\n        setPathD(d);\n      }\n    };\n\n    const resizeObserver = new ResizeObserver(() => {\n      updatePath();\n    });\n\n    if (containerRef.current) {\n      resizeObserver.observe(containerRef.current);\n    }\n\n    updatePath();\n\n    return () => {\n      resizeObserver.disconnect();\n    };\n  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);\n\n  return (\n    <svg\n      fill='none'\n      width={svgDimensions.width}\n      height={svgDimensions.height}\n      xmlns='http://www.w3.org/2000/svg'\n      className={cn('pointer-events-none absolute left-0 top-0 transform-gpu stroke-2', className)}\n      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}\n    >\n      <path\n        d={pathD}\n        stroke={pathColor}\n        strokeWidth={pathWidth}\n        strokeOpacity={pathOpacity}\n        strokeLinecap='round'\n        strokeDasharray={strokeDasharray}\n      />\n      <motion.path\n        d={pathD}\n        stroke={`url(#${id})`}\n        strokeLinecap='round'\n        strokeDasharray={strokeDasharray}\n        initial={{\n          strokeWidth: pathWidth,\n          strokeOpacity: 0,\n        }}\n        animate={{\n          strokeWidth: pathWidth * 1.5,\n          strokeOpacity: 1,\n        }}\n        transition={{\n          duration: 2,\n          delay: delay,\n        }}\n      />\n      <defs>\n        <motion.linearGradient className='transform-gpu'\n          id={id}\n          gradientUnits={'userSpaceOnUse'}\n          initial={{\n            x1: '0%',\n            x2: '0%',\n            y1: '0%',\n            y2: '0%',\n          }}\n          animate={{\n            x1: gradientCoordinates.x1,\n            x2: gradientCoordinates.x2,\n            y1: gradientCoordinates.y1,\n            y2: gradientCoordinates.y2,\n          }}\n          transition={{\n            delay,\n            duration,\n            ease: [0.16, 1, 0.3, 1],\n            repeat: Infinity,\n            repeatDelay: 0,\n          }}\n        >\n          <stop stopColor={gradientStartColor} stopOpacity='0'></stop>\n          <stop stopColor={gradientStartColor}></stop>\n          <stop offset='32.5%' stopColor={gradientStopColor}></stop>\n          <stop offset='100%' stopColor={gradientStopColor} stopOpacity='0'></stop>\n        </motion.linearGradient>\n      </defs>\n    </svg>\n  );\n};\n\n// Circle component with responsive sizing\nconst Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(\n  ({ className, children }, ref) => {\n    return (\n      <div\n        ref={ref}\n        className={cn(\n          'z-10 flex items-center justify-center rounded-full border-2 bg-white dark:bg-gray-300 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',\n          'w-8 h-8 p-2 sm:w-10 sm:h-10 sm:p-2.5 md:w-12 md:h-12 md:p-3', // Responsive sizes\n          className\n        )}\n      >\n        {children}\n      </div>\n    );\n  }\n);\n\nCircle.displayName = 'Circle';\n\n// Main AnimatedBeamDemo component with responsive layout\ninterface AnimatedBeamDemoProps {\n  className?: string;\n  icons?: typeof Icons;\n  beamColor?: string;\n  beamSpeed?: number;\n}\n\nexport const AnimatedBeamDemo: React.FC<AnimatedBeamDemoProps> = ({ \n  className, \n  icons = Icons, \n  beamColor = '#4d40ff', \n  beamSpeed = 3 \n}) => {\n  const containerRef = useRef<HTMLDivElement>(null);\n  const div1Ref = useRef<HTMLDivElement>(null);\n  const div2Ref = useRef<HTMLDivElement>(null);\n  const div3Ref = useRef<HTMLDivElement>(null);\n  const div4Ref = useRef<HTMLDivElement>(null);\n  const div5Ref = useRef<HTMLDivElement>(null);\n  const div6Ref = useRef<HTMLDivElement>(null);\n  const div7Ref = useRef<HTMLDivElement>(null);\n\n  return (\n    <div\n      className={cn(\n        'relative flex w-full max-w-[500px] mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background',\n        'p-4 sm:p-6 md:p-10 md:shadow-xl', // Responsive padding\n        className\n      )}\n      ref={containerRef}\n    >\n      <div className='flex h-full w-full flex-row items-stretch justify-between gap-3 sm:gap-6 md:gap-10'>\n        <div className='flex flex-col justify-center'>\n          <Circle ref={div7Ref}>\n            {icons.image1()}\n          </Circle>\n        </div>\n        <div className='flex flex-col justify-center'>\n          <Circle \n            ref={div6Ref} \n            className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14' // Larger circle with responsive sizing\n          >\n            {icons.image2()}\n          </Circle>\n        </div>\n        <div className='flex flex-col justify-center gap-1 sm:gap-1.5 md:gap-2'>\n          <Circle ref={div1Ref}>\n            {icons.image3()}\n          </Circle>\n          <Circle ref={div2Ref}>\n            {icons.image4()}\n          </Circle>\n          <Circle ref={div3Ref}>\n            {icons.image5()}\n          </Circle>\n          <Circle ref={div4Ref}>\n            {icons.image6()}\n          </Circle>\n          <Circle ref={div5Ref}>\n            {icons.image7()}\n          </Circle>\n        </div>\n      </div>\n\n      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} duration={beamSpeed} gradientStartColor={beamColor} gradientStopColor={beamColor} />\n      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} duration={beamSpeed} gradientStartColor={beamColor} gradientStopColor={beamColor} />\n      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} duration={beamSpeed} gradientStartColor={beamColor} gradientStopColor={beamColor} />\n      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} duration={beamSpeed} gradientStartColor={beamColor} gradientStopColor={beamColor} />\n      <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} duration={beamSpeed} gradientStartColor={beamColor} gradientStopColor={beamColor} />\n      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={beamSpeed} gradientStartColor={beamColor} gradientStopColor={beamColor} />\n    </div>\n  );\n};"


  return (
    <div className="flex flex-wrap justify-start gap-4 pb-10 max-w-full min-w-full px-0 lg:px-20">
      <div className="w-full sm:w-1/2 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">
          Animated Beam
        </CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
            Animated beam with beam animations
        </CardDescription>
      </div>

      <Tabs defaultValue="preview" className="relative z-0 mr-auto w-full">
      <div className="flex items-center justify-between pb-3 ">
      <TabsList className="z-50 grow justify-start rounded-none bg-transparent p-0">
          <TabsTrigger 
            value="preview" 
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger 
            value="code" 
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Code
          </TabsTrigger>
        </TabsList>
        {/* @ts-ignore */}
        <RainbowButton className="z-50 mr-2 h-8 cursor-pointer rounded-xl px-4 font-semibold"  onClick={handleOpenInV0}>
          <span className="flex items-center text-sm font-semibold leading-7 ">
            Open in 
            <svg 
              fill="currentColor" 
              viewBox="0 0 40 20" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true" 
              className="ml-1 inline-block size-6"
            >
              <path d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"></path>
              <path d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"></path>
            </svg>
          </span>
        </RainbowButton>
        </div>
        <TabsContent value="preview" className="relative rounded-md" key={key}>
          <div className="flex items-center justify-center max-w-full mx-auto px-4 py-5 border rounded-lg h-auto p-0">
            <Button
              onClick={() => setKey((prev) => prev + 1)}
              className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
              variant="ghost"
            >
              <RotateCcw size={16} />
            </Button>
            {/* <div className="p-5"> */}
            {/* <div className="mt-2 max-h-[350px]"> */}
  
 {/* <PixelCards /> */}
 {/* <div className="p-2"> */}
      <AnimatedBeamDemo
        icons={CustomIcons}
        beamColor="#ff4040"
        beamSpeed={3}
        className="custom-class"
      />
    {/* </div> */}
  {/* </div> */}
            {/* </div> */}
          </div>
        </TabsContent>
        <TabsContent value="code">        
          <div className="flex flex-col space-y-4 ml-3 lg:ml-4 md:lg-3">
            {/* <p className="font-semibold mt-5 tracking-tight leading-7">
              Step 2: Use the FireflyButton component in your desired page or
              component:
            </p> */}
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => handleCopy("codeBlock2", setCopied2)}
                className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg bg-transparent px-3 py-1 text-white"
                title="Copy code to clipboard"
              >
                {copied2 ? (
                  <Check className="text-green-500 h-4 w-4" />
                ) : (
                  <Copy className="text-black hover:text-gray-400 active:text-blue-700 h-4 w-4 dark:text-white" />
                )}
              </button>

              <pre className="ml-2 py-2 pb-2 pl-2 font-sm">
                <code id="codeBlock2" className="text-left language-js text-sm">
                  {`import { AnimatedBeamDemo } from "@/components/easyui/animated-beam";

const CustomIcons = {
    image1: () => <Image src="https://www.svgrepo.com/show/303201/facebook-like-logo.svg" alt="1Password" width={24} height={24} />,
    image2: () => <Image src="https://www.svgrepo.com/show/306500/openai.svg" alt="ActiveCampaign" width={30} height={30} />,
    image3: () => <Image src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" alt="React Logo" width={24} height={24} />,
    image4: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="Twitter" width={24} height={24} />,
    image5: () => <Image src="https://www.svgrepo.com/show/303110/apple-black-logo.svg" alt="Netflix" width="24" height="24" />,
    image6: () => <Image src="https://www.svgrepo.com/show/303147/whatsapp-icon-logo.svg" alt="Robinhood" width={34} height={34} />,
    image7: () => <Image src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" width={24} height={24} />,
};

export default function Home() {
   <AnimatedBeamDemo
        icons={CustomIcons}
        beamColor="#ff4040"
        beamSpeed={3}
        className="custom-class"
    />
}`}
                </code>
              </pre>
            </div>
          </div>
        </TabsContent>
      
      </Tabs>

      <p className="mt-5 mb-5 text-xl font-semibold leading-7 tracking-tight lg:text-2xl ml-0">Installation</p>

<Tabs defaultValue="cli" className="relative mr-auto w-full" onValueChange={setActiveTab}>
<div className="flex items-center justify-between pb-3">
  <TabsList className="w-full justify-start rounded-none bg-transparent p-0">
    <TabsTrigger
      value="cli"
      className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
    >
      CLI
    </TabsTrigger>
    <TabsTrigger
      value="manual"
      className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
    >
      Manual
    </TabsTrigger>
  </TabsList>
</div>
<TabsContent value="cli">
  <div className="md:lg-3 ml-3 flex w-full max-w-full flex-col space-y-4 lg:ml-4">
    {/* <p className="mt-5 text-xl font-semibold leading-7 tracking-tight lg:text-2xl">Installation</p> */}
    <div className="relative w-full max-w-full rounded-md border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
      <button 
        onClick={copyToClipboard}
        className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg bg-transparent px-3 py-1 text-white" 
        title={isCopied ? "Copied!" : "Copy code to clipboard"}
      >
        {isCopied ? (
          <CheckIcon className="h-4 text-green-500" />
        ) : (
          <CopyIcon className="h-4 text-black hover:text-gray-400 active:text-blue-700 dark:text-white" />
        )}
      </button>
      <pre className="font-sm ml-2 max-w-full overflow-x-auto rounded-2xl py-4 pl-2">
        <code id="codeBlock3" className="language-js block w-full text-left text-sm"> 
          {`npx shadcn@latest add "https://easyui.pro/components-json/animated-beam.json"`}
        </code>
      </pre>
    </div>
  </div>
</TabsContent>
<TabsContent value="manual">
  <div className="pl-4">
    <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/easyui/animated-beam.tsx</span></p>
      <div className="font-sm relative w-full rounded-md border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800 [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
        <button onClick={() => { 
                const codeElement = document.getElementById('codeBlock');
                const codeToCopy = codeElement ? codeElement.textContent : '';
                // @ts-ignore
                navigator.clipboard.writeText(codeToCopy).then(() => {
                  alert('Code copied to clipboard!');
                });
              }}
              className="absolute right-0 top-0 z-10 m-4 flex items-center rounded-lg px-3 py-1 text-white" title="Copy code to clipboard">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5C6.895 5 6 5.895 6 7v10c0 1.105.895 2 2 2h8c1.105 0 2-.895 2-2V7c0-1.105-.895-2-2-2H8zm0 0V3c0-1.105.895-2 2-2h4c1.105 0 2 .895 2 2v2m-6 4h4" />
              </svg> */}
              <CopyIcon className="h-4 text-black hover:text-gray-400 active:text-blue-700 dark:text-white" style={{ backdropFilter: 'blur(20px)' }} />
        </button>
        <pre className="font-sm ml-2 min-h-[600px] py-2 pl-2 sm:min-h-[300px] lg:min-h-[600px]"><code id="codeBlock"  className="language-js text-left text-sm ">              
{codeString}
            </code></pre>

            </div>
  </div>

  <p className="mt-5 font-semibold leading-7 tracking-tight ml-5">Update the import paths to match your project setup.</p>
</TabsContent>
</Tabs>
    </div>
  )
}
