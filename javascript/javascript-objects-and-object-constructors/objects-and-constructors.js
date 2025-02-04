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
    this.sayHello = function (){
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