$(document).ready(function () {

  // Call the functions if the user clicks on the rock, paper, or scissors buttons
  $('#rock').click(() => {
    choicesAndResults('rock')
  })
  
  $('#paper').click(() => {
    choicesAndResults('paper')
  })
  
  $('#scissors').click(() => {
    choicesAndResults('scissors')
  })

  // Variables for score tally
  let humanScore = 0
  let computerScore = 0

  // Variables for win / lose / tie
  const winMessage = 'You Win 😀'
  const loseMessage = 'You Lose 😦'
  const tieMessage = 'You tied 😑'

  // Generates the random int for the bot choice
  function generateBotChoice () {
    return Math.floor(Math.random() * 3) +  1
  }

  // Translates the bot's choice from a random int
  // to paper, rock, or scissors
  function translateBotChoice (botNum) {
    if (botNum === 1) {
      return 'paper'
    } else if (botNum === 2) {
      return 'rock'
    } else if (botNum === 3) {
      return 'scissors'
    } else {
      console.log('ERROR! Check function: translateBotChoice')
    }
  }
  
  // Add to human score tally & update scoreboard
  function addToHumanScore() {
    humanScore++
    $('#humanScore').text(humanScore)
  }

  // Add to computer score tally & update scoreboard
  function addToComputerScore() {
    computerScore++
    $('#computerScore').text(computerScore)
  }

  // A set of if/else statements to determine win, lose, or draw status
  function determineWinnerOutput (playerChoice, botChoice) {
    if (playerChoice === botChoice) {
      return tieMessage
    } 

    if (playerChoice === 'rock' && botChoice === 'scissors') {
      addToHumanScore()
      return winMessage
    } else if (playerChoice === 'paper' && botChoice === 'rock') {
      addToHumanScore()
      return winMessage
    } else if (playerChoice === 'scissors' && botChoice === 'paper') {
      addToHumanScore()
      return winMessage
    } else if (playerChoice === 'paper' && botChoice === 'scissors') {
      addToComputerScore()
      return loseMessage
    } else if (playerChoice === 'rock' && botChoice === 'paper') {
      addToComputerScore()
      return loseMessage
    } else if (playerChoice === 'scissors' && botChoice === 'rock') {
      addToComputerScore()
      return loseMessage
    } else (console.log('ERROR! Check function: determineWinnerOutput'))
  }

  function choicesAndResults (choice) {
    // player choice is sent to the function from the button clicks
    const playerChoice = choice
    
    // Generate bot choice and translate it from int to str
    const botNum = generateBotChoice()
    const botChoice = translateBotChoice(botNum)

    // Display player and bot choices on the front end
    $('.playerChoice').text(playerChoice)
    $('.botChoice').text(botChoice)

    // Announce win, lose, or draw
    $('#finalResult').text(determineWinnerOutput(playerChoice, botChoice))
  }
})