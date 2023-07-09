import './globals.css'
import { Inter } from 'next/font/google'
import {Navbar} from "@/components/navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI JSON Generator',
  description: 'Generate JSON for your using AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
