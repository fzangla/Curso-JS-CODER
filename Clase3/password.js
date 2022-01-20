let password="VALERIA";
const MAX=3;
let intentos=0; 
do{
    let dato=prompt("Ingrese password porfa: ");
    intentos++
}while(dato!=password && intentos==MAX)

if (dato= password) {
    alert("acceso concedido");
} else{
    alert("prohibido el acceso");
}