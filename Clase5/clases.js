//Entidad con la que vamos a trabajar

//class se utiliza más en el día a día 
class Persona{
    constructor(nombre, edad, calle){
        this.nombre=nombre;
        this.edad=edad;
        this.calle=calle;
    }
    hablar(){
        console.log(`Hola, soy ${this.nombre}`)
    }
}

const persona1= new Persona("Homero",39,"Avenida Siempreviva 742");

persona1.hablar()

//ALT+96= `