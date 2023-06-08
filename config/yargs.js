const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe:'es la base de la tabla de multiplicar'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'booleano que lista la tabla'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe:'es el limite de la tabla de multiplicar'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que ser un numero";
    }
    if (isNaN(argv.h)) {
        throw "el limite tiene que ser un numero";
      }
    return true;
  })
  .argv;

  module.exports = argv;