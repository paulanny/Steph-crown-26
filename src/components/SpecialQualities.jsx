import { motion } from 'framer-motion'
import { FaBookOpen, FaHeart, FaHandsPraying, FaPeopleGroup } from 'react-icons/fa6'
import { BsShieldCheck } from 'react-icons/bs'
import { HiSparkles } from 'react-icons/hi2'
import { qualitiesContent } from '../content/birthdayContent'
import { SectionWrapper } from './SectionWrapper'

const ICON_MAP = {
  wisdom: FaBookOpen,
  heart: FaHeart,
  discipline: BsShieldCheck,
  impact: HiSparkles,
  mentor: FaPeopleGroup,
  spiritual: FaHandsPraying,
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function SpecialQualities() {
  return (
    <SectionWrapper id="qualities" eyebrow={qualitiesContent.sectionEyebrow}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-medium text-cream light:text-ink md:text-5xl">
          {qualitiesContent.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/70 light:text-inkMuted md:text-lg">
          {qualitiesContent.intro}
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {qualitiesContent.cards.map((card, i) => {
          const Icon = ICON_MAP[card.iconKey] || FaBookOpen
          return (
            <motion.article
              key={card.id}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-8%' }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              className="glass-panel group relative flex flex-col p-7 shadow-card"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-gold-soft transition-colors group-hover:border-gold/40 group-hover:bg-gold/15 light:border-amber-800/30 light:bg-amber-100 light:text-amber-950 light:shadow-sm light:group-hover:border-amber-800/50 light:group-hover:bg-amber-50">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-display text-2xl text-cream light:text-ink">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/65 light:text-inkMuted md:text-base">
                {card.body}
              </p>
            </motion.article>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
