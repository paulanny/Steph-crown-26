import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMoon, HiSun } from 'react-icons/hi2'
import { themeContent } from '../content/birthdayContent'
import { useTheme } from './ThemeProvider'
import { dismissThemeNudge } from '../utils/themeNudgeStorage'

export function ThemeToggle() {
  const { isLight, toggleTheme } = useTheme()
  const [toast, setToast] = useState(false)

  const handleToggle = () => {
    const nextLight = !isLight
    if (nextLight) {
      dismissThemeNudge()
      setToast(true)
      window.setTimeout(() => setToast(false), 4200)
    }
    toggleTheme()
  }

  return (
    <>
      <motion.div
        className="fixed right-4 top-4 z-[60] md:right-6 md:top-5"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        <motion.button
          type="button"
          onClick={handleToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-gold-soft shadow-card backdrop-blur-md transition-colors hover:border-gold/35 hover:bg-white/[0.11] light:border-navy/20 light:bg-white light:text-ink light:shadow-md"
          aria-label={isLight ? themeContent.switchToDarkLabel : themeContent.switchToLightLabel}
          title={isLight ? themeContent.switchToDarkLabel : themeContent.switchToLightLabel}
        >
          {isLight ? <HiMoon className="h-5 w-5" aria-hidden /> : <HiSun className="h-5 w-5" aria-hidden />}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {toast ? (
          <motion.p
            role="status"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-24 left-1/2 z-[60] max-w-[min(90vw,22rem)] -translate-x-1/2 rounded-2xl border border-white/12 bg-navy/92 px-5 py-3 text-center text-sm text-cream/90 shadow-card backdrop-blur-md light:border-navy/15 light:bg-white light:text-inkMuted"
          >
            {themeContent.lightModeOnAcknowledgment}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </>
  )
}
