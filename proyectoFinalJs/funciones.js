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