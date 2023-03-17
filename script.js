window.addEventListener('load', function() {
    //1.1
class Spaceship {
    constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    }
} 
//1.2 (and method to attack)
    class HumanShip extends Spaceship {
        constructor() {
          super(20, 5, 0.7);
        }
        attack(target) {
            if (Math.random() < this.accuracy) {
              target.hull -= this.firepower;
              console.log(`You hit the alien ship! Its hull is now ${target.hull}.`);
            } else {
              console.log(`Your attack missed!`);
            }
          }
      }
      
      const USS_Assembly = new HumanShip();
//1.3
    class AlienSpaceship extends Spaceship {
        constructor() {
            super(
                Math.floor(Math.random() * 4) + 3, 
                Math.floor(Math.random() * 3) + 2, 
                (Math.floor(Math.random() * 3) + 6) / 10);
        }
    }

      const alienShip = new AlienSpaceship();

 //1.4

 
 USS_Assembly.attack(alienShip);

 const startAttack = window.prompt("Do you want to start the attack? (yes or no)");
 if (startAttack === "yes") {
    while (alienShip.hull > 0 && USS_Assembly.hull > 0) {
      console.log("USS Assembly attacks the alien ship");
      window.alert("USS Assembly attacks the alien ship");
      if (USS_Assembly.attack(alienShip)) {
        console.log(`The alien ship's hull is ${alienShip.hull}`);
      } else {
        console.log("The attack missed");
      }
  
      if (alienShip.hull > 0 && USS_Assembly.hull > 0) {
        console.log("Alien ship attacks the USS Assembly");
        if (alienShip.attack(USS_Assembly)) {
          console.log(`The USS Assembly's hull is ${USS_Assembly.hull}`);
        } else {
          console.log("The attack missed");
        }
      }
    }

    // Output the result of the battle
    if (USS_Assembly.hull <= 0) {
      console.log("Game over. The USS Assembly was destroyed.");
    } else {
      console.log("Congratulations! You have destroyed the alien ship.");
    }
  } else {
    // If the user does not confirm, end the attack
    console.log("Attack aborted.");
  }
});
