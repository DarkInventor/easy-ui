"use client"

import React, { useEffect, useRef, useState } from "react"
import confetti from "canvas-confetti"
import { AnimatePresence, motion, useAnimation } from "framer-motion"

enum SubmitState {
  Default,
  Sending,
  Done,
}

enum Label {
  Sending = "Sending…",
  Sent = "Sent",
  Submit = "Submit",
}

interface IdeaFormProps {
  maxChars?: number
  placeholders?: string[]
  backgroundColor?: string
  textColor?: string
  accentColor?: string
  onSubmit?: (idea: string) => Promise<void>
  submitDelay?: number
  confettiConfig?: confetti.Options
  buttonText?: string
  onLog?: (idea: string) => void // New prop for custom logging
}

export default function IdeaForm({
  maxChars = 500,
  placeholders = ["What's on your mind?", "Any bright ideas?"],
  backgroundColor = "bg-black dark:bg-white",
  textColor = "text-white dark:text-black",
  accentColor = "bg-yellow-400",
  onSubmit,
  submitDelay = 1000,
  confettiConfig = {
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  },
  buttonText = "Share your thoughts",
  onLog, // New prop for custom logging
}: IdeaFormProps) {
  const [expanded, setExpanded] = useState(false)
  const [idea, setIdea] = useState("")
  const [submitState, setSubmitState] = useState(SubmitState.Default)
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const iconControls = useAnimation()

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        formRef.current &&
        !formRef.current.contains(e.target as Node) &&
        submitState === SubmitState.Default
      ) {
        setExpanded(false)
      }
    }

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && submitState === SubmitState.Default) {
        setExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    document.addEventListener("keydown", handleEscKey)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [submitState])

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [placeholders])

  useEffect(() => {
    const pulseAnimation = async () => {
      await iconControls.start({ scale: 1.2, transition: { duration: 0.3 } })
      await iconControls.start({ scale: 1, transition: { duration: 0.3 } })
    }
    pulseAnimation()
    const interval = setInterval(pulseAnimation, 3000)
    return () => clearInterval(interval)
  }, [iconControls])

  const handleToggle = () => {
    setExpanded(!expanded)
    if (!expanded) {
      setTimeout(() => textareaRef.current?.focus(), 0)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitState !== SubmitState.Default) return

    // Console log the textarea text
    console.log(idea)

    // Use the custom logging function if provided
    if (onLog) {
      onLog(idea)
    }

    setSubmitState(SubmitState.Sending)

    if (onSubmit) {
      await onSubmit(idea)
    } else {
      await new Promise((resolve) => setTimeout(resolve, submitDelay))
    }

    setSubmitState(SubmitState.Done)

    confetti(confettiConfig)

    await new Promise((resolve) => setTimeout(resolve, 600))
    setExpanded(false)
    setTimeout(() => {
      setIdea("")
      setSubmitState(SubmitState.Default)
    }, 300)
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`relative w-[250px] overflow-hidden rounded-[1em] shadow-lg ${
        expanded ? "bg-transparent" : `${backgroundColor} ${textColor}`
      }`}
      animate={{ height: expanded ? 200 : 46 }}
      transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1.35] }}
    >
      <motion.svg
        className="absolute top-3 left-3 w-6 h-6 text-current"
        viewBox="0 0 32 32"
        aria-hidden="true"
        animate={iconControls}
      >
        <g fill="currentColor">
          <path d="M16,2A10,10,0,0,0,6,12a9.19,9.19,0,0,0,3.46,7.62c1,.93,1.54,1.46,1.54,2.38h2c0-1.84-1.11-2.87-2.19-3.86A7.2,7.2,0,0,1,8,12a8,8,0,0,1,16,0,7.2,7.2,0,0,1-2.82,6.14c-1.07,1-2.18,2-2.18,3.86h2c0-.92.53-1.45,1.54-2.39A9.18,9.18,0,0,0,26,12,10,10,0,0,0,16,2Z" />
          <rect x="11" y="24" width="10" height="1" />
          <rect x="13" y="28" width="6" height="1" />
        </g>
      </motion.svg>
      <motion.button
        type="button"
        onClick={handleToggle}
        className={`absolute inset-0 flex items-center pl-12 text-sm uppercase tracking-wider ${textColor}`}
        animate={{ opacity: expanded ? 0 : 1 }}
        transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
      >
        {buttonText}
      </motion.button>
      <motion.div
        className={`absolute inset-0 w-full h-full ${accentColor}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: expanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
        style={{ transformOrigin: "top" }}
      />
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-0 pt-6 pb-3 px-4 pl-20"
          >
            <label htmlFor="my-idea" className="sr-only">
              Idea
            </label>
            <textarea
              ref={textareaRef}
              id="my-idea"
              className="w-full h-24 bg-transparent text-black placeholder-gray-600 resize-none focus:outline-none"
              placeholder={placeholders[placeholderIndex]}
              value={idea}
              onChange={(e) => setIdea(e.target.value.slice(0, maxChars))}
              disabled={submitState !== SubmitState.Default}
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-gray-600">
                {idea.length}/{maxChars}
              </span>
              <button
                type="submit"
                className={`px-4 py-2 ${backgroundColor} ${textColor} rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-30 transition-all duration-300 ease-in-out hover:bg-opacity-80`}
                disabled={
                  idea.length === 0 || submitState !== SubmitState.Default
                }
              >
                {submitState === SubmitState.Sending
                  ? Label.Sending
                  : submitState === SubmitState.Done
                  ? Label.Sent
                  : Label.Submit}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  )
}


