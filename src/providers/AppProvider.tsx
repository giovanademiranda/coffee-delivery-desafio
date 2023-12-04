"use client"

import { createContext } from 'react'

export const AppContext = createContext({})

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={false}>
      {children}
    </AppContext.Provider>
  )
}