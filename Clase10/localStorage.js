
//Hay que eliminar los datos para quitarlos

localStorage.setItem('Bienvenida', 'Saludos a todos');
localStorage.setItem('validation', true);
localStorage.setItem('unNumero', 22);


let numero=localStorage.getItem('unNumero')

console.log("El numero es: ", numero )