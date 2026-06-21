const fs = require('fs');

let page = fs.readFileSync('src/app/admin/noticias/novo/page.tsx', 'utf8');
page = page.replace(/<Button type="submit" disabled={isSubmitting}>/g, '<Button type="submit" as="button" disabled={isSubmitting}>');
page = page.replace(/<Button type="button" variant="outline" onClick=\{\(\) => router\.push\("\/admin\/noticias"\)\}>/g, '<Button type="button" as="button" variant="outline" onClick={() => router.push("/admin/noticias")}>');
fs.writeFileSync('src/app/admin/noticias/novo/page.tsx', page);
