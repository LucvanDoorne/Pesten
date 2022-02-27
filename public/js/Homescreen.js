class Homescreen extends Phaser.Scene {
    constructor() {
        super({key:"Homescreen"})
    }


    
    preload() {
        this.load.image('background', 'assets/Background.jpg')
        this.load.image('Arrow', 'assets/Arrow.png')
        this.load.spritesheet('button', 'assets/button.png', {frameWidth: 860, frameHeight: 378})
    }
    
    create (){
        var self = this
        this.socket = io()
        this.socket.on('currentPlayers', function (players) {
            Object.keys(players).forEach(function (id) {
                if (players[id].playerId === self.socket.id) {
                    addPlayer(self, players[id])
                } else {
                    addOtherPlayers(self, players[id])
                }
                aantalSpelers++
            })
        })
        this.socket.on('newPlayer', function (playerInfo) {
            addOtherPlayers(self, playerInfo)
            aantalSpelers++
        })

        this.socket.on('disconnect', function (playerId) {
            self.otherPlayers.getChildren().forEach(function (otherPlayer) {
                if (playerId === otherPlayer.playerId) {
                    otherPlayer.destroy()
                    aantalSpelers = aantalSpelers - 1
                }
            })
        })


        var pointer = this.input.activePointer
        //achtergrond
        var background = this.add.image(640,360,'background')
        background.scale = 0.34
        //text
        var SpelersText = this.add.text(150, 200, 'Amount of players:', { font:"40px Impact"} )
        var aantalSpelersText = this.add.text(489, 203, aantalSpelers / 2,  { font:"40px Impact"} )
        //arrowup
        var arrowUp = this.add.sprite(500, 178, 'Arrow')
        arrowUp.scale = 0.07
        arrowUp.rotation = -1.57
        arrowUp.setInteractive()
        /*arrowUp.on('pointerdown', function(event) {
            if (pointer.leftButtonDown() && aantalSpelers < 8){
            aantalSpelers++
            aantalSpelersText.text = aantalSpelers
            }
        })*/
        
        //arrowdown
        var arrowDown = this.add.sprite(500, 275, 'Arrow')
        arrowDown.scale = 0.07
        arrowDown.rotation = 1.57
        arrowDown.setInteractive()
        /*arrowDown.on('pointerdown', function(event) {
            if (pointer.leftButtonDown() && aantalSpelers > 0){
            aantalSpelers--
            aantalSpelersText.text = aantalSpelers
            }
        })*/

        var buttonStart = this.add.sprite(640, 450, 'button').setInteractive()
        buttonStart.scale = 0.5
        var startText = this.add.text(490, 430, 'START GAME', {font: '45px Arial'})
        buttonStart.on('pointerdown', function(event) {
            if (pointer.leftButtonDown()){
                buttonStart.setFrame(1)
            }
        })
        buttonStart.on('pointerup', function(event) {
            if (pointer.leftButtonReleased()){
                buttonStart.setFrame(0)
                this.scene.start("Game")
            }
        }, this)
        buttonStart.on('pointerout', function(event) {
            buttonStart.setFrame(0)
        })

        aantalSpelersText2 = this.add.text(700, 200, 'amount of players connected: ' + aantalSpelers, {font: '25px Arial'})

        //var tabelSpelers = this.add.grid(900, 300, 400, 128, 64, 64, 0x00b9f2)
        
    }
    
    update(){
        aantalSpelersText2.destroy(true)
        aantalSpelersText2 = this.add.text(700, 200, 'amount of players connected: ' + aantalSpelers, {font: '25px Arial'})
    }

}
var aantalSpelersText2
var aantalSpelers = 0

function addPlayer(self, playerInfo) {
    /*for (var i = 0; i < decks[spelerNummer - 1].length; i++) {
       // self.deck1.create(640 - decks[spelerNummer - 1].length*20 + 20 + i*40, 600, decks[spelerNummer - 1][i]['kaart'])
    }*/
}

function addOtherPlayers(self, playerInfo) {
    
}