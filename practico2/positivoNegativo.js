const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingresar un numero: ');
if (numero > 0) {
    console.log('El número es positivo');
} else if (numero === '0') {
    console.log('El número es cero');
} else {
    console.log ('El número es negativo');
    
}
