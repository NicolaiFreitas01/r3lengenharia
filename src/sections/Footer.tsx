import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { footer } from '../content'

const destinations: Record<string, string> = {
  Projetos: '#servicos',
  'Construção e reformas': '#servicos',
  'Execução de obras': '#servicos',
  Infraestrutura: '#servicos',
  Manutenção: '#servicos',
  'Locação de maquinário': '#locacao',
  Equipamentos: '#locacao',
  Ferramentas: '#locacao',
  Orçamento: '#contato',
  'Solicitar orçamento': '#contato',
  Locação: '#locacao',
  'Acompanhamento técnico': '#servicos',
  Contato: '#contato',
  Obras: '#obras',
}

export function Footer() {
  return (
    <footer className="pb-10 pt-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted">{footer.blurb}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <p className="text-[13px] font-medium text-fg">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href={destinations[link] ?? '#contato'} className="text-[14px] text-muted transition-colors hover:text-fg">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-faint">{footer.legal}</p>
          <p className="text-[13px] text-faint">Engenharia responsável, do planejamento à execução.</p>
        </div>
      </Container>
    </footer>
  )
}
