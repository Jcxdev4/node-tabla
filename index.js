const {crearArchivo} = require('./helpers/multiplicar')
const {crearArchivo2} = require('./helpers/dividir')
const argv = require('./config/yargs')
const colors = require('./config/colors')

console.clear()

console.log(argv)

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.blue, 'Creado'))
    .catch(err => console.log(err))


crearArchivo2(argv.n, argv.l, argv.d)
    .then(nombreFichero => console.log(nombreFichero.red, 'Creado'))
    .catch(error => console.log(error))