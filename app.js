// commit: Add computerSelection using randomNum.

// Fade in game from intro
const introScreen = document.querySelector('.intro');
const faceOffScreen = document.querySelector('.faceoff');
const playButton = document.querySelector('.intro button');

playButton.addEventListener('click', () =>
{
    introScreen.classList.add('fadeOut');
    faceOffScreen.classList.add('fadeIn');
});

// Get player options from document:
const playerOptions = document.querySelectorAll('[data-selection]');
console.log(playerOptions);

// Add event listener to each player option.
playerOptions.forEach(option => 
    {
        option.addEventListener('click', e =>
        {
            const playerSelection = option.dataset.selection;
            makeSelection(playerSelection);
        });
    });

    function makeSelection(selection)
    {
        console.log(selection);
    }

    // Computer selection
    const computerChoices = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() *3);
    let computerSelection = computerChoices[randomNum];
    console.log(computerSelection);
















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