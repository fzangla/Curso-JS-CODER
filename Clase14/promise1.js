const eventFuture = (res) => {
    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
            res ? resolve(':)') : reject (':(')
      },2000) 
    })
}

eventFuture (true)
    .then( (response) => {
        console.log('Response: ', response)
    })
    .catch( (error)=> {
        console.log('Error: ', error)
    })
    .finally( () => {console.log('Fin del proceso1') } )
    
eventFuture (false)
    .then( (response) => {
        console.log('Response: ', response)
    })
    .catch( (error)=> {
        console.log('Error: ', error)
    })
    .finally( () => {console.log('Fin del proceso2') } )

