/* globals $ */

var css = {
    "background-color": "chartreuse",
    "font-size": "500%",
    "top": 0,
    "position": "fixed"
};
// variable holding new jquery dom node $h1 names the element as the var
// reminds that you are able to use javascript to query the DOM
// can append $h1 to the page
var animations = {
    "font-size": "500%",
    "top": "20vh"
};


var $h2 = $( "<h2>" )
    .text( "You are awesome!" )
    .css( "position", "fixed" );

var animationsOptions = {
    "duration": 5000,
    "complete": animatedH2
};

var $h1 = $( "<h1>" )
    .text( "Hello World" )
    .css( css )
    .animate( animations, animationsOptions );
    // function decloration
    // var animatedH2 = function animatedH2(){
    //     $h2.animate( {
    //         "left": "100vw"
    //
    //     } );
    // };

    // Named functional expression same as the decloration short hand
function animatedH2(){
    $h2.animate( {
        "left": "100vw"

    } );
}
// when you click the out put the h2 will animate then an alert box will pop up saying howdy
$( "#output" ).on( "click", ( animatedH2 ) => alert( "Howdy" ) )
    // .hide() hides
// append allows you to append multiple things
    // more efficent way
    // .append( $h1 )
    // .append( $h2 )
    // even more efficent .append(content[,content]) option argument not an array
    .append( $h1, $h2 );
// fades item in
// .fadeIn( 5000 );

// not as efficent way
// .append( "<h1>Hello Bobby</h1>" )
// .append( "<h2>This came from Jquery</h2>" )
// .css( "background-color" , "skyblue" )
// .css( "font-family", "sans-serif" );


// arguments refers to a term that logs any argument passed into it
// function logArguments(){
//   console.log(arguments);
// }
// ---------
// logArguments(1,2,3,4,"Bob", false)
// ---------
// returns an array
//
// add the first two items in an array
// function addFirstTwoArguments(){
// var firstArgument = arguments[0];
// var secondArgument = arguments[1];
//
// console.log(firstArgument + secondArgument);
// }
// undefined
// addFirstTwoArguments(1,2);
// 3
//
// Another way to name a function
// function addFirstTwoArguments(firstArgument,secondArgument){
//   console.log(firstArgument + secondArgument);
// }
//
// *side effects
// console.console
// alert
// Jquery
//
// *effect
// return
// ---------
// function addThree(x){
// 	return add(3,x);
// }
// undefined
// addThree(5)
// 8
// function addThreeandMultiplyByTen(x){
// 	return multiply(addThree(x),10);
// }
// ----------
// function addThreeMultiplyByTenAndDivideBySix(x){
// 	return divide(multiply(add(3, x), 10), 6);
// }
// -------
// variation function
// unknown number of results
// ex console.log
//
// function sum(){
// 	var result = 0;
//
// 	for( var i = 0; i < arguments.length; i++){
//     *adds 1 by 1 incremation
// 		result += arguments[i];
//     }
//     *returns a results
// 	return result;
// }
//
// -------
// call back functional
// function doToX(x, callback){
// 	return callback(x)
// }
// equals
// doToX(42, addThree)
// 45
// ---------
// Events
