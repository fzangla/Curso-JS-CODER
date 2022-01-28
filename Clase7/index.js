
function sumarRango(desde=1, hasta=5){ 
    let total =0;
    for(let i =1; desde <= hasta; i++){
        total+=1;
    }

    return total;
}
/////////////////////////////////////
let resultado =sumarRango();
console.log(resultado);
/////////////////////////////////////

function mayorQue(n){
    let varFunction=function(m){
        return m>n
    }
    return varFunction;
}
let mayorQueDiez= mayorQue(10);
let mayorQueNueve= mayorQue(9);
let mayorQueOcho= mayorQue(8);

//
// function mayorQueDiez(n){
//     return n>10;
// }

// function mayorQueNueve(n){
//     return n>9;
// }