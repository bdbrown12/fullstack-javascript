//Deletgation / Differential Inheritance

class Greeter {
    constructor (name) {
        this.name = name || 'John Doe';
    }
    hello () {
        return `Hello, my name is ${this.name}`
    }
}

const george = new Greeter('George');

let msg = george.hello();

console.log(msg); //Hello, my name is George

//you can use factory functions using Object.create
const proto = {
    hello () {
        return `Hello, my name is ${ this.name }`;
    }
};

const greeter = (name) => Object.assign(Object.create(proto), {
    name
});

const john = greeter('John');

msg = john.hello();

console.log(msg);

//prototypal delegation in js

function foo(){}

Object.getPrototypeOf(foo) === Function.prototype; // true
Object.getPrototypeOf(Function.prototype) === Object.prototype; // true
Object.getPrototypeOf(Object.prototype); // null

const recipe = { name: "Garlic Naan" };

const recipeBook = {
    getRecipeName() {
        console.log(this.name)
    },
};

//Set 'recipeBook' as the prototype of 'recipe'
Object.setPrototypeOf(recipe, recipeBook)

const order = {
    orderRecipe() {
        console.log(`${this.name} ordered!`);
    },
};

// Set 'recipeBook' as the prototype of 'recipe'
Object.setPrototypeOf(recipeBook, order);

// Prototypal delegation in action
recipe.getRecipeName(); //prints 'Garlic Naan'
recipe.orderRecipe();
recipe.hasOwnProperty("name");

// Constructor functions and the new keyword
function Recipe(name){
    this.name;
}

Recipe.hasOwnProperty("prototype");
Recipe.prototype.constructor === Recipe;