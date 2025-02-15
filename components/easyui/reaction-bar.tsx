"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

import { cn } from "@/lib/utils"

const reactionBarVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 w-10",
        sm: "h-8 w-8",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface Reaction {
  id: string
  emoji: string
  label: string
  color: string
}

export interface ReactionBarProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof reactionBarVariants> {
  reactions: Reaction[]
  defaultReaction?: Reaction
  onReactionSelect?: (reaction: Reaction | null) => void
  popoverPosition?: "top" | "bottom"
  showLabel?: boolean
  imageSize?: number
  emojiSize?: number
  popoverClassName?: string
  defaultImage?: string
}

const ReactionBar = React.forwardRef<HTMLButtonElement, ReactionBarProps>(
  (
    {
      className,
      variant,
      size,
      reactions,
      defaultReaction,
      onReactionSelect,
      popoverPosition = "top",
      showLabel = false,
      imageSize = 20,
      emojiSize = 24,
      popoverClassName,
      defaultImage,
      ...props
    },
    ref,
  ) => {
    const [selectedReaction, setSelectedReaction] = React.useState<Reaction | null>(null)
    const [isHovering, setIsHovering] = React.useState(false)
    const [isMobileOpen, setIsMobileOpen] = React.useState(false)

    const handleReactionSelect = (reaction: Reaction) => {
      const newReaction = reaction.id === selectedReaction?.id ? null : reaction
      setSelectedReaction(newReaction)
      setIsHovering(false)
      setIsMobileOpen(false)
      onReactionSelect?.(newReaction)
    }

    const handleClick = (e: React.MouseEvent) => {
      if (window.innerWidth < 768) {
        e.preventDefault()
        setIsMobileOpen(!isMobileOpen)
      } else {
        handleReactionSelect(selectedReaction || defaultReaction || reactions[0])
      }
    }

    const renderContent = () => {
      if (defaultImage && !selectedReaction) {
        return (
          <Image
            src={defaultImage || "/placeholder.svg"}
            alt=""
            width={imageSize}
            height={imageSize}
            className="object-cover rounded-full"
          />
        )
      }
      return (
        <motion.span
          initial={{ scale: 1 }}
          animate={{ scale: selectedReaction ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          style={{ fontSize: `${emojiSize}px`, display: "inline-block" }}
        
        >
          {selectedReaction ? selectedReaction.emoji : defaultReaction?.emoji || "👍"}
        </motion.span>
      )
    }

    return (
      <div className="relative inline-block">
        {/* @ts-ignore */}
        <motion.button
          className={cn(reactionBarVariants({ variant, size, className }))}
          ref={ref}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handleClick}
          aria-label={selectedReaction ? selectedReaction.label : defaultReaction?.label || "React"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...props}
        >
          {renderContent()}
          {showLabel && <span className="ml-2">{(selectedReaction || defaultReaction || reactions[0]).label}</span>}
        </motion.button>

        <AnimatePresence>
          {(isHovering || isMobileOpen) && (
            <motion.div
              initial={{ opacity: 0, y: popoverPosition === "top" ? 10 : -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: popoverPosition === "top" ? 10 : -10 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "absolute left-0 bg-popover rounded-full shadow-lg flex p-1.5 z-50",
                "dark:bg-popover-dark",
                popoverPosition === "top" ? "bottom-full mb-2" : "top-full mt-2",
                "md:w-auto w-[200px] md:flex-nowrap flex-wrap justify-center",
                popoverClassName,
              )}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {reactions.map((reaction) => (
                <motion.button
                  key={reaction.id}
                  className={cn(
                    "p-2 rounded-full transition-all",
                    selectedReaction?.id === reaction.id && "bg-accent dark:bg-accent-dark",
                  )}
                  style={{
                    background: selectedReaction?.id === reaction.id ? `${reaction.color}20` : "transparent",
                  }}
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: `${reaction.color}30`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleReactionSelect(reaction)
                  }}
                  aria-label={reaction.label}
                >
                  <motion.span
                    style={{ fontSize: `${emojiSize}px`, display: "inline-block" }}
                    whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {reaction.emoji}
                  </motion.span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  },
)
ReactionBar.displayName = "ReactionBar"

export { ReactionBar, reactionBarVariants }

