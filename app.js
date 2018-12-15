const {argv} = require('./config/yargs')
const colors=require('colors')
const {
    crearArchivo,
    listarArchivo
} = require('./multiplicar')
let comando = argv._[0]
let base = argv.base
let limite = argv.limite
switch (comando) {
    case 'listar':
        console.log('LISTAR\n')
        listarArchivo(base, limite)
            .then(archivo =>
                console.log(
                    ``
                )
            )
        break
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo =>
                console.log(
                    `Archivo ${archivo.rainbow} creado satisfactoriamente`
                )
            )
        break
    default:
        console.log('Comando no conocido')
}