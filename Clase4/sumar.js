// let resultado=0;

// function sumar(num1, num2 ){
//     resultado=num1+num2;
// }

// sumar(5,6);

// console.log("Resultado es ",resultado);

let nombre = "Franco"; //variable global

function saludar (){
    let nombre="Matias"; //variable local
    console.log(nombre);
}
console.log(nombre);
saludar();
