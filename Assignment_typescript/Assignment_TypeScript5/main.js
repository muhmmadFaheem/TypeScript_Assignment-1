"use strict";
//Question No 58...
// Average Number
function averageScore(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(averageScore(80, 90, 100, 70));
//Question No 59..
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10));
//Question No 60...
let userProfile = (function () {
    let name = "John";
    let age = 30;
    return {
        displayInfo: function () {
            console.log("Name : " + name, "Age : " + age);
        }
    };
})();
userProfile.displayInfo();
// Day 21..
//Question No 61...
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["MotorCycle"] = 2] = "MotorCycle";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType.Car);
let student = {
    name: "Alice", age: 23, courses: ["Math", "Physics", "History"]
};
console.log(student);
let Circle = {
    kind: "Circle",
    radius: 5,
};
let Rectangle = {
    kind: "Rectangle",
    width: 10,
    height: 20
};
console.log(Circle);
console.log(Rectangle);
//Day 22 
//Question No 64...
function combineStringAndNumber(text, number) {
    return text + number;
}
console.log(combineStringAndNumber("Age: ", 30));
//Question No 65...
function remainder(num1, num2) {
    return num1 % num2;
}
console.log(remainder(5, 2));
//Question No 66...
function checkBothTrue(val1, val2) {
    return val1 && val2;
}
console.log(checkBothTrue(true, false));
//Day 23..
// Question No 67...
function addNUmberAndString(number1, numberString) {
    return number1 + Number(numberString);
}
console.log(addNUmberAndString(10, "5"));
// Question No 68...
function multiplyDecimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyDecimals(0.1, 0.2));
//Question No 69...
function divideAndRemainder(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return { quotient, remainder };
}
console.log(divideAndRemainder(10, 3));
