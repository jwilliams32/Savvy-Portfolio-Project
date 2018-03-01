var story = {
    "start": "You walk into a dark forest at night! Would you like to camp or wander through the forest?",
    "camp": "You set up the tent and lie down for the night.",
    "wander": "While walking through the forest you see a flamming object crash in the distance. You hear footsteps running towards you. Do you want to leave or fight?",
    "leave": "You hear a loud roar from the distance coming towards you. You take off your gear and run back to the car to leave.",
    "fight": "While walking in the forest towards the flamming object, you get into a brawl with the land owners. They stole your Eggo!! Will you go for a knockout, c'mon it's and Eggo or headeback?",
    "knockout": "You came out victorious. Your energy is recharged by eating the Eggo! You continue walking towards the crashed object in the distance. Continue!",
    "headback": "You are victorius you in your battle. Let's end on top and head home!!",
    "continue": "Running towards the burning object. Debris is scatterd across the forest. You hear coughing and a yell for 'Help!' Help or Run ",
    "help": "You rush over to the voice crying out. You pull the unidentified thing out from the debris. Will you look or fight?",
    "run": "You see that the thing yelling for help isn't human. You run back towards the car! A loud cry is head behind you. As you run you hear and feel something getting close to you. You start to cry. You trip and fall, like they usually do. Snap or Boom?"

};

var choice = prompt( story.start );

console.log( choice );

if( choice == "camp" ){
    choice = document.write( story.camp );
}
else if( choice == "wander" ){
    // choice = document.write( story.wander );
    choice = prompt( story.wander );
}
else{
    document.write( "Please type in a valid input! Refresh the page to try again." );
}

// else if( choice == "leave" || choice == "fight" ){
//     choice( story[choice] );
// }

if( choice == "leave" ){
    choice = prompt( story.leave );
}

else if( choice == "fight" ){
    choice = prompt( story.fight );
}
else{
    document.write( "Please type in a valid input! Refresh the page to try again." );
}
if( choice == "knockout" ){
    choice = prompt( story.knockout );
}
else if( choice == "headback" ){
    choice = prompt( story.headback );
}
else{
    document.write( "Please type in a valid input! Refresh the page to try again." );
}
if( choice == "continue" ){
    choice = prompt( story.continue );
}
else if( choice == "help" ){
    choice = prompt( story.help );
}
else if( choice == "run" ){
    choice = prompt( story.run );
}
else{
    document.write( "Please type in a valid input! Refresh the page to try again." );
}
