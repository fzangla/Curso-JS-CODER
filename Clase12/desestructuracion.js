console.log('Saca de la estructura de un objeto para utilizar las key de forma individuales');
const user={
    nameUser: 'valeria',
    age: 20,
    phone: {
        movil:1112345678,
        home: null,
        work: 87654321
    }
}
let {nameUser, age, phone:{work}}=user;
console.log(nameUser);//valeria
console.log(age);//20
console.log(work);//87654321
 
console.log('ALIAS: Se utiliza cuando traigo una api y las key no llevan nombre que me sean comodos');

const item={ 
    id_product: 11,
    product_name:'pokeball',
    price_per_unit:20,
    stock_available: 100
}

const {id_product: id}=item;
console.log(id);//11
console.log('--------');
const {
    product_name: product,
    price_per_unit:price,
    stock_available:stock    
}=item;

console.log(product); //pokeball
console.log(price); //20
console.log(stock);//100

console.log('Desestructuracion por parametros');

const product1={
    id:2,
    nameProdcut: 'Beers',
    price_product: 20    
}
// const desestructurar = (item) =>{
//     const{id, nameProdcut}
//     console.log(id, nameProdcut)
// }
// desestructurar(product1);

const desestructurar2 = ({id, nameProdcut}) => console.log(id, nameProdcut)
desestructurar2(product1);
//Ejemplo: devolvemos donde el usuario hizo click
// window.addEventListener('click', (e) =>{
    //     console.log(e.x, e.y) 
    // } )
//De esta manera evitamos utilizar la E y simplificamos a traves de la desestructuracion
window.addEventListener('click', ({x, y}) => console.log(x, y) )

console.log('desestructuracion de array- Omito algunos nombres y los guardo en otra variable (x y b)')
const names=['Wilian', 'Luis', 'Valeria', 'Max'];
const [, x, , b]=names;
console.log(x);
console.log(b);
