const fs = require('fs');

// Fix package.json
let pkg = fs.readFileSync('package.json', 'utf8');
pkg = pkg.replace(/<<<<<<< HEAD\n    "@tiptap\/extension-image": "\^3\.27\.1",\n=======\n    "@tailwindcss\/typography": "\^0\.5\.20",\n    "@tiptap\/react": "\^3\.27\.1",\n    "@tiptap\/starter-kit": "\^3\.27\.1",\n/g, '    "@tailwindcss/typography": "^0.5.20",\n    "@tiptap/extension-image": "^3.27.1",\n    "@tiptap/react": "^3.27.1",\n    "@tiptap/starter-kit": "^3.27.1",\n');
fs.writeFileSync('package.json', pkg);
