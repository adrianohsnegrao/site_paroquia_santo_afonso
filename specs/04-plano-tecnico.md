# Plano Técnico

> Fase SDD: **Plan**. Descreve **como** construir.
>
> ⚠️ **A escolha da stack de persistência/auth está EM ABERTO.** Este documento
> apresenta as opções com trade-offs. **A primeira tarefa da fase é decidir** e
> então preencher a seção "Decisão" ao final.

## 1. Restrições herdadas

- O frontend público já existe em **Next.js 14 (App Router) + TS + Tailwind**.
  A solução deve **reaproveitá-lo**, não reescrevê-lo.
- Princípios da [Constituição](./00-constituicao.md) — em especial: editores não
  técnicos (§2), site público rápido (§3), fonte única (§4), migração sem perda (§5).
- Requisitos da [Especificação](./02-especificacao.md) e entidades do
  [Modelo de Dados](./03-modelo-de-dados.md).

## 2. Componentes a construir (independente da stack)

1. **Camada de dados** — substitui os imports de `src/data/*.ts` por leitura da
   fonte escolhida (banco/CMS/arquivos). Idealmente atrás de funções
   (`getNoticias()`, `getEventoBySlug()`, ...) para isolar a origem.
2. **Autenticação** — login, sessão, proteção das rotas `/admin/*`, papéis.
3. **Painel admin** — UI de CRUD para cada entidade, sob `/admin` (ou app
   separado), reaproveitando o design system (`components/ui`, paleta `brand`).
4. **Upload de imagens** — armazenamento + seleção/reuso no admin.
5. **Endpoint do formulário de contato** — recebe envios → grava `MensagemContato`.
6. **Estratégia de publicação** — site público reflete mudanças (ver §4).
7. **Migração** — script único que importa o conteúdo atual de `src/data/*.ts`
   para a nova fonte.

## 3. Opções de stack (decisão pendente)

### Opção A — Supabase (Postgres gerenciado + Auth + Storage)

- **Persistência:** Postgres (tabelas conforme modelo de dados).
- **Auth:** Supabase Auth (e-mail/senha, papéis via RLS/claims).
- **Imagens:** Supabase Storage.
- **Admin:** páginas Next.js sob `/admin`, usando Server Actions / Route Handlers
  + cliente Supabase. Leitura pública via SSR/ISR.
- **Prós:** CMS "de verdade" (dinâmico, busca, relações); auth e upload prontos;
  cresce bem; tudo em um provedor.
- **Contras:** depende de serviço externo (free tier com limites); mais código de
  admin a escrever do que um CMS pronto.

### Opção B — Headless CMS (Strapi self-host ou Sanity SaaS)

- **Persistência + Admin:** o CMS fornece o painel de edição pronto.
- **Auth:** gerida pelo próprio CMS.
- **Imagens:** asset management do CMS.
- **Site:** Next.js consome conteúdo via API/SDK (ISR para performance).
- **Prós:** menos UI de admin para programar; editores ganham painel maduro;
  papéis/permissões prontos.
- **Contras:** mais uma peça de infra (Strapi self-host) ou custo/limites (Sanity);
  modelagem feita na ferramenta; menos controle sobre a UX do admin.

### Opção C — Arquivos + Git (Decap CMS / TinaCMS)

- **Persistência:** conteúdo em arquivos (Markdown/JSON) versionados no repositório.
- **Auth:** via provedor Git (ex.: GitHub OAuth) ou serviço do CMS.
- **Imagens:** arquivos no repo / storage do CMS.
- **Site:** continua **estático (SSG)**, rebuild ao publicar.
- **Prós:** sem banco/servidor; histórico via Git; barato; mantém o site estático
  e rápido.
- **Contras:** editar = commit + rebuild (publicação não é instantânea);
  formulário de contato **ainda precisa** de um backend/serviço à parte (Git não
  recebe submissões de visitantes); menos adequado a muitos itens/consultas.

## 4. Estratégia de publicação (a definir junto da stack)

- **A/B (dinâmico):** ISR com `revalidateTag`/`revalidatePath` ao salvar →
  publicação quase imediata mantendo cache.
- **C (estático):** rebuild/deploy disparado ao publicar (webhook do CMS).

## 5. Tópicos transversais a decidir

- **Editor de texto rico:** formato do `conteudo` (HTML, Markdown ou blocos).
  Recomendação: Markdown ou JSON de blocos para portabilidade.
- **Ícones:** seletor visual sobre o conjunto atual de `lucide-react`
  (`src/lib/iconMap.ts`), gravando o nome do ícone.
- **Formulário de contato:** em A/B grava direto na base; em C exige serviço
  externo (ex.: form backend / função serverless + e-mail).
- **Notificação de novas mensagens:** e-mail (ex.: Resend) — pode ficar para fase 2.
- **Ambientes/segredos:** `.env` para credenciais; nunca commitar segredos.

## 6. Abordagem recomendada para a camada de dados (qualquer opção)

Criar `src/lib/content/` com funções de acesso (`getNoticias`, `getEventoBySlug`,
`getConfiguracaoSite`, ...). Os componentes passam a chamar essas funções em vez
de importar `src/data/*.ts`. Assim a origem dos dados fica isolada e a stack
escolhida pode mudar sem reescrever as páginas.

## 7. Sequência macro

1. Decidir a stack (esta página).
2. Modelar/criar o schema na fonte escolhida (do [modelo de dados](./03-modelo-de-dados.md)).
3. Camada de acesso (`src/lib/content/`) + refatorar páginas para usá-la.
4. Script de migração de `src/data/*.ts`.
5. Autenticação + shell do `/admin`.
6. CRUDs por entidade (ordem em [`05-tarefas.md`](./05-tarefas.md)).
7. Upload de imagens.
8. Backend do formulário de contato + caixa de mensagens.
9. Publicação/revalidação.
10. Testes, ajustes de acesso e documentação para a equipe paroquial.

---

## Decisão (preencher na fase de Plano)

- **Stack escolhida:** _(A / B / C — a definir)_
- **Justificativa:** _(...)_
- **Estratégia de publicação:** _(...)_
- **Editor de texto rico:** _(...)_
- **Backend do formulário de contato:** _(...)_
- **Data da decisão:** _(...)_
