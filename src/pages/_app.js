import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/testimonial.scss'
import { Open_Sans } from '@next/font/google'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={open_sans.className}>
      <Component {...pageProps} />
    </main>
  )
}
