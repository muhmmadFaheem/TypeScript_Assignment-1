//Day_45...
//Question_No-133

const person = {
    name : "Alice",
    age : 30,
    city : "WonderLand",
};

const jsonString = JSON.stringify(person);

console.log(jsonString);

//Question_No-134...

const jsonString1 = '{"name" : "Alice" , "age" : 30 , "city" : "WonderLand"}';

const person1 = jsonString1;

console.log(person1);

//Question_No-135...

const person2 ={
    name : "Alice",
    age : 30,
    city : "WonderLand",
};

const jsonString2 = JSON.stringify(person2 , null , 2);

console.log(jsonString2);

//Day_46...
//Question_ No- 136....

for(let i = 1; i <= 5; i ++){

    console.log(`Iteration ${i}, i value :, i`);
}

//Question_No-137...

try {
    throw new Error("Something went wrong");
} catch (error){
    console.log(error.message);
}

//Question_No-138...

console.log("Before breakPoint");

console.log(
    "This Line has a breakpoint set on it in the browser's developer tools"
);

console.log("After Breakpoint");

//Day_47...
//Question_No-139...

let count = 5;
if(count > 0){
    console.log("Count is Greater than 0.")
}

function add(a , b){
    return a + b;
}
//Question_No-140...

console.log(
    "Using a reserved word as a variable name causes a syntex error in Javascript."
);

//Question_No-141...
async function fetchData() {

    const data = await fetchSomething();
    console.log(data);
    
}
console.log(
"The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
);

function fetchSomething() {
    throw new Error("Function not implemented.");
}

//Day_48...
//Question_No- 142...

const  helloPromise = new Promise<string>((resolve) => {

    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});

helloPromise.then((message) => console.log(message));

//Question_No-143...

const conditionalPromise = new Promise<string>((resolve, reject) => {

    const success = Math.random() > 0.5 ;
    if (success){
        resolve("Success!");
    }else{
        reject(new Error("Failure"));
    }
});

conditionalPromise
.then((result) => console.log(result))//handles a successful resolution...
.catch((error) => console.log(error.message));//handles a rejection...

//Question_No-144...

const promise1 = Promise.resolve(3);
const promise2 = 42;

const promise3 = new Promise<string>((resolve) => {

    setTimeout(resolve , 100 , "foo");
});

Promise.all([promise1 , promise2 , promise3]).then((values) => {
    console.log(values);
});


//Day_49...

//Question_No -145...

function executeCallback(
    callback : (arg1 : number , arg2 : number) => void,
    arg1 : number ,
    arg2 : number
): void {
    callback(arg1 , arg2);
}
//Example callback function that adds two numbers...

const add = (a : number , b : number) =>{
    console.log(a + b);
}
executeCallback(add , 5 , 3);

//Question_No -146...

const numbers : number [] = [1, 2, 3, 4, 5, 6,7 ,8 ,9, 10];

const filteredNumbers : number[] = numbers.filter((number) => number > 5);

console.log(filteredNumbers);

//Question_ No -147...

function fetchData(
    callback : (error : Error | null , data ? : string ) => void 
) : void {
    const error = new Error("Failed to Fetch Data");
    const data = "Some data";


if (Math.random() > 0.5){
    callback(null, data);
    
}else {

    console.log(error);
}

}

fetchData((error , data) =>{
    if (error){
        console.log(error.message);
    }
    else {
        console.log(data);
    }

});

//Day_50...
//Question_No -148...

setTimeout(() => {
    console.log(
        "This message is shown after a  2-Seconds delay."
    );
    
},2000);

//Question_No -149...

console.log("Start");

setTimeout(() => {
    console.log("CallBack executed");
}, 0);

console.log("End");

//Question_No -150...

console.log("Before synchronous operation");

for (let i = 0 ; i < 1e9 ; i ++){

    console.log("After synchronous operation");

    console.log("Before asynchoronous operation");
    setTimeout(() => {

        console.log("Asynchronous operation completed");
        
    }, 1000);

    console.log("After asynchronous operation setup");
}