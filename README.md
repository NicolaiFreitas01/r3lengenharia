# R3L Engenharia

Site institucional da R3L Engenharia. Realizamos todo tipo de serviço de engenharia: projetos, construção, reformas, manutenção, infraestrutura, acabamentos e locação de maquinário e equipamentos para obras. Atendimento em Salvador, Lauro de Freitas e Camaçari.

## Executar localmente

```sh
bun install
bun run dev
```

Abra o endereço local informado pelo Vite (normalmente `http://localhost:5173`).

## Build e validação

```sh
bun run typecheck
bun run build
```

## Conteúdo e seções

- `src/content.ts` concentra o conteúdo institucional e os textos.
- `src/App.tsx` organiza a página por seções.
- `src/sections/` contém navegação, hero, serviços, obras/portfólio, dúvidas frequentes, CTA e rodapé.
- `src/worker/index.ts` contém o Worker/API.

O formulário "Solicitar orçamento" coleta nome, telefone/WhatsApp, e-mail e serviço/equipamento de interesse e redireciona automaticamente para o WhatsApp com mensagem personalizada contendo esses dados.

## Publicação

`deploy.json` aponta para o resultado de `bun run build`. Siga o fluxo de publicação configurado no ambiente.
