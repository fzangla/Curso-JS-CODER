let nombre = "Cesar";
let apellido ="Sasaki";
let edad = 33;
let ciudad="lima";

const PERSONA1 = {
    nombre: "Cesar",
    apellido: "Sasaki",
    edad: 33,
    ciudad: "Lima"
}
//ACCEDER A LAS PROPIEDADES
console.log(PERSONA1.apellido);
let nombre=PERSONA1.nombre;


console.log(PERSONA1['edad']);

//ACTUALIZAR UNA PROPIEDAD
PERSONA1.edad=34;
console.log(PERSONA1)

