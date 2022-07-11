// commit: Restructure playRound func to include all player options.

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
        const options = document.querySelectorAll('.options button');

        options.forEach(option =>
            {
                option.addEventListener('click', function()
                {
                    console.log(this);
                })
            });
    }
    playRound();
};

// Start game
game();