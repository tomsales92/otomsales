# otomsales

Site de apresentação de Tom Sales, com história expansível, redes sociais e contato por WhatsApp. Usa Next.js e React.

## Desenvolvimento

Requer Node.js >=22.13.0.

```sh
npm ci
npm run dev
```

Abra http://localhost:5173.

## Produção e Vercel

```sh
npm run build
npm start
```

O build gera `.next`, incluindo `routes-manifest.json`. O arquivo `vercel.json` configura Next.js, o comando de build e o diretório de saída. Conecte o repositório na Vercel com a branch `main`; não é necessário configurar banco, armazenamento ou variáveis de autenticação para esta versão.

A página de apresentação é pré-renderizada. Artigos, APIs de imagens e painel administrativo estão desativados e suas rotas retornam 404. A implementação anterior está preservada no histórico Git (commit `54d8c0b`). Arquivos auxiliares da Cloudflare que permanecem no repositório não fazem parte do build Next.js; não use o fluxo antigo do Sites para publicar esta versão.
