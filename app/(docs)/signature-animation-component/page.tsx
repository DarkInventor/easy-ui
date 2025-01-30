"use client"

import React, { useState } from "react"
import { Check, CheckIcon, Copy, CopyIcon, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FireflyButton from "@/components/easyui/firefly-button"
import { AdvancedSignatureCreatorComponent } from "@/components/easyui/signature-animation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RainbowButton } from "@/components/ui/rainbow-button"

export default function SignatureAnimationComponent() {
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
  
  const handleOpenInV0 = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.open(`https://v0.dev/chat/api/open?url=https://easyui.pro/v0-preview/signature-animation.json`, '_blank')
  }

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

  const handleSign = (signature: string) => {
    console.log("Signature created:", signature)
  }

  const handleSignCopy = (signature: string) => {
    console.log("Signature copied:", signature)
  }

  const props = [
    {
      name: "initialName",
      type: "string",
      default: '""',
      description: "The initial name to be displayed in the signature field.",
    },
    {
      name: "fontFamilies",
      type: "FontFamily[]",
      default: "defaultFontFamilies",
      description: "An array of font family options for the signature.",
    },
    {
      name: "signatureStyles",
      type: "SignatureStyle[]",
      default: "defaultSignatureStyles",
      description: "An array of signature style options.",
    },
    {
      name: "colors",
      type: "string[]",
      default: "defaultColors",
      description: "An array of color options for the signature.",
    },
    {
      name: "initialFontFamily",
      type: "string",
      default: "defaultFontFamilies[0].value",
      description: "The initial font family to be used for the signature.",
    },
    {
      name: "initialSignatureStyle",
      type: "string",
      default: "defaultSignatureStyles[0].value",
      description: "The initial signature style to be applied.",
    },
    {
      name: "initialColor",
      type: "string",
      default: "defaultColors[1]",
      description: "The initial color to be used for the signature.",
    },
    {
      name: "initialSize",
      type: "number",
      default: "48",
      description: "The initial size of the signature text.",
    },
    {
      name: "minSize",
      type: "number",
      default: "24",
      description: "The minimum allowed size for the signature text.",
    },
    {
      name: "maxSize",
      type: "number",
      default: "72",
      description: "The maximum allowed size for the signature text.",
    },
    {
      name: "placeholder",
      type: "string",
      default: '"Enter your name"',
      description: "The placeholder text for the signature input field.",
    },
    {
      name: "signButtonText",
      type: "string",
      default: '"SIGN"',
      description: "The text to be displayed on the sign button.",
    },
    {
      name: "copiedText",
      type: "string",
      default: '"Copied!"',
      description: "The text to be displayed when the signature is copied.",
    },
    {
      name: "copyText",
      type: "string",
      default: '"Copy Signature"',
      description: "The text to be displayed on the copy button.",
    },
    {
      name: "signedByText",
      type: "string",
      default: '"SIGNED BY,"',
      description: "The text to be displayed above the signature.",
    },
    {
      name: "onSign",
      type: "(signature: string) => void",
      default: "undefined",
      description: "A callback function to be called when the signature is created.",
    },
    {
      name: "onCopy",
      type: "(signature: string) => void",
      default: "undefined",
      description: "A callback function to be called when the signature is copied.",
    },
    {
      name: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes to be applied to the component.",
    },
    {
      name: "showControls",
      type: "boolean",
      default: "true",
      description: "Whether to show the control buttons (undo, redo, etc.).",
    },
    {
      name: "showColorPalette",
      type: "boolean",
      default: "true",
      description: "Whether to show the color palette for signature customization.",
    },
    {
      name: "showFontSelector",
      type: "boolean",
      default: "true",
      description: "Whether to show the font selector for signature customization.",
    },
    {
      name: "showStyleSelector",
      type: "boolean",
      default: "true",
      description: "Whether to show the style selector for signature customization.",
    },
    {
      name: "showSizeSlider",
      type: "boolean",
      default: "true",
      description: "Whether to show the size slider for signature customization.",
    },
    {
      name: "animationDuration",
      type: "number",
      default: "2000",
      description: "The duration of the signature animation in milliseconds.",
    },
    {
      name: "undoLimit",
      type: "number",
      default: "10",
      description: "The maximum number of undo steps allowed.",
    },
    {
      name: "backgroundColor",
      type: "string",
      default: '"transparent"',
      description: "The background color of the signature component.",
    },
    {
      name: "signButtonColor",
      type: "string",
      default: '"black"',
      description: "The color of the sign button.",
    },
    {
      name: "signButtonTextColor",
      type: "string",
      default: '"white"',
      description: "The color of the text on the sign button.",
    },
  ]


  const codeString = `
"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  CheckIcon,
  CopyIcon,
  PaletteIcon,
  PencilIcon,
  RedoIcon,
  UndoIcon,
} from "lucide-react"

interface FontFamily {
  name: string
  value: string
}

interface SignatureStyle {
  name: string
  value: string
}

interface AdvancedSignatureCreatorProps {
  initialName?: string
  fontFamilies?: FontFamily[]
  signatureStyles?: SignatureStyle[]
  colors?: string[]
  initialFontFamily?: string
  initialSignatureStyle?: string
  initialColor?: string
  initialSize?: number
  minSize?: number
  maxSize?: number
  placeholder?: string
  signButtonText?: string
  copiedText?: string
  copyText?: string
  signedByText?: string
  onSign?: (signature: string) => void
  onCopy?: (signature: string) => void
  className?: string
  showControls?: boolean
  showColorPalette?: boolean
  showFontSelector?: boolean
  showStyleSelector?: boolean
  showSizeSlider?: boolean
  animationDuration?: number
  undoLimit?: number
  backgroundColor?: string
  signButtonColor?: string
  signButtonTextColor?: string
}

const defaultFontFamilies: FontFamily[] = [
  { name: "Signature", value: '"Dancing Script", cursive' },
  { name: "Classic", value: '"Great Vibes", cursive' },
  { name: "Modern", value: '"Alex Brush", cursive' },
]

const defaultSignatureStyles: SignatureStyle[] = [
  { name: "No Underline", value: "none" },
  { name: "Simple Underline", value: "simple" },
  { name: "Wave Underline", value: "wave" },
]

const defaultColors = [
  "#000000",
  "#0000FF",
  "#006400",
  "#8B0000",
  "#4B0082",
  "#ffffff",
]

export function AdvancedSignatureCreatorComponent({
  initialName = "",
  fontFamilies = defaultFontFamilies,
  signatureStyles = defaultSignatureStyles,
  colors = defaultColors,
  initialFontFamily = defaultFontFamilies[0].value,
  initialSignatureStyle = defaultSignatureStyles[0].value,
  initialColor = defaultColors[1],
  initialSize = 48,
  minSize = 24,
  maxSize = 72,
  placeholder = "Enter your name",
  signButtonText = "SIGN",
  copiedText = "Copied!",
  copyText = "Copy Signature",
  signedByText = "SIGNED BY,",
  onSign,
  onCopy,
  className = "",
  showControls = true,
  showColorPalette = true,
  showFontSelector = true,
  showStyleSelector = true,
  showSizeSlider = true,
  animationDuration = 2000,
  undoLimit = 10,
  backgroundColor = "transparent",
  signButtonColor = "black",
  signButtonTextColor = "white",
}: AdvancedSignatureCreatorProps) {
  const [name, setName] = useState(initialName)
  const [isActive, setIsActive] = useState(initialName.length > 0)
  const [isSigning, setIsSigning] = useState(false)
  const [fontFamily, setFontFamily] = useState(initialFontFamily)
  const [signatureStyle, setSignatureStyle] = useState(initialSignatureStyle)
  const [color, setColor] = useState(initialColor)
  const [size, setSize] = useState(initialSize)
  const [history, setHistory] = useState<string[]>([initialName])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [isCopied, setIsCopied] = useState(false)
  const [isColorPaletteOpen, setIsColorPaletteOpen] = useState(false)
  const signatureRef = useRef<SVGSVGElement>(null)
  const colorPaletteRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsActive(name.length > 0)
  }, [name])

  useEffect(() => {
    if (name !== history[historyIndex]) {
      setHistory((prev) =>
        [...prev.slice(0, historyIndex + 1), name].slice(-undoLimit)
      )
      setHistoryIndex((prev) => Math.min(prev + 1, undoLimit - 1))
    }
  }, [name, fontFamily, signatureStyle, color, size, historyIndex, undoLimit])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        colorPaletteRef.current &&
        !colorPaletteRef.current.contains(event.target as Node)
      ) {
        setIsColorPaletteOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSign = () => {
    setIsSigning(true)
    setTimeout(() => setIsSigning(false), 1000)
    if (onSign) {
      onSign(name)
    }
  }

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex((prev) => prev - 1)
      setName(history[historyIndex - 1])
    }
  }

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex((prev) => prev + 1)
      setName(history[historyIndex + 1])
    }
  }

  const generateSignaturePath = () => {
    const width = 300
    const height = 80
    let path = ""

    switch (signatureStyle) {
      case "simple":
        path = \`M10,\${height} L\${width - 10},\${height}\`
        break
      case "wave":
        path = \`M10,\${height} Q\${width / 4},\${height - 10} \${
          width / 2
        },\${height} T\${width - 10},\${height}\`
        break
      default:
        path = ""
    }

    return path
  }

  const copySignature = async () => {
    if (!signatureRef.current) return

    const svgData = new XMLSerializer().serializeToString(signatureRef.current)
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" })
    const svgUrl = URL.createObjectURL(svgBlob)

    const img = new Image()
    img.onload = async () => {
      const canvas = document.createElement("canvas")
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0)
        const pngUrl = canvas.toDataURL("image/png")

        const htmlContent = \`
          <div style="font-family: \${fontFamily};">
            <img src="\${pngUrl}" alt="\${name}'s signature" style="max-width: 100%;">
          </div>
        \`

        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              "text/html": new Blob([htmlContent], { type: "text/html" }),
              "text/plain": new Blob([name], { type: "text/plain" }),
            }),
          ])
          setIsCopied(true)
          setTimeout(() => setIsCopied(false), 2000)
          if (onCopy) {
            onCopy(name)
          }
        } catch (err) {
          console.error("Failed to copy: ", err)
        }
      }
    }
    img.src = svgUrl
  }

  const toggleColorPalette = () => {
    setIsColorPaletteOpen((prev) => !prev)
  }

  const handleColorSelect = (selectedColor: string) => {
    setColor(selectedColor)
    setIsColorPaletteOpen(false)
  }

  return (
    <div
      className={\`min-h-screen flex items-center justify-center p-4 \${className}\`}
      style={{ backgroundColor }}
    >
      <div className="w-full max-w-[500px] rounded-[32px] bg-transparent dark:text-white backdrop-blur-xl p-6 md:p-8 shadow-xl border rounded-2xl">
        {/* Input Container */}
        <div className="relative mb-6">
          <div className="flex items-stretch h-[60px] bg-zinc-100/80 rounded-full border border-zinc-200/50 overflow-hidden">
            <input
              type="text"
              className="flex-1 px-4 md:px-6 bg-transparent border-none outline-none text-lg md:text-xl text-black dark:text-black 
                         font-sans placeholder:text-zinc-400"
              placeholder={placeholder}
              value={name}
              onChange={handleInputChange}
              required
            />
            <button
              onClick={handleSign}
              className={\`
                px-4 md:px-6 m-2 rounded-full flex items-center gap-0
                transition-all duration-300 font-mono text-sm tracking-wide text-black dark:text-black
                \${
                  isActive
                    ? "opacity-100 hover:opacity-80"
                    : "opacity-50 cursor-not-allowed"
                }
                \${isSigning ? "scale-95" : ""}
              \`}
              style={{
                backgroundColor: signButtonColor,
                color: signButtonTextColor,
              }}
              disabled={!isActive}
            >
              <PencilIcon className="w-4 h-4" />
              <span className="hidden md:inline">{signButtonText}</span>
            </button>
          </div>
        </div>

        {/* Controls */}
        {showControls && (
          <div className="flex flex-wrap justify-between mb-6 gap-2">
            <div className="flex gap-2">
              <button
                onClick={handleUndo}
                className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
                title="Undo"
              >
                <UndoIcon className="w-5 h-5 text-black dark:text-black" />
              </button>
              <button
                onClick={handleRedo}
                className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
                title="Redo"
              >
                <RedoIcon className="w-5 h-5 text-black dark:text-black" />
              </button>
            </div>
            <div className="flex gap-2">
              {showFontSelector && (
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors text-black dark:text-black"
                  title="Font Family"
                >
                  {fontFamilies.map((font) => (
                    <option key={font.name} value={font.value}>
                      {font.name}
                    </option>
                  ))}
                </select>
              )}
              {showStyleSelector && (
                <select
                  value={signatureStyle}
                  onChange={(e) => setSignatureStyle(e.target.value)}
                  className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors text-black dark:text-black"
                  title="Signature Style"
                >
                  {signatureStyles.map((style) => (
                    <option key={style.name} value={style.value}>
                      {style.name}
                    </option>
                  ))}
                </select>
              )}
              {showColorPalette && (
                <div className="relative" ref={colorPaletteRef}>
                  <button
                    onClick={toggleColorPalette}
                    className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
                    title="Signature Color"
                  >
                    <PaletteIcon className="w-5 h-5 text-black dark:text-black" />
                  </button>
                  {isColorPaletteOpen && (
                    <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg p-2 flex gap-2 z-10">
                      {colors.map((c) => (
                        <button
                          key={c}
                          onClick={() => handleColorSelect(c)}
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Signature Preview */}
        <div
          className={\`transition-all duration-500 \${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }\`}
        >
          <div className="font-mono text-sm text-zinc-400 tracking-wide mb-4 ">
            {signedByText}
          </div>
          <div className="signature-container relative ">
            <svg
              ref={signatureRef}
              viewBox="0 0 300 100"
              className="w-full h-24"
            >
              <text
                x="10"
                y="60"
                fontFamily={fontFamily}
                fontSize={size}
                fill={color}
                className="signature-text"
              >
                {name}
              </text>
              <path
                d={generateSignaturePath()}
                fill="none"
                stroke={color}
                strokeWidth="2"
                className="signature-path"
                transform="translate(0, 20)"
              />
            </svg>
            {showSizeSlider && (
              <input
                type="range"
                min={minSize}
                max={maxSize}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="absolute bottom-0 left-0 w-full py-20 bg-transparent hover:bg-transparent"
              />
            )}
          </div>
        </div>

        {/* Copy Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={copySignature}
            className={\`
              px-4 py-2 rounded-full bg-black text-white flex items-center gap-2 
               
              hover:bg-zinc-800 transition-colors
              \${isCopied ? "bg-green-500 hover:bg-green-600" : ""}
            \`}
          >
            {isCopied ? (
              <>
                <CheckIcon className="w-4 h-4" />
                {copiedText}
              </>
            ) : (
              <>
                <CopyIcon className="w-4 h-4" />
                {copyText}
              </>
            )}
          </button>
        </div>
      </div>

      <style jsx global>{\`
        @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Great+Vibes&family=Alex+Brush&display=swap");

        .signature-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: sign \${animationDuration}ms forwards
            cubic-bezier(0.4, 0, 0.2, 1);
        }

        .signature-text {
          opacity: 0;
          animation: fadeIn \${animationDuration / 2}ms forwards
            \${animationDuration / 4}ms;
        }

        @keyframes sign {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .signature-container {
          position: relative;
          overflow: hidden;
        }

        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 2px;
          background: #ddd;
          outline: none;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .signature-container:hover input[type="range"] {
          opacity: 1;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 12px;
          height: 12px;
          background: #000;
          cursor: pointer;
          border-radius: 50%;
        }

        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: #000;
          cursor: pointer;
          border-radius: 50%;
        }
      \`}</style>
    </div>
  )
}
`

  return (
    <div className="flex flex-wrap justify-start gap-4 pb-10 max-w-full min-w-full px-0 lg:px-20">
      <div className="w-full sm:w-1/2 p-2 mt-3 space-y-4 lg:mt-5 md:lg-5">
        <CardTitle className="text-3xl tracking-tight leading-7">
          Signature Animation
        </CardTitle>
        <CardDescription className="text-balance text-lg text-muted-foreground">
          An interactive component with signature animation effect and
          customizable props.
        </CardDescription>
      </div>

      {/* <Tabs defaultValue="preview" className="relative mr-auto w-full z-0">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none bg-transparent p-0 z-50">
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
            <TabsTrigger
              value="props"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none dark:text-gray-300 dark:data-[state=active]:text-white"
            >
              Props
            </TabsTrigger>
          </TabsList>
        </div> */}

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
          <TabsTrigger
              value="props"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none dark:text-gray-300 dark:data-[state=active]:text-white"
            >
              Props
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
          <div className="flex items-center justify-center max-w-full mx-auto px-4 py-0.5 border rounded-lg h-auto p-20">
            <Button
              onClick={() => setKey((prev) => prev + 1)}
              className="absolute right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
              variant="ghost"
            >
              <RotateCcw size={16} />
            </Button>
            <div>
              <AdvancedSignatureCreatorComponent
                signButtonColor="#000000"
                signButtonTextColor="#ffffff"
                initialName="John Doe"
                placeholder="Type your full name"
                signButtonText="Create Signature"
                copiedText="Signature Copied!"
                copyText="Copy to Clipboard"
                signedByText="SIGNATURE:"
                onSign={handleSign}
                onCopy={handleSignCopy}
                showColorPalette={true}
                showFontSelector={true}
                showStyleSelector={true}
                showSizeSlider={true}
                animationDuration={1500}
                className="rounded-lg bg-white p-6"
                fontFamilies={[
                  { name: "Elegant", value: '"Great Vibes", cursive' },
                  { name: "Modern", value: '"Roboto", sans-serif' },
                  { name: "Classic", value: '"Times New Roman", serif' },
                ]}
                signatureStyles={[
                  { name: "Simple", value: "simple" },
                  { name: "Wavy", value: "wave" },
                  { name: "None", value: "none" },
                ]}
                colors={["#000000", "#0000FF", "#008000", "#FF0000", "#800080"]}
                initialSize={40}
                minSize={20}
                maxSize={80}
              />
            </div>
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
                  {`import AdvancedSignatureCreatorComponent from '@/components/easyui/signature-animation';
import React from 'react'

function MyComponent() {
 const handleSign = (signature: string) => {
    console.log('Signature created:', signature)
  }

  const handleSignCopy = (signature: string) => {
    console.log('Signature copied:', signature)
  }

  return (
    <AdvancedSignatureCreatorComponent
                signButtonColor="#000000"
                signButtonTextColor="#ffffff"
                initialName="John Doe"
                placeholder="Type your full name"
                signButtonText="Create Signature"
                copiedText="Signature Copied!"
                copyText="Copy to Clipboard"
                signedByText="SIGNATURE:"
                onSign={handleSign}
                onCopy={handleSignCopy}
                showColorPalette={true}
                showFontSelector={true}
                showStyleSelector={true}
                showSizeSlider={true}
                animationDuration={1500}
                className="rounded-lg bg-white p-6"
                fontFamilies={[
                  { name: 'Elegant', value: '"Great Vibes", cursive' },
                  { name: 'Modern', value: '"Roboto", sans-serif' },
                  { name: 'Classic', value: '"Times New Roman", serif' },
                ]}
                signatureStyles={[
                  { name: 'Simple', value: 'simple' },
                  { name: 'Wavy', value: 'wave' },
                  { name: 'None', value: 'none' },
                ]}
                colors={['#000000', '#0000FF', '#008000', '#FF0000', '#800080']}
                initialSize={40}
                minSize={20}
                maxSize={80}                
        />
  )
}

export default MyComponent
`}
                </code>
              </pre>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="props" className="relative rounded-md">
          <div className="w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Prop</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Default</TableHead>
                  <TableHead className="min-w-[300px]">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {props.map((prop) => (
                  <TableRow key={prop.name}>
                    <TableCell className="font-medium">{prop.name}</TableCell>
                    <TableCell>{prop.type}</TableCell>
                    <TableCell>{prop.default}</TableCell>
                    <TableCell>{prop.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
          {`npx shadcn@latest add "https://easyui.pro/components-json/signature-animation.json"`}
        </code>
      </pre>
    </div>
  </div>
</TabsContent>
<TabsContent value="manual">
  <div className="pl-4">
    <p className="mt-0 font-semibold leading-7 tracking-tight mb-5">Copy and paste the following code into your <span className="italic font-normal">Components/easyui/signature-animation.tsx</span></p>
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
