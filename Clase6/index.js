const arrayA =[];

const arrayB =[1,2];

const arrayC =["C1", "AA", "TTT"];

const arrayD =[true, false, true, false];

const arrayE =[2, false, "Esto es un string"];

const numeros =[1,2,3,4,5];

console.log(numeros[0]);

let numero=numeros[1]; //2

let resultado= numero+numeros[3]; //numero (2)+numeros[3](4)=6


//recorriendo un array

console.log("Recorrer array!");
for(let index=0;index<5;index++){
    console.log(numeros[index]);
}

//METODOS Y PROPIEDADES!

const   miArray=["marca", 25, "palabra"];

console.log(miArray);
console.log(miArray.length);


console.log("Recorrer miArray!");
for(let index=0;index<miArray.length;index++){
    const element=miArray[index];

    console.log(element);
}


//Agregar elementos (por default se agregan al final)
miArray.push("franco");
            //miArray=["marca", 25, "palabra", "franco"];
//Agregar elementos al principio
miArray.unshift(9090);
            //miArray=[9090, "marca", 25, "palabra", "franco"];
//quitar ultimo elemeto
miArray.pop();
            //miArray=[9090, "marca", 25, "palabra"];
//quitar primer elemento
miArray.shift();
            ////miArray=["marca", 25, "palabra"];

//quitar grupo de elementos
miArray.splice(1,2);

//unir JOIN

console.log( miArray(", "));
let arrayJoin=miArray.join(" *** ");

//Unir arrays

const perros= ["firaullais", "scooby doo"];

const gatos= ["pelusa", "felix", "garfield"];

const mascotas=perros.concat(gatos); //mascotas["firaullais", "scooby doo" "pelusa", "felix", "garfield"]


//Slice copia sectores del array *[*,*)

const grupo1= mascotas.slice(1,3); //"scooby doo" "pelusa". 1>= X <3
//arranca en uno pero lo cierra antes de empezar el ultimo numero (3)



// conocer posicion de un elemento
let indice= mascotas.indexOf("felix");
const elementoMascotas=mascotas[indice];
//si no lo encuentra devuelve -1
//saber su un element existe en el array

console.log( mascotas.includes("garfield")); //true
console.log( mascotas.includes("gatito bb")); //false

//conseguir el array al reves

const alReves= perros.reverse(); // ["scooby doo", "firaullais"]
//este suele ser destructivo! Tener cuidado. Te modifica la variable del array


