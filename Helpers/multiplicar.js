const fs = require('fs');
var colors = require('../node_modules/colors');
const multiplicar = (base, listar = false, hasta = 10) => {
    let salida = "";
    const promise = new Promise((resolve, reject) => {
        for (let i = 0; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i} \n`;

            if (i % 2 == 0) {
                console.log(colors.red(`${base} X ${i} = ${base * i} \n`))
            } else {
                console.log(colors.green(`${base} X ${i} = ${base * i} \n`))
            }

        }

        fs.writeFile('./salida/tabla-5.txt', salida, (err) => {
            if (err) {
                reject("Error al crear el archivo");
            } else {
                if (listar) {
                    resolve(salida);
                } else {

                    resolve(`Archivo tabla del ${base}.txt Creado`)
                }



            }
        });
    });

    return promise;
}

module.exports = {
    multiplicar
}
