//Day 31..
//Question No 91...
let favoriteFruits : string[] = ["Apple", "Banana", "Cherry"];
favoriteFruits.push("Mango");
console.log(favoriteFruits);

//Question No 92..
function removeLastElement<T>(arr : T []): T | undefined {
    return arr.pop();
}
//Removes and returns the last element of the array..
const fruits : string [] = ["Apple", "Banana", "Cherry"];

console.log(removeLastElement(fruits));
console.log(fruits);

//Question No 93...

function replaceBananaWithMango(fruits:string[]): void {
    const index =fruits.indexOf("Banana");
    if(index ! == -1)
    fruits[index] = "Mango";
}

const fruits1 : string [] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits1);

console.log(fruits1);

//Day 32...
//Question No 94...

const words: string[] = ["Hello", "World", "TypeScript", "JavaScript"];

const lengths : number [] = words.map(word => word.length);

console.log(lengths);

//Question No 95...
function filterGreaterThanTen(numbers: number[]): number[]{
    return numbers.filter(number => number > 10);

}

const numbers : number[] = [5, 10, 15, 20, 25];

console.log(filterGreaterThanTen(numbers));

//Question No 96...

function calculateSum(numbers : number[]):number{
    return numbers.reduce((accumulator ,current) => accumulator + current, 0);
}

const numbers1 : number[] = [1,2,3,4,5];

console.log(calculateSum(numbers1));