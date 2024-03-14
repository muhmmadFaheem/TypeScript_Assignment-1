//100_Days_of_Codding_Challenge....
//Question No 29....

let favorite_fruits : string[] = ["apples" , "bananas" , "cherries" , "mangoes"];

if(favorite_fruits.includes("bananas")){

    console.log(" You really like bananas!");
}

if(favorite_fruits.includes("apples")){

    console.log(" You really like apples!");
}

if(favorite_fruits.includes("cherries")){

    console.log(" You really like cherries!");
}

if(favorite_fruits.includes("mangoes")){

    console.log(" You really like mangoes!");
}

//Question No 30...
let usernames : string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach(username=> {

    if (username == "admin"){
        console.log("Hello admin, would you like to see a status report?");
    }
    else{

        console.log('Hello ' + username + ', thank you for logging in again');
    }

});


//Question No 31...

let usernames1 : string[] = [];

if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
else{

};

//Questio No 32..

let current_users : string[] = ["user1","user2","user3","user4","user5"];

let new_users : string[] = ["User1","User6", "user7", "admin", "User9"];

new_users.forEach(newUser =>{
    if (current_users.some(currentUser => 
        currentUser.toLowerCase()===newUser.toLowerCase()
    )){
        console.log(newUser + " will need to enter a new username.");
    }
    else{
        console.log(newUser + " is available");
    }
});

//Question 33...
let numbers : number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9,22];
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1){
        suffix = "st";
    }
    else if(number ===2){
        suffix = "nd";
    }
    else if(number ===3){
        suffix ==="rd";
    }
    console.log(number + suffix);
})


//Question N0 34...
let pizzas : string[] = ["Pepperoni", "Hawaiian", "Margherita"];

pizzas.forEach(pizza => {
    console.log("I Like " + pizza + "pizza!.");
});
console.log("I really love pizza!");

//Question No 35...

let animals : string[] = ["dog", "cat", "rabbit"];

animals.forEach(animal => {
    console.log("A " + animal + "would make a great pet.");
});
console.log("Any of these animals would make a great pet!.");

//Question No 36...
function make_shirt(size : string, message:string){
    console.log("Making a " + size + "t_shirt with the message " + message + " printed on it.");
}
make_shirt("medium","Code is Life");

//Question No 37...

function make_shirt1(size1 : string = "large", message1 : string = "I love TypeScript"){

    console.log("Making a " + size1 + "t_shirt with the message " + message1 + "printed on it.");
}

make_shirt1();
//Default message1.. medium size
make_shirt1("medium");

//for small size..
make_shirt1("small ,Dive into Coding");

//Question No 38...
function describe_city(city : string, country : string = "Pakistan"){

    console.log(city + " is in " + country);
    
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");

//Question No 39...

function city_country(city1 : string, country1 : string): string{
    return  city1 ,country1;
}
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Tokyo","Japan"));
console.log(city_country("Paris","France"));

//Question 40...

function make_album(artist : string, title : string, tracks? : number){
    let album = { artist ,title};
    if (tracks){
        album[tracks] = tracks;

    }
    return album;
}
console.log(make_album("Artist One","The First Album"));
console.log(make_album("Artist Two","The Second Album"));
console.log(make_album("Artist Three","The Third Album",12));

//Question No 41...
let magicians : string [] = ["Alice", "David", "Chris"];
function show_magicians(magicians : string[]){
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);

//Question No 42....

function make_great(magicians :string[] ){
    for(let i = 0;i < magicians.length;i ++){
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians);

show_magicians(magicians);