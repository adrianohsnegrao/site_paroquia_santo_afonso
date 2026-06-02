# Site — Paróquia Santo Afonso Maria de Ligório

Primeira versão estática da Home institucional, construída com **Next.js (App Router) + React + TypeScript + Tailwind CSS**.

## Como rodar

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx          # HTML raiz, fontes e metadados (SEO)
│   ├── page.tsx            # Monta a Home ordenando as seções
│   └── globals.css         # Estilos globais + Tailwind
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Cabeçalho fixo + menu mobile + "Seja Dizimista"
│   │   ├── Footer.tsx      # Rodapé (logo, links, contato, redes)
│   │   └── Logo.tsx        # Brasão + nome (header e footer)
│   ├── sections/           # Uma seção da Home por arquivo
│   │   ├── Hero.tsx
│   │   ├── MassSchedule.tsx
│   │   ├── FeaturedEvents.tsx
│   │   ├── Pastorals.tsx
│   │   ├── News.tsx
│   │   ├── Gallery.tsx
│   │   └── Contact.tsx
│   └── ui/                 # Componentes reutilizáveis
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── SectionHeading.tsx
│       └── MediaPlaceholder.tsx
├── data/                   # CONTEÚDO MOCKADO (edite aqui!)
│   ├── site.ts             # Nome, descrição, contato, redes sociais
│   ├── navigation.ts       # Itens do menu e do rodapé
│   ├── massSchedule.ts     # Horários de missa
│   ├── events.ts           # Eventos em destaque
│   ├── pastorals.ts        # Pastorais e movimentos
│   ├── news.ts             # Notícias e comunicados
│   └── gallery.ts          # Galeria
└── lib/
    └── utils.ts            # Utilitário "cn" (junção de classes)
public/images/logo.jpg      # Logo da paróquia
tailwind.config.ts          # PALETA DE CORES (edite aqui!)
```

## Onde editar cada coisa

| O que quero mudar          | Arquivo                                   |
| -------------------------- | ----------------------------------------- |
| Nome, descrição, contato   | `src/data/site.ts`                        |
| Menu / links do rodapé     | `src/data/navigation.ts`                  |
| Horários de missa          | `src/data/massSchedule.ts`                |
| Eventos                    | `src/data/events.ts`                      |
| Pastorais                  | `src/data/pastorals.ts`                   |
| Notícias                   | `src/data/news.ts`                        |
| Fotos da galeria           | `src/data/gallery.ts`                     |
| Cores (verde, dourado...)  | `tailwind.config.ts` → `theme.colors.brand` |
| Logo                       | `public/images/logo.jpg`                  |

## Imagens reais

As imagens usam placeholders (`MediaPlaceholder`). Para usar fotos reais,
coloque os arquivos em `public/images/` e troque `<MediaPlaceholder ... />`
por `<Image src="/images/sua-foto.jpg" ... />` (next/image) na seção desejada.
