
class Producto{
    constructor(nombre,precio){
        this.nombre=nombre.toUperCase();
        this.precio= parseFloat(precio);
        this.precio =false;
    }

    sumarIva(){
        this.precio=this.precio*1.21;
        this.precio=this.precio.toFixed(2)
    }
}

const productos = []

productos.push(new Producto("Cerveza", 120));
productos.push(new Producto("Vino", 150));
productos.push(new Producto("Fernet", 155));

for(const producto of productos){ producto.sumarIva() } //no hace falta los {}