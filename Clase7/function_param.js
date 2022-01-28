function porCadaUno (array, funcion){
    for(const item of array){
        funcion(item)
    }
}

const duplicar= (n) => console.log(n*2);

let total=0;
const acumular =(n) =>total+=n;

porCadaUno([1,2,3,4], console.log)

console.log("total: ",total)