
var inputNumber = document.querySelector("#input-number")
var guessBtn = document.querySelector("#guess-btn")
var result = document.querySelector("#result")
var attempts = document.querySelector("#attempts")
var startBtn = document.querySelector("#start")

comp_number = +Math.floor(Math.random() * 100) + 1;

    var  atteMpts = +0
    

function game(){
    player_guess = +inputNumber.value
          if(comp_number === player_guess){
            result.innerHTML = ` Wow you won!  the number is ${comp_number}`
          }else if (comp_number > player_guess){
            atteMpts = atteMpts + 1
            attempts.innerHTML= `Attempts = ${atteMpts}`

            result.innerHTML = `guess big number............!`
              } else{
                atteMpts = atteMpts + 1
                attempts.innerHTML= `Attempts = ${atteMpts}`

                result.innerHTML = `guess small number.......!`
            }
          

}