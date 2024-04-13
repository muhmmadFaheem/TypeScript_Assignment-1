//Day_43..

//Question No 127..

const traditionalFunction = function (a , b){
    return a + b;
};

//Converted to arrow function.
const arrowFunction = (a , b) => a + b;

console.log(traditionalFunction(5 , 3));
console.log(arrowFunction(5,3));

//Question No 128...
const multiplyParameters = (...numbers : number[]) => numbers.reduce((total, number ) => total * number , 1);


console.log(multiplyParameters( 2 , 3 , 4));

//Question No 129...

const traditionalVsArrow = {
    value : "traditionalVsArrow value",
    traditionalFunction : function (){
        console.log("Traditional function :", this.value);
    },

    arrowFunction : () => {
        console.log("Arrow function :", this.value);//this is not bound to tradionalVsArrow object but to the scope in..
    },
};

traditionalVsArrow.traditionalFunction();

traditionalVsArrow.arrowFunction();