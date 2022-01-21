class Producto{

    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;

        this.vendido=flase;
    }

    sumarIva(){
        thisprecio=thisprecio*1.21;
    }

    vender(){
        this.vendido=true;
    }
}


const producto1= new Producto("Cerveza", 120);

producto1.vender();
producto1.sumarIva();

const producto2= new Producto("Ron", 300);
producto2.sumarIva();
