const user1 ={
    name: 'Valeria',
    age: 21,
    favorite: 'Pasta'
}
const user2 ={
    ...user1
}

user2.age = 22;

console.log(user1)
console.log(user2)

const user3 ={
    ...user1,
    drink:'beer',
    email:"foo@foo.com"
}
console.log(user3)