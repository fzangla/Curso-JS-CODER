
const cursos=[
    {name: 'js', precio:150},
    {name: 'js React', precio:170},
    {name: 'js Backend', precio:130},
    {name: 'Cripto', precio:120},
    {name: 'Ux', precio:200}
]

const resultado= cursos.filter(obj => obj.name.includes('js'));

console.log(resultado);

total=150;
const baratos= cursos.filter(item => item.precio <=total);
console.log(baratos);