import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
// import { MoonPayProvider } from '@moonpay/moonpay-react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Payments Modal PoC',
  description: 'Buy fiat and cryptocurrency'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            {/* <MoonPayProvider apiKey="pk_test_YHaGUnoZCiKe1wPcyl26uZ89LDOOsRG" debug> */}
            <main className="flex-grow container mx-auto p-4">{children}</main>
            {/* </MoonPayProvider> */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
