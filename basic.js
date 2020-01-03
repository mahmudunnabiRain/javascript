// comment
let message = "Hello Boss"; //variable declaration
console.log(message); //print

const age = 23; //locked variable

let person = {  //object
    name: "Rain",
    age: 23,
    showDetail: function(){
        //declare function in object
    }
};
console.log(person); //print object
console.log("name: "+person.name+"\nage: "+person['age']); //access object data

let things = ['cat', person, 10]; //array declaration
console.log(things); //print array
console.log(things[2]); //access array index

function greet(name){ //implement function
    console.log("Hello "+name);
}
greet("Tony"); //calling a function

function squre(value){ //implementing function with return
    return value*value;
}
let result = squre(2); //getting value from function
console.log(result);
