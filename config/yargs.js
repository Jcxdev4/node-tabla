const { describe } = require('yargs');

const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Obtiene la base por la cual vamos a multiplicar'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Opcion para mostrar la tabla en consola'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'Define hasta donde queremos que sea la tabla'
        })
        .option('n', {
            alias: 'numero',
            type: 'number',
            default: 5,
            describe: 'Numero que queremos dividr'
        })
        .option('d', {
            alias: 'dividendo',
            type: 'number',
            default: 2,
            describe: 'divisor por el cual queremos comenzar a dividir'
        })
        .check((argv, options) => {
            if(isNaN(argv.b)) {
                throw 'La Base tiene que ser un numero'
            }
            return true
        })
        .argv;


module.exports = argv;
