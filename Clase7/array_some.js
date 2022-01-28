
const cursos=[
    {name: 'js', precio:150},
    {name: 'js React', precio:170},
    {name: 'js Backend', precio:130},
    {name: 'Cripto', precio:120},
    {name: 'Ux', precio:200}
]

const result=cursos.some(obj=>obj.name =='js');
console.log(result); //true
const result=cursos.some(obj=>obj.name =='vue');
console.log(result2); //false