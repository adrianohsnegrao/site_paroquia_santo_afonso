-- Criação das tabelas do CMS com PostgreSQL/Supabase

-- Tabela: usuarios
CREATE TABLE public.usuarios (
  id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  nome text NOT NULL,
  perfil text NOT NULL,
  ativo boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Tabela: noticias
CREATE TABLE public.noticias (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  titulo text NOT NULL,
  slug text NOT NULL UNIQUE,
  categoria text NOT NULL,
  resumo text,
  conteudo text NOT NULL, -- Armazenará HTML do TipTap
  imagem_capa text,
  destaque boolean NOT NULL DEFAULT false,
  destaque_home boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'rascunho',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Tabela: avisos
CREATE TABLE public.avisos (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  titulo text NOT NULL,
  slug text NOT NULL UNIQUE,
  resumo text,
  conteudo text NOT NULL, -- Armazenará HTML do TipTap
  imagem_capa text,
  destaque boolean NOT NULL DEFAULT false,
  destaque_home boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'rascunho',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Tabela: eventos
CREATE TABLE public.eventos (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  titulo text NOT NULL,
  slug text NOT NULL UNIQUE,
  descricao_curta text,
  descricao text NOT NULL,
  data_inicio timestamptz NOT NULL,
  local text,
  imagem text,
  destaque_home boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'ativo',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Tabela: pastorais
CREATE TABLE public.pastorais (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  titulo text NOT NULL,
  slug text NOT NULL UNIQUE,
  descricao_curta text,
  descricao text NOT NULL,
  imagem text,
  icone text,
  destaque_home boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'ativo',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Tabela: mensagens_contato
CREATE TABLE public.mensagens_contato (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text NOT NULL,
  telefone text,
  tipo_solicitacao text NOT NULL,
  assunto text,
  mensagem text NOT NULL,
  status text NOT NULL DEFAULT 'nova', -- Valores: nova, lida, respondida
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Triggers para atualização automática do updated_at (Opcional, mas recomendado)
-- Criação da função de trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Aplicando os triggers
CREATE TRIGGER set_usuarios_updated_at BEFORE UPDATE ON public.usuarios FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_noticias_updated_at BEFORE UPDATE ON public.noticias FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_avisos_updated_at BEFORE UPDATE ON public.avisos FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_eventos_updated_at BEFORE UPDATE ON public.eventos FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_pastorais_updated_at BEFORE UPDATE ON public.pastorais FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_mensagens_contato_updated_at BEFORE UPDATE ON public.mensagens_contato FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

/*
=============================================================================
  Instruções para habilitar o RLS (Row Level Security) básico
=============================================================================

Para garantir a segurança dos dados, você deve habilitar o RLS para cada tabela
e em seguida criar políticas (policies) permitindo acesso público para leitura
(onde aplicável) e restringindo a escrita apenas a usuários autenticados.

Passos (pode ser rodado no SQL Editor do Supabase):

1. Habilitar RLS em cada tabela:

ALTER TABLE public.usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.noticias ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.avisos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.eventos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pastorais ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mensagens_contato ENABLE ROW LEVEL SECURITY;

2. Criar políticas para tabelas de conteúdo (notícias, eventos, pastorais):
   - Leitura pública
   - Inserção/Atualização/Deleção restrita a usuários autenticados

-- Noticias
CREATE POLICY "Leitura publica de noticias" ON public.noticias FOR SELECT USING (true);
CREATE POLICY "Acesso autenticado para criar/modificar noticias" ON public.noticias FOR ALL USING (auth.role() = 'authenticated');

-- Avisos
CREATE POLICY "Leitura publica de avisos" ON public.avisos FOR SELECT USING (true);
CREATE POLICY "Acesso autenticado para criar/modificar avisos" ON public.avisos FOR ALL USING (auth.role() = 'authenticated');

-- Eventos
CREATE POLICY "Leitura publica de eventos" ON public.eventos FOR SELECT USING (true);
CREATE POLICY "Acesso autenticado para criar/modificar eventos" ON public.eventos FOR ALL USING (auth.role() = 'authenticated');

-- Pastorais
CREATE POLICY "Leitura publica de pastorais" ON public.pastorais FOR SELECT USING (true);
CREATE POLICY "Acesso autenticado para criar/modificar pastorais" ON public.pastorais FOR ALL USING (auth.role() = 'authenticated');

3. Políticas para mensagens_contato:
   - Qualquer pessoa (anônima) pode inserir
   - Apenas usuários autenticados podem ver, atualizar ou deletar

CREATE POLICY "Permitir envio publico de mensagens" ON public.mensagens_contato FOR INSERT WITH CHECK (true);
CREATE POLICY "Apenas autenticados podem ver e gerenciar mensagens" ON public.mensagens_contato FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Apenas autenticados podem atualizar mensagens" ON public.mensagens_contato FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Apenas autenticados podem deletar mensagens" ON public.mensagens_contato FOR DELETE USING (auth.role() = 'authenticated');

4. Políticas para usuarios (perfis internos):
   - Apenas usuários autenticados podem ler ou gerenciar

CREATE POLICY "Leitura de usuarios apenas para autenticados" ON public.usuarios FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Gerenciamento de usuarios apenas para autenticados" ON public.usuarios FOR ALL USING (auth.role() = 'authenticated');

*/
