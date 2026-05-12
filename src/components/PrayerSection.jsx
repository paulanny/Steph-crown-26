import { motion } from 'framer-motion'
import { prayerContent } from '../content/birthdayContent'
import { SectionWrapper } from './SectionWrapper'

const lineVariant = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.04 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function PrayerSection() {
  return (
    <SectionWrapper
      id="prayer"
      eyebrow={prayerContent.sectionEyebrow}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent py-24 light:border-navy/10 light:from-white/70 light:to-transparent md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201, 162, 39, 0.12), transparent), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(107, 91, 149, 0.1), transparent)',
        }}
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-medium text-cream light:text-ink md:text-5xl">
          {prayerContent.heading}
        </h2>
        <p className="mx-auto mt-5 text-cream/65 light:text-inkMuted md:text-lg">{prayerContent.intro}</p>
      </div>

      <motion.div
        className="relative mx-auto mt-14 max-w-3xl glass-panel px-6 py-10 md:px-12 md:py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.7 }}
      >
        <div className="space-y-6 text-left">
          {prayerContent.lines.map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={lineVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-5%' }}
              className="font-display text-lg leading-relaxed text-cream/90 light:text-inkSoft md:text-xl"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
