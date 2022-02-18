 
// JSON
 obj={id: 1, name: 'Facundo' }

 localStorage.setItem('data', obj)

 let dat=localStorage.getItem('data')
 console.log(data)
 console.log(typeof data)

 // save with STRINFY

 const product1={ id:2, name: 'beers'}
 console.log(product1)
 const esJSON=JSON.stringify(product1)
 console.log(esJSON)
 console.log(product1.toString())

 localStorage.setItem("product", esJSON)

 console.log('---------------')

 // Get JSON


 const fromCache= localStorage.getItem('product')
 console.log(fromCache.id) //Da undefined porque es un string y necesitamos que sea objeto 
 const product11 =JSON.parse(fromCache)
 console.log(product11)
 console.log(product11.id, product11.name)