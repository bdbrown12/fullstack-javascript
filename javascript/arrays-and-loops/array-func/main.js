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






