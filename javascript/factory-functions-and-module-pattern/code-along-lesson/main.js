function makeAdding (firstNumber) {
    //
    const first = firstNumber;
    return function resulting (secondNumber) {
        const second = secondNumber;
        return first + second;
    }
}

//
const add5 = makeAdding(5);
console.log(makeAdding(5))
console.log(add5(2));


//factory functions
const User = function(name) {
    this.name = name
    this.discordName = "@" + name
}

const constructorUser = new User("john");
console.log(constructorUser);

// hey, this is a constructor - 
// then this can be refactored into a factory!

function createUser (name) {
    const discordName = "@" + name;
    return { name, discordName }
}

// and that's very similar, except since it's just a function,
// we don't need a new keyword

const factoryUser = createUser("kaleb");


// Destructing
// When you have an object, you can extract a property of an object into a 
// variable of the same name, or any named variable for an array.
// const obj = { a: 1, b: 2 };
// const { a, b } = obj;

const array = [1,2,3,4,5];
const [zerothEle, firstEle] = array;

// Destructing the createUser function from above

console.log(typeof factoryUser); //because this is an object we can extract properties
const {name, discordName} = factoryUser; //by setting them equal
console.log(`Name: ${name} has a type of: ${typeof name}`, `\nDiscord Name: ${discordName} has a type of: ${typeof discordName}`);

const obj1 = {a: 1, b: {c:2}};
const {
    a,
    b: {c:d},
} = obj1;




