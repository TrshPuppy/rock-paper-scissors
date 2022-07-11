// commit: Add playRound function, rockButton event listener which updates score.

const game = () => 
{
    let playerScore = 0;
    let computerScore = 0;

    // Fade out intro screen, fade in match screen.
    const startGame = () =>
    {   
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const faceOffScreen = document.querySelector('.faceoff');

        playButton.addEventListener('click', () =>
        {
            introScreen.classList.add('fadeOut');
            faceOffScreen.classList.add('fadeIn');
        });
    };
    startGame();

    const playRound = () =>
    {
        const rockButton = document.querySelector('.rock');
        let playerChoice;

        rockButton.addEventListener('click', () =>
        {
            playerChoice = "rock";
            playerScore += 2;
        });
        

    }
    playRound();
};

// Start game
game();