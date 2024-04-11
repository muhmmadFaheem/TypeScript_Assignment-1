//100 Days _coding_Challenge..
//Day 39...

//Question No 115..

function logDayofWeek(dayNumber : number): void{
    switch(dayNumber){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
                console.log("Tuesday");
                break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
                console.log("Friday");
                break;
        case 1:
            console.log("Saturday");
            break;

            default :
            console.log("Invalid Day Number");
            break;
    }
}
logDayofWeek(3);

//Question No 116...
function logSeason(month : number): void{
    switch (month){
        case 12 :
        case 1:
        case 2:
            console.log("Winter");
                    break;

            case 3 :
            case 4:
            case 5:
            console.log("Spring");
                    break;
            case 6 :
            case 7:
            case 8:
             console.log("Summer");
                     break;
                
             case 9 :
             case 10:
             case 11:
             console.log("Fall");
                      break;
                default :
             console.log("Invalid Month");
                      break;
    }
}

logSeason(4);

//Question No 117...

function evaluateGrade(grade : string): void{
    switch (grade){
        case "A" :
        console.log("Excellent");
        break ;
        case "B" :
        console.log("Good");
        break ;
        case "C" :
        console.log("Fair");
         break ;
         case "D" :
            console.log("Poor");
            break ;
         case "F" :
            console.log("Fail");

         default:
           console.log("Invalid Grade");
           break;

    }
}
evaluateGrade("B");

//Day 40..
//Question No 118...

for(let i =1; i <= 10; i++){
    console.log(i);
}
//Question No 119...
let count: number = 0;

while(count < 5){
    console.log("Hello World");
    count ++;
}

//Question No 120...

const favoriteMovies : string[] = [
    "Inception",
    "The Matrix",
    "Intersteller",
    "The Prestige",
];

for (const movie of favoriteMovies){
    console.log(movie);
}
//Day 41...
//Question No 121...

for (let i = 1; i <= 10 ; i++){
    if (i === 5){
        continue;
    }
    console.log(i);
}

//Question No 122..

let counter : number = 10;

while(counter > 0){
    if(counter === 5){
        break;
    }
    console.log(counter);
    counter--;
}

//Question No 123...

function logUnitVowel(str : string): void {
    const vowels = "aeiouAEIOU";

    for(const char of str){
        if(vowels.includes(char)){
            console.log("First Vowel Found : " + char);
            break;
        }
        console.log(char);
    }
}

logUnitVowel("syzygy");

//Day No 42...
//Question No 124...

const person ={
    name : "Alice",
    getName : function (){
        return this.name;
    },

};
console.log(person.getName());

//Question No 125...

const rectangle = {
    length : 4,
    width : 5,

    calculateArea : function () {
        return this.length * this.width;
    },
};

console.log(rectangle.calculateArea());

//Question No 126...

const myObject = {
    property : "Value",

    outerMethod : function () {
        console.log(this.property);

        const innerMethod = () => {
            console.log(this.property);
        };

        innerMethod();
    },
};

myObject.outerMethod();