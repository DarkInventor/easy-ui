"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useTheme } from 'next-themes';

interface AnimatedSubscribeButtonProps {
  buttonTextColor?: string;
  subscribeStatus: boolean;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
}) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);
  const { theme, systemTheme, resolvedTheme } = useTheme();

  // Adjust button color based on the effective theme, defaulting to white for dark themes or unspecified themes, and black for light themes
  const effectiveTheme = resolvedTheme || (theme === 'system' ? systemTheme : theme);
  const buttonColor = effectiveTheme === "light" ? "#000000" : "#ffffff"; // Button color changes based on theme
  const textColor = effectiveTheme === "light" ? "#ffffff" : "#000000"; // Text color is inverted based on theme for contrast

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
        className="relative flex w-[150px] cursor-pointer items-center justify-center rounded-md border-none p-[5px]"
          onClick={() => setIsSubscribed(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ backgroundColor: buttonColor, color: textColor, borderColor: textColor }}
        >
          <motion.span
            key="action"
            className="relative block h-full w-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex w-[150px] cursor-pointer items-center justify-center rounded-md border-none p-[5px]"
          style={{ backgroundColor: buttonColor, color: textColor }}
          onClick={() => setIsSubscribed(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

