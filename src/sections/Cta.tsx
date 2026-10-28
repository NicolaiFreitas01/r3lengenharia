import { ArrowRight } from 'lucide-react'
import { type FormEvent } from 'react'

import { Aurora } from '../components/Aurora'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Reveal } from '../components/Reveal'
import { cta } from '../content'

const WHATSAPP_NUMBER = '5571999521402'

export function Cta() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const service = String(formData.get('service') || '').trim()

    if (!name || !phone || !email || !service) {
      return
    }

    const message = `Olá, gostaria de solicitar um orçamento.

Nome: ${name}
Telefone/WhatsApp: ${phone}
E-mail: ${email}
Serviço ou equipamento de interesse: ${service}`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    form.reset()
  }

  return (
    <section id="contato" className="scroll-mt-24 py-12">
      <Container>
        <Reveal>
          <div className="depth relative overflow-hidden rounded-[32px] bg-surface px-6 py-20 text-center shadow-glow sm:px-12 sm:py-28">
            <Aurora intensity={0.8} />
            <div aria-hidden className="grid-lines absolute inset-0" />
            <div aria-hidden className="noise pointer-events-none absolute inset-0" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-[36px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[52px]">{cta.title}</h2>
              <p className="mt-4 text-[16px] text-muted sm:text-[18px]">{cta.description}</p>
              <form onSubmit={submit} className="mx-auto mt-8 grid gap-3 sm:grid-cols-2">
                <label className="sr-only" htmlFor="cta-name">Seu nome</label>
                <input id="cta-name" name="name" type="text" required placeholder="Seu nome" className="depth relative h-13 min-w-0 rounded-control-lg bg-bg/60 px-5 text-[15px] text-fg placeholder:text-faint backdrop-blur focus:outline-none focus:[--depth-edge:rgb(22_119_248/0.8)]" />
                <label className="sr-only" htmlFor="cta-phone">Telefone ou WhatsApp</label>
                <input id="cta-phone" name="phone" type="tel" required placeholder="Telefone ou WhatsApp" className="depth relative h-13 min-w-0 rounded-control-lg bg-bg/60 px-5 text-[15px] text-fg placeholder:text-faint backdrop-blur focus:outline-none focus:[--depth-edge:rgb(22_119_248/0.8)]" />
                <label className="sr-only" htmlFor="cta-email">E-mail</label>
                <input id="cta-email" name="email" type="email" required placeholder={cta.placeholder} className="depth relative h-13 min-w-0 rounded-control-lg bg-bg/60 px-5 text-[15px] text-fg placeholder:text-faint backdrop-blur focus:outline-none focus:[--depth-edge:rgb(22_119_248/0.8)]" />
                <label className="sr-only" htmlFor="cta-service">Serviço ou equipamento de interesse</label>
                <input id="cta-service" name="service" type="text" required placeholder="Serviço ou equipamento de interesse" className="depth relative h-13 min-w-0 rounded-control-lg bg-bg/60 px-5 text-[15px] text-fg placeholder:text-faint backdrop-blur focus:outline-none focus:[--depth-edge:rgb(22_119_248/0.8)]" />
                <Button size="lg" type="submit" className="sm:col-span-2">
                  {cta.button}
                  <ArrowRight />
                </Button>
              </form>
              <p className="mt-3 text-xs text-muted">Ao enviar, você será redirecionado automaticamente para o WhatsApp com seus dados e o serviço de interesse preenchidos.</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
