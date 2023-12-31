//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/



let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

for (let key in person3) {
    console.log(`${key}: ${person3[key]}`);
}












//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.playing = false; 

    this.printInfo = () => {
        return `Name: ${this.name} \nAge: ${this.age}`;
    };
}

const isPlayingZelda = (person) => {
    if (person.playing) {
        return `${person.name} is playing Zelda`;
    } else {
        return `${person.name} isn't playing Zelda`;
    }
}

const person1 = new Person("Dez", 31);
console.log(person1.printInfo());
console.log(isPlayingZelda(person1));

const person2 = new Person("Chelsey", 32);
const person4 = new Person("Ruka", 10);










// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine 
    if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let text = "supecalifragilisticexpialidocious";
let length = text.length;

if (text.length >= 10) {
    console.log("Big Word")
} else {
    console.log("Small Number")
}














/* codewars
 This code does not execute properly. Try to figure out why.
 function multiply(a, b){
   a * b
 }
*/ 

const multiply = (a, b) => {
    return a * b;
  }


/*   Return the number (count) of vowels in the given string.

 We will consider a, e, i, o, u as vowels for this Kata (but not y).

 The input string will only consist of lower case letters and/or spaces.
*/
const getCount = str => (str.match(/[aeiou]/g) ||[]).length