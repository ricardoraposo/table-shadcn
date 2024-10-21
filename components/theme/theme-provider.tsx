'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '../ui/button'

interface ThemeProviderProps extends React.ComponentProps<"div"> { }

export function ThemeProvider({ children, className, ...props }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    document.documentElement.style.cssText = `
--background: 240 10% 3.9%;
--foreground: 0 0% 98%;

--muted: 240 3.7% 15.9%;
--muted-foreground: 240 5% 64.9%;

--popover: 240 10% 3.9%;
--popover-foreground: 0 0% 98%;

--card: 240 10% 3.9%;
--card-foreground: 0 0% 98%;

--border: 240 3.7% 15.9%;
--input: 240 3.7% 15.9%;

--primary: 0 0% 98%;
--primary-foreground: 240 5.9% 10%;

--secondary: 240 3.7% 15.9%;
--secondary-foreground: 0 0% 98%;

--accent: 240 3.7% 15.9%;
--accent-foreground: 0 0% 98%;

--destructive: 0 62.8% 30.6%;
--destructive-foreground: 0 0% 98%;

--ring: 240 4.9% 83.9%;
`;
  }, [])

  return (
    <div
      className={cn("theme-green", className)}
      {...props}
    >
      <Button onClick={() => setIsDarkMode(!isDarkMode)}>
        Click
      </Button>
      {children}
    </div >
  )
}
