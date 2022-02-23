let temp=31;

if(temp>30){
    console.log("Mucho calor");
}else{
    console.log("Nice day");
}

//ternario
temp>30 ? console.log("Mucho calor2") : console.log("Nice day2");

let edad=20;
let permiso;

if(edad>=18){
    permiso=true;
}else{
    permiso=false;
}

permiso ? console.log('Puede pasar') : console.log('No puede pasar');
console.log(permiso);

//
const user1={
    name: 'Franco Zangla',
    edad: 24
}

const permiso2 = (user1.edad>17) ? true : false;

permiso2 ? console.log('Es mayor, si tiene permiso'):console.log('Es menor, no tiene permiso');


//NULISH
//Solo para los null y undefined
console.log(0 ?? 'Texto'); //0
console.log(0 ?? 'Texto');//texto
console.log(40 ?? 'Texto222'); //40
console.log(null ?? 'Texto');//texto 
console.log(undefined ?? 'Texto');//texto 
console.log(false ?? 'Texto');//false 



