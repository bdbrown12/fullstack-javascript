// function Book() {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.readStatus = readStatus;
//     return this.info = () => console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.readStatus}`)
// }

// const book1 = new Book();

// console.log(book1);

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(`Hello I'm ${this.name}!`)
}

function Player(name,marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function() {
    console.log(`My marker is ${this.marker}!`);
}

Object.getPrototypeOf(Player.prototype); //returns Object.prototype

// Now make 'Player' objects inherit from 'Person'
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

const player1 = new Player('Steve', 'X');
const player2 = new Player('John', 'O');

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();
