function buscarPokemon(pokemonUsuario) {
  let resultadoFind = "";
  switch (pokemonUsuario) {
    case "pikachu":
      resultadoFind = arrayPokemon.find((obj) => obj.nombre === "pikachu");
      break;
    case "squirtle":
      resultadoFind = arrayPokemon.find((obj) => obj.nombre === "squirtle");
      break;
    case "charmander":
      resultadoFind = arrayPokemon.find((obj) => obj.nombre === "charmander");
      break;
    case "bulbasaur":
      resultadoFind = arrayPokemon.find((obj) => obj.nombre === "bulbasaur");
      break;
    default:
      console.log("No reconocemos ese pokemón.");
      break;
  }
  return resultadoFind;
}

//listado de pokemones atrapados
const listaBag = () => {
  const divBag = document.querySelector("#pokemonElegido");

  let bagHTML = ""

  for (const pokemon of BAG) {
    bagHTML += `
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
  divBag.innerHTML = bagHTML;

}
//listado de pokemones sueltos
const listaDePokemones = () => {
  const divPokemon = document.querySelector("#pokemones");

  let listaHTML = "";

  for (const pokemon of arrayPokemon) {
    listaHTML += ` 
      <div class="card w-25">
          <div class="card-body">
            <h5 class="card-title">${pokemon.id}: ${pokemon.nombre}</h5>
            <p class="card-text"> Tipo: ${pokemon.tipo} </p>
            </div>
            <div class="añadirPokemon btn btn-primary" id="${pokemon.id}">Elegir pokemón inicial</div>
          </div>
        </div>
      `
  }
  divPokemon.innerHTML = listaHTML;

  eventoAñadirPokemon()

}

const eventoAñadirPokemon = () => {
  const botonAtraparPokemon = document.getElementsByClassName("añadirPokemon");
  for (const boton of botonAtraparPokemon) {
    boton.onclick = añadirPokemon;
  }

}

const añadirPokemon = e => {
  const id = e.target.id;
  const pokemon = arrayPokemon.find(p => p.id == id);
  swal({
    title: `Seleccionaste a ${pokemon.nombre}`,
    text: "Una vez elegido no podrás volver atrás. ¿Desea continuar?",
    icon: "warning",
    buttons: true,
    dangerMode: false,
  })
    .then((willDelete) => {
      if (willDelete) {
        swal(`Elegiste a ${pokemon.nombre} como tu pokemon inicial`, "¡Descubre sus habilidades!", "success");
        BAG.push(pokemon)
        updateCache();
        listaBag();
      } else {
        swal("No elegiste ningún pokemon inicial", "Elija uno", "error");
      }
    });
}

const updateCache = () => {
  const bagJSON = JSON.stringify(BAG);
  localStorage.setItem("bag", bagJSON);
}

const getCache = () => {
  bagJSON = localStorage.getItem("bag");
  if (bagJSON) {
    BAG = JSON.parse(bagJSON);
  }
  listaBag();
}
/////////////////////////////////////////////////////////////////////////////////
PKM_TRAINER = []

const namePokemonTrainer = () => {

  //Pido el genero
  gender = prompt("Ingrese genero (m o f): ").toLocaleLowerCase()
  
  
  // if(gender != "m" && gender != "f"){
  //   Toastify({
  //     text: "Ingreso invalido",
  //     duration: 10000,
  //     gravity: 'bottom',
  //     position: 'left',
  //     className: "toastifyError",
  //     }).showToast();
  // }

  //valido el genero
  while (gender != "m" && gender != "f") {
    gender = prompt("Reingrese genero  con las letras 'm' o 'f': ").toLocaleLowerCase()
  }

  //Pido el nombre
  trainer = prompt("Ingrese nombre: ")

  //valido el nombre
  while (trainer == "") {
    trainer = prompt("Reingrese nombre: ")
  }
  
  //Guardo el nombre
  trainerNameJSON = localStorage.setItem("name", trainer)

  // declaro los mensajes 
  const holaF = "Bienvenida entrenadora " + trainer;
  const holaM = "Bienvenido entrenador " + trainer;
  
  // con el ternario saludo a quien corresponda
  gender == "m" ? swal(holaM) : swal(holaF);

  return trainerNameJSON;
};

//Desafio: Fetch en tu proyecto

const updateCacheTrainer = () => {
  const trainerNameJSON = JSON.stringify(PKM_TRAINER);
  localStorage.setItem("name", trainerNameJSON);
}

const getCacheTrainer = () => {
  trainerNameJSON = localStorage.getItem("name");
  if (trainerNameJSON) {
    PKM_TRAINER = JSON.parse(trainerNameJSON);
  }
  askName()
}


const askName = () => {
  if (PKM_TRAINER <= []){
    namePokemonTrainer()
  }
}

const fetchPokemon= (id) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then( (response => response.json() ) )
  .then((data) => {
      createPokemon(data);
  })
}

const fetchPokemons = (number) => {
  for (let i=1; i<=number; i++){
      fetchPokemon(i);
  }
}

const createPokemon = (pokemon) => {
  const card = document.createElement('div');
  card.classList.add('pokemon-block');
  
  
  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('imgContainer');

  const sprite = document.createElement('img');
  sprite.src=pokemon.sprites.front_default

  spriteContainer.appendChild(sprite);

  const number = document.createElement('p');
  number.textContent = `N° ${pokemon.id}`;

  const name = document.createElement('b'); 
  name.classList.add('name');
  name.textContent = pokemon.name.toUpperCase()


  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  pokemonContainer.appendChild(card);
}

const searchPokemon = event => {
  event.preventDefault();
  const {value} = event.target.pokemon;
  fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
  .then(data => data.json())
  .then(response => responsePokeData(response))
  .catch( (error)=> {
      console.log('No se encuentra el pokemon deseado', error) 
  } )
}
const responsePokeData = data => {
  const { stats, types} = data
  console.log(data)
}
