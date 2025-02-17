//character creator class

class Player {
    constructor(name, health){
        this.name = name;
        this.health = health;
    }

    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} now has ${this.health} health.`);
    }
}

//extend to different character archetypes

class Warrior extends Player {
    constructor(name, health, armor){
        super(name, health);
        this.armor = armor;
    }

    takeDamage(amount) {
        const reducedDamage = amount - this.armor;
        super.takeDamage(reducedDamage > 0 ? reducedDamage : 0)
    }
}

class Enemy extends Player {
    constructor(name, health, attackPower){
        super(name, health,);
        this.attackPower = attackPower;
    }

    attack() {

    }
}

const hero = new Warrior("Thor", 100, 10);
hero.takeDamage(30); // Damage is reduced by armor