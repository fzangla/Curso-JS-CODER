const personas =[
    "cesar",
    "maria",
    "franco",
    "camila",
    "alan"
]
let padre=document.getElementsById("personas")

for (const persona of personas){
    let li=document.createElement("li")
    li.innerHTML=persona

    padre.appendChild(li)
}
