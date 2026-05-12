import { motion } from 'framer-motion'
import { honorContent } from '../content/birthdayContent'
import { SectionWrapper } from './SectionWrapper'

export function WordsOfHonor() {
  return (
    <SectionWrapper id="honor" eyebrow={honorContent.sectionEyebrow}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-medium text-cream light:text-ink md:text-5xl">
          {honorContent.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-cream/70 light:text-inkMuted md:text-lg">{honorContent.intro}</p>
      </div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div
          className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-gold/50 via-white/15 to-transparent md:left-[15px] light:via-navy/15"
          aria-hidden
        />
        <ul className="space-y-10">
          {honorContent.honors.map((h, i) => (
            <motion.li
              key={h.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-6 md:gap-8"
            >
              <div className="relative z-10 mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-midnight shadow-glow md:h-8 md:w-8 light:border-gold/50 light:bg-white light:shadow-md">
                <span className="h-2 w-2 rounded-full bg-gold-soft light:bg-amber-600" />
              </div>
              <div className="glass-panel flex-1 p-6 md:p-8">
                <h3 className="font-display text-2xl text-gradient-gold md:text-3xl">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70 light:text-inkMuted md:text-base">{h.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
