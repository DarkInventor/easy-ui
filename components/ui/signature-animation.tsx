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
        path = `M10,${height} L${width - 10},${height}`
        break
      case "wave":
        path = `M10,${height} Q${width / 4},${height - 10} ${
          width / 2
        },${height} T${width - 10},${height}`
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

        const htmlContent = `
          <div style="font-family: ${fontFamily};">
            <img src="${pngUrl}" alt="${name}'s signature" style="max-width: 100%;">
          </div>
        `

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
      className={`min-h-screen flex items-center justify-center p-4 ${className}`}
      style={{ backgroundColor }}
    >
      <div className="w-full max-w-[500px] bg-transparent dark:text-white backdrop-blur-xl p-6 md:p-8 shadow-xl border rounded-2xl">
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
              className={`
                px-4 md:px-6 m-2 rounded-full flex items-center gap-0
                transition-all duration-300 font-mono text-sm tracking-wide text-black dark:text-black
                ${
                  isActive
                    ? "opacity-100 hover:opacity-80"
                    : "opacity-50 cursor-not-allowed"
                }
                ${isSigning ? "scale-95" : ""}
              `}
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
          className={`transition-all duration-500 ${
            isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
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
            className={`
              px-4 py-2 rounded-full bg-black text-white flex items-center gap-2 
              hover:bg-zinc-800 transition-colors
              ${isCopied ? "bg-green-500 hover:bg-green-600" : ""}
            `}
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

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Great+Vibes&family=Alex+Brush&display=swap");

        .signature-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: sign ${animationDuration}ms forwards
            cubic-bezier(0.4, 0, 0.2, 1);
        }

        .signature-text {
          opacity: 0;
          animation: fadeIn ${animationDuration / 2}ms forwards
            ${animationDuration / 4}ms;
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
      `}</style>
    </div>
  )
}
