const fs = require('fs');

// Fix package.json
let pkg = fs.readFileSync('package.json', 'utf8');
pkg = pkg.replace(/<<<<<<< HEAD\n=======\n/g, '');
pkg = pkg.replace(/>>>>>>> main\n/g, '');
fs.writeFileSync('package.json', pkg);

// Fix tailwind.config.ts
let tw = fs.readFileSync('tailwind.config.ts', 'utf8');
tw = tw.replace(/<<<<<<< HEAD\n  plugins: \[\],\n=======\n  plugins: \[\n    require\('@tailwindcss\/typography'\),\n  \],\n>>>>>>> main/g, "  plugins: [\n    require('@tailwindcss/typography'),\n  ],");
fs.writeFileSync('tailwind.config.ts', tw);
