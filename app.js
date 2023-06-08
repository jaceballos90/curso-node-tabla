const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
var colors = require('colors');

console.clear()
console.log('hello'.green); // outputs green text

//const base = 5;

//console.log(process.argv)
//console.log(argv)
//console.log('base yargs: ',argv.b)
//console.log(argv)

/* const [,,arg3= 'base=7'] = process.argv

const [,base] = arg3.split('=')
 */
//console.log(arg3)
//console.log(base)


crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
.catch(err => console.log(err))
