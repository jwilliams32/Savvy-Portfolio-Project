// prompt takes an argument or input
// alert creates a pop up

// var firstName = prompt("Whats Your Name?");
//
// var checkFirstName = function(){
//   if(firstName === "Jeffrey"){
//     alert("Hey Jay");
//   }else if(firstName === "Bob"){
//     alert("Hey Bob");
//   } else {
//     alert("Who are you?");
//   }
// }
//
// checkFirstName();


var greetUser = function greetUser(){
    var firstName = prompt( "Whats Your Name?" );
    // using !(bang) for if not

    if( !firstName ){
        greetUser();
    }
    else{
        alert( "Hello " + firstName );
    }
};

greetUser();
