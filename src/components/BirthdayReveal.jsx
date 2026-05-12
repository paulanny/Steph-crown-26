import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { birthdayReveal } from '../content/birthdayContent'
import { SectionWrapper } from './SectionWrapper'
import { fireSubtleConfetti } from '../utils/confettiBurst'

export function BirthdayReveal() {
  const [imgOk, setImgOk] = useState(true)
  const burstRef = useRef(null)
  const inView = useInView(burstRef, { once: true, margin: '-20%' })
  const [confettiFired, setConfettiFired] = useState(false)

  useEffect(() => {
    if (inView && !confettiFired) {
      fireSubtleConfetti()
      setConfettiFired(true)
    }
  }, [inView, confettiFired])

  return (
    <SectionWrapper id="reveal" eyebrow="The celebration" spacing="wide" className="text-center">
      <motion.div
        ref={burstRef}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl"
      >
        <div className="relative mx-auto mb-12 max-w-xs sm:max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/25 via-transparent to-plum/20 blur-xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-2 shadow-card light:border-navy/12 light:bg-white/70 light:shadow-[0_25px_50px_-12px_rgba(18,26,46,0.12)]">
            {imgOk ? (
              <img
                src={birthdayReveal.mentorPhotoSrc}
                alt={birthdayReveal.mentorPhotoAlt}
                className="aspect-[4/5] w-full rounded-2xl object-cover"
                onError={() => setImgOk(false)}
                loading="lazy"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-midnight px-6 text-center light:from-[#e4ddd4] light:to-[#d4cdc2]">
                <p className="font-display text-lg text-gold-soft light:text-[#4a3a0f]">Photo placeholder</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/60 light:text-inkMuted">
                  {/* REPLACE: place portrait at public/images/mentor-main.jpg */}
                  <span className="text-gold/80 light:text-[#4a3a0f]">mentor-main.jpg</span> in{' '}
                  <code className="text-cream/50 light:bg-ink/5 light:text-inkSoft">public/images/</code> — then refresh. Portrait ratio
                  works best.
                </p>
              </div>
            )}
          </div>
        </div>

        <motion.h1
          className="font-display text-5xl font-semibold tracking-tight text-gradient-gold md:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          {birthdayReveal.heading}
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl font-display text-2xl italic text-cream/90 light:text-ink md:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          {birthdayReveal.tagline}
        </motion.p>

        <motion.p
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-cream/75 light:text-inkMuted md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.28 }}
        >
          {birthdayReveal.lead}
        </motion.p>

        <motion.p
          className="mx-auto mt-10 text-sm uppercase tracking-[0.28em] text-gold/70 light:text-[#4a3a0f]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
        >
          {birthdayReveal.footerLine}
        </motion.p>
      </motion.div>
    </SectionWrapper>
  )
}
