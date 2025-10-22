
//  hacer un juego

// -crear una funcion llamada aleatorio
// -hacer que los valores de pierdra, papel o tijera se puedan jugar, siempre soltando un valor distinto
// Muestra el puntaje actual y anuncia el ganador del juego una vez que un jugador alcanza los 5 puntos.


function obtenerrespuestaCPU() {//getComputerChoice
  let aleatorio = Math.random() * 100 + 1;

  if (aleatorio <= 33) {
    resultado = "Piedra";
  } else if (aleatorio <= 66) {
    resultado = "Papel";
  } else if (aleatorio <= 100) {
    resultado = "Tijera";
}
  return resultado;
  
}

console.log(obtenerrespuestaCPU())



let caja = obtenerrespuestaCPU()
let humanScore = 0;
let computerScore = 0;





function playRound(pers, caja) {


if (humanScore === 5) {
  vencedor.textContent = ("Eres el campeon") 
  }

 else if (computerScore === 5) {
  vencedor.textContent = ("Game over")
 }

  else if (pers === caja) {
    maquina.textContent = ("La maquina ha elegido " + caja);
    ronda.textContent = ("Empate")
} 
else if (pers === "Piedra" && caja === "Papel") {
    computerScore = computerScore + 1;
    maquina.textContent = ("La maquina ha elegido " + caja);
    ronda.textContent = ("Has perdido la ronda, Maquina: " + computerScore + " punto");
    return computerScore
    console.log(computerScore);
    
  } else if (pers === "Piedra" && caja === "Tijera") {
    humanScore = humanScore + 1;
    maquina.textContent = ("La maquina ha elegido " + caja);
    ronda.textContent = ("Has ganado la ronda, usted: " + humanScore + " punto");
    return humanScore

    console.log(humanScore);

  } else if (pers === "Papel" && caja === "Tijera") {
    computerScore = computerScore + 1;
    maquina.textContent = ("La maquina ha elegido " + caja);
    ronda.textContent = ("Has perdido la ronda, Maquina: " + computerScore + " punto");
    return computerScore

    console.log(computerScore);

  } else if (pers === "Papel" && caja === "Piedra") {
    humanScore = humanScore + 1;
    maquina.textContent = ("La maquina ha elegido " + caja);
    ronda.textContent = ("Has ganado la ronda, usted: " + humanScore + " punto");
    return humanScore

    console.log(humanScore);

  } else if (pers === "Tijera" && caja === "Piedra") {
    computerScore = computerScore + 1;
    maquina.textContent = ("La maquina ha elegido " + caja);
    ronda.textContent = ("has perdido la ronda, Maquina: " + computerScore + " punto");
    return computerScore

    console.log(computerScore);

  } else if (pers === "Tijera" && caja === "Papel") {
    humanScore = humanScore + 1;
    maquina.textContent = ("La maquina ha elegido " + caja);
    ronda.textContent = ("has ganado la ronda, usted: " + humanScore + " punto");
    return humanScore

    console.log(humanScore);

  } else if (pers != "Piedra" && pers != "Tijera" && pers != "Papel") {
    ronda.textContent = ("Respuesta incorrecta");
  }
}

// Crea tres botones, uno para cada selección. Agrega un detector de eventos
//  a los botones que llame a tu función playRound con la selección de jugador 
//  correcta cada vez que se haga clic en un botón.

const jugar = document.querySelector("#juego")
jugar.addEventListener("click", () => {

const opcion1 = document.createElement("button")
opcion1.textContent = ("Piedra")
opcion1.addEventListener("click", () => {
   playRound("Piedra",obtenerrespuestaCPU())
   clickear.textContent = ("Has elegido Piedra")   
}) 
document.body.appendChild(opcion1);

const opcion2 = document.createElement("button")
opcion2.textContent = ("Papel")
opcion2.addEventListener("click", () => {
   playRound("Papel",obtenerrespuestaCPU())
   clickear.textContent = ("Has elegido Papel")
}) 
document.body.appendChild(opcion2)

const opcion3 = document.createElement("button")
opcion3.textContent = ("Tijera")
opcion3.addEventListener("click", () => {
   playRound("Tijera",obtenerrespuestaCPU())
   clickear.textContent = ("Has elegido Tijera")
}) 
document.body.appendChild(opcion3)

const reinicio = document.createElement("button")
reinicio.textContent = ("Reiniciar")
reinicio.addEventListener("click", () => {
   playRound()
  ronda.textContent = ("Tu : 0 puntos; Maquina : 0 puntos")
    humanScore = 0
  computerScore = 0
 
 vencedor.textContent = ""

})
document.body.appendChild(reinicio)
jugar.remove()
})


// Agregue un div para mostrar resultados y cambie todos sus console.logs en métodos DOM.

const clickear = document.createElement("div") 
document.body.appendChild(clickear)

const maquina = document.createElement("div")
document.body.appendChild(maquina)

const ronda = document.createElement("div")
document.body.appendChild(ronda)

const vencedor = document.createElement("div")
document.body.appendChild(vencedor)




 



  









// const buton = document.querySelector("Papel")
// const buton2 = document.querySelector("Piedra")
// const buton3 = document.querySelector("Tijera")




// function playGames() {
//   for (i = 0; i < 5; i++) {
//     let respuesta = prompt("elige entre piedra, papel o tijera");
//     let respuestaCPU = obtenerrespuestaCPU();
//     playRound(respuesta, respuestaCPU);
//   }
// }

// almacenar el puntaje del jugador y de la maquina
// usar la variable "humanScore" y "computerScore"
// inician ambas variables con 
// ,obtenerrespuestaCPU())
 






