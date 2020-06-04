"use strict";

function headerMessage(){
//variable decleration
var today = new Date();
var hourNow = today.getHours();
var greeting;
var yourName;
var dogName;
var message;
var shoppingAmmount;
var shoppingDescription;


//timed greeting
if (hourNow > 18) {
    greeting = 'Good evening,';
}   else if (hourNow > 12){
    greeting = 'Good afternoon, ';
}   else if (hourNow > 0) {
    greeting = 'Good morning, ';
}   else {
    greeting = 'Welcome, ';
}

//gather inputs
 yourName = prompt("What's your name?");
 dogName = prompt("What's your dog's name?");
 shoppingAmmount = prompt("How many items are you looking for?")
 message = ' We hope you can find '

 //number of items looking for
 if (shoppingAmmount >= 11){
     shoppingDescription = 'more than a dozen items';
}     else if (shoppingAmmount < 11 && shoppingAmmount >= 7 ){
        shoppingDescription = 'a bunch of items';
}     else if (shoppingAmmount > 0 && shoppingAmmount <= 6){
        shoppingDescription = 'half a dozen items';
}     else if (shoppingAmmount <= 0){
        shoppingDescription = 'at least one item';
}      else {
        shoppingDescription = 'something fun';
}



 //store inputs
console.log(yourName);
console.log(dogName);
console.log(shoppingDescription);

//output: write full message
document.write('<h3>' + greeting + yourName + '!' + message + shoppingDescription + ' for ' + dogName + '!' + '</h3>');


}