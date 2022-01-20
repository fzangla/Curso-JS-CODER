// let entrada=prompt("Ingrese Nombre: ").toUpperCase();
// switch(entrada){
//     case "ALEJANDRO":
//         alert("Hola ALEJANDRO");
//         break;
//     case "FACUNDO":
//         alert("Hola FACUNDO");
//         break;
//     default:
//         alert("Quien eres?");
//         break;
//     }

// Esto es igual a 

// let entrada=prompt("Ingrese Nombre: ").toUpperCase();

// if (entrada=="ALEJANDRO") alert("Hola ALEJANDRO");
// else if (entrada=="FACUNDO") alert("Hola FACUNDO");
// else alert("Quien eres?");

let entrada=prompt("Ingrese Nombre: ").toUpperCase();


do{
    switch(entrada){
        case "ALEJANDRO":
            alert("Hola ALEJANDRO");
            break;
        case "FACUNDO":
            alert("Hola FACUNDO");
            break;
        case "SALIR":
            alert("Bye");
            break;
        default:
            alert("Quien eres?");
            break;
    }
}while (entrada != "SALIR")
