import { motion } from 'framer-motion'
import { commitsContent } from '../content/birthdayContent'
import { SectionWrapper } from './SectionWrapper'

const typeColor = {
  feat: 'text-emerald-400',
  fix: 'text-sky-300',
  chore: 'text-amber-200',
  docs: 'text-gold-soft',
}

export function DevTribute() {
  return (
    <SectionWrapper id="commits" eyebrow={commitsContent.sectionEyebrow}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-medium text-cream md:text-5xl">{commitsContent.heading}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg">
          {commitsContent.intro}
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-card">
        <div className="border-b border-white/10 px-5 py-3 font-mono text-xs text-cream/40">
          git log --oneline friendship
        </div>
        <ul className="divide-y divide-white/10">
          {commitsContent.commits.map((c, i) => (
            <motion.li
              key={c.hash}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="group px-5 py-5 transition-colors hover:bg-white/[0.03] md:px-7"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs">
                <span className="text-gold/80">{c.hash}</span>
                <span className={typeColor[c.type] || 'text-cream/60'}>{c.type}</span>
                <span className="text-cream/90">{c.title}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-cream/60 md:text-base">{c.body}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
