

console.log( new Date());

console.log( new Date(2022,03,28));

console.log( new Date(2022,03,27, 23,59,59));

format = "December 25, 1999 22:18:05";

const navidad = new Date (format);
console.log(navidad);

//Obtener datos de una fecha


console.log("Año", navidad.getFullYear());
console.log("Año", navidad.getMonth());
console.log("Año", navidad.getDay());


//formato de impresion

console.log( navidad.toDateString())
console.log( navidad.toLocaleString())
console.log( navidad.toLocaleDateString())
console.log( navidad.toTimeString())

//operar

console.log("Operaciones entre fechas!");

const hoy = new Date();
const navidad2= new Date("Decembre 25, 2022");

console.log(navidad2-hoy); //te tira en milisegundo

const milisegundoPorDia= 86400000;

console.log( (navidad2-hoy) /milisegundoPorDia, " dias para navidad");
