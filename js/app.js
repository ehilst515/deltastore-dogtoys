"use strict";
function time(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    //timed greeting (taken from lab 6)
    if (hourNow > 18) {
        greeting = 'Good evening,';
    }   else if (hourNow > 12){
        greeting = 'Good afternoon, ';
    }   else if (hourNow > 0) {
        greeting = 'Good morning, ';
    }   else {
        greeting = 'Welcome, ';
    }
    return greeting;
}

function fullMessage(){

    //variable decleration
    var yourName;
    var dogName;
    var message;
    var shoppingAmmount;
    var shoppingDescription;
    var greeting = time();

    //gather inputs
    yourName = prompt("What's your name?");
    dogName = prompt("What's your dog's name?");
    shoppingAmmount = prompt("How many items are you looking for?");
    message = ' We hope you can find ';

    //change shopingDescription in full message based on the number of items looking for
    if (shoppingAmmount >= 12){
        shoppingDescription = 'more than a dozen items';
    }     else if (shoppingAmmount >= 7 ){
            shoppingDescription = 'a bunch of items';
    }     else if (shoppingAmmount == 6){
            shoppingDescription = 'half a dozen items';
    }     else if (shoppingAmmount >= 1){
            shoppingDescription = 'at least one item';
    }      else {
            shoppingDescription = 'something fun';
    }
    return greeting + ' ' + yourName + '!' + message + shoppingDescription + ' for ' + dogName + '!';
}
document.getElementById('messageDisplay')