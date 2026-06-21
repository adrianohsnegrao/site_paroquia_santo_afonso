const fs = require('fs');

let page1 = fs.readFileSync('src/app/admin/noticias/[id]/page.tsx', 'utf8');
page1 = page1.replace(/<RichTextEditor value=\{content\}/g, '<RichTextEditor content={content}');
fs.writeFileSync('src/app/admin/noticias/[id]/page.tsx', page1);

let page2 = fs.readFileSync('src/app/admin/noticias/novo/page.tsx', 'utf8');
page2 = page2.replace(/<RichTextEditor value=\{content\}/g, '<RichTextEditor content={content}');
fs.writeFileSync('src/app/admin/noticias/novo/page.tsx', page2);
