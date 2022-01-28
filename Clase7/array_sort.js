//sort te modifica el ARRAY. 
//OJO tener cuidado

const numeros=[40,1,5,200];
numeros.sort((a,b)=> a-b) //a-b significa que el anterior debe ser menor del que le sigue
console.log(numeros);

numeros.sort((a, b)=>b-a)//b-a significa que el anterior debe ser mayor del que le sigue
console.log(numeros)