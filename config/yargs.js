const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar',
        'Imprimie en consola la tabla de multiplicar',
        options)
    .command('crear',
        'Genera un archivo con la tabla de multiplicar',
        options)
    .help()
    .argv
module.exports = {
    argv
}