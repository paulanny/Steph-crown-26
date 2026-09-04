import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { id: 'reveal', label: 'Today' },
  { id: 'covenant', label: 'Decade' },
  { id: 'qualities', label: 'You' },
  { id: 'commits', label: 'Log' },
  { id: 'funny', label: 'Humor' },
  { id: 'gallery', label: 'Moments' },
  { id: 'prayer', label: 'Prayer' },
  { id: 'honor', label: 'Honor' },
  { id: 'closing', label: 'Close' },
]

export function ExperienceNav() {
  const [active, setActive] = useState('reveal')

  useEffect(() => {
    const els = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.nav
        aria-label="Birthday sections"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 md:flex"
      >
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`group flex items-center justify-end gap-2 rounded-full py-1 pl-2 pr-1 text-right ${
              active === l.id ? 'text-gold-soft' : 'text-cream/35 hover:text-cream/70'
            }`}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-0 transition group-hover:opacity-100">
              {l.label}
            </span>
            <span
              className={`block h-1.5 rounded-full transition-all ${
                active === l.id ? 'w-6 bg-gold' : 'w-1.5 bg-white/25 group-hover:bg-white/50'
              }`}
            />
          </a>
        ))}
      </motion.nav>

      <nav
        aria-label="Birthday sections"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-midnight/90 px-2 py-2 backdrop-blur-md md:hidden"
      >
        <div className="flex gap-1 overflow-x-auto pb-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`shrink-0 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest ${
                active === l.id ? 'bg-gold/20 text-gold-soft' : 'text-cream/45'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
