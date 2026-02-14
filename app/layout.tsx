import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

export const metadata: Metadata = {
  title: '我的个人博客 | Personal Blog',
  description: '记录日常、配置环境、项目开发、科研成果的个人博客',
  keywords: ['博客', 'Blog', '技术', '生活', '科研'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
