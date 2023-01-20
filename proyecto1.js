const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function separaKV(objeto) {
    const claves = Object.keys(objeto).sort();
    const valores = claves.map(clave => objeto[clave]);
    return { claves, valores };
}

const keysyvalores = {};
let clave;
let valor;

function ingresaKV() {
    rl.question("Ingresa una Key (o escribe 's' para salir) ", function(res) {
        clave = res;
        if (clave !== 's') {
            rl.question("Ingresa un valor  ", function(res) {
                valor = res;
                keysyvalores[clave] = valor;
                ingresaKV();
            });
        } else {
            const respuesta = separaKV(keysyvalores);
            console.log(respuesta);
            rl.close();
        }
    });
}

ingresaKV();