//find devuelve el primer item que cumpla con la funcion
//SOLO UNO Y EL PRIMERO!
const numeros = [1,2,3,4,5,6]
let found=numeros.find(n=> n ==3)
console.log(found);

const cursos=[
    {name: 'js', precio:150},
    {name: 'React', precio:120},
    {name: 'Backend', precio:200}
]

const resultado= cursos.find((obj)=> obj.name =='React');
const resultado2= cursos.find((obj)=> obj.name =='D-W');

console.log(resultado);
console.log(resultado2);



