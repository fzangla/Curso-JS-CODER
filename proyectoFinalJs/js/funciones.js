//************
// Segun el pokemon que ingrese el usuario devuelve el pokemon hallado
// Solo sirve para el array creado (pikachu, bulbasaur, squirtle y charmander)
//////////////
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
//************
//muestra en el DOM los pokemones atrapados en la mochila
//////////////
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
    //************
    //listado de pokemones sueltos/sin atrapar
    //////////////    
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

//************
// Mediante click en el boton añade un pokemon a la lista
//////////////
const eventoAñadirPokemon = () => {
        const botonAtraparPokemon = document.getElementsByClassName("añadirPokemon");
        for (const boton of botonAtraparPokemon) {
            boton.onclick = añadirPokemon;
        }
        console.log(añadirPokemon)

    }
    //************
    // mediante click consulta si quieres atrapar al pokemon o no
    //////////////
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
                    swal(`Elegiste a ${pokemon.nombre} como parte de tu equipo pokemon`, "¡Descubre sus habilidades!", "success");
                    BAG.push(pokemon)
                    updateCache();
                    listaBag();
                } else {
                    swal("No elegiste ningún pokemon inicial", "Elija uno", "error");
                }
            });
    }
    //************
    // actualiza el cache
    //////////////
const updateCache = () => {
    const bagJSON = JSON.stringify(BAG);
    localStorage.setItem("bag", bagJSON);
}

//************
// obtiene el cache guardado
//////////////
const getCache = () => {
        bagJSON = localStorage.getItem("bag");
        if (bagJSON) {
            BAG = JSON.parse(bagJSON);
        }
        listaBag();
    }
    //************
    // Llamo a la api y obtengo el pokemon segun el id que completo
    //////////////
const fetchPokemon = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response => response.json()))
        .then((data) => {
            createPokemon(data);
        })
}

//************
// establezco un numero hasta el cual quiero mostrar el id de cada pokemon
//////////////
const fetchPokemons = (number) => {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
}

//************
// creo una mini-card de pokemon con la imagen, id y nombre
//////////////
const createPokemon = (pokemon) => {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');


    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('imgContainer');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `N° ${pokemon.id}`;

    const name = document.createElement('b');
    name.classList.add('name');
    name.textContent = pokemon.name.toUpperCase()

    const btnAddPkm = document.createElement('button');
    btnAddPkm.classList.add('btnAddPkm');
    btnAddPkm.textContent = `Añadir a mi equipo`


    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(btnAddPkm);

    pokemonContainer.appendChild(card);
    addEventPokemon()
}


const addEventPokemon = () => {
    const btnAddPkm = document.getElementsByClassName('btnAddPkm')
    for (const btn of btnAddPkm) {
        btn.onclick = addPokemon
    }
}

const addPokemon = e => {
        const id = e.target.id
        const number = data.find(p => p.id == id)
        console.log(number)
    }
    //************
    // busca el pokemon para mostrar la card
    //////////////
const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound())
}

//************
// obtenemos la imagen y los datos del pokemon
//////////////
const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const { stats, types } = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;
    setCardColor(types);
    renderPokemonTypes(types);
    renderPokemonStats(stats);
}

//************
// seteamos la cant y el color de tipo de pokemon (en caso de que tenga 1 o 2 tipos )
//////////////
const setCardColor = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background = `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg.style.backgroundSize = ' 5px 5px';
}

//************
// colocamos en el DOM los tipos
//////////////
const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

//************
// llamo a las stats  y las colocamos junto a su cantidad
//////////////
const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}

//************
// si no encuentra el pokemon muestra una carga anunciando que no encontro el pokemon
//////////////
const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', './img/silueta.png');
    pokeImg.style.background = '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}