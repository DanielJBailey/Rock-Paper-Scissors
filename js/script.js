document.addEventListener('DOMContentLoaded', () => {
    let userChoice;
    let compChoice;
    let winner;
    let playerScore = 0;
    let compScore = 0;
    let paperAudio = new Audio('./audio/paperrockscissors.mp3');
    let loseAudio = new Audio('./audio/lose.mp3');
    let winAudio = new Audio('./audio/destroy.mp3');
    let winAudio2 = new Audio('./audio/owned.mp3');


    let computerChoices = ['rock', 'paper', 'scissors'];


    let rock = document.querySelector('.rock');
    let paper = document.querySelector('.paper');
    let scissors = document.querySelector('.scissors');

    let startGameForm = document.querySelector('.start-game-form');
    let userChoiceScreen = document.querySelector('.user-choice-screen');

    let userRockImage = document.querySelector('.user-rock').childNodes[1].cloneNode(true);
    let userPaperImage = document.querySelector('.user-paper').childNodes[1].cloneNode(true);
    let userScissorImage = document.querySelector('.user-scissors').childNodes[1].cloneNode(true);
    let compRockImage = document.querySelector('.comp-rock').childNodes[1].cloneNode(true);
    let compPaperImage = document.querySelector('.comp-paper').childNodes[1].cloneNode(true);
    let compScissorsImage = document.querySelector('.comp-scissors').childNodes[1].cloneNode(true);
    let compResultContainer = document.querySelector('.comp-result-image-container');
    let userResultContainer = document.querySelector('.user-result-image-container');

    let scoreboard = document.querySelector('.scoreboard');

    let winningText = document.querySelector('#winning-text');

    // SET EVENT LISTENERS ON USER CHOICES
    rock.addEventListener('click', () => {
        userChoice = userChoice == null || undefined ?  "rock" : userChoice
        // Call function to get computer choice
        console.log(userChoice);
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
        console.log(compChoice);

        if(compChoice == null || undefined) {
            compChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(compChoice);
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
                    userChoiceScreen.style.display = "none";
                    displayResults();
                break;
                case 'scissors':
                    winner = compChoice == 'rock' ? "comp" : "user";
                    userChoiceScreen.style.display = "none";
                    displayResults();
                break;
                case 'paper':
                    winner = compChoice == 'rock' ? "user" : "comp";
                    userChoiceScreen.style.display = "none";
                    displayResults();
                break;
            }
        } else {
            userChoiceScreen.style.display = "none";
            displayResults();
        }
    }

    function displayResults() {
        userResultContainer.appendChild(userRockImage);
        compResultContainer.appendChild(compRockImage);
        paperAudio.play();
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
        
        if(winner == 'user') {
            let winningOptions = [winAudio, winAudio2];
            let sound = winningOptions[Math.floor(Math.random() * winningOptions.length)];
            sound.play();
            winningText.innerHTML = "You Win!"
            compResultContainer.style.backgroundColor = "#d63031";
            userResultContainer.style.backgroundColor = "#00b894";
            winningText.style.color = "#00b894";
            playerScore ++;
            scoreboard.innerHTML = `${playerScore} - ${compScore}`;
        } else if(winner == 'comp') {
            loseAudio.play();
            winningText.innerHTML = "You Lose!"
            compResultContainer.style.backgroundColor = "#00b894";
            userResultContainer.style.backgroundColor = "#d63031";
            winningText.style.color = "#d63031";
            compScore++;
            scoreboard.innerHTML = `${playerScore} - ${compScore}`;
        } else {
            winningText.innerHTML = "You Tied!"
            compResultContainer.style.backgroundColor = "#74b9ff";
            userResultContainer.style.backgroundColor = "#74b9ff";
            winningText.style.color = "#74b9ff";
        }
        playAgain();
    }

    function playAgain() {
        let playAgainContainer = document.querySelector('.play-again-container');
        playAgainContainer.style.display = "block";
        let playAgainButton = document.querySelector('.play-again');
        playAgainButton.addEventListener('click', function() {
            resetGame();
        });
    }

    function resetGame() {
        let images = [userPaperImage, userRockImage, userScissorImage, compPaperImage, compRockImage, compScissorsImage]
        images.forEach((image) => {
            image.style.animation = "bounceUp 0.5s infinite";
        });
        winningText.innerHTML = "The result is...";
        winningText.style.color = "black";
        userResultContainer.innerHTML = "";
        compResultContainer.innerHTML = "";
        userChoiceScreen.style.display = "flex";
        compResultContainer.style.backgroundColor = "#fff";
        userResultContainer.style.backgroundColor = "#fff";
        userChoice = null;
        compChoice = null;
        winner = null;
    }



 
        
    

    
    // function reset game





});