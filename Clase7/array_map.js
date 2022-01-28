
const cursos=[
    {name: 'js', precio:150},
    {name: 'js React', precio:170},
    {name: 'js Backend', precio:130},
    {name: 'Cripto', precio:120},
    {name: 'Ux', precio:200}
]


const nombres=cursos.map(obj=>obj.name);
console.log(nombres); //me trae los nombres del array

const precios =cursos.map(obj=>obj.precio *1.21);
console.log(precios);
