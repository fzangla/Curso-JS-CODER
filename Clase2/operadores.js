let precio = 100;
if (precio >= 80) {
    console.log("esto es caro");
} else if (precio < 20) {
    console.log("esto es muy barato");
} else {
    console.log("esto es regular");
}

////////////////////////////////////////////////

let a = true; //buzo rojo
let b = false; //sombrero de vaquero

let c = a && b; //and
let d = a || b; //or
let e = !a; //not
console.log("a && b= ", c);
console.log("a || b= ", d);
console.log("!a ", e);

////////////////////////////////////////////////

let nombre = prompt("nombre:");
let apellido = prompt("apellido:");

////////////////////////////////////////////////
//.toLoweCase() pasa el string a minusculas.
////////////////////////////////////////////////