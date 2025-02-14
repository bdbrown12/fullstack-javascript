function createGreeting(greeting = "") {
    const myGreet = greeting.toUpperCase();

    return function(name){
        return `${myGreet} ${name}`;
    };
}

const sayHello = createGreeting("Hello");
const sayHey = createGreeting("");
console.log(sayHello('wes'));
console.log(sayHello('kait'));
console.log(sayHey('kait'));

//private variables

function createGame(gameName) {
    let score = 0;
    
    function win(){
        score++;
        return `Game: ${gameName} | Score: ${score}`;
    }

    return {
        win,
    }
}

const hockey = createGame('Hockey');
const soccer = createGame('Soccer');