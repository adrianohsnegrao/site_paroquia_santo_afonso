const fs = require('fs');

let actions = fs.readFileSync('src/app/admin/noticias/actions.ts', 'utf8');
actions = actions.replace(/const title = formData\.get\("title"\) as string;\n  const summary = formData\.get\("summary"\) as string;\n  const content = formData\.get\("content"\) as string;\n  const category = formData\.get\("category"\) as string;\n  const cover_image = formData\.get\("cover_image"\) as string;\n  const status = formData\.get\("status"\) as string \|\| "draft";\n  const is_featured = formData\.get\("is_featured"\) === "on";\n  const is_home_featured = formData\.get\("is_home_featured"\) === "on";/g, `const titulo = formData.get("title") as string;
  const resumo = formData.get("summary") as string;
  const conteudo = formData.get("content") as string;
  const categoria = formData.get("category") as string;
  const imagem_capa = formData.get("cover_image") as string;
  const status = formData.get("status") as string || "rascunho";
  const destaque = formData.get("is_featured") === "on";
  const destaque_home = formData.get("is_home_featured") === "on";`);

actions = actions.replace(/const slug = title/g, `const slug = titulo`);

actions = actions.replace(/insert\(\{\n    title,\n    slug,\n    summary,\n    content,\n    category,\n    cover_image,\n    status,\n    is_featured,\n    is_home_featured,\n  \}\)/g, `insert({
    titulo,
    slug,
    resumo,
    conteudo,
    categoria,
    imagem_capa,
    status,
    destaque,
    destaque_home,
  })`);

actions = actions.replace(/update\(\{\n    title,\n    slug,\n    summary,\n    content,\n    category,\n    cover_image,\n    status,\n    is_featured,\n    is_home_featured,\n    updated_at: new Date\(\)\.toISOString\(\),\n  \}\)/g, `update({
    titulo,
    slug,
    resumo,
    conteudo,
    categoria,
    imagem_capa,
    status,
    destaque,
    destaque_home,
    updated_at: new Date().toISOString(),
  })`);

fs.writeFileSync('src/app/admin/noticias/actions.ts', actions);
