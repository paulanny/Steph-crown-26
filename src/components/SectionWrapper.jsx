import { motion, useReducedMotion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export function SectionWrapper({
  id,
  children,
  className = '',
  eyebrow,
  /** 'default' | 'tight' | 'wide' */
  spacing = 'default',
}) {
  const reduce = useReducedMotion()

  const padding =
    spacing === 'tight'
      ? 'py-16 md:py-20'
      : spacing === 'wide'
        ? 'py-28 md:py-36'
        : 'py-20 md:py-28'

  return (
    <motion.section
      id={id}
      className={`relative mx-auto max-w-6xl px-5 md:px-8 ${padding} ${className}`}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once: true, margin: '-12% 0px' }}
      variants={sectionVariants}
    >
      {eyebrow ? (
        <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.35em] text-gold-soft/90 light:text-[#4a3a0f]">
          {eyebrow}
        </p>
      ) : null}
      {children}
    </motion.section>
  )
}
