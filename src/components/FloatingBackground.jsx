import { motion } from 'framer-motion'

const blobs = [
  {
    className:
      'left-[-10%] top-[15%] h-72 w-72 bg-gold/10 blur-3xl light:bg-gold/18 light:opacity-90',
    delay: 0,
  },
  {
    className:
      'right-[-5%] top-[40%] h-96 w-96 bg-plum/15 blur-3xl light:bg-plum/12 light:opacity-80',
    delay: 0.8,
  },
  {
    className:
      'left-[20%] bottom-[-10%] h-80 w-80 bg-gold-soft/5 blur-3xl light:bg-gold-soft/25 light:opacity-70',
    delay: 1.2,
  },
]

function Sparkle({ style }) {
  return (
    <motion.span
      className="pointer-events-none absolute h-1 w-1 rounded-full bg-gold-soft/70 shadow-[0_0_12px_rgba(232,213,163,0.6)] light:bg-gold/60 light:shadow-[0_0_10px_rgba(201,162,39,0.35)]"
      style={style}
      animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.15, 0.8] }}
      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

export function FloatingBackground({ dense = false }) {
  const sparkles = dense ? 18 : 10
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${b.className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -18, 0] }}
          transition={{
            opacity: { duration: 1.2, delay: b.delay },
            y: { duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      ))}
      {Array.from({ length: sparkles }).map((_, i) => (
        <Sparkle
          key={i}
          style={{
            left: `${8 + ((i * 73) % 84)}%`,
            top: `${5 + ((i * 41) % 90)}%`,
          }}
        />
      ))}
    </div>
  )
}
