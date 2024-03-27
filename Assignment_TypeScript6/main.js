"use strict";
//Day 24...
//Question No 70...
function printNumbersWithLet() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumbersWithLet();
//Question No 71...
let age = 25;
age = 26;
console.log(age);
const name = "Alice";
try {
    name = "Bob";
}
catch (error) {
    console.log("Error : Can't reassign a 'const' - declared variable.");
}
//Question No 72...
{
    let blockLet = "visible inside the block";
    const blockconst = "also only inside the block";
    console.log(blockLet);
    console.log(blockconst);
}
try {
    console.log(blockLet);
}
catch (error) {
    console.log("blockLet is not accessible outside the block.");
}
try {
    console.log(blockConst);
}
catch (error) {
    console.log("blockConst is not accessible outside the block.");
}
//Day 25 ...
//Question No 73...
function updateVariable() {
    let number = 10;
    console.log("Initial value :", number);
    number = 20;
    console.log("Updated value :", number);
}
updateVariable();
//Question No 74..
function swapValues() {
    let a = 5, b = 10;
    console.log("Before swap: a=", a, "b =", b);
    let temp = a;
    a = b;
    b = temp;
    console.log("After swap : a =", a, "b =", b);
}
swapValues();
//Question No 75...
function useCompoundOperators() {
    let x = 4;
    console.log("Initial x :", x);
    x += 2;
    console.log("After addition :", x);
    x -= 1;
    console.log("After subtraction :", x);
    x *= 3;
    console.log("After multiplication :", x);
    x /= 2;
    console.log("After division :", x);
}
useCompoundOperators();
//Question No 76...
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5, 7));
//Question No 77...
function greetUser(name = "anonymous") {
    console.log("Hello " + name + "!");
}
greetUser("Alice"); //output "Hello Alice"
greetUser(); //output "Hello anonynmous"
//Question No 78...
function squareDeclaration(number) {
    return number * number;
}
const squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(4));
console.log(squareExpression(4));
//Day 27...
//Question No 79..
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car.make);
console.log(car.model);
//Question No 80...
let car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car1.color = "blue";
car1.year = 2021;
console.log(car1);
//Question No 81...
function logObjectProperties(obj) {
    for (let property in obj) {
        console.log(property + ":" + obj[property]);
    }
}
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
