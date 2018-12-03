document.addEventListener('DOMContentLoaded', () => {
    let playerName;
    let userChoice;
    let compChoice;
    let winner;

    let computerChoices = ['rock', 'paper', 'scissors'];


    let rock = document.querySelector('.rock');
    let paper = document.querySelector('.paper');
    let scissors = document.querySelector('.scissors');

    let startGameForm = document.querySelector('.start-game-form');
    let userChoiceScreen = document.querySelector('.user-choice-screen');

    let userRockImage = document.querySelector('.user-rock').childNodes[1];
    let userPaperImage = document.querySelector('.user-paper').childNodes[1];
    let userScissorImage = document.querySelector('.user-scissors').childNodes[1];
    let compRockImage = document.querySelector('.comp-rock').childNodes[1];
    let compPaperImage = document.querySelector('.comp-paper').childNodes[1];
    let compScissorsImage = document.querySelector('.comp-scissors').childNodes[1];
    let compResultContainer = document.querySelector('.comp-result-image-container');
    let userResultContainer = document.querySelector('.user-result-image-container');

    // RESET GAME
    function resetGame() {
        userChoice = null;
        compChoice = null;
        winner = null;
    }

    // GET PLAYER NAME AND REVEAL USER CHOICE SCREEN
    startGameForm.addEventListener('submit', function(e) {
        // keep form from doing normal shit
        e.preventDefault();
        var inputValue = document.querySelector('#name').value
        // set player name variable
        playerName = inputValue;
        // animate splash screen up
        let splashScreen = document.querySelector('.splash-screen');
        splashScreen.style.marginTop = '-100vh';
    })

    // SET EVENT LISTENERS ON USER CHOICES
    rock.addEventListener('click', () => {
        userChoice = userChoice == null || undefined ?  "rock" : userChoice
        // Call function to get computer choice
        getComputerChoice();
    });

    paper.addEventListener('click', () => {
        userChoice = userChoice == null || undefined ?  "paper" : userChoice
        // Call function to get computer choice
        getComputerChoice();
    })

    scissors.addEventListener('click', () => {
        userChoice = userChoice == null || undefined ?  "scissors" : userChoice
        // Call function to get computer choice
        getComputerChoice();
    });

    // Function to get computer choice from computer choice array
    function getComputerChoice() {
        if(compChoice == null || undefined) {
            compChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(`The user has chosen: ${userChoice}`);
            console.log(`The computer has chosen: ${compChoice}!`);
            // Call Winner Function
            findWinner();
        }
    }

    // Find winner function
    function findWinner() {
        // if user choice and comp choice === then tie
        winner = compChoice === userChoice ? "tie" : null 
        // else find winner
        if(winner != 'tie') {
            switch(userChoice) {
                case 'rock':
                    winner = compChoice == 'scissors' ? "user" : "comp";
                    console.log(winner);
                    userChoiceScreen.style.display = "none";
                    displayResults();
                break;
                case 'scissors':
                    winner = compChoice == 'rock' ? "comp" : "user";
                    console.log(winner);
                    userChoiceScreen.style.display = "none";
                    displayResults();
                break;
                case 'paper':
                    winner = compChoice == 'rock' ? "user" : "comp";
                    console.log(winner);
                    userChoiceScreen.style.display = "none";
                    displayResults();
                break;
            }
        } else {
            console.log("Tie!");
            userChoiceScreen.style.display = "none";
            displayResults();
        }
    }

    function displayResults() {
        userResultContainer.appendChild(userRockImage);
        compResultContainer.appendChild(compRockImage);

        setTimeout(function() {
            userResultContainer.innerHTML = "";
            compResultContainer.innerHTML = "";
            switch(userChoice) {
                case 'rock':
                    userResultContainer.appendChild(userRockImage);
                    userRockImage.style.animation = "none";
                break;
                case 'paper':
                    userResultContainer.appendChild(userPaperImage);
                    userPaperImage.style.animation = "none";
                break;
                case 'scissors':
                    userResultContainer.appendChild(userScissorImage);
                    userScissorImage.style.animation = "none";
                break;
            }
            switch(compChoice) {
                case 'rock':
                    compResultContainer.appendChild(compRockImage);
                    compRockImage.style.animation = "none";
                break;
                case 'paper':
                    compResultContainer.appendChild(compPaperImage);
                    compPaperImage.style.animation = "none";
                break;
                case 'scissors':
                    compResultContainer.appendChild(compScissorsImage);
                    compScissorsImage.style.animation = "none";
                break;
            }
            showWinner();
        }, 1500);  
    }

    function showWinner() {
        let winningText = document.querySelector('#winning-text');
        if(winner == 'user') {
            winningText.innerHTML = "You Win!"
            compResultContainer.style.backgroundColor = "#d63031";
            userResultContainer.style.backgroundColor = "#00b894";
            winningText.style.color = "#00b894";
        } else if(winner == 'comp') {
            winningText.innerHTML = "You Lose!"
        } else {
            winningText.innerHTML = "You Tied!"
        }
    }



 
        
    

    
    // function reset game





});