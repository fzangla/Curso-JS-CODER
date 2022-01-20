const MAX_USER = 5;

for (let i = 1; i <= MAX_USER; i++) {
    let nombre = prompt("Ingrese nombre del paciente:").toLowerCase;

    if (nombre == "luis mera") {
        alert("Tu no puedes entrar. game over");
        break; //fin del for
    }
    if (nombre=="javier") {
        i--; //Hacemos esto para no perder un turno
        continue; // next
    }
    alert("Turno N°" + i + " para el usuario " + nombre);
}

console.log("Se terminaron los turnos");
