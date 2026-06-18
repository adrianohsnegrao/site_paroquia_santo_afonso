# Modelo de Dados

> Fase SDD: **Specify**. Modelo **conceitual** das entidades que o admin gerencia,
> derivado dos arquivos `src/data/*.ts` atuais. Independente de banco de dados —
> serve tanto para tabelas SQL, coleções de um CMS ou arquivos.
>
> Convenções: `?` = opcional · `[]` = lista · `rich text` = conteúdo formatado.
> Toda entidade ganha implicitamente `id`, `criadoEm`, `atualizadoEm`.

## Princípio central: fonte única

Hoje notícias, eventos e pastorais existem em **dois** lugares (Home × página
interna). No novo modelo, cada um vira **uma entidade única** com uma flag
`destaqueHome` (e/ou `destaque`) para controlar onde aparece. Isso resolve a
duplicação exigida pela Constituição §4.

---

## 1. Noticia

Unifica `news.ts` (Home), `newsPage.ts` (lista) e `newsDetails.ts` (detalhe).

| Campo | Tipo | Notas |
|-------|------|-------|
| titulo | string | |
| slug | string (único) | gerado do título; URL `/noticias/[slug]` |
| categoria | string | rótulo exibido (ex.: "Liturgia") |
| categoriaFiltro | string | usada nos filtros da página |
| data | date (ISO) | usada para ordenação |
| dataFormatada | string (derivável) | ex.: "15 Mai 2025" — pode ser computado |
| autor | string? | |
| resumo | string | excerpt |
| conteudo | rich text | parágrafos; suporta citação e imagem secundária |
| citacao | { texto, autor }? | bloco de citação no corpo |
| imagemCapa | image-ref | |
| imagemCapaAlt | string | obrigatório (acessibilidade) |
| galeria | Imagem[]? | imagens extras do artigo |
| relacionadas | ref Noticia[]? | pode ser automático por categoria |
| destaque | bool | aparece como "Destaque" em /noticias |
| destaqueHome | bool | aparece na seção de notícias da Home |
| status | enum(rascunho, publicado) | |

## 2. Comunicado (aviso curto)

De `newsPageData.notices` (`NoticeItem`). Diferente da notícia longa.

| Campo | Tipo | Notas |
|-------|------|-------|
| titulo | string | |
| data | date | |
| descricao | string | |
| icone | icon-ref | nome de ícone (ver Entidade *Ícone*) |

## 3. Evento

Unifica `events.ts` (Home), `eventsPage.ts`, `eventDetails.ts` e `calendarPage.ts`.

| Campo | Tipo | Notas |
|-------|------|-------|
| titulo | string | |
| slug | string (único) | URL `/eventos/[slug]` |
| categoria | ref CategoriaEvento | |
| descricaoCurta | string | card/resumo |
| descricao | rich text | detalhe |
| dataInicio | datetime (ISO) | dia/mês/horário derivam daqui |
| horario | string | ex.: "19h00" (ou derivar de dataInicio) |
| local | string | |
| imagem | image-ref | |
| imagemAlt | string | |
| valores | { titulo, descricao, icone }[]? | bloco "valores" do detalhe |
| programacao | { horario, titulo, descricao? }[]? | cronograma do evento |
| organizacao | { ... }? | pastoral/grupo organizador |
| contato | { ... }? | contato do evento |
| corCalendario | enum | cor no calendário (`EventColor`) |
| destaque | bool | "Próximos destaques" no calendário |
| destaqueHome | bool | aparece na Home |
| googleCalendarUrl | string? | "adicionar ao calendário" |
| icsUrl | string? | |
| status | enum(rascunho, publicado) | |

## 4. CategoriaEvento

De `eventsPageData.categories` / `calendarPage.categories`.

| Campo | Tipo | Notas |
|-------|------|-------|
| titulo | string | |
| descricao | string | |
| icone | icon-ref | |

## 5. Pastoral

Unifica `pastorals.ts` (Home), `pastoralsPage.ts` e `pastoralDetails.ts`.

| Campo | Tipo | Notas |
|-------|------|-------|
| titulo | string | |
| slug | string (único) | URL `/pastorais/[slug]` |
| categoria | string? | |
| descricaoCurta | string | card |
| descricao | rich text | detalhe |
| imagem | image-ref | |
| imagemAlt | string | |
| icone | icon-ref | grade da Home/listagem |
| pilares | { titulo, descricao, icone }[]? | "pilares" da pastoral |
| atividades | { titulo, descricao, icone }[]? | |
| coordenador | { nome, ... }? | |
| contato | { ... }? | |
| comoParticipar | { titulo, descricao, icone }[]? | "passos de participação" |
| destaqueHome | bool | aparece na grade da Home |
| status | enum(rascunho, publicado) | |

## 6. HorarioMissa

De `massSchedule.ts` (`MassScheduleItem`). Fonte única (Home + /horarios).

| Campo | Tipo | Notas |
|-------|------|-------|
| titulo | string | ex.: "Missa Dominical" |
| linhas | string[] | ex.: ["Sábado: 19h00", "Domingo: 7h00 · 9h00"] |
| icone | icon-ref | |
| ordem | int | ordenação na exibição |

## 7. AtendimentoSecretaria

De `schedulesPageData.services` (`ParishService`).

| Campo | Tipo | Notas |
|-------|------|-------|
| titulo | string | |
| descricao | string | |
| icone | icon-ref | |
| ordem | int | |

## 8. FotoGaleria

De `gallery.ts` (`GalleryItem`).

| Campo | Tipo | Notas |
|-------|------|-------|
| imagem | image-ref | (hoje só há `caption`; admin adiciona imagem real) |
| legenda | string | |
| textoAlt | string | |
| ordem | int | reordenável |

## 9. MensagemContato

De `contact.ts` (`ContactRequest`). **Gerada por visitantes**, gerida no admin.

| Campo | Tipo | Notas |
|-------|------|-------|
| nome | string | |
| email | string | |
| telefone | string? | |
| tipoSolicitacao | string | ex.: oração, sacramento, informação |
| assunto | string | |
| mensagem | text | |
| status | enum(nova, lida, respondida) | |
| recebidaEm | datetime | |

## 10. ConfiguracaoSite (singleton)

De `site.ts`. Um único registro editável pelo administrador.

| Campo | Tipo |
|-------|------|
| nome, nomeCompleto, nomeCurto, tagline | string |
| descricao, heroText | string |
| heroQuote, footerQuote | { texto, autor } |
| logo, heroImage | image-ref + alt |
| contato | { endereço[], telefone, email, horárioSecretaria, mapUrl, mapEmbedUrl, whatsapp } |
| social | { facebook, instagram, youtube, whatsapp } |
| developer | string |

## 11. ItemMenu

De `navigation.ts` (`NavLink`).

| Campo | Tipo | Notas |
|-------|------|-------|
| rotulo | string | |
| href | string | |
| ordem | int | |

## 12. PaginaSobre (singleton)

De `about.ts`. Conteúdo editável da página `/sobre`.

## 13. Usuario (admin)

Novo — não existe hoje.

| Campo | Tipo | Notas |
|-------|------|-------|
| nome | string | |
| email | string (único) | login |
| senhaHash | string | nunca em texto puro |
| perfil | enum(administrador, editor) | |
| ativo | bool | |

## Entidades de apoio

### Ícone (referência)

Hoje os ícones são strings resolvidas em `src/lib/iconMap.ts` (lucide-react).
O admin deve oferecer um **seletor visual de ícone** a partir de um conjunto
curado, gravando apenas o nome (`icon-ref`). Evita que o editor digite nomes
técnicos.

### Imagem (referência)

Hoje são caminhos em `public/images/...`. No novo modelo, `image-ref` aponta
para um arquivo carregado via admin (URL/Storage/asset), sempre com **texto
alternativo** associado.

---

## Resumo de migração (de → para)

| Origem (`src/data/`) | Entidade-alvo |
|----------------------|---------------|
| `news.ts` + `newsPage.ts` + `newsDetails.ts` | **Noticia** (+ Comunicado) |
| `events.ts` + `eventsPage.ts` + `eventDetails.ts` + `calendarPage.ts` | **Evento** (+ CategoriaEvento) |
| `pastorals.ts` + `pastoralsPage.ts` + `pastoralDetails.ts` | **Pastoral** |
| `massSchedule.ts` | **HorarioMissa** |
| `schedules.ts` (services/textos) | **AtendimentoSecretaria** + textos de página |
| `gallery.ts` | **FotoGaleria** |
| `contact.ts` (form) | **MensagemContato** |
| `site.ts` | **ConfiguracaoSite** |
| `navigation.ts` | **ItemMenu** |
| `about.ts` | **PaginaSobre** |
