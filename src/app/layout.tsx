import Header from '@/components/Header'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coffee Delivery',
  description: 'Gerenciador de carrinho de compras de uma cafeteria fictícia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="flex w-screen items-center justify-center">
        <div className="w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
