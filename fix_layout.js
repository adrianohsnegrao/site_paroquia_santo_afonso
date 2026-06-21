const fs = require('fs');

let layout = fs.readFileSync('src/app/admin/layout.tsx', 'utf8');
layout = layout.replace(/<<<<<<< HEAD\n=======\n/g, '');
layout = layout.replace(/>>>>>>> main\n/g, '');
layout = layout.replace(/<<<<<<< HEAD\nexport default function AdminLayout\(\{\n=======\nexport default async function AdminLayout\(\{\n/g, 'export default async function AdminLayout({');
fs.writeFileSync('src/app/admin/layout.tsx', layout);
