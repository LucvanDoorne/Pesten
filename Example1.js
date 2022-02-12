//const { Phaser } = require("./phaser");

class Example1 extends Phaser.Scene {
    constructor() {
        super({key:"Example1"})
    }
    preload(){
        this.load.image('background', 'assets/Background.jpg')
        this.load.image('klaver2Zwart', 'assets/playing_cards/black/Clovers_2_black.png')
    }
    
    create (){
        const background = this.add.image(640,360,'background')
        background.scale = 2
        const klaver2Zwart = this.add.image(640, 600,'klaver2Zwart')
        klaver2Zwart.scale = 0.2

    }

   

    update(){
        
    }
}