$(function () {

  //let randomChoice = generateRandomChoice()
  let computerChoice
  let userChoice

  //generate random choice for the computer

  function generateRandomChoice() {
    randomChoice = Math.floor(Math.random() * 3)

  if (randomChoice === 0) {
    //console.log('rock')
    computerChoice = 'rock'
  } else if (randomChoice === 1) {
    computerChoice = 'paper'
  } else if (randomChoice === 2) {
    //console.log('scissors')
    computerChoice = 'scissors'
  } else {
    return'something is wrong'
  }
}
  //console.log(computerChoice)


  //make rock button an active link
  $('#rock').click(() => {
      userChoice = 'rock'
      generateRandomChoice()
      console.log(computerChoice)
      console.log(userChoice)
    //console.log('rock is clicked')

    //return userChoice
      compareChoices(computerChoice, userChoice)
    //console.log(`counterComp is ${counterComp}`)
    //console.log(`counterUser is ${counterUser}`)
    // console.log(userChoice)
  })

  //make paper button an active link
  $('#paper').click(() => {
      userChoice = 'paper'
      generateRandomChoice()
      console.log(computerChoice)
      console.log(userChoice)
    //console.log('paper is clicked')

    //return userChoice
      compareChoices(computerChoice, userChoice)
    //console.log(`counterComp is ${counterComp}`)
    //console.log(`counterUser is ${counterUser}`)
    // console.log(userChoice)
  })

  //make scissors button an active link
  $('#scissors').click(() => {
      userChoice = 'scissors'
      generateRandomChoice()
      console.log(computerChoice)
      console.log(userChoice)
    //console.log('scissors is clicked')

      compareChoices(computerChoice, userChoice)
    //console.log(`counterComp is ${counterComp}`)
    //console.log(`counterUser is ${counterUser}`)
    //console.log(userChoice)
  })
  //console.log(computerChoice)
  // console.log(userChoice)
//console.log(userChoice)

// create function that compares user choice to computer choice
let counterComp = 0
let counterUser = 0
function compareChoices(computerChoice, userChoice) {

  if (userChoice === 'rock' && computerChoice === 'scissors') {
      console.log('you win this round')
        counterUser += 1
        $('#status').html('you win this round')
    //console.log('You win this round!')
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
      console.log('bot wins this round')
      counterComp += 1
      $('#status').html('bot wins this round')
    //console.log('Bot wins this round')
  } else if (userChoice === 'rock' && computerChoice === 'rock') {
      console.log('tie this round')
    //console.log('tie this round')
    $('#status').html('tie this round')
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
      console.log('you win this round')
      counterUser += 1
      $('#status').html('you win this round')
    //console.log('You Win this round')
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      console.log('bot wins this round')
      counterComp += 1
      $('#status').html('bot wins this round')
    //console.log('Bot wins this round')
  } else if (userChoice === 'paper' && computerChoice === 'paper') {
      console.log('tie this round')
      $('#status').html('tie this round')
    //console.log('tie this round')
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      console.log('you win this round')
      counterUser += 1
      $('#status').html('you win this round')
    //console.log('you win this round')
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      console.log('bot wins this round')
      $('#status').html('bot wins this round')
      counterComp += 1
    //console.log('bot wins this round')
  } else if (userChoice === 'scissors' && computerChoice === 'scissors') {
      console.log('tie this round')
      $('#status').html('tie this round')
    //console.log('tie this round')
  } else {
      console.log('something is wrong')

  }
  console.log(`counterComp is ${counterComp}`)
  console.log(`counterUser is ${counterUser}`)

  $('#humanScore').text(counterUser)
  $('#computerScore').text(counterComp)
}

//console.log(compareChoices(computerChoice, userChoice))

//create function that updates user scoreboard
//create function that updates computer scoreboard
//create function that resets user choice and computer choice after comparison


})
