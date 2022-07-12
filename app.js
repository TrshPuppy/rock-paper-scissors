// commit: Add image subcategory to COMPUTERCHOICES to update scoreboard.

// Global variables to update per round:
let playerScore = 0;
let computerScore = 0;
let playerScoreboard = document.querySelector('.player-score p');
let compScoreboard = document.querySelector('.computer-score p');
let playerFaceoff = document.querySelector('.scoreboard .player-choice');
let compFaceoff = document.querySelector('.scoreboard .computer-choice');

// Fade in game from intro:
const introScreen = document.querySelector('.intro');
const faceOffScreen = document.querySelector('.faceoff');
const playButton = document.querySelector('.intro button');
const SELECTIONS = 
            [
                {
                    name: 'rock',
                    image: document.getElementsByClassName('rock-gif'),
                    beats: 'scissors'
                },
                {
                    name: 'paper',
                    image: document.getElementsByClassName('paper-gif'),
                    beats: 'rock'
                },
                {
                    name: 'scissors',
                    image: document.getElementsByClassName('scissors-gif'),
                    beats: 'paper'
                }
            ]

playButton.addEventListener('click', () =>
{
    introScreen.classList.add('fadeOut');
    faceOffScreen.classList.add('fadeIn');
});

// Get player options from document:
const playerOptions = document.querySelectorAll('[data-selection]');
//console.log(playerOptions);

// Start new when player clicks options:
playerOptions.forEach(option => 
    {
        // Add event listener for player options:
        option.addEventListener('click', e =>
        {
            const playerSelection = option.dataset.selection;
            makeSelection(playerSelection);

            // Generate computer selection:
            const COMPUTERCHOICES = 
            [
                {
                    name: 'rock',
                    image: "<img src = 'img/rock.gif'>"
                },
                {
                    name: 'paper',
                    image: "<img src = 'img/paper.gif'>"
                },
                {
                    name: 'scissors',
                    image: "<img src = 'img/scissors.gif'>"
                }
            ];
            let randomNum = Math.floor(Math.random() *3);
            let computerSelection = COMPUTERCHOICES[randomNum].name;
            compFaceoff.innerHTML = COMPUTERCHOICES[randomNum].image;
            console.log(computerSelection);

            // Convert playerSelection to selection (SELECTIONS array):
            const selection = SELECTIONS.find(selection => selection.name === playerSelection);

            console.log("playerSelection is", playerSelection)
            //console.log("selection is", selection);

            // Compare hands:
            if(selection.beats === computerSelection)
            {
                playerScore += 1;
                playerScoreboard.textContent = playerScore;
            }
            else if(selection.name === computerSelection)
            {
                console.log("tie!");
            }
            else
            {
                computerScore += 1;
                compScoreboard.textContent = computerScore;
            }
            console.log(playerScore);
            console.log(computerScore);
        });
    });

    function makeSelection(selection)
    {
        console.log(selection);
    }
















// const game = () => 
// {
//     let playerScore = 0;
//     let computerScore = 0;

//     // Fade out intro screen, fade in match screen.
//     const startGame = () =>
//     {   
//         const playButton = document.querySelector('.intro button');
//         const introScreen = document.querySelector('.intro');
//         const faceOffScreen = document.querySelector('.faceoff');

//         playButton.addEventListener('click', () =>
//         {
//             introScreen.classList.add('fadeOut');
//             faceOffScreen.classList.add('fadeIn');
//         });
//     };
//     startGame();

//     const playRound = () =>
//     {
//         const playerOptions = document.querySelectorAll('data-selection');
//         const computerOptions = ['rock', 'paper', 'scissors'];
//         let computerChoice;
        
//         let rockButton = document.querySelector('button.rock');
//         let rockGif = document.querySelector('img.rock-gif');
//         let paperButton = document.querySelector('button.paper');
//         let paperGif = document.querySelector('img.paper-gif');
//         let scissorsButton = document.querySelector('button.scissors');
//         let scissorsGif = document.querySelector('img.scissors-gif');


//         // Document player choice:
//         function getPlayerChoice(playerOptions)
//         {
//             let playerChoice;
//             playerOptions.forEach((option) =>
//             {
//                 option.addEventListener('click', e =>
//                 {
//                     if(e.target === rockButton || e.target === rockGif)
//                     {
//                         playerChoice = 'rock';
//                         console.log(playerChoice);
//                     }
//                     else if(e.target === paperButton || e.target === paperGif)
//                     {
//                         playerChoice = 'paper';
//                     }
//                     else if(e.target === scissorsButton || e.target === scissorsGif)
//                     {
//                         playerChoice = 'scissors';
//                     }
//                 });
//             });
//          return playerChoice;
//         }
//         playerChoice = getPlayerChoice(playerOptions);
//         console.log(playerChoice);
//     }
//     playRound();


    
// };

// // Start game
// game();