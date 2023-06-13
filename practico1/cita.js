// Parte 4 
//a 
let cita = "Los dinosaurios caminaban sobre la Tierra hace millones de años.";
let substring = "dinosaurios";
let tamañoDeCita = cita.length;

console.log("El tamaño de la cita es: " + tamañoDeCita);

//b 
let indice = cita.indexOf(substring);

console.log("El índice del substring es: " + indice);

// c

 cita = "Tres tristes tigres comen trigo en un trigal";
substring = "tigres comen trigo";

indice = cita.indexOf(substring);
longitud = substring.length;

let citaRevisada = cita.slice(0, indice) + "tigres comen trigo";

console.log(citaRevisada);




