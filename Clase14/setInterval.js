
let counter=0

const interval = setInterval ( () => {
    counter++
    console.log(`Counter: ${counter}`)

    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se quito el interval")
    }
}, 1000)