const productos=[
    {id:1, name: "Cerveza", price:120},
    {id:1, name: "Fernet", price:120},
    {id:1, name: "Ron", price:120}
]

const padre=document.getElementsById("productos")

for(const producto of productos){
    let contenedor=document.createElement("div")

    contenedor.innerHTML= `
    <h3> ID: ${productos.id}</h3>
    <p>Producto: ${producto.name}</p>
    <b>$ ${producto.price}</b>
    <hr>`

    padre.innerHTML
}