//Author: Nathanael Fonken 
//Title: Burger Patrol 
//7/23/2021
//It took 2 days or 12~ hours to complete the project
//Attempted points:
//  Finishing the Tutorial: an automatic 20 points.
//  Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
//  Implement mouse control for player movement and mouse click to fire (20)
//  Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (20)
//  Create and implement a new weapon (w/ new behavior and graphics) (20)

//Note: I created an animation spritesheet for the spaceships dying, you can still see it even if it's obscured a bit by the particles


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyDOWN;
let twoplayer = false;
let activep = false;
let timer = 0;

//let buttonsPressed = MouseEvent.buttons
//console.log(buttonsPressed)

