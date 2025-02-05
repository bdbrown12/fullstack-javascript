let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};

let rabbit = {
    jumps: true
};

let longEar = {
    earLength: 10
};

Object.setPrototypeOf(rabbit, animal);
Object.setPrototypeOf(longEar, rabbit);