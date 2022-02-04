const carrito=[];

const productos=[
    {id: 1, name: "Cerveza", price:140},
    {id: 2, name: "Fernet", price:130},
    {id: 3, name: "Whiskey", price:120},
    {id: 4, name: "Ron", price:110},
    {id: 5, name: "Vino", price:90}
]

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")

function addCarrito(id){
    const producto = productos.find(p=> p.id==id)
    console.log("Añadió", producto)
    carrito.push(producto)
}

btn1.onclick = () => addCarrito(1)
btn2.addEventListener("click", function(){addCarrito(2)})
btn3.addEventListener("click", ()=>{addCarrito(3)})
btn4.onclick = () => addCarrito(4)
btn5.onclick = () => addCarrito(5)

document.getElementById("btnShow").addEventListener("click", () => {
    console.log(carrito)
})

document.getElementById("btnShowTotal").onclick=()=>{
    let total= 0;
    for(const prodCarrito of carrito){
        total += prodCarrito.price
    }
    alert(`El total es $${total}`)
}