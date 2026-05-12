import { motion, AnimatePresence } from 'framer-motion'
import { siteMeta } from '../content/birthdayContent'

export function LoadingIntro({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-midnight light:bg-[#f0ebe3]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent"
            initial={{ scaleX: 0.2, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            className="mt-8 max-w-sm text-center font-display text-xl italic text-cream/85 light:text-ink md:text-2xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            {siteMeta.loadingLine}
          </motion.p>
          <motion.p
            className="mt-3 text-sm text-white/40 light:text-inkSoft"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            From {siteMeta.fromName}
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
