let salida="no";

while(salida!="si"){
    let buscarPokemon =prompt("¿Qué pokemón desea buscar?").toLocaleLowerCase();
       switch(buscarPokemon){ 
        case "pikachu":
           console.log("•PIKACHU(N°25): Tipo: Electrico || Puntos de vida: 35 || Ataque: 55 || Defensa:40 || Ataque Especial:50 || Defensa-Especial:50 || Velocidad:90");
            break;
        case "bulbasaur":
           console.log("•BULBASAUR(N°1): Tipo: Planta || Puntos de vida: 50 || Ataque: 20 || Defensa: 60 || Ataque-Especial: 30 || Defensa-Especial: 60 || Velocidad: 40");
            break;
        case "charmander":
           console.log("•CHARMANDER(N°4): Tipo:Fuego || Puntos de vida: 30 || Ataque: 60 || Defensa: 30 || Ataque-Especial: 60 || Defensa-Especial: 20 || Velocidad:70");
            break;
        case "squirtle":
           console.log("•SQUIRTLE(N°7): Tipo: Agua || Puntos de vida: 40 || Ataque:50 || Defensa: 40 || Ataque-Especial: 45 || Defensa-Especial: 45 || Velocidad: 55");
            break;
        default:
            alert("No reconocemos ese pokemón.")
            break;
        }
        salida=prompt("Si desea SALIR escriba 'si'. En caso contrario escriba 'no'").toLocaleLowerCase();
}