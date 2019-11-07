$(function () {
  let random;

  let stringBotScore = $("#computerScore").text()
  let computerScore = parseInt(stringBotScore);
  computerScore = 0;

  let stringPlayerScore = $("#humanScore").text()
  let humanScore = parseInt(stringPlayerScore);
  humanScore = 0;


  $("#rock").click(() => {
  let result = compare("rock", botChoice());
  console.log(result)
  console.log(botChoice())
  console.log(updateBotCount())
  console.log(updatePlayerCount())
  $("#status").html(result)
});

  $("#paper").click(() => {
  let result = compare("paper", botChoice());
  console.log(result)
  console.log(botChoice())
  console.log(updateBotCount())
  console.log(updatePlayerCount())
  $("#status").html(result)
});


  $("#scissors").click(() => {
  let result = compare("scissors", botChoice());
  console.log(result)
  console.log(botChoice())
  console.log(updateBotCount())
  console.log(updatePlayerCount())
  $("#status").html(result)
});


      const compare = (human, bot) => {

            if (human === bot){
              return "Its a Tie!"
            } else if (human === "rock" && bot === "paper"){
              updateBotCount()
              return "LOSER"
            } else if (human === "rock" && bot === "scissors"){
              updatePlayerCount()
              return "WINNER"
            } else if (human === "paper" && bot === "rock"){
              updatePlayerCount()
              return "WINNER"
            } else if (human === "paper" && bot === "scissors"){
              updateBotCount()
              return "LOSER"
            } else if (human === "scissors" && bot === "rock"){
              updateBotCount()
              return "LOSER"
            } else if (human === "scissors" && bot === "paper"){
              updatePlayerCount()
              return "WINNER"
            }
          }


          const botChoice = () => {
              let random = Math.floor((Math.random() * 3) + 1);
              if (random === 1) {
                return  "rock";
              } else if(random === 2) {
                return "paper";
              } else if (random === 3){
                return "scissors";
              }
            };

            function updatePlayerCount(){
              humanScore++
              $("#humanScore").text(humanScore)
            }

            function updateBotCount(){
              computerScore++
              $("#computerScore").text(computerScore)
            }



})
