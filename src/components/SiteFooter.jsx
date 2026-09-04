import { siteMeta } from '../content/birthdayContent'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-midnight/80 py-10 pb-24 text-center text-sm text-cream/45 md:pb-10">
      <p>
        Crafted in dark mode by {siteMeta.fromName} · for {siteMeta.fullName} ({siteMeta.nickname}) · My own brother 
      </p>
    </footer>
  )
}
