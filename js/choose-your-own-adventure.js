/* globals $*/
/* eslint-disable no-use-before-define */
/* eslint-env jquery*/
var story = {
    "start": "You walk into a dark forest at night! Would you like to camp or wander through the forest?",
    "camp": "You set up the tent and lie down for the night.",
    "wander": "While walking through the forest you see a flamming object crash in the distance. You hear footsteps running towards you. Do you want to leave or fight?",
    "leave": "You hear a loud roar from the distance coming towards you. You take off your gear and run back to the car to leave.",
    "fight": "While walking in the forest towards the flamming object, you get into a brawl with the land owners. They stole your Eggo!! Will you go for a knockout, c'mon it's and Eggo or headback?",
    "knockout": "You came out victorious. Your energy is recharged by eating the Eggo! You continue walking towards the crashed object in the distance. Continue!",
    "headback": "You are victorius you in your battle. Let's end on top and head home!!",
    "continue": "Running towards the burning object. Debris is scatterd across the forest. You hear coughing and a yell for 'Help!' Help or Run ",
    "help": "You rush over to the voice crying out. You pull the unidentified thing out from the debris. Will you watch or win?",
    "run": "You see that the thing yelling for help isn't human. You run back towards the car! A loud cry is behind you. As you run you hear and feel something getting close to you. You start to cry. You trip and fall, like they usually do. You die! :-(",
    "watch": "You look at the thing crying and it eats you!You just died!",
    "win": "You help this thing out of the debris and get into a fight. ",

};

var choice = prompt( story.start );
var output = $( "#output" );

var end = false;
var end2 = false;

while( end != true ){
    // all the choices that end
    if( choice === "camp" || choice === "leave" || choice === "knockout" || choice === "continue" || choice === "run" || choice === "win" ){
        end = true;
        alert( story[choice] );
        console.log( "end initiated" );
        $( "#output" ).text( story[choice] );
    }
    // all the choices that have other paths
    else if( choice === "wander" || choice === "fight" || choice === "headback" || choice === "help" || choice === "watch" ){
        // prompt( story[choice] );
        choice = prompt( story[choice] );
        $( "#output" ).text( story[choice] );
    }
}

// $( "button" ).click( function(){
//     $( "body" ).css( "background-color","blue" );
//     while( end2 != true ){
//         if( choice === "camp" || choice === "leave" || choice === "knockout" || choice === "continue" || choice === "run" || choice === "win" ){
//             end2 = true;
//             $( "#output" ).text( story[choice] );
//         }
//         else if( choice === "wander" || choice === "fight" || choice === "headback" || choice === "help" || choice === "watch" ){
//             $( "#output" ).text( story[choice] );
//             choice = alert( story[choice] );
//         }
//     }
// } );


// var choice = prompt( story.start );
//
// var end = false;
//
// while (end != true)


// output replaces the text data in the div id=output
// var output = $("#output")

// if choice is camp or wander choice becomes the story.choice
// if( choice === "camp" || choice === "wander" ){
//     // choice( story[choice] );
//     output.textcontent =  story[choice] ;
//     //replace textcontent with the choice
//     $("p").(choice);
// }
//   else{
//     output.textContent = "Choose a real option!";
// }
// // If choice is leave or fight
//   if( choice === "leave" || choice === "fight"){
//     output.textcontent =
//   }
// if( choice == "camp" ){
//     choice = document.write( story.camp );
// }
// else if( choice == "wander" ){
//     // choice = document.write( story.wander );
//     choice = prompt( story.wander );
// }
// else{
//     document.write( "Please type in a valid input! Refresh the page to try again." );
// }

// else if( choice == "leave" || choice == "fight" ){
//     choice( story[choice] );
// }

// if( choice === "leave" ){
//     choice = prompt( story.leave );
// }
//
// else if( choice === "fight" ){
//     choice = prompt( story.fight );
// }
// else{
//     document.write( "Please type in a valid input! Refresh the page to try again." );
// }
// if( choice === "knockout" ){
//     choice = prompt( story.knockout );
// }
// else if( choice === "headback" ){
//     choice = prompt( story.headback );
// }
// else{
//     document.write( "Please type in a valid input! Refresh the page to try again." );
// }
// if( choice === "continue" ){
//     choice = prompt( story.continue );
// }
// if( choice === "help" ){
//     choice = prompt( story.help );
// }
// else if( choice === "run" ){
//     choice = prompt( story.run );
// }
// else{
//     document.write( "Please type in a valid input! Refresh the page to try again." );
// }
// if( choice === "watch" ){
//     choice = prompt( story.watch );
// }
// else if( choice === "win" ){
//     choice = prompt( story.win );
// }
