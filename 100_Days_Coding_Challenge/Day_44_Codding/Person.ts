export class Person {

    name : string ;
    constructor(name : string){
        this.name = name;
    }
    greet(){
        console.log("Hello , My Name is " + this.name);
    }
}