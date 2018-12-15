const fs = require('fs');
const colors=require('colors')
async function crearArchivo(base, limite=10) {

    if (!Number(base)) throw new Error(`Numero ${base} invalido`);
    if (!Number(limite)) throw new Error(`Limite ${limite} invalido`);
    let data = ''
    for (let i = 1; i <= limite; i++) {
        if(i>1)data+="\r\n"
        data += `${base} * ${i} = ${base*i}`
    }
    var archivo = `tablas/tabla-${base}-al-${limite}.txt`

    fs.writeFile(archivo, data, (err) => {
        if (err) throw new Error(e); //throw "err";
    });
    return archivo
}
async function listarArchivo(base, limite=10) {
    console.log('============'.green)

    if (!Number(base)) throw new Error(`Numero ${base} invalido`);
    if (!Number(limite)) throw new Error(`Limite ${limite} invalido`);
    let data = ''
    for (let i = 1; i <= limite; i++) {
        if(i>1)data+="\r\n"
        data += `${base} * ${i} = ${base*i}`
    }
    var archivo = `tablas/tabla-${base}.txt`
    console.log(data.magenta);
    return archivo
}
module.exports = {
    crearArchivo,
    listarArchivo
}