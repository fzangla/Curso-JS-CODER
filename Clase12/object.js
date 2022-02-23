//el ? verifica que la condicion se cumpla
const user=null;

console.log(user?.name || 'User not found')

const user1={
    age:20
}
console.log(user1?.name || 'User not found')
console.log(user1?.age || 'User not found')

const user2={
    name:'Franco',
    age: 24,
    cursos:{
        dearrolloWeb: 'Approved',
        javascript:'In progress'
    }
}

console.log(user2?.cursos?.javascript || 'Property noy found') //In progress
console.log(user2?.trabajo?.google || 'Property noy found') //Property noy found
