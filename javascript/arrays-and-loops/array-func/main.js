const words = ['spray' ,'elite', 'exuberant', 'destruction', 'present'];

//if the callback function returns a truthy value it will stay in the array. It will not be present if not
const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected ouput : Array ['exuberant', 'destruction', 'present']

// now if i wanted to retrieve the values in the array what would i do?
result.forEach((element, index, array) => {
    console.log(array[index]);
});

//the map method creates a new array from the one we start with
const fruits = ['bananas', 'apples', 'mangoes', 'pears', 'oragnes'];
const upperCaseFruits = fruits.map((element) => element.toUpperCase());
console.log(upperCaseFruits);

const friends = ['Kaleb', 'John', 'Emily', 'Kate', 'Karson'];
const newFriends = friends
    .filter((element) => element.startsWith('E'))
    .map((element) => element.toUpperCase());

console.log(newFriends);

//fizzbuzz using filter - fizzbuzz isn't a good example to use filter because it would 
// make a shallow copy at each phase of initalization

//here are some ways that you can initalize the length of an array on creation
// console.log(Array.apply(null, Array(5)).map(function (x,i) { return i; }));
// const arrayFrom = Array.from('abcde');
// const arrayX = Array.from('x'.repeat(5));
// const arrayCount = Array.from({length: 101}, (v,i) => i)
// console.log(arrayCount);

//filter array practice
let numbers = [1,2,3,4,5,6,7,8,9,10]

//if callbackfunction returns true value is accepted in new array
const evenNum = numbers.filter((x) => {
    if (x % 2 !== 0){
        return false;
    } else {
        return true;
    }
});

console.log(evenNum);

// reduce - runs a function on each element in an array to reduce the array to a single value
// most commonly used on numbers

let sum = numbers.reduce((total, value) => {
    return value += total;
});

console.log(sum);

// some - iterates over a method to see if at least 1 elements meets the condition
// if it does it returns true, if not it returns false

let higherThanFive = numbers.some((element) => {
    return element > 5;
})

console.log(higherThanFive);

//search for a name given user input using the some iterator

//ask the user for a name

let name = ['John', 'Jacob', 'Kiki'];

const userSearch = 'John';

const found = name.some((name) => userSearch === name);

if (found) // this function should check if userSearch is equal to name
{
    console.log(`${userSearch} found in db`);
} else {
    console.log(`${userSearch} not found in db`);
}

// every - similar to the some method, however, every method needs to return true for it to return true

let games = [{game: 'Game1', publishDate: 1996}, {game: 'Game2', publishDate: 1997}];

const published1990 = games.every(game => game.publishDate >= 1990 && game.publishDate < 2000);

console.log(published1990) //returns true because all games have a publishDate of 1990 or later

// find - iterates over an array to find a value. if it finds the value
// it returns the value. if it doesn't it returns undefined

let findFriend = friends.find((friend) => {
    return friend === "Kaleb";
});

console.log(findFriend);

//findIndex - returns the index position of the value instead of the value
// returns -1 if the value cannot be found
let findIndexFriend = friends.findIndex((index) => {
    return index === "Kaleb";
});

console.log(findIndexFriend);

//practice problems

const moreFruits = ['apple', 'banana', 'orange']

// loop through array using for each, alert each item including the index number
moreFruits.forEach((fruit, index) => {
    console.log(`Index: ${index} | Fruit: ${fruit}`)
})

// create a new array that takes the fruits and sets them all to uppercase

let upperFruits = moreFruits.map((fruit) => {
    return fruit.toUpperCase();
})

console.log(upperFruits);

// check which fruit contains more than 3 letters - log the boolean result
let moreThanThreeLetters = moreFruits.every(value => value.length > 3)

console.log(moreThanThreeLetters);

