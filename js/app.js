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

//ask shoppingAmmount until a number is entered
var itemNumber = function(){
    var shoppingAmmount = prompt("How many items are you looking for?");
    while( shoppingAmmount ==='' || isNaN(shoppingAmmount)){
        shoppingAmmount = prompt('You must enter the ammount of times you are looking for to shop here');
    }
        return Number(shoppingAmmount);
}

function fullMessage(){

    //variable decleration
    var shoppingDescription;
    var greeting = time();

    //gather inputs
    var yourName = prompt("What's your name?");
    var dogName = prompt("What's your dog's name?");
    var message = ' We hope you can find ';


    //change shopingDescription in full message based on the number of items looking for
    var countOfItems = itemNumber();
    var picture = '<img src="https://i.pinimg.com/564x/47/41/19/474119c32836b1ace813e9119d778164.jpg" alt="Paw Print" style="width:30px;height:30px;" </img>';
    var result = '';
    for(var i=0;i<countOfItems;i++){
        result += picture + '<br>';
    } 

    document.getElementById('pictureArray').innerHTML = result;

    if (countOfItems >= 12){
        shoppingDescription = 'more than a dozen items';
    }     else if (countOfItems >= 7 ){
            shoppingDescription = 'a bunch of items';
    }     else if (countOfItems == 6){
            shoppingDescription = 'half a dozen items';
    }     else if (countOfItems >= 1){
            shoppingDescription = 'at least one item';
    }      else {
            shoppingDescription = 'something fun';
    }
    return greeting + yourName + '!' + message + shoppingDescription + ' for ' + dogName + '!';
}
document.getElementById('messageDisplay').innerHTML = fullMessage();