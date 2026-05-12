const NUDGE_KEY = 'birthday-theme-nudge-dismissed'

export function dismissThemeNudge() {
  try {
    sessionStorage.setItem(NUDGE_KEY, '1')
  } catch {
    /* ignore */
  }
}

export function isThemeNudgeDismissed() {
  try {
    return sessionStorage.getItem(NUDGE_KEY) === '1'
  } catch {
    return false
  }
}
