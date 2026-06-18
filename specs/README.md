# Specs — Painel Administrativo (CMS) da Paróquia Santo Afonso

Este diretório contém a documentação **Spec-Driven Development (SDD)** para a próxima
fase do projeto: a **parte administrativa** que permitirá à equipe da paróquia
gerenciar o conteúdo do site sem editar código.

A intenção é que estes arquivos sejam usados como **contexto de entrada** para a
continuidade do desenvolvimento (incluindo assistentes como o Gemini), seguindo o
fluxo SDD: **Constituição → Especificação → Modelo de Dados → Plano → Tarefas**.

## O que é Spec-Driven Development (SDD)

Em vez de partir direto para o código, descrevemos primeiro **o que** queremos e
**por quê** (especificação), depois **como** vamos construir (plano) e só então
quebramos em **tarefas** acionáveis. O código é a última etapa, derivada das specs.

Ordem de leitura e fluxo de trabalho:

| # | Arquivo | Pergunta que responde | Fase SDD |
|---|---------|-----------------------|----------|
| 0 | [`00-constituicao.md`](./00-constituicao.md) | Quais princípios são inegociáveis? | Princípios |
| 1 | [`01-contexto-e-estado-atual.md`](./01-contexto-e-estado-atual.md) | O que já existe hoje? | Contexto |
| 2 | [`02-especificacao.md`](./02-especificacao.md) | O quê e por quê? (requisitos, sem stack) | **Specify** |
| 3 | [`03-modelo-de-dados.md`](./03-modelo-de-dados.md) | Quais entidades e campos existem? | **Specify** |
| 4 | [`04-plano-tecnico.md`](./04-plano-tecnico.md) | Como construir? (opções + trade-offs) | **Plan** |
| 5 | [`05-tarefas.md`](./05-tarefas.md) | Em que ordem implementar? | **Tasks** |

## Como continuar a partir daqui (no Gemini ou outro assistente)

1. **Leia 00 e 01** para entender princípios e o estado atual do projeto.
2. **Valide a especificação (02)** com a paróquia: ela descreve requisitos sem
   travar tecnologia.
3. **Escolha a abordagem técnica no plano (04).** O plano deliberadamente lista
   3 opções (Supabase, Headless CMS, Arquivos+Git) com trade-offs. **A escolha
   ainda está em aberto** — esta é a primeira decisão a tomar na fase de Plano.
4. Depois de escolher a stack, **complete o `04-plano-tecnico.md`** fixando a
   decisão e detalhando a arquitetura concreta.
5. **Refine `05-tarefas.md`** conforme a stack escolhida e comece a implementar
   tarefa por tarefa, marcando o progresso.

## Estado da decisão técnica

> ⚠️ **Decisão de backend/persistência: EM ABERTO.**
> A escolha foi intencionalmente adiada para a fase de Plano. Veja as opções em
> [`04-plano-tecnico.md`](./04-plano-tecnico.md).
