//contador de palabras
const fs = require("fs");

const fileReadme = fs.readFileSync("README.md", "utf8");
const fileText = fs.readFileSync("helloWorld.txt", "utf8");

const countWords = (text) => text.split(" ").length;

const reactCount = fileReadme.match(/react/gi  ?? []).length;

console.table([
  { File: "README.md", Words: countWords(fileReadme) },
  { File: "helloWorld.txt", Words: countWords(fileText) },
  { File: "README React Count", Words: reactCount },
]);

