import React, { createContext, useContext, useState } from 'react'
import { Appearance } from 'react-native'

import { lightTheme, darkTheme, accentTheme } from './palette'
import type { AppTheme } from './types'

export type ThemeMode = 'light' | 'dark' | 'accent'

type ThemeContextType = {
  theme: AppTheme
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const system = Appearance.getColorScheme()

  const [mode, setMode] = useState<ThemeMode>(
    system === 'dark' ? 'dark' : 'light'
  )

  const toggleTheme = () => {
    setMode((prev) =>
      prev === 'light' ? 'dark' : prev === 'dark' ? 'accent' : 'light'
    )
  }

  const theme =
    mode === 'dark'
      ? darkTheme
      : mode === 'accent'
      ? accentTheme
      : lightTheme

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used inside ThemeProvider')
  }
  return ctx
}
