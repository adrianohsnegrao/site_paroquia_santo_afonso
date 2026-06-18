# Constituição do Projeto

Princípios inegociáveis que regem todas as decisões de produto e técnicas do
**Site e Painel Administrativo da Paróquia Santo Afonso Maria de Ligório**.
Qualquer especificação, plano ou tarefa que conflite com estes princípios deve
ser revista.

## 1. O conteúdo pertence à paróquia, não ao código

A equipe da paróquia (secretaria/comunicação) deve conseguir criar, editar e
remover conteúdo (notícias, eventos, pastorais, horários, fotos) **sem tocar em
código** e **sem precisar de um desenvolvedor**. Editar um arquivo `.ts` e fazer
deploy não é uma solução aceitável para o usuário final.

## 2. Simplicidade para quem edita

Os editores não são técnicos. A interface administrativa deve usar linguagem em
**português claro**, formulários objetivos e fluxos curtos. Preferir convenções
óbvias a flexibilidade que confunde.

## 3. O site público continua rápido e acessível

O site institucional já existe e deve permanecer **rápido, responsivo e acessível**
(SEO, mobile-first, bom contraste). A introdução do admin não pode degradar a
performance nem a experiência das páginas públicas.

## 4. Uma única fonte de verdade por tipo de conteúdo

Hoje há duplicação (ex.: notícias da Home em um arquivo e da página `/noticias`
em outro). O admin deve **unificar cada tipo de conteúdo em uma fonte única**, da
qual tanto a Home quanto as páginas internas derivam.

## 5. Migração sem perda

Todo o conteúdo já existente em `src/data/*.ts` deve ser **migrado** para o novo
modelo de persistência. Nada do conteúdo atual pode ser perdido na transição.

## 6. Segurança proporcional

O painel é restrito à equipe paroquial: exige **autenticação**. Dados de contato
enviados por fiéis (formulário) são sensíveis e devem ser tratados com cuidado
(acesso restrito, sem exposição pública).

## 7. Português correto e identidade preservada

Todo texto de interface, mensagens e conteúdo seguem o português com acentuação
correta. A identidade visual (paleta `brand` no Tailwind, logo, tom acolhedor)
deve ser preservada.

## 8. Decisões documentadas (SDD)

Mudanças relevantes de escopo ou arquitetura são registradas nas specs **antes**
de virar código. As specs são a fonte de verdade do "o quê" e do "porquê".
