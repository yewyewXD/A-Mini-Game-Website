const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Computer Options
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        let computerChoice = "";
        if (this.textContent === "paper") {
          computerChoice = "scissors";
        } else if (this.textContent === "rock") {
          computerChoice = "paper";
        } else if (this.textContent === "scissors") {
          computerChoice = "rock";
        }

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `${this.textContent}.png`;
          computerHand.src = `${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //List of insulting
    const loserOptions = [
      "That's all you got?",
      "Try again, noob",
      "Too easy for me",
      "?",
      "Are you even trying?",
      "Ops, you lose",
      "You can do better",
      "You'll never beat me",
      "Not today",
      "Cry baby, cry",
      "What's up human?",
      "You suck at this game",
      "I can do this all day",
      "Loser LMAO",
      "How many time do you wanna lose?",
      "This is MY game, noob",
    ];
    let random = Math.floor(Math.random() * loserOptions.length);
    let loserChoice = loserOptions[random];

    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "You just got lucky";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = loserChoice;
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = loserChoice;
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Well played!";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = loserChoice;
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Finally you win!";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
