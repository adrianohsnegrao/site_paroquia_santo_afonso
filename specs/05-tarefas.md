# Tarefas

> Fase SDD: **Tasks**. Backlog acionável derivado da especificação e do plano.
> Marque `[x]` ao concluir. Tarefas com **(stack)** dependem da decisão técnica
> de [`04-plano-tecnico.md`](./04-plano-tecnico.md) e podem mudar conforme a escolha.
>
> Rastreabilidade: cada tarefa referencia as histórias **EU-x** da
> [especificação](./02-especificacao.md).

## Marco 0 — Decisão e fundação

- [ ] **T0.1** Decidir a stack de persistência/auth e registrar no `04` (§Decisão). **(stack)**
- [ ] **T0.2** Definir editor de texto rico e formato do conteúdo. *(EU-4, EU-10, EU-15)*
- [ ] **T0.3** Definir estratégia de publicação (ISR vs. rebuild). *(EU-29)*
- [ ] **T0.4** Configurar projeto: variáveis de ambiente, credenciais, `.gitignore`. **(stack)**
- [ ] **T0.5** Modelar o schema/coleções a partir do [modelo de dados](./03-modelo-de-dados.md). **(stack)**

## Marco 1 — Camada de dados e migração

- [ ] **T1.1** Criar `src/lib/content/` com funções de acesso por entidade.
- [ ] **T1.2** Refatorar páginas públicas para consumir `src/lib/content/` em vez de `src/data/*.ts`.
- [ ] **T1.3** Unificar fonte de Notícias (eliminar duplicação Home × página). *(EU-8)*
- [ ] **T1.4** Unificar fonte de Eventos (Home + lista + detalhe + calendário). *(EU-12)*
- [ ] **T1.5** Unificar fonte de Pastorais (Home + lista + detalhe). *(EU-17)*
- [ ] **T1.6** Script de migração de todo o conteúdo de `src/data/*.ts` para a nova fonte. *(Constituição §5)*
- [ ] **T1.7** Validar que todas as páginas públicas renderizam igual ao estado atual.

## Marco 2 — Autenticação e shell do admin

- [ ] **T2.1** Implementar login/logout. *(EU-1, EU-3)*
- [ ] **T2.2** Proteger rotas `/admin/*` e aplicar papéis (administrador/editor). *(EU-1)*
- [ ] **T2.3** Layout/navegação do painel reaproveitando `components/ui` e paleta `brand`.
- [ ] **T2.4** Gestão de usuários (admin cria/edita/desativa). *(EU-2)*

## Marco 3 — Upload e seletor de ícones

- [ ] **T3.1** Upload de imagens + biblioteca de mídia reutilizável. *(EU-27)*
- [ ] **T3.2** Exigir texto alternativo em toda imagem. *(EU-28)*
- [ ] **T3.3** Seletor visual de ícone sobre `src/lib/iconMap.ts` (lucide). *(Modelo §Ícone)*

## Marco 4 — CRUDs de conteúdo

- [ ] **T4.1** CRUD de **Notícias** (+ destaque, destaqueHome, slug, status). *(EU-4 a EU-8)*
- [ ] **T4.2** CRUD de **Comunicados/avisos**. *(EU-9)*
- [ ] **T4.3** CRUD de **Categorias de Evento**. *(EU-13)*
- [ ] **T4.4** CRUD de **Eventos** (alimenta Home, lista, detalhe, calendário). *(EU-10 a EU-12, EU-14)*
- [ ] **T4.5** CRUD de **Pastorais**. *(EU-15 a EU-17)*
- [ ] **T4.6** CRUD de **Horários de Missa**. *(EU-18)*
- [ ] **T4.7** CRUD de **Atendimentos da Secretaria** + textos da página de horários. *(EU-19)*
- [ ] **T4.8** Gestão da **Galeria** (add/reordenar/remover). *(EU-20)*

## Marco 5 — Formulário de contato e mensagens

- [ ] **T5.1** Backend do formulário de contato → grava `MensagemContato`. *(EU-21)* **(stack)**
- [ ] **T5.2** Caixa de mensagens no admin (listar, abrir, marcar lida/respondida, excluir). *(EU-22)*
- [ ] **T5.3** *(Desejável)* Notificação por e-mail de nova mensagem. *(EU-23)*

## Marco 6 — Configurações globais

- [ ] **T6.1** Editar **ConfiguracaoSite** (contato, redes, citações, hero, logo, mapa). *(EU-24)*
- [ ] **T6.2** Editar **itens do menu**. *(EU-25)*
- [ ] **T6.3** Editar **página Sobre**. *(EU-26)*

## Marco 7 — Publicação, qualidade e entrega

- [ ] **T7.1** Implementar revalidação/publicação ao salvar (rascunho × publicado). *(EU-29, EU-30)*
- [ ] **T7.2** Revisar acessibilidade e responsividade do admin. *(RNF-2, RNF-5)*
- [ ] **T7.3** Revisar segurança (acesso, senhas, exposição de mensagens). *(RNF-3)*
- [ ] **T7.4** Verificar performance/SEO das páginas públicas. *(RNF-4, RNF-6)*
- [ ] **T7.5** Manual curto para a equipe paroquial (como usar o painel).
- [ ] **T7.6** Atualizar o `README.md` do projeto refletindo a nova arquitetura.

## Critério de pronto (Definition of Done) da fase

Todos os critérios de aceite gerais da [especificação §6](./02-especificacao.md)
satisfeitos:

1. Todo conteúdo de `src/data/*.ts` gerenciável pelo admin e migrado.
2. Duplicação Home × página eliminada.
3. Mensagens de contato persistidas e visíveis no admin.
4. Nenhuma edição de conteúdo exige código/deploy manual.
5. Acesso ao admin exige login.
