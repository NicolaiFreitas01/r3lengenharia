import { Hono } from 'hono'

// The Worker in front of the static site. Add API routes here; everything
// else falls through to the built assets (single-page-application mode).
type Env = {
  ASSETS: Fetcher
}

const app = new Hono<{ Bindings: Env }>()

app.get('/api/health', (c) => c.json({ ok: true }))

// Quote request form. Until an email/CRM destination is configured, fail
// explicitly instead of pretending that the request has been delivered.
app.post('/api/subscribe', async (c) => {
  const body = await c.req.json<{ name?: string; email?: string; phone?: string; service?: string }>().catch(() => null)
  if (!body || !body.name?.trim() || !body.phone?.trim() || !body.service?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email?.trim() ?? '')) {
    return c.json({ error: 'Preencha nome, telefone, serviço e um e-mail válido.' }, 400)
  }
  return c.json({ error: 'O canal de atendimento da empresa ainda não está configurado para receber solicitações.' }, 503)
})

app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
