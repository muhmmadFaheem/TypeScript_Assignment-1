"use strict";
//Day 28...
//Question No 82...
function stringLength(str) {
    return str.length;
    //Returns the number of characters in String 
}
console.log(stringLength("Alice"));
//Question No 83...
function convertCase(str) {
    let upperStr = str.toUpperCase();
    let lowerStr = str.toLowerCase();
    console.log("Uppercase :", upperStr, "LowerCase :", lowerStr);
}
convertCase("Hello World");
// Question No 84...
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceJavaScriptWithTypeScript("I Love JavaScript and JavaScript is Awesome !"));
//Day 29...
//Question No 85...
function findCodePosition(str) {
    return str.indexOf("code");
}
console.log(findCodePosition("Learn to code with JavaScript"));
//Question No 86...
function hasJavaScript(str) {
    return str.includes("JavaScript");
}
console.log(hasJavaScript("I Love coding in JavaScript! "));
//Question No 87...
function extractFirstTenChars(str) {
    return str.substring(0, 10);
}
console.log(extractFirstTenChars("Hello, JavaScript world !"));
//Day 30...
//Question No 88...
function roundToNearestInteger(num) {
    return Math.round(num);
}
console.log(roundToNearestInteger(4.7));
console.log(roundToNearestInteger(4.4));
//Question No 89...
function convertStringToNumber(str) {
    return parseFloat(str);
}
console.log(convertStringToNumber("123.45"));
console.log(convertStringToNumber("98"));
//Question No 90...
function isValueNaN(value) {
    return isNaN(value);
}
console.log(isValueNaN("Hello"));
console.log(isValueNaN(123));
