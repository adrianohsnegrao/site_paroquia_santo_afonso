const fs = require('fs');

// We want to keep the main branch version of ImageUpload.tsx
let content = fs.readFileSync('src/components/admin/ImageUpload.tsx', 'utf8');
content = content.replace(/<<<<<<< HEAD\n[\s\S]*?=======\n/g, '');
content = content.replace(/>>>>>>> main\n/g, '');
fs.writeFileSync('src/components/admin/ImageUpload.tsx', content);
