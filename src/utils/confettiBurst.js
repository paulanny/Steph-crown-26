import confetti from 'canvas-confetti'

const defaults = {
  spread: 72,
  ticks: 120,
  gravity: 0.9,
  decay: 0.94,
  startVelocity: 35,
  colors: ['#c9a227', '#e8d5a3', '#f7f4ed', '#6b5b95', '#ffffff'],
}

export function fireCelebrationBurst(origin = 'center') {
  const scalar = 0.9
  const count = 120

  const fire = (particleRatio, opts) => {
    confetti({
      ...defaults,
      particleCount: Math.floor(count * particleRatio),
      origin: origin === 'center' ? { x: 0.5, y: 0.35 } : { x: 0.5, y: 0.2 },
      scalar,
      ...opts,
    })
  }

  fire(0.25, { spread: 26, startVelocity: 55 })
  fire(0.2, { spread: 60 })
  fire(0.35, { spread: 100, decay: 0.91, scalar })
  fire(0.1, { spread: 120, startVelocity: 45, decay: 0.92, scalar })
  fire(0.1, { spread: 120, startVelocity: 45 })
}

/** Softer burst for scroll-reveal moments */
export function fireSubtleConfetti() {
  confetti({
    ...defaults,
    particleCount: 55,
    spread: 54,
    origin: { x: 0.5, y: 0.45 },
    scalar: 0.65,
    ticks: 90,
  })
}
