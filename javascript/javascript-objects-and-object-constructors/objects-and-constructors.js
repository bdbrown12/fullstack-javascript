// constructor objects

// this.title refers to the property of the Book and title refers to the parameter

// function Book(title, author, pages, hasRead) {
//     console.log(this);
//     this.title = title;
//     this.author = author; 
//     this.pages = pages;
//     this.hasRead = hasRead;

//     this.info = function() {
//         if (this.hasRead === false) {
//             this.hasRead = 'not read yet';
//         }
//         else{
//             this.hasRead = 'read';
//         };
//         return `${this.title} by ${this.author}, ${this.pages}, ${hasRead}`;
//     }

//     this.info();
// }

// const book1 = new Book('Harry Potter', "JK Rowling", 123, false);

// prototypes

// all objects in javascript hava prototypes. Protype is another object that the original object inherits from

function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.sayHello = function sayName(){
        return `Hello ${this.name}`;
    };

    this.sayHello();
}

// how to define a property or method on the prototype
Player.prototype.sayHello = function () {
    console.log("Hello, I'm a player!");
}

const player1 = new Player('Kaleb', 'X');
const player2 = new Player('Emily', 'O');

player1.sayHello(); // logs
player2.sayHello();


Object.getPrototypeOf(Player) === player1.prototype; //returns true because

// prototypal inheritance
Object.getPrototypeOf(Player.prototype) === Object.prototype; //returns true


// here we are able to use the valueOf method because Player.prototype inherts from Object.prototype
player1.valueOf();

player1.hasOwnProperty('valueOf'); // false
Object.prototype.hasOwnProperty('valueOf');

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`Hello I'm ${this.name}`);
}

Player.prototype.getMarker = function () {
    console.log(`My marker is ${this.marker}`)
}

// make player objects inherit from person
Object.getPrototypeOf(Player.prototype); //returns Object.prototype
Object.setPrototypeOf(Player.prototype, Person.prototype);

Object.getPrototypeOf(Player.prototype) //returns Person.prototype

const person1 = new Person('John');

