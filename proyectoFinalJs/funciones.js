function buscarPokemon(pokemonUsuario)
    {
        let resultadoFind="";
        switch(pokemonUsuario)
        {
                    case "pikachu":
                        resultadoFind=arrayPokemon.find((obj) => obj.nombre === "pikachu");
                        break;
                    case "squirtle":
                        resultadoFind=arrayPokemon.find((obj) => obj.nombre === "squirtle");
                        break;
                    case "charmander":
                        resultadoFind=arrayPokemon.find((obj) => obj.nombre === "charmander");
                        break;
                    case "bulbasaur":
                        resultadoFind=arrayPokemon.find((obj) => obj.nombre === "bulbasaur");
                        break;
                    default:
                        console.log("No reconocemos ese pokemón.");
                        break;
        }
        return resultadoFind;
    }

function mostrar(identificador){
    const pokemons = arrayPokemon.find(p=> p.identificador==identificador)

    let contenedor=document.createElement("div") 
        
    contenedor.innerHTML = `
    <h3> ${pokemons.identificador}, ${pokemons.nombre}: tipo ${pokemons.tipo}</h3> 
    <p>Puntos de vida: ${pokemons.puntosDeVida}</p>
    <p>Ataque: ${pokemons.ataque}</p>
    <p>Defensa: ${pokemons.defensa}</p>
    <p>Ataque Especial ${pokemons.ataqueEspecial}</p>
    <p>Defensa Especial ${pokemons.defensaEspecial}</p>
    <p>Velocidad: ${pokemons.velocidad}</p>`
        
    padre.appendChild(contenedor)
}