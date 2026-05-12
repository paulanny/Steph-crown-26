import { siteMeta } from '../content/birthdayContent'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-midnight/80 py-10 text-center text-sm text-cream/45 light:border-navy/15 light:bg-[#e8e2d8] light:text-inkSoft">
      <p>
        Crafted with care by {siteMeta.fromName} · A birthday tribute for {siteMeta.mentorHonorific}
      </p>
    </footer>
  )
}
