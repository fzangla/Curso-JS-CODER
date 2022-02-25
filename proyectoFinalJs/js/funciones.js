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

