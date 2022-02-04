// let salida="no";

// while(salida!="si"){
//     let buscarPokemon =prompt("¿Qué pokemón desea buscar?").toLocaleLowerCase();
//        switch(buscarPokemon){ 
//         case "pikachu":
//            console.log("•PIKACHU(N°25): Tipo: Electrico || Puntos de vida: 35 || Ataque: 55 || Defensa:40 || Ataque Especial:50 || Defensa-Especial:50 || Velocidad:90");
//             break;
//         case "bulbasaur":
//            console.log("•BULBASAUR(N°1): Tipo: Planta || Puntos de vida: 50 || Ataque: 20 || Defensa: 60 || Ataque-Especial: 30 || Defensa-Especial: 60 || Velocidad: 40");
//             break;
//         case "charmander":
//            console.log("•CHARMANDER(N°4): Tipo:Fuego || Puntos de vida: 30 || Ataque: 60 || Defensa: 30 || Ataque-Especial: 60 || Defensa-Especial: 20 || Velocidad:70");
//             break;
//         case "squirtle":
//            console.log("•SQUIRTLE(N°7): Tipo: Agua || Puntos de vida: 40 || Ataque:50 || Defensa: 40 || Ataque-Especial: 45 || Defensa-Especial: 45 || Velocidad: 55");
//             break;
//         default:
//             alert("No reconocemos ese pokemón.")
//             break;
//         }
//         salida=prompt("Si desea SALIR escriba 'si'. En caso contrario escriba 'no'").toLocaleLowerCase();
// }



class Pokemon{
    constructor(id, nombre, tipo, puntosDeVida, ataque, defensa, ataqueEspecial, defensaEspecial, velocidad){
        this.id=id;
        this.nombre=nombre.toLocaleLowerCase();
        this.tipo=tipo.toLocaleLowerCase();
        this.puntosDeVida=puntosDeVida;
        this.ataque=ataque;
        this.defensa=defensa;
        this.ataqueEspecial=ataqueEspecial;
        this.defensaEspecial=defensaEspecial;
        this.velocidad=velocidad;
    }
}

const arrayPokemon = []


// POKEMON INICIALES
const pikachu= new Pokemon (25, "Pikachu", "Electrico", 35, 55, 40, 50, 50, 90);

const bulbasaur= new Pokemon (1, "Bulbasaur", "Planta", 50, 20, 60, 30, 60, 40); 

const charmander= new Pokemon (4, "Charmander", "Fuego", 30, 60, 30, 60, 20, 70); 

const squirtle= new Pokemon (7, "Squirtle", "Agua", 40, 50, 40, 45, 45, 55); 


//Estan ordenados por numero de ID a propósito
arrayPokemon.push(charmander);
arrayPokemon.unshift(bulbasaur);
arrayPokemon.push(squirtle);
arrayPokemon.push(pikachu);


//recorro el array con datos que me importen (id, nombre)
for( const referenciaPokemon of arrayPokemon) {
    console.log(referenciaPokemon.nombre, referenciaPokemon.tipo)
}



//Utilizamos una funcion para saber los datos del pokemon que busco
let salida="no";
while(salida!="si")
    {
        const pokemonUsuario=prompt("Ingrese su pokemon: ").toLocaleLowerCase();
        
        let resultado = buscarPokemon(pokemonUsuario);
        console.log(resultado);
        
        salida=prompt("Si desea SALIR escriba 'si'. En caso contrario escriba 'no'").toLocaleLowerCase();
    }
console.log("Gracias por usar nuestra pokedex");

function buscarPokemon(pokemonUsuario)
    {
        // let pokemonElegido="";
        let resultadoFind="";
        switch(pokemonUsuario)
        {
                    case "pikachu":
                        // pokemonElegido=console.log(arrayPokemon[3]);
                        resultadoFind=arrayPokemon.find((obj) => obj.nombre == "pikachu");
                        break;
                    case "squirtle":
                        // pokemonElegido=console.log(arrayPokemon[2]);
                        resultadoFind=arrayPokemon.find((obj) => obj.nombre === "squirtle");
                        break;
                    case "charmander":
                        // pokemonElegido=console.log(arrayPokemon[1]);
                        resultadoFind=arrayPokemon.find((obj) => obj.nombre === "charmander");
                        break;
                    case "bulbasaur":
                        // pokemonElegido=console.log(arrayPokemon[0]);
                        resultadoFind=arrayPokemon.find((obj) => obj.nombre === "bulbasaur");
                        break;
                    default:
                        console.log("No reconocemos ese pokemón.");
                        break;
        }
        return resultadoFind;
    }

