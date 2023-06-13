// Parte 2 Comandos Basicos
//a. Crea cuatro variables que contengan valores numéricos

let numero1 = 3;
let numero2 = 13;
let numero3 = 18;
let numero4 = 93;


//b. Suma las dos primeras variables y guarda el resultado en otra variable

let suma = numero1 + numero2;
console.log(suma);


//c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable

let resta = numero3 - numero4;
console.log(resta);

//d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el
// resultado en una variable llamada resultadoFinal. El producto debe ser
// 44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales

numero1 = 3;
numero2 = 4;
numero3 = 10;
numero4 = 3.71;

suma = numero1 + numero2;
resta = numero3 - numero4;

let resultadoFinal = suma * resta;

console.log(resultadoFinal);

// e. Escribe un cálculo que verifique si resultadoFinal es un número par. Almacene el resultado en una variable llamada esPar

let esPar = resultadoFinal % 2 === 0;

// f. 

console.log("Mis variables iniciales fueron: " + numero1 + ", " + numero2 + ", " + numero3 + " y " + numero4 + ". La respuesta a verificar si el resultado final es par es: " + esPar);



