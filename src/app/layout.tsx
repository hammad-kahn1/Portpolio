import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: 'Habiba Shah — Software Engineering Student & App Developer',
  description:
    'Portfolio of Habiba Shah — Software Engineering student specializing in mobile app development, web development, and beautiful UI/UX design.',
  keywords: [
    'Habiba Shah',
    'Software Engineering',
    'App Developer',
    'Flutter',
    'React',
    'Portfolio',
    'Mobile Apps',
  ],
  authors: [{ name: 'Habiba Shah' }],
  openGraph: {
    title: 'Habiba Shah — Portfolio',
    description:
      'Software Engineering student building thoughtful digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-500">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
