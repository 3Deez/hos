import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  subsets: ['latin'],
})

export const metadata = {
  title: 'NGS-HOS | Office of the Head of Service',
  description: 'Created by Lawal Adamu & Hassan Yakubu',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />

        <div>{children}</div>
      </body>
    </html>
  )
}
