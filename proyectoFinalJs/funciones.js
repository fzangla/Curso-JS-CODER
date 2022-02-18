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

//listado de pokemones atrapados
const listaBag = () =>{
    const divBag=document.querySelector("#pokemonElegido");
  
    let bagHTML= ""
      
    for(const pokemon of BAG){
      bagHTML +=`
      <div class="cartaPokemonElegido">
      <b>${pokemon.nombre}</b> <br>
      Tipo: ${pokemon.tipo} <br>
      Vida: ${pokemon.puntosDeVida} <br>
      Ataque: ${pokemon.ataque} <br>
      Defensa: ${pokemon.defensa} <br>
      Ataque Especial: ${pokemon.ataqueEspecial} <br>
      Defensa: ${pokemon.defensaEspecial} <br>
      Velocidad: ${pokemon.velocidad} <br>
      `
    }
    divBag.innerHTML =bagHTML
  
  }
  //listado de pokemones sueltos
  const listaDePokemones = () =>{
    const divPokemon=document.querySelector("#pokemones");
  
    let listaHTML= "";
      
    for(const pokemon of arrayPokemon){
      listaHTML +=`
      <div class="cartaPokemon">
      <b>${pokemon.id}: ${pokemon.nombre}</b> <br>
      Tipo: ${pokemon.tipo} <br>
      Vida: ${pokemon.puntosDeVida} <br>
      Ataque: ${pokemon.ataque} <br>
      Defensa: ${pokemon.defensa} <br>
      </div>
      <div class="añadirPokemon" id="${pokemon.id}">
        atrapar pokemon
      </div>
      `
    }
    divPokemon.innerHTML =listaHTML
  
    eventoAñadirPokemon()
  }
  const eventoAñadirPokemon=()=>{
    const botonAtraparPokemon=document.getElementsByClassName("añadirPokemon")
    for(const boton of botonAtraparPokemon){
      boton.onclick=añadirPokemon 
    }
  }
  
  const añadirPokemon = e =>{
    const id= e.target.id
    const pokemon = arrayPokemon.find(p => p.id == id)
    BAG.push(pokemon)
    updateCache()
    listaBag() 
  }
  
  const updateCache = () =>{
    const bagJSON= JSON.stringify(BAG)
    localStorage.setItem("bag", bagJSON)
  }
  
  const getCache = () =>{
    bagJSON=localStorage.getItem("bag")
    if(bagJSON) {
      BAG=JSON.parse(bagJSON)
    }
    listaBag()
  }