import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'


export const metadata: Metadata = {
  title: 'AcidOP | Wallpaper Gallery',
  description: 'Collection of my favourite wallpapers collected over the years.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
