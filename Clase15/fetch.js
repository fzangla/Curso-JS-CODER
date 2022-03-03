const list = document.getElementById("list")

const pedirData = async () => {
    const resp = await fetch('data.json')
    const data = await  resp.json()

    console.log(data)

    data.forEach((post) => {
        const li = document.createElement('li')
        li.innerHTML = `
        <h4> ${post.name} </h4>
        <p>${post.price}</p> `
        list.append(li)
    })
}

pedirData()


// const list = document.getElementById("list")
// fetch('data.json')
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach((product) => {
//             const li = document.createElement('li')
//             li.innerHTML = `
//             <h4> ${product.name} </h4>
//             <p>${product.price}</p> `
//             list.append(li)
//         })
    
//     })