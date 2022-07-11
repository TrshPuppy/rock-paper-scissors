// commit: Restructure playRound.

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
        const playerOptions = document.querySelectorAll('.options button');
        const computerOptions = ['rock', 'paper', 'scissors'];
        let computerChoice;
        let playerChoice;

        playerOptions.forEach(x);

        function x(option)
        {
            option.addEventListener('click', () =>
            {
                // Generate computer choice:
                const randomNum = Math.floor(Math.random() * 3);
                computerChoice = computerOptions[randomNum];
            });
            return computerChoice;
        }
       computerChoice = x(option);
       console.log(computerChoice);
    }
    playRound();


    
};

// Start game
game();