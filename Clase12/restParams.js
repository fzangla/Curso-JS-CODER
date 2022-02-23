function sumar (...numeros){
    console.log(numeros)

    return numeros.reduce ( (acc, num) => acc + num, 0)
}

console.log(sumar(2, 4))
console.log(sumar(9, 5, -4))
console.log(sumar(8, 3, 6, 100, -2))
