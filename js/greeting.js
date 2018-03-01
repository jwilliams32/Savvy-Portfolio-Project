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

// var someSelector = prompt( "Give me a selector." );
//
// var greetUser = function greetUser(){
//     var firstName = prompt( "Whats Your Name?" );
//     // using !(bang) for if nota
//
//     if( !firstName ){
//         greetUser();
//     }
//     else{
//         alert( "Hello " + firstName );
//     }
// };
//
// greetUser();
//
// console.log(
//     document.querySelectorAll( someSelector )
// );

var someSelector = prompt( "Give me a selector." );

var greetUser = function greetUser(){
    var firstName = prompt( "Whats Your Name?" );
    // using !(bang) for if nota

    if( !firstName ){
        greetUser();
    }
    else{
        // selects the css element that is the user inputs and changes it to hello + firstname
        document.querySelector( someSelector ).textContent = ( "Hello " + firstName );
    }
};

greetUser();

console.log(
    document.querySelectorAll( someSelector )
);
