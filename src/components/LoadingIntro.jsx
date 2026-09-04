import { motion, AnimatePresence } from 'framer-motion'
import { siteMeta } from '../content/birthdayContent'

export function LoadingIntro({ visible }) {
  const lines = siteMeta.loadingLines ?? [siteMeta.loadingLine]

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-midnight"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full max-w-md px-6 font-mono text-sm text-cream/70">
            <p className="mb-6 text-gold-soft/90">
              {siteMeta.fromName.toLowerCase()}@surprise:~$ {siteMeta.loadingLine}
            </p>
            <ul className="space-y-2">
              {lines.map((line, i) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + i * 0.28, duration: 0.4 }}
                  className="flex gap-3"
                >
                  <span className="text-emerald-400/90">ok</span>
                  <span>{line}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
