import { motion } from 'framer-motion'
import { closingContent } from '../content/birthdayContent'
import { SectionWrapper } from './SectionWrapper'
import { fireCelebrationBurst } from '../utils/confettiBurst'

export function ClosingSection({ onReplay, onSmile }) {
  return (
    <SectionWrapper id="closing" eyebrow="Finale" spacing="wide" className="pb-32">
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="absolute -inset-x-10 -top-10 h-40 bg-gradient-to-b from-gold/10 to-transparent blur-3xl light:from-gold/18" aria-hidden />

        <motion.h2
          className="relative font-display text-4xl font-medium text-cream light:text-ink md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {closingContent.heading}
        </motion.h2>

        <div className="relative mx-auto mt-10 max-w-2xl space-y-6 text-left text-base leading-relaxed text-cream/75 light:text-inkMuted md:text-lg">
          {closingContent.body.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.55 }}
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="relative mx-auto mt-12 max-w-xl rounded-3xl border border-gold/25 bg-gradient-to-br from-white/[0.07] to-transparent px-8 py-10 text-center shadow-glow light:border-gold/30 light:from-white/90 light:to-[#f0ebe3]/80 light:shadow-[0_20px_50px_-12px_rgba(18,26,46,0.1)]"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="font-display text-2xl italic text-gold-soft light:text-[#4a3a0f] md:text-3xl">
            {closingContent.blessingLine}
          </p>
        </motion.div>

        <motion.div
          className="relative mt-14 space-y-3 font-display text-xl text-cream light:text-ink md:text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-cream/80 light:text-inkMuted">{closingContent.signoff}</p>
          <p className="text-gradient-gold text-3xl md:text-4xl">{closingContent.signature}</p>
        </motion.div>

        <motion.div
          className="relative mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              fireCelebrationBurst('center')
              onReplay()
            }}
            className="rounded-full border border-white/20 bg-white/[0.06] px-8 py-3 text-sm font-medium text-cream backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft light:border-navy/20 light:bg-white light:text-ink light:shadow-md"
          >
            {closingContent.replayLabel}
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              fireCelebrationBurst('center')
              onSmile()
            }}
            className="rounded-full bg-gradient-to-r from-gold to-gold-soft px-8 py-3 text-sm font-semibold text-midnight shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight light:focus-visible:ring-offset-[#f3efe6]"
          >
            {closingContent.smileLabel}
          </motion.button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
