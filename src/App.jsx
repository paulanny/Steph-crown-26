import { useState, useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LoadingIntro } from './components/LoadingIntro'
import { FloatingBackground } from './components/FloatingBackground'
import { SurpriseHero } from './components/SurpriseHero'
import { BirthdayReveal } from './components/BirthdayReveal'
import { SpecialQualities } from './components/SpecialQualities'
import { FunnyMoments } from './components/FunnyMoments'
import { MemoryGallery } from './components/MemoryGallery'
import { PrayerSection } from './components/PrayerSection'
import { WordsOfHonor } from './components/WordsOfHonor'
import { ClosingSection } from './components/ClosingSection'
import { SectionDivider } from './components/SectionDivider'
import { EasterEgg } from './components/EasterEgg'
import { SiteFooter } from './components/SiteFooter'
import { ThemeToggle } from './components/ThemeToggle'
import { ThemeNudge } from './components/ThemeNudge'
import { playIntroAudioFromUserGesture } from './utils/introAudio'

export default function App() {
  const [loadingVisible, setLoadingVisible] = useState(true)
  const [hasEntered, setHasEntered] = useState(false)
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setLoadingVisible(false), 2400)
    return () => window.clearTimeout(id)
  }, [])

  const enterExperience = useCallback(() => {
    playIntroAudioFromUserGesture()
    setFlash(true)
    window.setTimeout(() => setFlash(false), 700)
    setHasEntered(true)
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' })
    })
  }, [])

  const replay = useCallback(() => {
    setHasEntered(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const scrollToSmile = useCallback(() => {
    document.getElementById('funny')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <>
      <LoadingIntro visible={loadingVisible} />

      <a
        href={hasEntered ? '#reveal' : '#opening'}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[120] focus:rounded-lg focus:bg-cream focus:px-4 focus:py-2 focus:text-midnight light:focus:bg-navy light:focus:text-cream"
      >
        Skip to story
      </a>

      <ThemeToggle />
      <ThemeNudge visible={hasEntered} />

      <FloatingBackground dense={!hasEntered} />

      <AnimatePresence>
        {!hasEntered ? (
          <motion.div
            key="hero"
            className="relative z-10 min-h-[100dvh]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SurpriseHero onEnter={enterExperience} />
          </motion.div>
        ) : (
          <motion.div
            key="experience"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <main
              id="main-story"
              className="relative bg-section-shine light:bg-section-shine-light"
            >
              <BirthdayReveal />
              <SectionDivider />
              <SpecialQualities />
              <SectionDivider />
              <FunnyMoments />
              <SectionDivider />
              <MemoryGallery />
              <SectionDivider />
              <PrayerSection />
              <SectionDivider />
              <WordsOfHonor />
              <SectionDivider />
              <ClosingSection onReplay={replay} onSmile={scrollToSmile} />
            </main>
            <SiteFooter />
          </motion.div>
        )}
      </AnimatePresence>

      {flash ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[110] bg-gradient-to-b from-gold/35 via-gold-soft/10 to-transparent light:from-gold/25 light:via-gold-soft/15"
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          aria-hidden
        />
      ) : null}

      {hasEntered ? <EasterEgg /> : null}
    </>
  )
}
