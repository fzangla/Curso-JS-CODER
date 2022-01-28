const ob1={
    id:1,
    Producto: "Cerveza Roja"
}

const array=[ob1, { id:2, Producto: "fernet"}];
array.push({id:3,Producto:"vinos",price:120});

//For of

for(const item of array){
    console.log(item.id);
    console.log(item.Producto);
}
