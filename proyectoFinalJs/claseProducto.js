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

// POKEMON INICIALES

const pikachu= new Pokemon (25, "Pikachu", "Electrico", 35, 55, 40, 50, 50, 90);
const bulbasaur= new Pokemon (1, "Bulbasaur", "Planta", 50, 20, 60, 30, 60, 40); 

const charmander= new Pokemon (4, "Charmander", "Fuego", 30, 60, 30, 60, 20, 70); 

const squirtle= new Pokemon (7, "Squirtle", "Agua", 40, 50, 40, 45, 45, 55); 


