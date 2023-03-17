window.addEventListener('load', function() { //to let prompt be appeared after page is loaded
    //1.1
class Spaceship {
    constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    }
} 
//1.2 (add method to attack)
    class HumanShip extends Spaceship {
        constructor() {
          super(20, 5, 0.7);
        }
        attack(target) {
            if (Math.random() < this.accuracy) {
              target.hull -= this.firepower;
              console.log(`You hit the alien ship! Its hull is now ${target.hull}.`);
              window.alert(`You hit the alien ship! Its hull is now ${target.hull}.`);
            } else {
              console.log(`USS Assembly attack missed!`);
              window.alert(`USS Assembly attack missed!`);
            }
          }
      }
      
      const USS_Assembly = new HumanShip();

//1.3 (2.4 add method to attack)
    class AlienSpaceship extends Spaceship {
            constructor() {super(
                Math.floor(Math.random() * 4) + 3, 
                Math.floor(Math.random() * 3) + 2, 
                (Math.floor(Math.random() * 3) + 6) / 10);
        }
        alienAttack(target) {
            if (Math.random() < this.accuracy) {
              target.hull -= this.firepower;
              console.log(`Alien hit your ship! Its hull is now ${target.hull}.`);
              window.alert(`Alien hit your ship! Its hull is now ${target.hull}.`);
            } else {
              console.log(`Alien attack missed!`);
              window.alert(`Alien attack missed!`);
            }
          }
    }

// 3.1-3.3
      const alienShips = [];
      const numAlienShips = 5;
      for (i = 0; i < numAlienShips; i++) {
        alienShips.push(new AlienSpaceship());
      };
      
      
      
 //1.4

 
 const startAttack = window.prompt("Do you want to start the attack? (yes or no)");

 if (startAttack === "yes") {
    let numAlienShipsRemaining = alienShips.length;

    while (numAlienShipsRemaining > 0 && USS_Assembly.hull > 0) {

        for (let i = 0; i < alienShips.length; i++) {
            const currentAlienShip = alienShips[i];
                  
            while (currentAlienShip.hull > 0 && USS_Assembly.hull > 0) {
                console.log(`USS Assembly attacks alien ship${i+1}`);
                window.alert(`USS Assembly attacks alien ship${i+1}`);
                USS_Assembly.attack(currentAlienShip);

                if (currentAlienShip.hull > 0 && USS_Assembly.hull > 0) {
                    console.log(`Alien ship${i+1} attacks the USS Assembly`);
                    window.alert(`Alien ship${i+1} attacks the USS Assembly`);
                    currentAlienShip.alienAttack(USS_Assembly);
                    }
                }
            if (USS_Assembly.hull <= 0) {
                console.log("Game over. The USS Assembly was destroyed.");
                window.alert("Game over. The USS Assembly was destroyed.");
            } else {
                console.log(`Congratulations! You have destroyed the alien ship${i+1}.`);
                window.alert(`Congratulations! You have destroyed the alien ship${i+1}.`);
                numAlienShipsRemaining--;
            }
        }
    } 
    console.log("Congratulations! You have destroyed all the alien ships!");
    window.alert("Congratulations! You have destroyed all the alien ships!");
 } else {
    console.log("Attack aborted.");
    window.alert("Attack aborted.");
}
});
