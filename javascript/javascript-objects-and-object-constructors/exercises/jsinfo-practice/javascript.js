// let animal = {
//     eats: true,
//     walk() {
//         alert("Animal walk");
//     }
// };

// let rabbit = {
//     jumps: true
// };

// let longEar = {
//     earLength: 10
// };

// Object.setPrototypeOf(rabbit, animal);
// Object.setPrototypeOf(longEar, rabbit);

// // the for in loops over inherited properties as well
// for(let prop in rabbit) {
// // you can use obj.hasOwnProperty(key) to only return properties directly inheriting to the object you're calling
// let isOwn = rabbit.hasOwnProperty(prop);

//     if (isOwn) {
//         alert(`Own: ${prop}`); // Own: jumps
//     } else {
//         alert(`Inherited: ${prop}` ) // Inherited: eats
//     }

// };

// //exercise 1

// let animal1 = {
//     jumps: null
// };

// let frog = {
//     jumps: true
// };

// Object.setPrototypeOf(frog, animal);

// alert(rabbit.jumps); //true
// delete rabbit.jumps;

// alert(rabbit.jumps); //null
// delete animal.jumps

// alert(rabbit.jumps) //undefined

// //exercise 2 - searching algorithm

// let head = {
//     glases: 1
// };

// let table = {
//     pen: 3
// };

// let bed = {
//     sheet: 1,
//     pillow: 2
// };

// let pockets = {
//     money: 2000
// };

// Object.setPrototypeOf(pockets, bed);
// Object.setPrototypeOf(bed, table);
// Object.setPrototypeOf(table, head);

//exercise 3 - where does it write

// let animal2 = {
//     eat() {
//         this.full = true
//     }
// };

// let rabbit1 = {};

// Object.setPrototypeOf(rabbit1, animal2);

// rabbit1.eat(); //which object receives the full property? animal or rabbit?

//exercise 4 - why are both hamsters full?
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach = [food]
    }
};

let speedy = {};
let lazy = {};

Object.setPrototypeOf(speedy, hamster);
Object.setPrototypeOf(lazy, hamster);

speedy.eat("apple");
alert(speedy.stomach); //apple

