//mantener el username logueado

// let username = localStorage.getItem('username')

// if (username){
//     alert('Bienvenido '+ username)
// }else{
//     username=prompt("Insert username: ")
//     localStorage.setItem("username", username)
// }

let color = localStorage.getItem('color')

if (!color) localStorage.setItem("color", prompt("Insert color: "))
   

setColor()
    
function setColor(){
    const color=localStorage.getItem('color')
    document.getElementsByTagName("body")
    b[0].style="background-color"+color
} 