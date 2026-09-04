import { motion } from 'framer-motion'
import { brotherhoodContent } from '../content/birthdayContent'
import { SectionWrapper } from './SectionWrapper'

export function BrotherhoodSection() {
  return (
    <SectionWrapper id="covenant" eyebrow={brotherhoodContent.sectionEyebrow}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-medium text-cream md:text-5xl">
          {brotherhoodContent.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg">
          {brotherhoodContent.intro}
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel px-6 py-8 text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold-soft/80">
            {brotherhoodContent.leftLabel}
          </p>
          <p className="mt-3 font-display text-3xl text-cream md:text-4xl">{brotherhoodContent.leftPhrase}</p>
          <p className="mt-2 text-sm text-cream/50">{brotherhoodContent.leftNote}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="glass-panel px-6 py-8 text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold-soft/80">
            {brotherhoodContent.rightLabel}
          </p>
          <p className="mt-3 font-display text-3xl text-cream md:text-4xl">{brotherhoodContent.rightPhrase}</p>
          <p className="mt-2 text-sm text-cream/50">{brotherhoodContent.rightNote}</p>
        </motion.div>
      </div>

      <div className="mx-auto mt-12 max-w-2xl space-y-6 text-left text-base leading-relaxed text-cream/75 md:text-lg">
        {brotherhoodContent.body.map((p) => (
          <motion.p
            key={p.slice(0, 24)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8%' }}
            transition={{ duration: 0.5 }}
          >
            {p}
          </motion.p>
        ))}
      </div>
    </SectionWrapper>
  )
}
