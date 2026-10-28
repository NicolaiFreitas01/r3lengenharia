import { motion } from 'motion/react'
import { ArrowRight, Building2, HardHat, Ruler, Truck } from 'lucide-react'

import { Aurora } from '../components/Aurora'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { hero } from '../content'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const [line1, line2] = hero.title
  return (
    <section className="relative overflow-hidden pt-36 pb-10 sm:pt-44">
      <Aurora />
      <div aria-hidden className="grid-lines absolute inset-x-0 top-0 h-[720px]" />
      <div aria-hidden className="noise pointer-events-none absolute inset-0" />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.a
            href="#servicos"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="depth relative inline-flex h-8 items-center gap-2 rounded-[12px] bg-white/[0.04] pl-2 pr-3 text-[13px] text-muted backdrop-blur transition-colors hover:text-fg"
          >
            <HardHat className="size-3.5 text-accent" />
            {hero.badge}
            <ArrowRight className="size-3.5" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-6 text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-[64px] sm:leading-[1.02] md:text-[76px]"
          >
            {line1}
            <br className="hidden sm:block" />{' '}
            {line2.split(hero.highlight)[0]}
            <span className="text-gradient">{hero.highlight}</span>
            {line2.split(hero.highlight)[1]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-6 max-w-xl text-pretty text-[17px] leading-relaxed text-muted sm:text-[19px]"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
          >
            <Button size="lg" href={hero.primary.href} className="w-full sm:w-auto">
              {hero.primary.label}
              <ArrowRight />
            </Button>
            <Button size="lg" variant="secondary" href={hero.secondary.href} className="w-full sm:w-auto">
              {hero.secondary.label}
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 text-[13px] text-faint"
          >
            {hero.footnote}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
          style={{ transformPerspective: 1400 }}
          className="relative mx-auto mt-16 max-w-[1040px] sm:mt-20"
        >
          <div
            aria-hidden
            className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[40px] bg-[radial-gradient(60%_50%_at_50%_0%,rgb(22_119_248/0.26),transparent)] blur-2xl"
          />
          <EngineeringVisual />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-px h-40 bg-gradient-to-t from-bg to-transparent" />
        </motion.div>
      </Container>
    </section>
  )
}

function EngineeringVisual() {
  return (
    <div className="depth relative aspect-[16/9] w-full overflow-hidden rounded-window bg-surface shadow-glow">
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(rgb(191_219_254/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(191_219_254/0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-12">
        <div className="relative w-full max-w-3xl">
          <div className="depth absolute -left-2 top-0 flex -translate-y-1/2 items-center gap-2 rounded-control bg-bg/90 px-3 py-2 text-xs text-muted">
            <Ruler className="size-4 text-accent" /> Projetos e planejamento
          </div>
          <svg viewBox="0 0 720 300" className="w-full text-accent-2" fill="none" aria-label="Ilustração técnica de projeto de edificação">
            <path d="M95 250h530M150 250V117l120-78 120 78v133M390 250V91l100-58 105 58v159" stroke="currentColor" strokeWidth="2" opacity=".8" />
            <path d="M130 130h281M150 164h240M150 198h240M427 108h140M427 145h140M427 182h140M427 219h140" stroke="currentColor" strokeWidth="1" opacity=".45" strokeDasharray="5 6" />
            <path d="M185 250v-42h46v42M279 250v-52h46v52M464 250v-54h43v54M523 250v-54h43v54" stroke="currentColor" strokeWidth="2" opacity=".65" />
            <path d="M72 262h570M182 22v18M410 66v18M139 117l131-84 132 84M390 91l100-58 105 58" stroke="currentColor" strokeWidth="1" opacity=".35" />
          </svg>
          <div className="depth absolute -bottom-3 right-0 flex -translate-y-1/2 items-center gap-3 rounded-control bg-bg/90 px-4 py-3 text-sm text-fg sm:right-4">
            <span className="grid size-9 place-items-center rounded-[11px] bg-accent/15 text-accent"><Truck className="size-5" /></span>
            <span><strong className="block font-medium">Locação para sua obra</strong><span className="text-xs text-muted">Equipamentos sob consulta</span></span>
          </div>
          <div className="depth absolute right-0 top-0 grid size-11 -translate-y-1/2 place-items-center rounded-control bg-bg/90 text-accent sm:right-8"><HardHat className="size-5" /></div>
          <div className="depth absolute bottom-2 left-0 hidden items-center gap-2 rounded-control bg-bg/90 px-3 py-2 text-xs text-muted sm:flex"><Building2 className="size-4 text-accent-2" /> Engenharia civil e infraestrutura</div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg/50 to-transparent" />
    </div>
  )
}
