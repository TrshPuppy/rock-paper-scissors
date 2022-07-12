// commit: Add checkForWinner func and youWin variable. Check logic.

// Global variables:
let playerScore = 0;
let computerScore = 0;
let playerScoreboard = document.querySelector('.player-score p');
let compScoreboard = document.querySelector('.computer-score p');
let playerFaceoff = document.querySelector('.scoreboard .player-choice');
let compFaceoff = document.querySelector('.scoreboard .computer-choice');
const SELECTIONS = 
[
    {
        name: 'rock',
        image: "<img class = 'scoreboard' src = 'img/rock.gif'>",
         beats: 'scissors'
    },
    {
        name: 'paper',
        image: "<img class = 'scoreboard' src = 'img/paper.gif'>",
        beats: 'rock'
    },
    {
        name: 'scissors',
        image: "<img class = 'scoreboard' src = 'img/scissors.gif'>",
        beats: 'paper'
    }
]

const COMPUTERCHOICES = 
[
    {
        name: 'rock',
        image: "<img class = 'scoreboard' src = 'img/rock.gif'>"
    },
    {
        name: 'paper',
        image: "<img class = 'scoreboard' src = 'img/paper.gif'>"
    },
    {
        name: 'scissors',
        image: "<img class = 'scoreboard' src = 'img/scissors.gif'>"
    }
];

// Fade in game from intro:
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

// Start new when player clicks options:
playerOptions.forEach(option => 
    {
        // Add event listener for player options:
        option.addEventListener('click', e =>
        {
            const playerSelection = option.dataset.selection;
            makeSelection(playerSelection);

            // Generate computer's selection:
            let randomNum = Math.floor(Math.random() *3);
            let computerSelection = COMPUTERCHOICES[randomNum].name;
            compFaceoff.innerHTML = COMPUTERCHOICES[randomNum].image;

            // Convert playerSelection to selection (SELECTIONS array):
            const selection = SELECTIONS.find(selection => selection.name === playerSelection);

            // Update player scoreboard w/ slection gif:
            playerFaceoff.innerHTML = selection.image;

            // Compare hands:
            if(selection.beats === computerSelection)
            {
                playerScore += 1;
                playerScoreboard.textContent = playerScore;
            }
            else if(selection.name === computerSelection)
            {
                playerScore += 0;
                computerScore += 0;
            }
            else
            {
                computerScore += 1;
                compScoreboard.textContent = computerScore;
            }

            // Call checkForWinner function:
            if(checkForWinner(playerScore, computerScore) === true)
            {
                // Call chooseWinner function:
                let youWin = chooseWinner(playerScore, computerScore);
                
                if(youWin === true)
                {
                    faceOffScreen.classList.remove('fadeIn');
                }

            }
            
        });
    });

    function makeSelection(selection)
    {
        return;
    }


    // Check for score of 5:
    function checkForWinner(pScore, cScore)
    {
        if(pScore === 5 || cScore === 5)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

   // Choose winner when xScore = 5:
   function chooseWinner(pScore, cScore)
   {
    if(pScore === 5)
    {
        return true;
    }
    else if(cScore === 5)
    {
        return false;
    }
    else
    {
        return;
    }
   }