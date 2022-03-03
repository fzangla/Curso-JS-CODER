// //fetch(url, config)


// let result = fetch('https://jsonplaceholder.typicode.com/posts')
// console.log(result)

// let json = result
//     .then((response) =>{
//     return response.json()
// })  .then( (json2) => {    
//     console.log(json2)
// })       version mejorada ABAJO


//GET POST
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((j) => console.log(j))


const list = document.getElementById("list")
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        console.log("Title: ", data[0].title)
        console.log("Text: ", data[0].body)

        data.forEach((post) => {
            const li = document.createElement('li')
            li.innerHTML = `
            <h4> ${post.title} </h4>
            <p>${post.title}</p> `
            list.append(li)
        })
    })

// ENVIAR DATOS AL SERVIDOR

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Coders',
        body: 'Los coders de la clase de JS son buenos',
        userId: 1
    }),
    headers: { 'Content-Type': 'aplication/json' }
})
    .then((response) => response.json())
    .then((j) => console.log(j))
