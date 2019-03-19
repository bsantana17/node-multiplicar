//requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    console.log('============'.green);
    console.log(`=tabla de ${base}=`.green);
    console.log('============'.green);
    for(let i=1;i<=limite; i++){
        console.log(base + '*' + i + '=' + base*i);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) =>{
        if(!Number(base)){
            reject('No es un numero');
            return;
        }
        let contenido = '';
        for( let i = 1; i <=limite; i++ ){
            contenido += base + '*' + i + '=' + base*i + '\n';
        }
        archivo = 'tabla-' + base + '.txt';
        fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) => {
          if (err) reject(err);
          else
            resolve(archivo.red);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}