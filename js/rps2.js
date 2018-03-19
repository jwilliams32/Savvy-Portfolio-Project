// caching the DOM
// create variables for each part of the game
const userScore = 0;
const computerScore = 0;
// Use underscore tags to show that its a DOM variable vs regular variables
const userScoreSpan = document.getElementById( "user-score" );

const computerScoreSpan = document.getElementById( "computer-score" );

const scoreBoardDiv = document.querySelector( "score-board" );
const resultDiv = document.querySelector( "result" );
const rockDiv = document.getElementById( "r" );
const paperDiv = document.getElementById( "p" );
const scissorsDiv = document.getElementById( "s" );

// created a function for the choices the computer can make by using random which will generate a random number and floor which only allows whole numbers. The numbers are assigned by their array order r is 1 p is 2 s is 3
function getComputerChoice(){
    const choices = [ "r" , "p", "s" ];
    const randomNumber = Math.floor( Math.random() * 3 );


    return choices[randomNumber];
}

// Create functions to keep track of wins, loses, and draws


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
            win();
            break;
            // comps choices to win
        case "rp":
        case "ps":
        case "sr":
            lose();
            // tie choices
        case "rr":
        case "pp":
        case "ss":
            draw();
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
