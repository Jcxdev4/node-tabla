const fs = require('fs')
const colors = require('colors')

const crearArchivo2 = async(numero = 5, listar = false, dividendo = 2) => {
    
    let salida, consola = ''

    try {
        for (let i = dividendo; i <= numero; i++) {
            salida += `${numero} / ${i} = ${numero / i}\n`
            consola += `${numero} ${'/'.green} ${i} ${'='.green} ${colors.blue(numero / i)}\n`
        }

        if(listar){
            console.log('========================'.blue)
            console.log(`       Divisiones del ${numero}`.white)
            console.log('========================'.blue)
            
            console.log(consola)
        }

        fs.writeFileSync(`./salida/divisiones-${numero}.txt`, salida)
        return `divisiones-${numero}.txt`
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo2
}