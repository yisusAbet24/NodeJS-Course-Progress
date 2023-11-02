import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "It is the base of the multiplication table",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "It is the limit of the multiplication table",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Display the table in the console",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "table",
    describe: "Name of the file",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "./outputs",
    describe: "Destination of the file",
  })
  .check((argv, options) => {
    if (argv.l < 1) throw "The limit must be greater than 0";
    if (argv.b < 1) throw "The base must be greater than 0";
    if (argv.b > 100) throw "The base must be less than 100";
    if (argv.l > 100) throw "The limit must be less than 100";
    if (isNaN(argv.b)) throw "The base must be a number";
    if (isNaN(argv.l)) throw "The limit must be a number";
    if (typeof argv.s !== "boolean") throw "The show must be a boolean";
    if (typeof argv.n !== "string") throw "The name must be a string";
    if (typeof argv.d !== "string") throw "The destination must be a string";
    return true;
  })
  .parseSync();
