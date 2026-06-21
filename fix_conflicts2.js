const fs = require('fs');

// Fix package.json
let pkg = fs.readFileSync('package.json', 'utf8');
pkg = pkg.replace(/<<<<<<< HEAD\n    "@tiptap\/react": "\^3\.27\.1",\n    "@tiptap\/starter-kit": "\^3\.27\.1",\n=======\n    "@tailwindcss\/typography": "\^0\.5\.20",\n    "@tiptap\/react": "\^3\.27\.1",\n    "@tiptap\/starter-kit": "\^3\.27\.1",\n>>>>>>> main\n/g, '    "@tailwindcss/typography": "^0.5.20",\n    "@tiptap/react": "^3.27.1",\n    "@tiptap/starter-kit": "^3.27.1",\n');
fs.writeFileSync('package.json', pkg);

// Fix tailwind.config.ts
let tw = fs.readFileSync('tailwind.config.ts', 'utf8');
tw = tw.replace(/<<<<<<< HEAD\n  plugins: \[\],\n=======\n  plugins: \[\n    require\('@tailwindcss\/typography'\),\n  \],\n>>>>>>> main\n/g, "  plugins: [\n    require('@tailwindcss/typography'),\n  ],\n");
fs.writeFileSync('tailwind.config.ts', tw);
