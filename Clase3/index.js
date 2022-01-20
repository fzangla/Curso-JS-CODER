//alert("Hola Coder");
// i=i+1 = i++

// for(let i=0; i<5; i=i+1){
//     console.log("("+i+")Hola!");
// }
// console.log("Ciao!");

//Sumas!!
// let = numero = parseInt(prompt("Ingrese un número:"));
// console.log("El numero es " + numero);
// let suma=0;

// for(let i=0; i<=numero;i++){
//     console.log("Va a sumar " +suma+ " con "+i);
//     suma=suma+i;
//     console.log("RESULTADO= "+suma);
// }
// console.log("la Suma es "+suma);

//Tabla de multiplicar

let numero=parseInt(prompt("Ingrese numero"));
if (isNaN(numero)){
    alert("Ingrese un numero");
}else{
    for(let i=1; i<=10; i++){
        producto=numero*i;
        alert(numero +" x "+i+ " = " +producto);
    }
}