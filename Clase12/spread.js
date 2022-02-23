const names=['Wilian', 'Luis', 'Valeria', 'Max'];
const [a,b, c, d]= names;
console.log(a,b, c, d); //El console.log recibe params
console.log(...names);

console.log('--------------------------------------------');

const names1 =['Wilian', 'Luis']
const names2 =['Valeria', 'Max']

const nombres=[...names1, ...names2]
console.log(nombres);

const nameObject={...nombres}
console.log(nameObject);
