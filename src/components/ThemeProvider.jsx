import { createContext, useContext, useLayoutEffect, useMemo } from 'react'

const ThemeContext = createContext(null)

/** Dark-only birthday experience — light mode is intentionally not offered. */
export function ThemeProvider({ children }) {
  useLayoutEffect(() => {
    document.documentElement.classList.remove('light')
    document.documentElement.style.colorScheme = 'dark'
  }, [])

  const value = useMemo(
    () => ({
      theme: 'dark',
      isLight: false,
      toggleTheme: () => {},
      setDark: () => {},
      setLight: () => {},
    }),
    [],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
