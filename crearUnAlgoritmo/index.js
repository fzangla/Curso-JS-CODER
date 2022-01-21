let nombre;
let numeroIngreasdo=0;
let numeroAleatorio=0;
const INTENTOS=5;

nombre=prompt("Ingrese su nombre: ");

numeroAleatorio=parseInt( Math.random()*100+1);

for(let i=0;i<INTENTOS;i++)
{
    
    numeroIngreasdo=parseInt(prompt("Ingrese un número entre 1 y 100:"));
    
        if(numeroAleatorio>numeroIngreasdo)
        {
            alert("El número es mayor");
        } else if (numeroAleatorio<numeroIngreasdo)
        {
            alert("El número es menor");
        } else{
            break;
        }
}
if(numeroAleatorio==numeroIngreasdo)
{
    alert("FELICITACIONES "+nombre+"! Usted acertó. El número correcto es " +numeroAleatorio);
}else{
    alert("Agotaste los intentos, "+nombre+". El número correcto era " +numeroAleatorio+". Suerte la próxima");
}
    