// callbacks - a function passed inside of another function which
            // is invoked inside the outer function to complete some
            // kind of routine or action

// const myDiv = document.createElement("div");
// myDiv.addEventListener("click", function(){
//     //Do something
// });

// this is a synchronous function, meaning it happens right away, BEFORE THE FUNCTION RETURNS

function callback(val){
    console.log(val);
}


let fruits = ["banana", "apple", "pear"];
fruits.forEach(callback);
console.log("Done");

// ***callbacks are just a way to store things to do at a later time***
function orderPizza(callback){
    setTimeout(() => {
        const pizza = `pizza`
        callback(pizza)
    }, 2000)
}

function pizzaReady(pizza){
    console.log(`Eat the ${pizza}`)
}

orderPizza(pizzaReady);

function toggleDropdown(callback) {
    console.log('Dropdown opened')
    const dropStatus = true;
    callback(dropStatus);  
};

function selectCity(dropStatus, callback) {
    console.log(`City selected. Drop status is ${dropStatus}.`);
    callback();
};

toggleDropdown(selectCity);


// PROMISES

// a promise is an object that might produce a value at some point in the future

// syntax

let p = new Promise((resolve, reject) => {
    let a = 1 + 1

    if (a === 2){
        resolve('Success');
    } else {
        reject('Failed');
    }
})

// interacting with promises
p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
}); //then runs on resolve