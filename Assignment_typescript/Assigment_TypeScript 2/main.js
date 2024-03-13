"use strict";
//100_Days_Coding_Challenge_Of_TypeScript Part_2...
//Question 13...
let transport = ["Honda motorcycle", "Tesla car", "Bianchi bicycle"];
transport.forEach(transport => {
    console.log('I would like to own a ' + transport + ' ');
});
//Question 14...
let guests = ["Nadeem Khan", "Shan Malik", "Kashan Malik", "Shariq Khan"];
guests.forEach(guest => {
    console.log('Dear ' + guest + 'would you like to join me for dinner ?');
});
//Question 15...
let unableToAttend = "Nikola Tesla";
console.log("'" + unableToAttend + " can't make it to dinner. '");
let newGuest = "kainat";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New Invitations...
console.log("New Guests Invitations...");
guests.forEach(guest => {
    console.log("'Dear" + guest + " would you like to join me for dinner? '");
});
//Question 16...
let guest1 = ["Nawaz", "Jawad Khan", "Zia Khan"];
console.log("Great News ! I found a bigger dinner table !");
//adding more guests....
guest1.unshift("Muzammil Shah");
guest1.splice(guest1.length / 2, 0, "Fawaz");
guest1.push("Hamzah Khan");
guest1.forEach(guest => {
    console.log("Dear " + guest + " would you like to join me for dinner ?");
});
//Question 17....
console.log("Unfortunately, I can only invite two people for dinner.");
while (guest1.length > 2) {
    let removedGuest = guest1.pop();
    console.log("Sorry," + removedGuest + " I can't invite you to dinner.");
}
guest1.forEach(guest => {
    console.log("Dear " + guest + " you're still invited to dinner. ");
});
guest1.splice(0, guest1.length);
console.log(guest1);
//for empty list...
//Question 18...
let places = ["Japan", "Australia", "South Korea", "Germany", "France"];
console.log("Original Order :", places);
console.log("Alphabetical order :", [...places].sort().reverse());
console.log("Original order : ", places);
places.reverse();
console.log("Reversed order : ", places);
places.reverse();
console.log("Original order : ", places);
places.sort();
console.log("Alphabetical order :", places);
places.reverse();
console.log("Reverse alphabetical order : ", places);
//Question 19...
let guests2 = ["Khalid", "Manzoor", "Miandad", "Tanveer", "Mubasshir"];
console.log("I'm inviting " + guests.length + " people to dinner. ");
//Question 20...
let countries = ["Germany", "France", "Iceland", "Kuwait", "Qatar"];
console.log("Countries , I would like to visit : ", countries);
//Question 21...
let book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log('"Book info: ' + book.title + ' by ' + book.author + ' published in ' + book.yearPublished + '"');
//Question 22...
let friends = ["Azam ", "Ali", "Jawad ", "Asad"];
console.log(friends[3]);
//Question 23...
let car1 = 'Subaru';
console.log("Is car == 'Subaru' ? I predict True.");
console.log(car1 == 'Subaru');
console.log("Is car == 'toyota' ? I predict false");
console.log(car1 == 'toyota');
//1...
let fruit1 = "Mango";
console.log("Is fruit == 'Mango' ? I predict True");
console.log(fruit1 == 'Mango');
console.log("Is vegetable == 'Mango' ? I predict false");
console.log(fruit1 == 'Ladyfinger');
//2...
let country1 = "Germany";
console.log("Germany is a European Country");
console.log(country1 == 'Germany');
console.log("Australia is a European Country");
console.log(country1 == 'Australia');
//3...
let equal = 2;
console.log("2 is a Even number");
console.log(equal == 2);
console.log("3 is a Even number");
console.log(equal == 3);
//4...
let vegetable1 = "Potato";
console.log("Potato is a Vegetable");
console.log(vegetable1 == 'Potato');
console.log("Apple is a Vegetable");
console.log(vegetable1 == 'Apple');
//5...
let alpha = "A";
console.log("A is a vowel");
console.log(alpha == 'A');
console.log("D is a vowel");
console.log(alpha == 'D');
//Question 24...
console.log("Testing Equality with Strings :");
console.log("apple" == "apple"); //True..
console.log("apple" == "Apple"); //False..
//using the lower case...
console.log("Testing With Lower Case :");
console.log("Apple".toLowerCase() == "apple");
//Numerical Test..
console.log("Numerical Tests :");
console.log(10 > 5); //True..
console.log(2 < 1); //False..
//Testing using "and" and "or" operators...
console.log('Tests with "And" and "Or" :');
console.log(true && false); //False..
console.log(true, false); //True
//Test of Array...
let fruits = ["apple", "banana", "cherry"];
console.log("Is apple in fruits ? ");
console.log(fruits.includes("apple")); //True..
//Test without Array...
console.log("Is Mango not in Fruits ? ");
console.log(!fruits.includes("mango")); //True...
//Question 25...
let alien_color = "green";
if (alien_color == "green ") {
    console.log("You earned just 5 Points !");
}
alien_color = "red";
if (alien_color == "green") {
    //No output show..
}
//Question 26....
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien! ");
}
else {
    console.log("You just earned 10 points");
}
alien_color = "Yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien! ");
}
else {
    console.log("You just earned 10 points");
}
//Green alien...
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien! ");
}
else if (alien_color == "yellow") {
    console.log("You just earned 10 points");
}
else if (alien_color == "red") {
    console.log("You earned 15 points");
}
//yellow alien...
alien_color = "yellow";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien! ");
}
else if (alien_color == "yellow") {
    console.log("You just earned 10 points");
}
else if (alien_color == "red") {
    console.log("You earned 15 points");
}
//red alien...
alien_color = "red";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien! ");
}
else if (alien_color == "yellow") {
    console.log("You just earned 10 points");
}
else if (alien_color == "red") {
    console.log("You earned 15 points");
}
//Question 28...
let age = 25;
if (age < 2) {
    console.log("This is a baby.");
}
else if (age < 4) {
    console.log("This person is a toddler.");
}
else if (age < 13) {
    console.log("This person is a kid.");
}
else if (age < 20) {
    console.log("This person is a teenager.");
}
else if (age < 65) {
    console.log("This person is an adult.");
}
else {
    console.log("This person is an elder.");
}
