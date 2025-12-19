// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import BottomNav from '@/components/BottomNav'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'Conductor AI'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-gray-50 text-gray-900">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
        <BottomNav />
      </body>
    </html>
  )
}

// components/Sidebar.tsx
'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <aside className={`fixed md:static z-40 h-full w-64 bg-white border-r border-gray-200 transition-transform ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
      <div className="h-16 flex items-center justify-between px-4 border-b">
        <span className="font-semibold text-blue-600">Conductor AI</span>
        <button onClick={() => setOpen(false)} className="md:hidden">✕</button>
      </div>
      <nav className="p-4 space-y-2">
        <Link href="/" className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100">Dashboard</Link>
        <Link href="/workflow" className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100">Workflow Builder</Link>
        <Link href="/connections" className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100">App Connections</Link>
        <Link href="/history" className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100">Execution History</Link>
      </nav>
      <button onClick={() => setOpen(true)} className="md:hidden fixed top-4 left-4">☰</button>
    </aside>
  )
}

// components/BottomNav.tsx
'use client'
import Link from 'next/link'

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-14 bg-white border-t flex justify-around items-center">
      <Link href="/">Dashboard</Link>
      <Link href="/workflow">Workflow</Link>
      <Link href="/connections">Apps</Link>
      <Link href="/history">History</Link>
    </nav>
  )
}
