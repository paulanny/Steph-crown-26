import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { gateContent } from '../content/birthdayContent'
import { fireCelebrationBurst } from '../utils/confettiBurst'
import { useTypewriter } from '../hooks/useTypewriter'

export function SurpriseHero({ onEnter }) {
  const [promptIndex, setPromptIndex] = useState(0)
  const [noHits, setNoHits] = useState(0)
  const [comment, setComment] = useState('')
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const [opening, setOpening] = useState(false)
  const noLock = useRef(false)

  const prompt = gateContent.prompts[promptIndex]
  const { text: typed, done } = useTypewriter(prompt, 22)

  useEffect(() => {
    if (!done || opening) return undefined
    const id = window.setTimeout(() => {
      setPromptIndex((i) => (i + 1) % gateContent.prompts.length)
    }, 2800)
    return () => window.clearTimeout(id)
  }, [done, opening, prompt])

  const enter = useCallback(() => {
    if (opening) return
    setOpening(true)
    setComment(gateContent.statusOpening)
    fireCelebrationBurst('center')
    window.setTimeout(() => onEnter(), 520)
  }, [onEnter, opening])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Enter') return
      const tag = e.target?.tagName
      if (tag === 'BUTTON' || tag === 'A' || tag === 'INPUT' || tag === 'TEXTAREA') return
      e.preventDefault()
      enter()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [enter])

  const bumpNo = useCallback(() => {
    if (opening || noLock.current) return
    noLock.current = true
    window.setTimeout(() => {
      noLock.current = false
    }, 620)

    setNoHits((prev) => {
      const next = prev + 1
      const comments = gateContent.noComments
      const idx = Math.min(next - 1, comments.length - 1)
      setComment(comments[idx])
      setNoPos({
        x: (Math.random() - 0.5) * 240,
        y: (Math.random() - 0.5) * 150,
      })
      if (next >= gateContent.noEscapeThreshold) {
        window.setTimeout(() => enter(), 1100)
      }
      return next
    })
  }, [enter, opening])

  const status =
    opening
      ? gateContent.statusOpening
      : noHits > 0
        ? gateContent.statusTease
        : gateContent.statusIdle

  return (
    <div
      id="opening"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-90" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(232,213,163,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(232,213,163,0.35) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black, transparent)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-2xl"
      >
        <div className="mb-8 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-gold-soft/80">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
          {gateContent.promptKicker}
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/12 bg-black/35 shadow-card backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <p className="ml-3 font-mono text-xs text-cream/45">
              {gateContent.terminalUser}@{gateContent.terminalHost}:~$ ./open-birthday
            </p>
          </div>

          <div className="px-6 py-10 text-center md:px-10 md:py-12">
            <p className="min-h-[4.5rem] font-display text-3xl font-medium leading-snug tracking-tight text-cream md:min-h-[5.5rem] md:text-5xl md:leading-[1.12]">
              {typed}
              <span className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.08em] animate-pulse bg-gold" />
            </p>
            <p className="mt-5 font-mono text-xs text-cream/40">{status}</p>

            <div className="mt-4 flex justify-center gap-1.5" aria-hidden>
              {gateContent.prompts.map((p, i) => (
                <span
                  key={p}
                  className={`h-1 rounded-full transition-all ${
                    i === promptIndex ? 'w-6 bg-gold' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <div className="relative mt-10 flex min-h-[6.5rem] items-center justify-center">
              <motion.button
                type="button"
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(201, 162, 39, 0.28)' }}
                whileTap={{ scale: 0.98 }}
                onClick={enter}
                disabled={opening}
                className="relative z-10 mr-4 rounded-full bg-gradient-to-r from-gold to-gold-soft px-10 py-4 text-base font-semibold text-midnight shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft focus-visible:ring-offset-2 focus-visible:ring-offset-midnight"
              >
                {gateContent.yesLabel}
              </motion.button>

              <motion.button
                type="button"
                aria-disabled="true"
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: 'spring', stiffness: 420, damping: 22 }}
                onMouseEnter={bumpNo}
                onFocus={bumpNo}
                onPointerDown={(e) => {
                  e.preventDefault()
                  bumpNo()
                }}
                onClick={(e) => {
                  e.preventDefault()
                }}
                className="relative z-[1] cursor-not-allowed rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-base font-medium text-cream/55 backdrop-blur-md"
              >
                {gateContent.noLabel}
              </motion.button>
            </div>

            <p id="hero-hint" className="sr-only">
              {gateContent.yesHint}
            </p>

            <AnimatePresence mode="wait">
              {comment ? (
                <motion.p
                  key={comment}
                  role="status"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mx-auto mt-8 max-w-md font-mono text-sm leading-relaxed text-gold-soft/90"
                >
                  {'> '}
                  {comment}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
