
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base para multiplicar'

    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        describe:'Muestra la tabla en consola'
    
       
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        describe:'Largo de la tabla'
    
       
    })
    .check((argv, options) => {

        /* console.log('yargs', argv) */
        if (isNaN(argv.base)) {
            throw 'Error con el tipo de dato ingresado'
        }
        return true;
    }).argv

    module.exports = argv