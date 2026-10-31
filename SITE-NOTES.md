# Elton Sales

Site pessoal com blog, editor em blocos, D1 para artigos e R2 para capas.

- `/`: página de apresentação e artigos publicados.
- `/admin`: editor autenticado. Permite importar TXT, escolher parágrafos, títulos de seção e subtítulos, fonte por bloco, capa opcional, prévia, rascunhos, publicação e exclusão.
- `/artigos/[id]`: leitura do artigo.

A publicação inicial é privada, restrita ao proprietário pelo Sites. As rotas de escrita exigem identidade autenticada e origem correspondente. **Antes de alterar o acesso para público ou compartilhado, implementar uma autorização explícita de administrador (ID permitido ou papel) nas páginas e APIs.** Não basta autenticação quando há outros visitantes.

O nome usado é Elton Sales, conforme a mensagem. Biografia, produtos e artigos iniciais são exemplos identificados. Redes sociais aguardam URLs reais. A página usa artigos demonstrativos apenas quando não há artigos publicados.

Conteúdo dos artigos é texto estruturado renderizado pelo React, sem execução de HTML importado. Capas aceitam JPEG, PNG e WebP, com validação de assinatura e limite de 5 MB. Imagens removidas de artigos permanecem no armazenamento, permitindo reutilizar versões anteriores.

Ajustes de apresentação e redes: `app/home.tsx`. Estilos: `app/globals.css`.
