
// FUNCION CONSTRUCTORA
//moldea el objeto que nosotros queremos hacer

function Persona(objeto){
this.name= objeto.name;
this.age =objeto.age;
this.city= objeto.city;

}

const OBJ= {
    name: "Rodrigo",
    age: 22,
    city: "Cordoba"
}

const PERSONA1= new Persona (OBJ);

const PERSONA2= new Persona ({
    name: "Camila",
    age:22,
    city:"La Plata"
})