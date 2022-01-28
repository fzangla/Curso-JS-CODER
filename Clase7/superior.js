function asignarOperacion(operarion){
    if(op=="sumar"){
        return function(a,b){return a + b }  
    } else if (op =="restar"){
        return(a,b)=>a-b
    }
}

let suma= asignarOperacion("sumar")
let suma= asignarOperacion("restar")

console.log(suma(4,6))

console.log(resta(4,6))