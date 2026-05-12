import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { closingContent } from '../content/birthdayContent'

export function EasterEgg() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-gold/50 backdrop-blur-sm transition hover:border-gold/30 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft light:border-navy/20 light:bg-white light:text-amber-900 light:shadow-md"
        aria-label="Small surprise"
        title=""
        initial={{ opacity: 0.35 }}
        whileHover={{ opacity: 1, scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <span aria-hidden>✦</span>
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center bg-midnight/80 p-6 backdrop-blur-sm light:bg-navy/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="egg-title"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              className="max-w-md rounded-2xl border border-gold/25 bg-navy/95 px-8 py-8 text-center shadow-card light:border-gold/30 light:bg-white light:shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <p id="egg-title" className="font-display text-2xl italic text-cream light:text-ink">
                {closingContent.easterEggMessage}
              </p>
              <button
                type="button"
                className="mt-6 text-sm text-gold-soft underline-offset-4 hover:underline light:text-[#4a3a0f]"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
