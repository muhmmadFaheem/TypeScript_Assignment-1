//Day_45...
//Question_No-133
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var person = {
    name: "Alice",
    age: 30,
    city: "WonderLand",
};
var jsonString = JSON.stringify(person);
console.log(jsonString);
//Question_No-134...
var jsonString1 = '{"name" : "Alice" , "age" : 30 , "city" : "WonderLand"}';
var person1 = jsonString1;
console.log(person1);
//Question_No-135...
var person2 = {
    name: "Alice",
    age: 30,
    city: "WonderLand",
};
var jsonString2 = JSON.stringify(person2, null, 2);
console.log(jsonString2);
//Day_46...
//Question_ No- 136....
for (var i = 1; i <= 5; i++) {
    console.log("Iteration ".concat(i, ", i value :, i"));
}
//Question_No-137...
try {
    throw new Error("Something went wrong");
}
catch (error) {
    console.log(error.message);
}
//Question_No-138...
console.log("Before breakPoint");
console.log("This Line has a breakpoint set on it in the browser's developer tools");
console.log("After Breakpoint");
//Day_47...
//Question_No-139...
var count = 5;
if (count > 0) {
    console.log("Count is Greater than 0.");
}
function add(a, b) {
    return a + b;
}
//Question_No-140...
console.log("Using a reserved word as a variable name causes a syntex error in Javascript.");
//Question_No-141...
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchSomething()];
                case 1:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
function fetchSomething() {
    throw new Error("Function not implemented.");
}
//Day_48...
//Question_No- 142...
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 2000);
});
helloPromise.then(function (message) { return console.log(message); });
//Question_No-143...
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5;
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    .then(function (result) { return console.log(result); }) //handles a successful resolution...
    .catch(function (error) { return console.log(error.message); }); //handles a rejection...
//Question_No-144...
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});
//Day_49...
//Question_No -145...
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
//Example callback function that adds two numbers...
var add = function (a, b) {
    console.log(a + b);
};
executeCallback(add, 5, 3);
//Question_No -146...
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filteredNumbers = numbers.filter(function (number) { return number > 5; });
console.log(filteredNumbers);
//Question_ No -147...
function fetchData(callback) {
    var error = new Error("Failed to Fetch Data");
    var data = "Some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        console.log(error);
    }
}
fetchData(function (error, data) {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log(data);
    }
});
//Day_50...
//Question_No -148...
setTimeout(function () {
    console.log("This message is shown after a  2-Seconds delay.");
}, 2000);
//Question_No -149...
console.log("Start");
setTimeout(function () {
    console.log("CallBack executed");
}, 0);
console.log("End");
//Question_No -150...
console.log("Before synchronous operation");
for (var i = 0; i < 1e9; i++) {
    console.log("After synchronous operation");
    console.log("Before asynchoronous operation");
    setTimeout(function () {
        console.log("Asynchronous operation completed");
    }, 1000);
    console.log("After asynchronous operation setup");
}
