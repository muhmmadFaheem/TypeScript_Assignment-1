//Day 31..
//Question No 91...
var favoriteFruits = ["Apple", "Banana", "Cherry"];
favoriteFruits.push("Mango");
console.log(favoriteFruits);
//Question No 92..
function removeLastElement(arr) {
    return arr.pop();
}
//Removes and returns the last element of the array..
var fruits = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits));
console.log(fruits);
//Question No 93...
function replaceBananaWithMango(fruits) {
    var index = fruits.indexOf("Banana");
    if (index == -1)
        fruits[index] = "Mango";
}
var fruits1 = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits1);
console.log(fruits1);
//Day 32...
//Question No 94...
var words = ["Hello", "World", "TypeScript", "JavaScript"];
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
//Question No 95...
function filterGreaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var numbers = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers));
//Question No 96...
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var numbers1 = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers1));
