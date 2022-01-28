const numeros=[1,2,3,4,5,6]
function print(n){
    console.log("El numero es:" ,n)
}

numeros.forEach(print);

numeros.forEach(n=>{
    console.log("El numero es: ",n)
})