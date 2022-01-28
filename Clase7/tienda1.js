const productos=[
    {id:1, nombre: "Cerveza", precio: 120},
    {id:1, nombre: "Vino", precio: 70},
    {id:1, nombre: "Ron", precio: 50},
    {id:1, nombre: "whiskey", precio: 100}
]

const buscado= productos.find(  producto=> producto.id ==2);
console.log(buscado);

const existe = productos.some(p=> p.nombre =='Fernet');
console.log("Existe Fernet? ", existe);

const baratos=productos.filter(p=>  p.precio <=100);
console.log(baratos);

const listNombres =productos.map (p=> p.nombre);
console.log(listNombres);