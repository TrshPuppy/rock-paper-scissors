function clickAnimation()
                {
                    alert('hi!');
                }
            // This  playRound function collects player and computer scores and compares them, then returns an object:
            function playRound()
            {
                

                // Prompts user for choice in rock, paper, or scissors. Stores choice in 'userPlay' & assigns score via 'playerScore'.
                let playerScore = -1;
                do
                {
                    //let userPlay = String(prompt("Rock, paper, or scissors?"));

                    if(userPlay == "rock" || userPlay == "ROCK" || userPlay == "r" || userPlay == "R" || userPlay == "Rock")
                    {
                        playerScore += 3; // Rock = score of 2
                        console.log("You chose: rock");
                        break;
                    }
                    else if(userPlay == "paper" || userPlay == "PAPER" || userPlay == "p" || userPlay == "P" || userPlay == "Paper")
                    {
                        playerScore += 1; // Paper = score of 0
                        console.log("You chose: paper");
                        break;
                    }
                    else if (userPlay == "scissors" || userPlay == "SCISSORS" || userPlay == "s" || userPlay == "S" || userPlay == "Scissors")
                    {
                        playerScore += 2; // Scissors = score of 1
                        console.log("You chose: scissors");
                        break;
                    }
                    else // If user fails to enter correct input:
                    {
                        console.log("Please choose a valid option!");
                        playerScore += 0;
                    }
                }
                while (playerScore = -1);

                // This function generates random choice of rock/paper/scissors for computer and returns a compScore based on its choice:
                function computerPlay()
                {
                    function getRandomNum(max)
                    {
                        return Math.floor(Math.random() * max);
                    }
                    let num = getRandomNum(4);

                    let compScore = 0;
                    if(num == "1") // Rock
                    {
                        score += 2;
                        console.log("The computer chose: rock");
                    }
                    else if(num == "2") // Scissors
                    {
                        compScore += 1;
                        console.log("The computer chose: scissors");
                    }
                    else
                    {
                        compScore += 0; // Paper
                        console.log("The computer chose: paper");
                    }
                return compScore;
                }
                const computerScore = computerPlay();

                let roundOutcome = 
                {
                    tie: false,
                    playScore: 0,
                    compScore: 0,
                    message: "none"
                }

                // Compares player score w/ computer score for round:
                if(playerScore == computerScore)
                {
                    roundOutcome.message = "You tied!";
                    roundOutcome.tie = true;
                }
                else if(playerScore == 0 && computerScore == 2) // If user chooses paper & computer chooses rock.
                {
                    roundOutcome.message = "You win! Paper beats rock!";
                    roundOutcome.playScore += 1;
                }
                else if(computerScore == 0 && playerScore == 2) // If computer chooses paper & user chooses rock.
                {
                    roundOutcome.message = "You lose! Paper beats rock!";
                    roundOutcome.compScore += 1;
                }
                else if(playerScore > computerScore)
                {  
                    if(playerScore == 2 && computerScore == 1)
                    {
                        roundOutcome.message = "You win! Rock beats scissors!";
                        roundOutcome.playScore += 1;
                    }
                    else if(playerScore == 1 && computerScore == 0)
                    {
                        roundOutcome.message = "You win! Scissors beat paper!";
                        roundOutcome.playScore += 1;
                    }
                }
                else
                {
                    if(computerScore == 2 && playerScore == 1)
                    {
                        roundOutcome.message = "You lose! Rock beats scissors!";
                        roundOutcome.compScore += 1;
                    }
                    else if (computerScore == 1 && playerScore == 0)
                    {
                        roundOutcome.message = "You lose! Scissors beat paper!";
                        roundOutcome.compScore += 1;
                    }
                }
                return roundOutcome; // Return object which includes tie boolean, scores, and message.
            }

            // Creates for loop to loop through 5 game rounds, updating outcome object w/ results:
            let pScore = 0;
            let cScore = 0;

            for(let i = 0; i < 5; i++)
            {
                var outcomeOfRound = playRound(); // Creates outcomeOfRound object to store data returned from playRound().
                if(outcomeOfRound.tie == false)
                {
                    pScore += outcomeOfRound.playScore;
                    cScore += outcomeOfRound.compScore;
                    console.log(outcomeOfRound.message);
                }
                else
                {
                    console.log(outcomeOfRound.message);
                }
            }
            
            // Tallies scores and chooses winner:
                if(cScore == pScore)
                {
                    console.log("You tied! Computer won ", cScore +  " times. You won ", pScore + " times!");
                }
                else
                {
                    if(cScore > pScore)
                    {
                        console.log("You lost the game! Your wins: ", pScore + " The computer's wins: ", cScore);
                    }
                    else if(pScore > cScore)
                    {
                        console.log("You won the game with a total of ", pScore + " wins!");
                    }
                }