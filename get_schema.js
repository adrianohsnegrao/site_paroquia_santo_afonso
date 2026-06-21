const fs = require('fs');

if (fs.existsSync('supabase_schema.sql')) {
    console.log(fs.readFileSync('supabase_schema.sql', 'utf8'));
} else {
    console.log("No supabase_schema.sql found in root");
}
