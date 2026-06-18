# Contexto e Estado Atual

Este documento descreve o que **já existe** no projeto, para que a fase
administrativa parta de uma base concreta.

## Visão geral

Site institucional da **Paróquia Santo Afonso Maria de Ligório** (Manaus/AM).
Primeira fase concluída: site público com várias páginas, conteúdo **mockado em
arquivos TypeScript**. A próxima fase é o **painel administrativo (CMS)** para
que a equipe gerencie esse conteúdo.

## Stack atual

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** (paleta da paróquia em `tailwind.config.ts` → `theme.colors.brand`)
- **lucide-react** (ícones)
- Sem banco de dados, sem backend, sem autenticação (site 100% estático)
- Conteúdo em `src/data/*.ts` (importado diretamente pelos componentes)

Scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.

## Estrutura de pastas (resumo)

```
src/
├── app/                  # Rotas (App Router)
│   ├── page.tsx          # Home
│   ├── sobre/
│   ├── horarios/
│   ├── pastorais/        # + [slug]
│   ├── eventos/          # + [slug] + calendario
│   ├── noticias/         # + [slug]
│   └── contato/
├── components/           # layout, sections, ui, e por domínio (news, events, ...)
├── data/                 # CONTEÚDO MOCKADO (fonte a ser migrada para o admin)
└── lib/                  # iconMap.ts (string → ícone), utils.ts (cn)
public/images/            # imagens por seção (noticias, eventos, pastorais, ...)
```

## Páginas públicas já implementadas

- **Home** (`/`) — hero, horários de missa, eventos em destaque, pastorais,
  notícias, galeria, contato (com mapa real do Google Maps).
- **Sobre** (`/sobre`)
- **Horários** (`/horarios`) — missas + atendimentos da secretaria.
- **Pastorais** (`/pastorais`) + detalhe (`/pastorais/[slug]`).
- **Eventos** (`/eventos`) + detalhe (`/eventos/[slug]`) + **calendário** (`/eventos/calendario`).
- **Notícias** (`/noticias`) + detalhe (`/noticias/[slug]`).
- **Contato** (`/contato`) — formulário (ainda **sem backend**), mapa e dados reais.

## Fontes de conteúdo atuais (`src/data/`)

| Arquivo | Conteúdo | Observação |
|---------|----------|------------|
| `site.ts` | Nome, descrição, contato, redes, citações, logo | Configurações globais |
| `navigation.ts` | Itens do menu principal | |
| `massSchedule.ts` | Horários de missa | Fonte única (Home + /horarios) |
| `schedules.ts` | Página /horarios (missas + atendimentos) | Reutiliza `massSchedule` |
| `news.ts` | Notícias da **Home** | ⚠️ duplica conteúdo de notícias |
| `newsPage.ts` | Página /noticias (lista, destaque, filtros) | |
| `newsDetails.ts` | Conteúdo dos artigos `/noticias/[slug]` | |
| `events.ts` | Eventos da **Home** | ⚠️ duplica conteúdo de eventos |
| `eventsPage.ts` | Página /eventos (próximos, categorias) | |
| `eventDetails.ts` | Detalhe de cada evento `/eventos/[slug]` | |
| `calendarPage.ts` | Página /eventos/calendario | |
| `pastorals.ts` | Grade de pastorais da **Home** | ⚠️ duplica conteúdo de pastorais |
| `pastoralsPage.ts` | Página /pastorais | |
| `pastoralDetails.ts` | Detalhe de cada pastoral `/pastorais/[slug]` | |
| `gallery.ts` | Galeria de fotos | |
| `contact.ts` | Página /contato + interface `ContactRequest` | Form ainda sem destino |
| `about.ts` | Página /sobre | |

> Vários arquivos já trazem o comentário *"Centralizado aqui para futura
> alimentação via painel administrativo (CMS)"* — ou seja, o código foi escrito
> antecipando esta fase.

## Lacunas que o admin precisa resolver

1. **Conteúdo só editável via código** → precisa de interface de edição.
2. **Duplicação** entre dados da Home e das páginas internas (notícias, eventos,
   pastorais) → unificar em fonte única (ver Constituição §4).
3. **Formulário de contato sem backend** → não há onde as mensagens chegam.
4. **Sem autenticação** → o admin exige login restrito à equipe.
5. **Ícones como strings** (`iconMap.ts`) → o admin deve oferecer seleção de
   ícone amigável, sem o editor digitar nomes técnicos.
