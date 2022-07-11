// commit: Add fadeIn to startGame function.

const game = () => 
{
    let playerScore = 0; // may have to change to '-1' depending on how choices are scored later.
    let computerScore = 0;

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
    }
    startGame();
}

// Start game
game();