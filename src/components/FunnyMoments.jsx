import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { funnyMomentsContent } from '../content/birthdayContent'
import { SectionWrapper } from './SectionWrapper'

export function FunnyMoments() {
  const [index, setIndex] = useState(0)
  const quotes = funnyMomentsContent.quotes

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length)
    }, 6500)
    return () => window.clearInterval(t)
  }, [quotes.length])

  const active = quotes[index]

  return (
    <SectionWrapper id="funny" eyebrow={funnyMomentsContent.sectionEyebrow}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-medium text-cream light:text-ink md:text-5xl">
          {funnyMomentsContent.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-cream/70 light:text-inkMuted md:text-lg">
          {funnyMomentsContent.intro}
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-2xl">
        <div className="absolute -left-4 top-8 text-gold/20 light:text-ink/12 md:-left-10" aria-hidden>
          <HiOutlineChatBubbleBottomCenterText className="h-24 w-24 md:h-32 md:w-32" />
        </div>
        <div className="glass-panel relative min-h-[200px] overflow-hidden px-8 py-12 md:px-12 md:py-14">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.id}
              initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-center font-display text-2xl italic leading-snug text-cream light:text-ink md:text-3xl"
            >
              “{active.text}”
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {quotes.map((q, i) => (
              <button
                key={q.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-gold' : 'w-2 bg-white/20 hover:bg-white/35 light:bg-navy/20 light:hover:bg-navy/35'
                }`}
                aria-label={`Show quote ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
