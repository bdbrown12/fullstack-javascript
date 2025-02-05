// initialize a constructor function for a new hero
function Hero(name, level){
    this.name = name;
    this.level = level;
}

// initialize warrior constructor
function Warrior(name, level, weapon) {
    //chain constructor with call
    Hero.call(this, name, level);

    //Add a new weapon property
    this.weapon = weapon;
}

// initialize a healer constructor
function Healer(name, level, spell){

    //chain constructor with call
    Hero.call(this, name, level);

    this.spell = spell;
}

//Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.greet = function () {
    return `${this.name} says hello`;
}

Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}`;
}

Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}`;
}

const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');