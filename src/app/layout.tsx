import type { Metadata } from 'next'
import { 
  Inter,
  EB_Garamond
} from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-garamond',
})

export const metadata: Metadata = {
  title: 'FM wedding',
  description: 'Quantos dias faltam?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${garamond.variable} font-sans`}>{children}</body>
    </html>
  )
}
