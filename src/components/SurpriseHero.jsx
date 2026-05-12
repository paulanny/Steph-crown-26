import { motion } from 'framer-motion'
import { heroContent } from '../content/birthdayContent'
import { fireCelebrationBurst } from '../utils/confettiBurst'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

const headlineBlock = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 0.02 },
  },
}

const word = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
}

export function SurpriseHero({ onEnter }) {
  const handleEnter = () => {
    fireCelebrationBurst('center')
    onEnter()
  }

  return (
    <div id="opening" className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 py-16 text-center">
      <div
        className="pointer-events-none absolute inset-0 bg-hero-glow opacity-90 light:bg-hero-glow-light light:opacity-100"
        aria-hidden
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl"
      >
        <motion.p
          variants={headlineBlock}
          className="font-display text-4xl font-medium leading-tight tracking-tight text-cream light:text-ink md:text-6xl md:leading-[1.08]"
        >
          {heroContent.headline.split(' ').map((w, i) => (
            <motion.span key={`${w}-${i}`} variants={word} className="mr-[0.2em] inline-block last:mr-0">
              {w}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          variants={item}
          className="mt-6 text-lg text-gold-soft/95 light:text-inkMuted md:text-xl"
        >
          {heroContent.subline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(201, 162, 39, 0.2)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleEnter()}
            className="rounded-full bg-gradient-to-r from-gold to-gold-soft px-10 py-4 text-base font-semibold text-midnight shadow-glow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft focus-visible:ring-offset-2 focus-visible:ring-offset-midnight light:focus-visible:ring-offset-[#f3efe6]"
            aria-describedby="hero-hint"
          >
            {heroContent.ctaPrimary}
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              rotate: [0, -1.2, 1.2, -1, 1, 0],
              y: [0, -2, 0, -1, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            onClick={() => handleEnter()}
            className="rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-base font-medium text-cream backdrop-blur-md transition-colors hover:border-gold/35 hover:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft/80 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight light:border-navy/20 light:bg-white light:text-ink light:shadow-md light:hover:border-gold/45 light:hover:bg-white light:focus-visible:ring-offset-[#f3efe6]"
            aria-describedby="hero-hint"
          >
            {heroContent.ctaPlayful}
          </motion.button>
        </motion.div>
        <p id="hero-hint" className="sr-only">
          {heroContent.ctaHint}
        </p>
      </motion.div>
    </div>
  )
}
