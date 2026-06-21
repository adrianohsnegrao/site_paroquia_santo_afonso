const fs = require('fs');

// We want the main version of RichTextEditor.tsx
let content = fs.readFileSync('src/components/admin/RichTextEditor.tsx', 'utf8');
content = content.replace(/<<<<<<< HEAD\n[\s\S]*?=======\n/g, '');
content = content.replace(/>>>>>>> main\n/g, '');
fs.writeFileSync('src/components/admin/RichTextEditor.tsx', content);
