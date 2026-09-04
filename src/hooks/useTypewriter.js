import { useEffect, useState } from 'react'

export function useTypewriter(text, speed = 26) {
  const [out, setOut] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setOut('')
    setDone(false)
    if (!text) {
      setDone(true)
      return undefined
    }
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setOut(text.slice(0, i))
      if (i >= text.length) {
        window.clearInterval(id)
        setDone(true)
      }
    }, speed)
    return () => window.clearInterval(id)
  }, [text, speed])

  return { text: out, done }
}
