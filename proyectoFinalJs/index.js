// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

console.log("Gracias por usar nuestra pokedex");

// Nombro a los botones
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")

const padre = document.getElementById("listaDePokemones")

const reload = document.getElementById('reload');


btn1.onclick = () => mostrar(1)
btn2.addEventListener("click", function(){mostrar(4)})
btn3.addEventListener("click", ()=>{mostrar(7)})
btn4.onclick = () => mostrar(25)

btn5.addEventListener('click', _ => location.reload());



// Prueba de DOM con Inputs => corregir (validar con IF)

// const botonBuscarNombre=document.querySelector(".buscarPorNombre")
// const botonBuscarId=document.querySelector(".buscarPorId")

// function mostrarBusquedaNombre(){
//   const busqueda = arrayPokemon.find(obj => obj.nombre === nombre)
//   console.log(busqueda)
//   return busqueda;
// }

//   const padre= document.querySelector("#listaDePokemones")


// function mostrar(){ 
//     let contenedor=document.createElement("div")
//     switch(mostrarBusquedaNombre){
//       case ""
//     }
    
//     for(const pkm of arrayPokemon) {  
//       contenedor.innerHTML = `
//       <h3> ${pkm.identificador}, ${pkm.nombre}: tipo ${pkm.tipo}</h3> 
//       <p>Puntos de vida: ${pkm.puntosDeVida}</p>
//       <p>Ataque: ${pkm.ataque}</p>
//       <p>Defensa: ${pkm.defensa}</p>
//       <p>Ataque Especial ${pkm.ataqueEspecial}</p>
//       <p>Defensa Especial ${pkm.defensaEspecial}</p>
//       <p>Velocidad: ${pkm.velocidad}</p>`
      
//       padre.appendChild(contenedor)
//     }
// }  


// botonBuscarId.onclick = () => mostrarBusquedaID(arrayPokemon)


// botonBuscarNombre.addEventListener("click", function() {mostrarBusquedaNombre(nombre)});
