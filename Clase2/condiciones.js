//condicionales
//////////////////////////////////////////
let variable = true;

if (true) {
    console.log("EJECUCION");
} else {
    console.log("EJECUCION'T");
}
//////////////////////////////////////////
//////////////////////////////////////////
if (5 == 6) {
    console.log("Saludos a todos")
} //No entra
if (6 === 6) {
    console.log("Saludos a todos")
} //Entra. Triple = es estricto y valida mismo tipo de dato
if (6 == '6') {
    console.log("Saludos a todos")
} //Entra.
//////////////////////////////////////////
//////////////////////////////////////////
let numero1 = 7;
let numero2 = 10;
numero1 = numero1 + 3;
if (numero1 == numero2) {
    console.log("Saludos")
}
//////////////////////////////////////////
//////////////////////////////////////////

//////////////////////////////////////////
let unColor = "rojo";

if (unColor == "rojo") {
    console.log("rojo!!");
} else {
    console.log("rojon't :(");
}

//////////////////////////////////////////
//////////////////////////////////////////

let nombreUsuario = prompt("Ingrese su nombre de usuario");

if (nombreUsuario == "") {
    alert("Ingrese el nombre de usuario");
} else {
    alert("Bienvenido "+ nombreUsuario);
}

//////////////////////////////////////////
// .trim() -> Quita los espacios en blanco!
//////////////////////////////////////////
// con barra invertida podes utilizar las mismas comillas ("ingrese \"nombre"\ ")
//////////////////////////////////////////
let Color = "rojo";

if (Color == "azul") {
    console.log("Esto es azul");
} else if (Color=="amarillo"){
    console.log("Esto no es azul");
} else if (Color=="rojo"){
    console.log("Esto es rojo");
} else{
    console.log("No reconocemos el color");
}
//////////////////////////////////////////
//////////////////////////////////////////
