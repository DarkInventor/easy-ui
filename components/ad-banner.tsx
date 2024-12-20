"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const AdBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 10000) // Close after 10 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 sm:bottom-4 sm:right-4 sm:left-auto w-full sm:w-72 md:w-80 border-t sm:border sm:rounded-lg shadow-lg bg-white overflow-hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-700"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="p-4">
            <div className="sm:block hidden">
              <h2 className="text-lg font-bold mb-2 text-gray-800">
                Need Custom Development?
              </h2>
              <p className="text-sm mb-2 text-gray-600">
                We&apos;ve got you covered!
              </p>
              <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600">
                <li>Custom landing pages</li>
                <li>Full-stack web applications</li>
                <li>Complete software solutions</li>
                <li>24/7 expert support</li>
              </ul>
            </div>
            <div className="sm:hidden flex items-center justify-between">
              <div className="flex-1 mr-4">
                <h2 className="text-base font-bold text-gray-800 leading-tight">
                  Need Custom Development?
                </h2>
                <p className="text-xs text-gray-600 mt-1">
                  We&apos;ve got you covered!
                </p>
              </div>
              <motion.button
                className="flex-shrink-0 px-3 py-2 text-xs bg-black hover:bg-gray-700 text-white rounded whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://mvp.easyui.pro/", "_blank")}
              >
                Get Started
              </motion.button>
            </div>
            <motion.button
              className="w-full mt-4 py-2 text-sm bg-black hover:bg-gray-800 text-white rounded sm:block hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://mvp.easyui.pro/", "_blank")}
            >
              Get Started Now
            </motion.button>
            <p className="text-center mt-2 text-xs text-gray-500 sm:block hidden">
              Simple pricing, no hidden fees
            </p>
          </div>
          <motion.button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClose}
          >
            ✕
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AdBanner