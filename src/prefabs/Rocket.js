
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); 
        this.isFiring = false;   
        this.moveSpeed = 2     
        this.sfxRocket = scene.sound.add('sfx_rocket'); 
        
    }
    

    create (){
        game.input.mouse.capture = true;
        
    }

    update() {
        
        
        // left/right movement
        if(!this.isFiring) {
            this.x = game.input.mousePointer.x;
        }
        // fire button
        if(game.input.activePointer.isDown && !this.isFiring && !game.input.activePointer.button) {
            
            this.isFiring = true;
            this.sfxRocket.play();
            //this.sfxRocket.play();
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
            
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }



}

