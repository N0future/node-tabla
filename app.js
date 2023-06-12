console.clear();
const argv = require('./config/yargs')
const { multiplicar } = require('./Helpers/multiplicar')

console.log(argv.base)

 multiplicar(argv.base,argv.l,argv.h).then((salida) => console.log())  