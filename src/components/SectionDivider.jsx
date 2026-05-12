export function SectionDivider() {
  return (
    <div
      className="relative mx-auto max-w-4xl px-6 py-6"
      aria-hidden="true"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent light:via-navy/12" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/40 shadow-glow blur-[2px]" />
    </div>
  )
}
