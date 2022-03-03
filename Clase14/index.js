console.log("Inicio del proceso")

setTimeout( () => {
    console.log("Esto es asincronico")
}, 3000)

console.log("Fin del proceso")

//-------------------------------------------------------------

const boxes=document.getElementsByClassName("box")
for (const box of boxes){

    box.addEventListener('click', () =>{
        box.classList.add('active')
        
        setTimeout (() =>{
            box.classList.remove('active')
        }, 2500)
    })
}