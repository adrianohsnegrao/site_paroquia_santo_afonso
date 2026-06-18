# Especificação — Painel Administrativo (CMS)

> Fase SDD: **Specify**. Descreve **o quê** e **por quê**, sem fixar tecnologia.
> As decisões de stack ficam em [`04-plano-tecnico.md`](./04-plano-tecnico.md).

## 1. Objetivo

Permitir que a equipe da Paróquia Santo Afonso gerencie todo o conteúdo do site
público de forma autônoma, por meio de um painel administrativo com login, sem
depender de desenvolvedores ou edição de código.

## 2. Pessoas usuárias (perfis)

| Perfil | Descrição | O que faz |
|--------|-----------|-----------|
| **Administrador** | Responsável técnico/pároco | Tudo, incluindo gerenciar usuários e configurações do site |
| **Editor** | Equipe de comunicação/secretaria | Cria e edita conteúdo (notícias, eventos, pastorais, horários, galeria) e lê mensagens de contato |

> Perfis adicionais (ex.: "Revisor" com fluxo de aprovação) são **fora de escopo**
> nesta primeira versão, mas o modelo de papéis deve permitir crescer.

## 3. Escopo desta fase

**Dentro do escopo:**

- Autenticação (login/logout) e controle de acesso por perfil.
- CRUD de conteúdo para todos os tipos listados na seção 5.
- Upload e gestão de imagens.
- Recebimento e gestão das mensagens do formulário de contato.
- Edição das configurações globais do site e do menu de navegação.
- Migração do conteúdo atual de `src/data/*.ts` para o novo modelo.

**Fora do escopo (futuro):**

- Fluxo de aprovação/publicação com múltiplos revisores.
- Versionamento/histórico de edições.
- Newsletter, doações online, agendamento de sacramentos.
- App mobile.

## 4. Requisitos não funcionais

- **RNF-1 — Usabilidade:** interface em português, simples para não técnicos.
- **RNF-2 — Responsividade:** o admin funciona em desktop e tablet.
- **RNF-3 — Segurança:** acesso autenticado; senhas nunca em texto puro;
  mensagens de contato acessíveis só a usuários autenticados.
- **RNF-4 — Performance do site público:** páginas públicas continuam rápidas
  (idealmente conteúdo servido de forma estática/cacheada, revalidado ao publicar).
- **RNF-5 — Acessibilidade:** manter boas práticas já adotadas no site público.
- **RNF-6 — SEO:** páginas de detalhe (notícias/eventos/pastorais) mantêm slugs
  e metadados.

## 5. Funcionalidades (histórias de usuário)

Notação: **EU-x**. Critérios de aceite em formato Dado/Quando/Então quando útil.

### 5.1 Autenticação e acesso

- **EU-1** Como usuário da equipe, quero **fazer login** com e-mail e senha para
  acessar o painel.
- **EU-2** Como administrador, quero **gerenciar usuários** (criar, definir perfil
  Editor/Administrador, desativar).
- **EU-3** Como usuário logado, quero **sair (logout)** e ter a sessão expirada
  após inatividade.
  - *Dado* que estou no painel, *quando* não há ação por tempo prolongado,
    *então* sou deslogado e preciso autenticar novamente.

### 5.2 Notícias e comunicados

- **EU-4** Como editor, quero **criar uma notícia** com título, categoria, data,
  resumo, conteúdo (texto rico), imagem de capa e texto alternativo da imagem.
- **EU-5** Como editor, quero **editar e excluir** notícias existentes.
- **EU-6** Como editor, quero **marcar uma notícia como destaque** para aparecer
  em posição de evidência na página de notícias.
- **EU-7** O sistema gera/edita o **slug** a partir do título (URL `/noticias/[slug]`),
  garantindo unicidade.
- **EU-8** Como editor, quero **definir quais notícias aparecem na Home** (sem
  manter dois cadastros) — resolve a duplicação atual.
- **EU-9** Como editor, quero gerenciar **comunicados/avisos** curtos (título,
  data, descrição, ícone), distintos das notícias longas.

### 5.3 Eventos e calendário

- **EU-10** Como editor, quero **cadastrar um evento** com título, categoria,
  descrição, data/horário, local, imagem e conteúdo de detalhe.
- **EU-11** Como editor, quero **editar e excluir** eventos.
- **EU-12** Os eventos cadastrados alimentam automaticamente: destaque na Home,
  página `/eventos`, detalhe `/eventos/[slug]` e o **calendário** `/eventos/calendario`.
- **EU-13** Como editor, quero gerenciar as **categorias de eventos** (com ícone).
- **EU-14** Como visitante, quero ver eventos ordenados por data e distinguir
  **próximos** de **passados**.

### 5.4 Pastorais e movimentos

- **EU-15** Como editor, quero **cadastrar uma pastoral** com nome, descrição,
  imagem, ícone, conteúdo de detalhe e informações de participação.
- **EU-16** Como editor, quero **editar e excluir** pastorais.
- **EU-17** As pastorais cadastradas alimentam a Home, a página `/pastorais` e o
  detalhe `/pastorais/[slug]` (fonte única).

### 5.5 Horários

- **EU-18** Como editor, quero gerenciar os **horários de missa** (dia, horário,
  observação), usados na Home e em `/horarios`.
- **EU-19** Como editor, quero gerenciar os **atendimentos da secretaria**
  (título, descrição, ícone) e os textos/avisos da página de horários.

### 5.6 Galeria

- **EU-20** Como editor, quero **adicionar, reordenar e remover fotos** da galeria,
  com texto alternativo.

### 5.7 Mensagens de contato

- **EU-21** Como visitante, quero **enviar uma mensagem** pelo formulário de
  contato (nome, e-mail, telefone opcional, tipo de solicitação, assunto, mensagem).
- **EU-22** Como editor, quero **ver a lista de mensagens recebidas**, abrir cada
  uma, marcar como lida/respondida e excluir.
- **EU-23** Como editor, quero ser **notificado** (ex.: e-mail) quando uma nova
  mensagem chega. *(Desejável; pode ser fase posterior.)*

### 5.8 Configurações do site e navegação

- **EU-24** Como administrador, quero editar as **informações globais** (nome,
  descrição, textos do hero, citações, dados de contato, redes sociais, logo,
  URL/embed do mapa).
- **EU-25** Como administrador, quero editar os **itens do menu** principal.
- **EU-26** Como administrador, quero editar o conteúdo da **página Sobre**.

### 5.9 Imagens

- **EU-27** Como editor, quero **fazer upload de imagens** pelo painel e
  reutilizá-las nos conteúdos, sem precisar acessar o servidor de arquivos.
- **EU-28** O sistema deve exigir **texto alternativo** nas imagens (acessibilidade).

### 5.10 Publicação

- **EU-29** Como editor, ao salvar/publicar, quero que o **site público reflita a
  mudança** de forma confiável (imediata ou após revalidação curta).
- **EU-30** Como editor, quero distinguir conteúdo **rascunho** de **publicado**.

## 6. Critérios de aceite gerais da fase

1. Toda fonte em `src/data/*.ts` listada no contexto tem um equivalente
   gerenciável pelo admin, com o conteúdo atual migrado.
2. A duplicação Home × página interna foi eliminada (notícias, eventos, pastorais).
3. O formulário de contato persiste mensagens acessíveis no admin.
4. Nenhuma edição de conteúdo exige mais alterar código ou fazer deploy manual.
5. O acesso ao admin exige login.

## 7. Questões em aberto (a decidir na fase de Plano)

- Stack de persistência/auth (ver 04).
- Estratégia de publicação (revalidação ISR vs. render dinâmico vs. rebuild).
- Editor de texto rico (qual biblioteca/formato: HTML, Markdown, blocos).
- Notificação de novas mensagens (e-mail agora ou depois).
