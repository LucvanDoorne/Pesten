//const { Phaser } = require("./phaser");

class Homescreen extends Phaser.Scene {
    constructor() {
        super({key:"Homescreen"})
    }


    
    preload() {
        this.load.image('background', 'assets/Background.jpg')
        this.load.image('Arrow', 'assets/Arrow.png')
    }
    
    create (){
        var pointer = this.input.activePointer
        //achtergrond
        var background = this.add.image(640,360,'background')
        background.scale = 0.34
        //text
        var SpelersText = this.add.text(150, 200, 'Amount of players:', { font:"40px Impact"} )
        var aantalSpelers = 0
        var aantalSpelersText = this.add.text(489, 203, aantalSpelers,  { font:"40px Impact"} )
        //arrowup
        var arrowUp = this.add.sprite(500, 178, 'Arrow')
        arrowUp.scale = 0.07
        arrowUp.rotation = -1.57
        arrowUp.setInteractive()
        arrowUp.on('pointerdown', function(event) {
            if (pointer.leftButtonDown() && aantalSpelers < 8){
            aantalSpelers++
            aantalSpelersText.text = aantalSpelers
            }
        })
        
        //arrowdown
        var arrowDown = this.add.sprite(500, 275, 'Arrow')
        arrowDown.scale = 0.07
        arrowDown.rotation = 1.57
        arrowDown.setInteractive()
        arrowDown.on('pointerdown', function(event) {
            if (pointer.leftButtonDown() && aantalSpelers > 0){
            aantalSpelers--
            aantalSpelersText.text = aantalSpelers
            }
        })

        //var tabelSpelers = this.add.grid(900, 300, 400, 128, 64, 64, 0x00b9f2)
        
    }
    
    update(){
       
    }

}

