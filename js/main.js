$(function () {
  // Constants and Variables
  const rockPaperScissorsChoices = [
    "Rock",
    "Paper",
    "Scissors"
  ]

  let result
  let playerChoice
  let botChoice
  let resultMessage
  let playerScore = 0
  let botScore = 0
  let playerRound = 0
  let botRound = 0
  let playerBonus = 0
  let botBonus = 0
  let bonusFlagBot = false
  let bonusFlagPlayer = false
  let winLog = []

  // Buttons
  let $choices = $("div.buttons button")

  // When a button is clicked
  $choices.on('click', function(){

    // Determine choices
    playerChoice = $(this).text()
    botChoice = rockPaperScissorsChoices[
      Math.floor(Math.random()*rockPaperScissorsChoices.length)
    ]

    // Run functions to determine the winner
    rockPaperScissors(playerChoice, botChoice)
    bonusCheck()
    updateMessage(playerChoice, botChoice, result)
    roundWinner(playerScore, botScore)
    updateScore()

    // Log it
    console.log(`Player's Choice: ${playerChoice}`)
    console.log(`Bot's Choice: ${botChoice}`)
    console.log(`Result of Game: ${resultMessage}`)
    console.log(winLog);
  })

  // Functions and Things
  function  rockPaperScissors(playerChoice, botChoice) {

    // Rock, Paper, Scissor Game
    if (playerChoice === botChoice) {
      result = "tie"
    } else if (playerChoice === "Rock") {
        if (botChoice === "Paper") {
          result = "bot"
          botScore = botScore + 1
        } else {
          result = "player"
          playerScore = playerScore + 1
        }
    } else if (playerChoice === "Paper") {
      if (botChoice === "Scissors") {
        result = "bot"
        botScore = botScore + 1
      } else {
        result = "player"
        playerScore = playerScore + 1
      }
    }  else if (playerChoice === "Scissors") {
      if (botChoice === "Rock") {
        result = "bot"
        botScore = botScore + 1
      } else {
        result = "player"
        playerScore = playerScore + 1
      }
    }

    // Add Result to log
    winLog.push(result)
  }

  function updateScore() {
    // Update the scores of the game
    $("#humanScore").text(playerScore)
    $("#computerScore").text(botScore)
    $("#humanRound").text(playerRound)
    $("#computerRound").text(botRound)

    // Reset Bonus bonus
    bonusFlagPlayer = false
    bonusFlagBot = false
  }

  function updateMessage(playerChoice, botChoice, result) {
    // Determine the Result Message
      if (bonusFlagBot) {
        resultMessage =  "You Lose and Bot got a 2pt Bonus!"
      } else if (bonusFlagPlayer) {
        resultMessage =  "You Win and got a 2pt Bonus!"
      } else if (result === "player") {
        resultMessage =  "You Win! :)"
      } else if (result === "bot") {
        resultMessage =  "You Lose! :("
      } else if (result === "tie") {
        resultMessage = "You tied"
      } else {
        resultMessage = "Error error error!"
      }

    // Update the Status Div
    const message = `You played ${playerChoice}. The bot played ${botChoice}. \n ${resultMessage}`

    $("#status").text(message)
  }

  function roundWinner() {
    // Determine round winner
    if (playerScore >= 10) {
      playerRound = playerRound + 1
      playerScore = 0
      botScore = 0
      window.alert("You won the round!")
    } else if (botScore >= 10) {
      botRound = botRound + 1
      playerScore = 0
      botScore = 0
      window.alert("You lose the round!")
    }

    // Determine match winner
    if (playerRound === 2) {
      window.alert("You WIN the match!")
      playerRound = 0
      botRound = 0
    } else if (botRound === 2) {
      window.alert("You LOSE the match!")
      playerRound = 0
      botRound = 0
    }
  }

  function bonusCheck() {
    // Add to bonus log if winner
    if (result === "player") {
     playerBonus = playerBonus + 1
     botBonus = 0
   } else if (result === "bot") {
     botBonus = botBonus + 1
     playerBonus = 0
    }

    // If bonus log is 3 adjust player score
    if (playerBonus === 3) {
      playerScore = playerScore + 2
      playerBonus = 0
      bonusFlagPlayer = true
    } else if (botBonus === 3) {
      botScore = botScore + 2
      botBonus = 0
      bonusFlagBot = true
    }
  }

})
