/* globals $*/

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
//     $( someSelector )
// );

// var someSelector = prompt( "Give me a selector." );

function greetUser(){
    var firstName = prompt( "Whats Your Name?" );
    var $h1 = $( "h1" );
    var title = $h1.text();
    // using !(bang) for if nota

    if( !firstName ){
        greetUser();
    }
    else{
        // selects the css element that is the user inputs and changes it to hello + firstname
        $h1.text( title + " " + firstName );
        // $( someSelector ).textContent = ( "Hello " + firstName );
    }
}
// javascript way
// document
//     .querySelector( "#showcase" )
//     .addEventListener(
//         "click",
//         greetUser
//     );

// Jquery style query dom select showcase on click greetUser
$( "#showcase" ).on( "click", greetUser );
// .querySelector( "#showcase" )
// .addEventListener( "click", function doesAThing(){
//     alert( "a thing!" );
// } );

// arrow function don't need to name inline function
// .querySelector( "#showcase" )
// .addEventListener(
//     "click",
//     () => alert( "a thing!" )
// );

// greetUser();
//
// console.log(
//     $( someSelector )
// );
