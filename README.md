# W5D4-space-wars: Today, you will be using your knowledge of OOP, loops, and functions to build a rudimentary space battle game.
The game will be programmed for, and played using window.prompt to get input from the user and buttons in the browser, you can also use console.log and window.alert. This is your first mini-project. You should not style the page until you first get all the functionality down.

SKETCH from hints
1 STEP

✅ 1.1 Make A Ship Class: a class called Spaceship with properties hull, firepower, and accuracy.

✅ 1.2 Make the USS_Assembly object. It will be Human Ship sub-class and an instance of the USS Assembly spaceship with hull 20, firepower 5, and accuracy .7.

✅ 1.3 Make a single alien ship object. Make an Alien Ship sub-class: a subclass called AlienSpaceship that inherits from Spaceship and randomizes its properties using Math.random() method.

    this.hull = Math.floor(Math.random() * 4) + 3;
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;

✅ 1.4 Simulate a battle between your ship and a single alien ship first: Make a method for the USS Assembly that will attack a given target. The target can be an input to the method. Run the method and pass it the alien ship. 

✅  Make it so the method reduces the target's hull by the firepower of the USS Assembly.

    Example use of accuracy to determine a hit:
      if (Math.random() < alien[0].accuracy) {
	      console.log('You have been hit!');
      }
    
2 STEP - there is no need in this step as health if are checked in attack method

✅  2.1 Make a game object

✅  2.2 Make a method in the game object that will run a 'check win' for the health of the alien(s) and/or the USS Assembly. If the hull is 0 or less, display a message that the ship went kabloo-ey.

✅  2.3 Make it so the alien will only be hit if a Math.random call is below the accuracy threshold.

✅  2.4 Make a method for the alien ship to attack a target.

✅  2.5 At a status console log for the end of the round.

🔴  PROBLEM: If you make the alien ship go kabloo-ey, then the alien should not then be able to attack you. Fix this.

✅  Make it so the attacks will keep occuring until someone's hull is at 0. Isolate what it is that you want to repeat.

3 STEP

✅  Make many alien ships with a Class. Make each object slightly different . . .

✅  Hull can be a random number between 3 and 6, firepower between 2 and 4, accuracy between 0.6 and 0.8.

✅  Make a loop that calls the Class and generates alien ships. Push those constructed objects into a predefined array. Start with 6 ships (the loop should run 6 times).

✅  Try out the game with the first alien ship in the array.

✅  Run the battle with all ships in turn.

✅  Move functions into the game object.

🎉  Move on to the bonuses  🎉.







