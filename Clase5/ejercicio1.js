function Product(name, price, quantity){
    this.name=name,
    this.price=parseFloat(price),
    this.quantity=quantity
}

cantidadProductos=0;

totalProductos=0;

while(true){
    alert("Insertar nuevo producto al carrito!!!!");
    let nombre =prompt("nombre del producto");
    if(nombre=="salir") break;
    let precio =prompt("Precio del producto");
    if(precio =="salir") break;
    let cantidad=prompt(cantidad);
    if(precio =="salir") break;

    const P= new Product(name, price, quantity);

    cantidadProductos++
    totalProductos+=P.price

    console.log("Se ha agregado el producto ")
    console.log(P);
}

alert("Cantidad de productos "+ cantidadProductos+ "con un total de precio de "+totalProductos);

