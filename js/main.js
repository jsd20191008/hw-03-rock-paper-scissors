$(function () {
    // Bot randomly selects rock paper scissors
    const botChoices = ["Paper", "Scissors", "Rock"]


    //User clicks on button
    let userChoice
    let botChoice
    $("#rock").click(() =>{
        console.log("rock selected")
        botChoice = botChoices[Math.floor(Math.random()*3)]
        console.log(botChoice)
        userChoice = "rock"
        playGame(userChoice, botChoice)
    }) 

    $("#paper").click(() =>{
        console.log("paper selected")
        botChoice = botChoices[Math.floor(Math.random()*3)]
        console.log(botChoice)
        userChoice = "paper"
        playGame(userChoice, botChoice)
    }) 

    $("#scissors").click(() =>{
        console.log("scissors selected")
        botChoice = botChoices[Math.floor(Math.random()*3)]
        console.log(botChoice)
        userChoice = "scissors"
        playGame(userChoice, botChoice)
        
    }) 

    

    // compare the bot random selection and the user click
     
    let counterBot = 0
    let counterUser = 0

    function playGame (userChoice, botChoice){

        if(userChoice === "scissors" && botChoice === "Paper"){
            $('#text').html("Scissors beats Paper. You Win")
            counterUser += 1
        }else if (userChoice === "paper" && botChoice === "Paper"){
            $('#text').html("It's a Tie")
        }else if (userChoice === "rock" && botChoice === "Paper"){
            $('#text').html("Paper beats rock. You Lose")
            counterBot += 1
        }else if (userChoice === "scissors" && botChoice === "Rock"){
            $('#text').html("Rock beats Scisors. You Lose")
            counterBot += 1
        }else if (userChoice === "rock" && botChoice === "Scissors"){
            $('#text').html("Rock beats Scissors.  You Win")
            counterUser += 1
        }else if (userChoice === "scissors" && botChoice === "Scissors"){  
            $('#text').html("It's a Tie")
        }else if (userChoice === "rock" && botChoice === "Rock"){
            $('#text').html("It's a Tie")
        }else if (userChoice === "paper" && botChoice === "Scissors"){
            $('#text').html("Scissors beats paper.  You Lose")
            counterBot += 1
        }else if (userChoice === "paper" && botChoice === "Rock"){
            $('#text').html("Paper beats rock.  You Win")
            counterUser += 1
        }
        
        $("#humanScore").text(counterUser)
        $("#computerScore").text(counterBot)
    }

    // The score of who won is tallied in the box above
    
    



 



})
