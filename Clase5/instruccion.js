const PERSONA1={
    name: "Maria Di",
    age: 23,
    city: "Goya",
    //caminar: function(){console.log("walk");}
}

//Existe la key en el objeto??
console.log("lastname" in PERSONA1);
console.log("age" in PERSONA1);


//Recorrer cada propiedad del objeto
for(const PROPIEDAD in PERSONA1){
    console.log(PROPIEDAD+ ": "+PERSONA1[PROPIEDAD]);
}