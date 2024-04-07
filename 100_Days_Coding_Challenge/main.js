"use strict";
//100 Days Coding Challenge..
//Day 33..
//Question No 97..
function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return day + " - " + month + " - " + year;
}
console.log(getCurrentDateFormatted());
//Question No 98...
function daysUnitNewYear() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const diff = newYear.getTime() - today.getTime();
    const days = Math.ceil(diff / 1000 * 60 * 60 * 24);
    return days;
}
console.log(daysUnitNewYear() + " days until New Year.");
//Question N0 99...
function getNextBirthday(month, day) {
    const today = new Date();
    let year = today.getFullYear();
    const birthDay = new Date(year, month - 1, day);
    if (birthDay < today) {
        birthDay.setFullYear(year + 1);
    }
    return birthDay;
}
const nextBirthDay = getNextBirthday(12, 25);
console.log("Next birthDay on : ", nextBirthDay.toLocaleDateString());
// Day 34..
//Question No 100...
//using Math.sqrt()
const squareRoot = Math.sqrt(144);
console.log(squareRoot);
//Question No 101...
function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomInt());
//Question No 102...
const difference = Math.abs(-5 - 5);
console.log(difference);
//Day 35...
//Question No 103..
function getRandomBoolean() {
    return Math.random() > 0.5;
}
console.log(getRandomBoolean());
//Question No 104...
function getRandomHexColor() {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}
console.log(getRandomHexColor());
//Question No 105...
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice());
//Day 36...
//Question No 106...
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2020));
console.log(isLeapYear(1900));
//Question No 107...
function isDivisibleByTwoAndThree(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleByTwoAndThree(12));
console.log(isDivisibleByTwoAndThree(14));
//Question No 108..
function areStringsEqualIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("hello ", "Hello"));
console.log(areStringsEqualIgnoreCase("world ", "Word"));
//Question No 109...
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning");
}
//Question No 110...
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(85));
console.log(assignGrade(55));
//Question No 111...
function categorizedAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(categorizedAge(12));
console.log(categorizedAge(18));
console.log(categorizedAge(25));
//Day 38...
//Question No 112...
const countries = new Map();
countries.set("USA", "Washington,D.C .");
countries.set("France", "Paris .");
countries.set("Japan", "Tokyo.");
console.log(countries);
//Question No 113...
function logCapitalofCanada(countries) {
    if (countries.has("Canada")) {
        console.log("This capital of Canada is " + countries.get + "Canada");
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
logCapitalofCanada(countries);
//Question No 114...
const students = new Map();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");
students.forEach((name, id) => {
    console.log(" Student ID : " + id + " : Name : " + name);
});
