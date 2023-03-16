class Spaceship {
    constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    }

    
    attack(target) {
        const hitChance = Math.random();
        if (hitChance <= this.accuracy) {
        target.hull -= this.firepower;
        console.log(`Attack hit! ${this.constructor.name} did ${this.firepower} damage to ${target.constructor.name}.`);
        if (target.hull <= 0) {
        console.log(`${target.constructor.name} destroyed!`);
        } else {
        console.log(`${target.constructor.name} hull remaining: ${target.hull}.`);
        this.attack(target);
        }
        } else {
        console.log(`${this.constructor.name} missed!`);
        target.attack(this);
        }
        }
        }
        
        class AlienSpaceship extends Spaceship {
        constructor() {
        const hull = Math.floor(Math.random() * 4) + 3;
        const firepower = Math.floor(Math.random() * 3) + 2;
        const accuracy = (Math.random() * 0.2) + 0.6;
        super(hull, firepower, accuracy);
        }
        }
        
        const USS_Assembly = new Spaceship(20, 5, 0.7);
        const alienFleet = [new AlienSpaceship(), new AlienSpaceship(), new AlienSpaceship(), new AlienSpaceship(), new AlienSpaceship(), new AlienSpaceship()];
        let currentAlienShip = alienFleet[0];
        
        USS_Assembly.attack(currentAlienShip);
