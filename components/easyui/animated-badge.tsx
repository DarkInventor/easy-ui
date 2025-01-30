"use client";

import React from 'react'
import { cn } from '@/lib/utils'

interface AnimatedBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  bgColor?: string
  textColor?: string
  gradientColor?: string
  animationDuration?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function AnimatedBadge({
  text,
  bgColor = 'bg-green-900',
  textColor = 'text-green-300',
  gradientColor = 'from-transparent via-emerald-600 to-transparent',
  animationDuration = '4s',
  size = 'md',
  className,
  ...props
}: AnimatedBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  return (
    <div
      className={cn(
        "relative inline-block overflow-hidden rounded-full p-[0.125em]",
        bgColor,
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t",
          gradientColor
        )}
        style={{
          animation: `spin ${animationDuration} linear infinite`,
        }}
      />
      <div
        className={cn(
          "relative cursor-pointer rounded-full px-[0.75em] py-[0.0625em] font-medium",
          sizeClasses[size],
          textColor,
          bgColor
        )}
      >
        {text}
      </div>
    </div>
  )
}

