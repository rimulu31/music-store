'use client'
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext({ dark: false, toggle: () => {} })

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState(false)
  const toggle = () => setDark(d => !d)

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div className={dark ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)