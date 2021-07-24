class Freezegun extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);      
        this.sfxFreezegun = scene.sound.add('sfx_freezegun'); 
        this.runaway_x = 800
        this.runaway_y = 800
        this.firing = false
        
    
    }

    create (){
        game.input.mouse.capture = true;
        
    }

    update() {
        console.log("test");







    }



    
}