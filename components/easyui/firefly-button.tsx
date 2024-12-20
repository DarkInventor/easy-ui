"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface FireflyButtonProps {
  text: string;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  glowColor?: string;
  fireflyCount?: number;
  fontSize?: string;
  padding?: string;
  className?: string;
}

export default function FireflyButton({
  text,
  onClick,
  backgroundColor = '#FFEB3B',
  textColor = '#000000',
  glowColor = '#FDFCA9',
  fireflyCount = 7,
  fontSize = '1rem',
  padding = '1rem 2rem',
  className = '',
}: FireflyButtonProps) {
  const dotVariants = {
    hover: { x: 0, y: 0 },
    initial: (i: number) => ({
      x: `var(--starting-x-${i})`,
      y: `var(--starting-y-${i})`
    })
  }

  const fireflyVariants = {
    hover: {
      opacity: 1,
      scale: 1.2,
      transition: {
        duration: 0.2
      }
    },
    initial: {
      opacity: 0,
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: `0px 0px 30px 5px ${glowColor}, 0px 0px 30px 5px ${glowColor} inset`,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    initial: {
      scale: 1,
      boxShadow: `0px 0px 24px 0px ${glowColor}, 0px 0px 23px 0px ${glowColor} inset, 0px 0px 8px 0px ${glowColor}42`
    }
  }

  return (
    <motion.button
      className={`relative inline-block ${className}`}
      whileHover="hover"
      initial="initial"
      onClick={onClick}
    >
      {[...Array(fireflyCount)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute block"
          variants={dotVariants}
          custom={i + 1}
          style={{
            // @ts-ignore
            '--starting-x-1': '30px',
            '--starting-y-1': '20px',
            '--starting-x-2': '40px',
            '--starting-y-2': '10px',
            '--starting-x-3': '-10px',
            '--starting-y-3': '20px',
            '--starting-x-4': '-30px',
            '--starting-y-4': '-5px',
            '--starting-x-5': '-40px',
            '--starting-y-5': '-20px',
            '--starting-x-6': '12px',
            '--starting-y-6': '-18px',
            '--starting-x-7': '6px',
            '--starting-y-7': '-20px',
            width: `${[6, 3, 4, 2, 5, 4, 3][i % 7]}px`,
            height: `${[6, 3, 4, 2, 5, 4, 3][i % 7]}px`,
            top: `${[2, 1, -8, 'auto', 'auto', 'auto', 'auto'][i % 7]}px`,
            bottom: `${['auto', 'auto', 'auto', 4, -6, -12, -16][i % 7]}px`,
            left: `${[-16, 0, 'auto', 'auto', 'auto', 30, 44][i % 7]}px`,
            right: `${['auto', 'auto', 14, -14, -3, 'auto', 'auto'][i % 7]}px`,
            opacity: `${[0.7, 0.7, 1, 0.9, 1, 0.7, 1][i % 7]}`,
          }}
        >
          <motion.span
            className="block w-full h-full rounded-full"
            variants={fireflyVariants}
            style={{
              backgroundColor: glowColor,
              boxShadow: `0px 0px 6px 0px ${glowColor}, 0px 0px 4px 0px ${glowColor} inset, 0px 0px 2px 1px ${glowColor}42`
            }}
            animate={{
              x: [0, 3, -2, 2, -1, 0, -3, 0],
              y: [0, 1, 3, -2, 0, 2, -1, 0],
              transition: {
                duration: [14, 16, 20, 18, 22, 15, 19][i % 7],
                repeat: Infinity,
                ease: 'linear'
              }
            }}
          />
        </motion.span>
      ))}
      <motion.span
        className="relative z-10 inline-block rounded-full"
        variants={buttonVariants}
        style={{
          backgroundColor,
          color: textColor,
          padding,
          fontSize,
        }}
      >
        {text}
      </motion.span>
    </motion.button>
  )
}