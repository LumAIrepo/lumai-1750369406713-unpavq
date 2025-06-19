import './globals.css'
import { Inter } from 'next/font/google'
import { WalletProvider } from '@/components/wallet/wallet-adapter-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HelloSolana',
  description: 'A Solana dApp built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  )
}