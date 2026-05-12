import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { themeContent } from '../content/birthdayContent'
import { useTheme } from './ThemeProvider'
import { dismissThemeNudge, isThemeNudgeDismissed } from '../utils/themeNudgeStorage'

export function ThemeNudge({ visible }) {
  const { isLight } = useTheme()
  const [dismissed, setDismissed] = useState(() => isThemeNudgeDismissed())

  const show = visible && !isLight && !dismissed

  return (
    <AnimatePresence>
      {show ? (
        <motion.aside
          key="nudge"
          role="note"
          initial={{ opacity: 0, x: 24, filter: 'blur(4px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: 16 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className="fixed right-4 top-[4.25rem] z-[58] max-w-[min(calc(100vw-2rem),20rem)] md:right-6 md:top-[4.5rem] md:max-w-sm"
        >
          <div className="relative rounded-2xl border border-gold/25 bg-navy/92 p-4 pr-11 text-left shadow-card backdrop-blur-md">
            <button
              type="button"
              onClick={() => {
                dismissThemeNudge()
                setDismissed(true)
              }}
              className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full text-cream/50 transition hover:bg-white/10 hover:text-cream"
              aria-label="Dismiss"
            >
              <IoClose className="h-5 w-5" />
            </button>
            <p className="font-display text-lg italic leading-snug text-cream/95">
              {themeContent.lightModeNudge}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold-soft/80">
              {themeContent.lightModeNudgeHint}
            </p>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  )
}
