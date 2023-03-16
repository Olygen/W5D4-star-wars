//1.1
class Spaceship {
    constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    }
} 
//1.2
    class HumanShip extends Spaceship {
        constructor() {
          super(20, 5, 0.7);
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

    
