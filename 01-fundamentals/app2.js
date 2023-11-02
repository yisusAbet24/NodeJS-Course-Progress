//leer, escribir y eliminar archivos

const fs = require("fs");
const util = require("util");
const wait = util.promisify(setTimeout);

(async () => {
  const fileText = fs.readFileSync("helloWorld.txt", "utf8");
  console.log(fileText);

  const newFile = fileText.replace(/express/gi, "nest.js");
  fs.writeFileSync("helloWorld-edit.txt", newFile);

  const fileNest = fs.readFileSync("helloWorld-edit.txt", "utf8");
  console.log({ text: fileNest });
  
  await wait(2000);
  fs.unlinkSync("helloWorld-edit.txt");
  console.log("File deleted");
})();
