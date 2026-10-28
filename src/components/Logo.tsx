import { cx } from '../lib/cx'
import { brand } from '../content'

export function LogoMark({ className }: { className?: string }) {
  return <img src="/r3l-logo.webp" alt="Logotipo R3L Engenharia" width="600" height="600" className={cx('size-10 shrink-0 rounded-full object-cover ring-2 ring-[color:var(--color-brand-blue)]/40', className)} />
}

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#" aria-label={brand.name} className={cx('inline-flex items-center gap-3 text-[15px] font-semibold tracking-tight text-fg', className)}>
      <LogoMark className="size-14 sm:size-16 md:size-18" />
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-bold tracking-wide sm:text-xl md:text-2xl">R3L</span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[12px]">Engenharia</span>
      </span>
    </a>
  )
}
