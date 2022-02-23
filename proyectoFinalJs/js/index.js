console.log("Gracias por usar nuestra pokedex");

getCache();
listaDePokemones();

let generoEntrenadorPokemon = prompt("Ingrese genero (m o f): ").toLocaleLowerCase()
while(generoEntrenadorPokemon != "m" && generoEntrenadorPokemon != "f") {
    generoEntrenadorPokemon = prompt("Reingrese genero  con las letras 'm' o 'f': ").toLocaleLowerCase()
}
let nombreEntrenadorPokemon = prompt("Ingrese nombre: ")


const holaF="Bienvenida entrenadora "+nombreEntrenadorPokemon;
const holaM="Bienvenido entrenador "+nombreEntrenadorPokemon;
//ternario
generoEntrenadorPokemon =="m" ? alert(holaM) : alert(holaF);




const btn5 = document.getElementById("btn5")
const reload = document.getElementById('reload');
btn5.addEventListener('click', _ => location.reload());