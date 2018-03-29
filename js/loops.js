/* globals $ */


var output = $( "#output" );
// gives objects you can over write
// valid html is strings
// creating an order lists
var list  = "<ol>";
var fizzyBuzz = "<ul>";

for( let i; i <= 10; i++ ){
    // li is string that will render into html DOM
    // list = list + "<li>" + i + "</li>";
    list += "<li>" + i + "</li>";

    // add incremation first
}
// closes the order list after the while loop is ran on the li

list += "</ol>";

// outputs literal string
// output.textContent = list;

// outerHTML = list; puts the orderlist outside of the div into the body

output.innerHTML = list;

// var is i no need to recreate i


// starting condition i = 1, distance i to 100, the means of how to get there i++
// ; seperates arguments only in for loops
// let are blocked scoped no need to place let at the top like you do for var
// let is a variable for a block of code
// for loops tend to only deal with numbers
for( let i = 1; i <= 100; i++ ){
    if( i % 3 === 0 && i % 5 === 0 ){
    // i is replaced with FizzBuzz if divisible by 3 or 5
        fizzyBuzz += "<li>FizzBuzz</li>";
    }
    // Fizz is out put if the number is divisible by 3
    else if( i % 3 === 0 ){
        fizzyBuzz += "<li>Fizz</li>";
    }
    else if( i % 5 === 0 ){
        fizzyBuzz += "<li>Buzz</li>";
    }
    else{
        fizzyBuzz += "<li>" + i + "</li>";
    }
}
// while loop
// i = 1;
// while( i <= 100 ){
//     if( i % 3 === 0 && i % 5 === 0 ){
//     // i is replaced with FizzBuzz if divisible by 3 or 5
//         fizzyBuzz += "<li>FizzBuzz</li>";
//     }
//     // Fizz is out put if the number is divisible by 3
//     else if( i % 3 === 0 ){
//         fizzyBuzz += "<li>Fizz</li>";
//     }
//     else if( i % 5 === 0 ){
//         fizzyBuzz += "<li>Buzz</li>";
//     }
//     else{
//         fizzyBuzz += "<li>" + i + "</li>";
//     }
//     i++;
// }
// closes ul tags
fizzyBuzz += "</ul>";
// outputs to the html
// output both html's
output.innerHTML += fizzyBuzz;
// output.innerHTML = fizzyBuzz + list;
