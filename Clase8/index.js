console.log(document);
console.log(document.head);
console.log(document.body);


let div=document.getElementById("app");

console.log(div.innerHTML);
console.log(div);


let paises=document.getElementsByClassName("paises");

console.log(paises);
console.log(paises[0]);
console.log(paises[2]);

console.log(paises[2].innerHTML);


let contenedores=document.getElementsByTagName("div");

console.log(contenedores)


console.log(contenedores[0].innerHTML)
console.log(contenedores[1].innerHTML)
console.log(contenedores[2].innerHTML)


let paises=document.getElementsByClassName("paises")

const lista=[];
for(const pais of paieses){
    lista.push(pais.innerHTML)
}

console.log(lista.join(", "))