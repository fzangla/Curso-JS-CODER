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
      <div class="center">
      <div class="card" style="width: 18rem;">
      <img src="img/${pokemon.nombre}.png" alt="${pokemon.nombre}" class="card-img-top" height=300px>
      <div class="cartaPokemonElegido card">
      <div class="card-body">
      <b>${pokemon.nombre}</b> <br>
      <p class="card-text">Tipo: ${pokemon.tipo} <br>
      Vida: ${pokemon.puntosDeVida} <br>
      Ataque: ${pokemon.ataque} <br>
      Defensa: ${pokemon.defensa} <br>
      Ataque Especial: ${pokemon.ataqueEspecial} <br>
      Defensa: ${pokemon.defensaEspecial} <br>
      Velocidad: ${pokemon.velocidad} <br> </p>
      </div>
      </div>
      </div>
      `
    }
    divBag.innerHTML =bagHTML;
  
  }
  //listado de pokemones sueltos
  const listaDePokemones = () =>{
    const divPokemon=document.querySelector("#pokemones");
  
    let listaHTML= "";
      
    for(const pokemon of arrayPokemon){
      listaHTML +=` 
      <div class="card w-25">
          <div class="card-body">
            <h5 class="card-title">${pokemon.id}: ${pokemon.nombre}</h5>
            <p class="card-text"> Tipo: ${pokemon.tipo} </p>
            </div>
            <div class="añadirPokemon btn btn-primary" id="${pokemon.id}">Elegir pokemón inicial</div>
          </div>
        </div>
      `
      // <p class="card-text"> Tipo: ${pokemon.tipo} <br>
      // Vida: ${pokemon.puntosDeVida} <br>
      // Ataque: ${pokemon.ataque} <br>
      // Defensa: ${pokemon.defensa} <br>
      // </p>
    }
    divPokemon.innerHTML =listaHTML;
  
    eventoAñadirPokemon()
  }  
  
  const eventoAñadirPokemon=()=>{
       const botonAtraparPokemon=document.getElementsByClassName("añadirPokemon");
        for(const boton of botonAtraparPokemon){
          boton.onclick=añadirPokemon;
      }
  }
  
  const añadirPokemon = e =>{
    const id= e.target.id;
    const pokemon = arrayPokemon.find(p => p.id == id);
    console.log(pokemon)
    BAG.push(pokemon);
    updateCache();
    listaBag();
  }
  
  const updateCache = () =>{
    const bagJSON= JSON.stringify(BAG);
    localStorage.setItem("bag", bagJSON);
  }
  
  const getCache = () =>{
    bagJSON=localStorage.getItem("bag");
    if(bagJSON) {
      BAG=JSON.parse(bagJSON);
    }
    listaBag();
  }

