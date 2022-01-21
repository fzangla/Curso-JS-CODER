function Persona(nombre, edad, ciudad){
    this.name = nombre;
    this.age = edad;
    this.city = ciudad;
    
 
   // this.gender="Mujer"

   this.hablar=function(){
    console.log(`HOLLA, soy ${this.name}`)
}
}  

const PERSONA1 = new Persona(Pablo, 24, Bogota);
const PERSONA2 = new Persona(Mariano, 50, Medellin);
const PERSONA3 ={
    nombre: "Pablo",
    edad: 33,
    ciudad: "Buenos Aires"
}