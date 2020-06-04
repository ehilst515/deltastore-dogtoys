console.log('This file connected!');

//variable decleration
var today = new Date();
var hourNow = today.getHours();
var greeting;
var yourName;
var dogName;
var message;


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
 message = ' We hope you can find something for '

 //store inputs
console.log(yourName);
console.log(dogName);

//write full message
document.write('<h3>' + greeting + yourName + '!' + message + dogName + '!' + '</h3>');