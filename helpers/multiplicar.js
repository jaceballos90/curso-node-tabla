const fs = require("fs");

const crearArchivo = async (base, listar = false, limite) => {
  try {
    //console.log('Hola Mundo!!!')

    /* const base = 5; */
    let salida = "";

    for (let index = 1; index <= limite; index++) {
      salida += `${base} x ${index} = ${base * index}\n `;
    }

    if (listar) {
      console.log("================");
      console.log("Tabla del", base);
      console.log("================");
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creado`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo: crearArchivo,
};
