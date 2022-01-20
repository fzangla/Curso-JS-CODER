//anonimas

const suma= function (a,b) {
    return a+b;
}

const resta= function (a,b) {
    return a-b;
}
console.log(suma(4,6));
console.log(resta(4,6));

//flechas =arrows

const suma =(a,b) =>{
    return a+b;
}
const saludar =() =>{
    console.log("Hola Franchu");
}

/////////////////
//funcion
function sumar1(a,b) {
    return a+b;
}
//funcion anonima
const sumar2 = function(a,b) {
    return a+b;
}
//funcion flecha
const sumar3=(a,b) => a+b;


/////////////////////////
//corregir
// const sumarArticulos=(a,b)=>a+b;
// const restaArticulos=(a,b)=>a-b;
// const iva=(x)=>x*21/100;

// let precioProducto=500;
// let descuento =50;
// let calcIva = iva(precioProducto);
// let precioIva= sumar(precioProducto,calcIva);
// let precioDesc
// let precioFinal= restar(calcIva,descuento);
// let 