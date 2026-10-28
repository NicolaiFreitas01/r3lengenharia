import { ArrowUpRight, Building2, ClipboardCheck, Compass, HardHat, Layers3, Truck } from 'lucide-react'
import type { ReactElement } from 'react'

import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { features } from '../content'
import { cx } from '../lib/cx'

const visuals: Record<string, () => ReactElement> = {
  projects: ProjectsVisual,
  construction: ConstructionVisual,
  management: ManagementVisual,
  consulting: ConsultingVisual,
  infrastructure: InfrastructureVisual,
  rental: RentalVisual,
}

export function Features() {
  return (
    <section id="servicos" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={features.eyebrow} title={features.title} description={features.description} />
        <div className="mt-14 grid auto-rows-[320px] grid-cols-1 gap-4 md:grid-cols-3">
          {features.items.map((item, i) => {
            const Visual = visuals[item.key]
            return (
              <Reveal key={item.key} delay={(i % 3) * 0.08} className={cx(item.span === 2 && 'md:col-span-2')}>
                <article className="depth group relative flex h-full flex-col overflow-hidden rounded-card bg-surface shadow-glow transition-colors duration-300 hover:[--depth-edge:rgb(147_197_253/0.32)]">
                  <div className="relative flex-1 overflow-hidden">
                    <Visual />
                  </div>
                  {/* Fixed height so dividers line up across a row regardless of copy length. */}
                  <div className="relative h-[96px] border-t border-line px-6 pt-4">
                    <h3 className="text-[16px] font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 line-clamp-2 text-[14px] leading-snug text-muted">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
        <div id="obras" className="mt-24 scroll-mt-24 sm:mt-32">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-accent">Obras e projetos</p>
              <h2 className="mt-3 text-balance text-[32px] font-semibold tracking-[-0.03em] sm:text-[42px]">Imagens de obras da R3L Engenharia</h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">Acompanhe um pouco do nosso trabalho em Salvador, Lauro de Freitas e Camaçari: construção, reformas, infraestrutura, acabamentos e execução de obras.</p>
            </div>
            <a href="https://www.instagram.com/r3lengenharia/" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent-2 hover:text-fg">Veja mais no Instagram <ArrowUpRight className="size-4" /></a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="https://www.instagram.com/r3lengenharia/" target="_blank" rel="noreferrer" className="group relative aspect-[4/5] overflow-hidden rounded-card bg-surface sm:col-span-2 sm:aspect-[16/9] lg:col-span-2">
              <img src="/r3l-portfolio-1.webp" alt="Obra da R3L Engenharia - Acompanhamento e execução em estrutura de concreto" width="360" height="640" loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent" />
              <span className="absolute bottom-5 left-5 text-sm font-semibold text-white sm:bottom-7 sm:left-7 sm:text-lg">Acompanhamento e execução de obras</span>
            </a>
            <a href="https://www.instagram.com/r3lengenharia/" target="_blank" rel="noreferrer" className="group relative aspect-[4/5] overflow-hidden rounded-card bg-surface">
              <img src="/r3l-portfolio-2.webp" alt="R3L Engenharia - Projetos e soluções em engenharia" width="640" height="640" loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent" />
              <span className="absolute bottom-5 left-5 text-sm font-semibold text-white">Projetos de engenharia</span>
            </a>
            <a href="https://www.instagram.com/r3lengenharia/" target="_blank" rel="noreferrer" className="group relative aspect-[4/5] overflow-hidden rounded-card bg-surface sm:col-span-2 lg:col-span-3">
              <img src="/r3l-portfolio-3.webp" alt="R3L Engenharia - Construção, reformas, elétrica, hidráulica, drywall, acabamentos e locação de maquinário" width="1280" height="720" loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent" />
              <span className="absolute bottom-5 left-5 text-sm font-semibold text-white sm:bottom-7 sm:left-7 sm:text-lg">Serviços completos + Locação de maquinário para obra</span>
            </a>
          </div>
          <div className="mt-6 text-center">
            <a href="https://www.instagram.com/r3lengenharia/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-blue)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Ver mais imagens e vídeos das obras no Instagram
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

function VisualCard({ children }: { children: ReactElement }) {
  return <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(ellipse_at_center,rgb(22_119_248/0.18),transparent_65%)]">{children}</div>
}

function ProjectsVisual() {
  return <VisualCard><div className="grid grid-cols-2 gap-3"><Building2 className="size-12 text-accent" /><Compass className="size-12 text-accent-2" /><Layers3 className="size-12 text-accent-2" /><ClipboardCheck className="size-12 text-accent" /></div></VisualCard>
}
function ConstructionVisual() {
  return <VisualCard><HardHat className="size-20 text-accent" /></VisualCard>
}
function ManagementVisual() {
  return <VisualCard><ClipboardCheck className="size-20 text-accent" /></VisualCard>
}
function ConsultingVisual() {
  return <VisualCard><Compass className="size-20 text-accent" /></VisualCard>
}
function InfrastructureVisual() {
  return <VisualCard><div className="flex items-center gap-4"><Building2 className="size-14 text-accent" /><Layers3 className="size-14 text-accent-2" /></div></VisualCard>
}
function RentalVisual() {
  return <VisualCard><Truck className="size-20 text-accent-2" /></VisualCard>
}
