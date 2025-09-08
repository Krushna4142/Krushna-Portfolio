"use client"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IconSun, IconMoon } from '@tabler/icons-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setIsDark(theme === 'dark')
      document.documentElement.classList.toggle('dark', theme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newTheme)
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <IconSun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300" />
          ) : (
            <IconMoon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
          )}
        </motion.div>
      </motion.button>
    </div>
  )
}
