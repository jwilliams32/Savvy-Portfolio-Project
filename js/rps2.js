// caching the DOM
// create variables for each part of the game
let userScore = 0;
let computerScore = 0;
// Use underscore tags to show that its a DOM variable vs regular variables
const userScoreSpan = document.getElementById( "user-score" );

const computerScoreSpan = document.getElementById( "computer-score" );

const scoreBoardDiv = document.querySelector( "score-board" );
const resultP = document.querySelector( ".result > p" );
const rockDiv = document.getElementById( "r" );
const paperDiv = document.getElementById( "p" );
const scissorsDiv = document.getElementById( "s" );

// created a function for the choices the computer can make by using random which will generate a random number and floor which only allows whole numbers. The numbers are assigned by their array order r is 1 p is 2 s is 3
function getComputerChoice(){
    const choices = [ "r" , "p", "s" ];
    const randomNumber = Math.floor( Math.random() * 3 );


    return choices[randomNumber];
}

function convertToWord( letter ){
    if( letter === "r" ){
        return "Rock";
    }
    if( letter === "p" ){
        return "Paper";
    }

    return "Scissor";


    // console.log( letter );
}

// Create functions to keep track of wins, loses, and draws
function win( userChoice, computerChoice ){
    // console.log( "WIN" );
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = "user".fontsize( 3 ).sup();
    const smallCompWord = "comp".fontsize( 3 ).sup();
    // faster way to get info and render to page

    resultP.innerHTML = `${convertToWord( userChoice )}${smallUserWord} beats ${convertToWord( computerChoice )}${smallCompWord}. You win! 🔥`;
    // resultP.innerHTML = convertToWord( userChoice ) + "beats " + convertToWord( computerChoice ) + ". You win! ";
    document.getElementById( userChoice ).classList.add( "green-glow" );
    // console.log( userChoice );
    // console.log( computerChoice );
    // console.log( "Win" );
    // console.log( userScore );
}

function lose( userChoice,computerChoice ){
    console.log( "You Lose" );
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = "user".fontsize( 3 ).sup();
    const smallCompWord = "comp".fontsize( 3 ).sup();
    // userScoreSpan.innerHTML = userScore;
    // computerScoreSpan.innerHTML = computerScore;
    // const smallUserWord = "user".fontsize( 3 ).sup();
    // const smallCompWord = "comp".fontsize( 3 ).sup();
    // faster way to get info and render to page

    resultP.innerHTML = `${convertToWord( userChoice )}${smallUserWord} loses to ${convertToWord( computerChoice )}${smallCompWord}. You lost....! 💩`;
}

function draw( userChoice, computerChoice ){
    console.log( "Its a Draw" );
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = "user".fontsize( 3 ).sup();
    const smallCompWord = "comp".fontsize( 3 ).sup();
    // userScoreSpan.innerHTML = userScore;
    // computerScoreSpan.innerHTML = computerScore;
    // const smallUserWord = "user".fontsize( 3 ).sup();
    // const smallCompWord = "comp".fontsize( 3 ).sup();
    // faster way to get info and render to page

    resultP.innerHTML = `${convertToWord( userChoice )}${smallUserWord} equals ${convertToWord( computerChoice )}${smallCompWord}. It's a Draw! 🔁`;
}

// created a function for the choices the user has
function game( userChoice ){
    const computerChoice = getComputerChoice();
    // using a switch statement instead of an if statement

    switch( userChoice + computerChoice ){
        // adding both choices together to allow different intances of the outcome of the choices
        // user choices to win

        case "rs":
        case "pr":
        case "sp":
            // console.log( "UserWins" );
            win( userChoice, computerChoice );
            break;
            // comps choices to win
        case "rp":
        case "ps":
        case "sr":
            // console.log( "You Lose" );
            lose( userChoice, computerChoice );
            // tie choices
            break;
        case "rr":
        case "pp":
        case "ss":
            // console.log( "Its a Draw" );
            draw( userChoice, computerChoice );
            break;
    }
}
function main(){
    // addEventListener is waiting for the image to be clicked on either one of the const's by being connected to the html by r,p,s
    rockDiv.addEventListener( "click", function(){
        game( "r" );
    } );
    paperDiv.addEventListener( "click", function(){
        game( "p" );
    } );
    scissorsDiv.addEventListener( "click", function(){
        game( "s" );
    } );
}


main();
