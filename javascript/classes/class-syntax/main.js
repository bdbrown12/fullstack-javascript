//basic syntax

class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }

}

// Usage:
let user = new User("John");
user.sayHi();

// Class fields

class Person {
    name = "John";

    sayHi() {
        alert(`Hello ${this.name}!`);
    }
}

new Person().sayHi();
