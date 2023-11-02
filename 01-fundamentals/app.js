//lee un archivo y reemplaza una palabra por otra

const fs = require("fs");
const file = fs.readFileSync('README.md', 'utf8');
const newData = file.replace(/React/ig, 'Vlue');
fs.writeFileSync('README-Angular.md', newData);
 