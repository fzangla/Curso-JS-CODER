
const listaNombres=[];
let cantidad=5;

while(listaNombres.length<cantidad){
    let nombre=prompt("Ingrese nombre: ");
    listaNombres.push(nombre);
    console.log("Tamaño: "+listaNombres.length);

}

const nuevaLista=listaNombres.concat("Camila", "Ayelen");

alert(listaNombres.join("\n")) //"\n"-> Salto de linea

