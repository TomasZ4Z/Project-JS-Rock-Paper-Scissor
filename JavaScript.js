
//  hacer un juego

// -crear una funcion llamada aleatorio
// -hacer que los valores de pierdra, papel o tijera se puedan jugar, siempre soltando un valor distinto



 function obtenerrespuestaCPU//getComputerChoice 
 () {
 let aleatorio = (Math.random() *100)+1

if(aleatorio<=33){
resultado = ("piedra");
}
else if (aleatorio<=66){
   resultado = ("papel");
}
else if (aleatorio<=100){
     resultado = ("tijera");
}


return resultado
}
console.log(obtenerrespuestaCPU())

let humanScore = 0 
let computerScore = 0
function playRound(pers, comp){
 if (pers === comp) {
    console.log ("empate")
 }
 else if (pers === ("piedra") && comp === ("papel")) {
    console.log ("has perdido")
    computerScore = computerScore + 1
    console.log(computerScore)}

 else if (pers === ("piedra") && comp === ("tijera")) {
    console.log ("has ganado") 
    humanScore = humanScore + 1
console.log(humanScore)}

else if (pers === ("papel") && comp === ("tijera")) {
    console.log ("has perdido")                            
 computerScore = computerScore + 1
 console.log(computerScore)}

else if (pers === ("papel") && comp === ("piedra")) {
    console.log ("has ganado") 
    humanScore = humanScore + 1
console.log(humanScore)}

else if (pers === ("tijera") && comp === ("piedra")){
    console.log ("has perdido")
    computerScore = computerScore + 1
    console.log(computerScore)}

else if (pers === ("tijera") && comp === ("papel")) {
    console.log ("has ganado") 
       humanScore = humanScore + 1
    console.log(humanScore)}


else if (pers != "piedra" && pers != "tijera" && pers != "papel"){
    console.log ("respuesta incorrecta");
} 
}


function playGames () {
    for(i = 0;i<5;i++){
let respuesta = prompt("elige entre piedra, papel o tijera")
let respuestaCPU = obtenerrespuestaCPU() 
playRound(respuesta, respuestaCPU) 

}
}


  
// almacenar el puntaje del jugador y de la maquina
// usar la variable "humanScore" y "computerScore"
// inician ambas variables con 0

playGames()



