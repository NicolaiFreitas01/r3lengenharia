import { Cta } from './sections/Cta'
import { Faq } from './sections/Faq'
import { Features } from './sections/Features'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Nav } from './sections/Nav'
import { Steps } from './sections/Steps'

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
