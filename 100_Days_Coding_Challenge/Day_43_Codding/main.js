//Day_43..
var _this = this;
//Question No 127..
var traditionalFunction = function (a, b) {
    return a + b;
};
//Converted to arrow function.
var arrowFunction = function (a, b) { return a + b; };
console.log(traditionalFunction(5, 3));
console.log(arrowFunction(5, 3));
//Question No 128...
var multiplyParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total * number; }, 1);
};
console.log(multiplyParameters(2, 3, 4));
//Question No 129...
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function :", this.value);
    },
    arrowFunction: function () {
        console.log("Arrow function :", _this.value); //this is not bound to tradionalVsArrow object but to the scope in..
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
