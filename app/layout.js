import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NEXT.JS User Dashboard',
  description: 'NEXT.JS User Dashboard To facilitate work and time completion ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=' flex'>
          <Sidebar />
          <div className='ml-20 w-full'>{children}</div>
        </div>

        </body>
    </html>
  )
}
