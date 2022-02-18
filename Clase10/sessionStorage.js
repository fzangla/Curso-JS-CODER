
//Al cerrar la sesion se olvidan los datos
//localStorage.setItem(KEY, ITEM);
localStorage.setItem('seleccionados', [1,2,3]);
localStorage.setItem('validation', false);
localStorage.setItem('email', 'foo@goo.com');


let lista = sessionStorage.getItem('seleccionados').split(',')
let bandera = sessionStorage.getItem('validation')== 'true'
let bandera = sessionStorage.getItem('email')

console.log(lista)
console.log(bandera)
console.log(email)

function showStorage(){   
    for( let i=0; i<sessionStorage.length;i++){
        let key= sessionStorage.key(i);
        
        let value= sessionStorage.getItem(key)
        console.log("Key: ", key, "->", value)
    }
}

sessionStorage.removeItem('email')

showStorage()