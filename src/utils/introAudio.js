import { siteMeta } from '../content/birthdayContent'

let introAudio = null

/**
 * Call from a click handler (user gesture). Starts ambience and loops until the tab is closed
 * (or the user navigates away). No on-screen music control.
 */
export function playIntroAudioFromUserGesture() {
  const src = siteMeta.musicSrc?.trim?.()
  if (!src) return

  try {
    if (!introAudio) {
      introAudio = new Audio(src)
      introAudio.preload = 'auto'
    }
    introAudio.loop = true
    introAudio.volume = Math.min(1, Math.max(0, siteMeta.musicVolume ?? 0.28))
    introAudio.currentTime = 0
    const p = introAudio.play()
    if (p) void p.catch(() => {})
  } catch {
    /* ignore */
  }
}
