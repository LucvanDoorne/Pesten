class Game extends Phaser.Scene {
    constructor() {
        super({key:"Game"})
    }

preload() {
    this.load.image('background', 'assets/Background.jpg')
    this.load.image('aas harten', 'assets/cards/wit/withartenA.png')
    this.load.image('2 harten', 'assets/cards/wit/witharten2.png')
    this.load.image('3 harten', 'assets/cards/wit/witharten3.png')
    this.load.image('4 harten', 'assets/cards/wit/witharten4.png')
    this.load.image('5 harten', 'assets/cards/wit/witharten5.png')
    this.load.image('6 harten', 'assets/cards/wit/witharten6.png')
    this.load.image('7 harten', 'assets/cards/wit/witharten7.png')
    this.load.image('8 harten', 'assets/cards/wit/witharten8.png')
    this.load.image('9 harten', 'assets/cards/wit/witharten9.png')
    this.load.image('10 harten', 'assets/cards/wit/witharten10.png')
    this.load.image('koning harten', 'assets/cards/wit/withartenK.png')
    this.load.image('koningin harten', 'assets/cards/wit/withartenQ.png')
    this.load.image('aas ruiten', 'assets/cards/wit/witruitenA.png')
    this.load.image('2 ruiten', 'assets/cards/wit/witruiten2.png')
    this.load.image('3 ruiten', 'assets/cards/wit/witruiten3.png')
    this.load.image('4 ruiten', 'assets/cards/wit/witruiten4.png')
    this.load.image('5 ruiten', 'assets/cards/wit/witruiten5.png')
    this.load.image('6 ruiten', 'assets/cards/wit/witruiten6.png')
    this.load.image('7 ruiten', 'assets/cards/wit/witruiten7.png')
    this.load.image('8 ruiten', 'assets/cards/wit/witruiten8.png')
    this.load.image('9 ruiten', 'assets/cards/wit/witruiten9.png')
    this.load.image('10 ruiten', 'assets/cards/wit/witruiten10.png')
    this.load.image('koning ruiten', 'assets/cards/wit/witruitenK.png')
    this.load.image('koningin ruiten', 'assets/cards/wit/witruitenQ.png')
    this.load.image('aas schoppen', 'assets/cards/wit/witschoppenA.png')
    this.load.image('2 schoppen', 'assets/cards/wit/witschoppen2.png')
    this.load.image('3 schoppen', 'assets/cards/wit/witschoppen3.png')
    this.load.image('4 schoppen', 'assets/cards/wit/witschoppen4.png')
    this.load.image('5 schoppen', 'assets/cards/wit/witschoppen5.png')
    this.load.image('6 schoppen', 'assets/cards/wit/witschoppen6.png')
    this.load.image('7 schoppen', 'assets/cards/wit/witschoppen7.png')
    this.load.image('8 schoppen', 'assets/cards/wit/witschoppen8.png')
    this.load.image('9 schoppen', 'assets/cards/wit/witschoppen9.png')
    this.load.image('10 schoppen', 'assets/cards/wit/witschoppen10.png')
    this.load.image('koning schoppen', 'assets/cards/wit/witschoppenK.png')
    this.load.image('koningin schoppen', 'assets/cards/wit/witschoppenQ.png')
    this.load.image('aas klaveren', 'assets/cards/wit/witklaverA.png')
    this.load.image('2 klaveren', 'assets/cards/wit/witklaver2.png')
    this.load.image('3 klaveren', 'assets/cards/wit/witklaver3.png')
    this.load.image('4 klaveren', 'assets/cards/wit/witklaver4.png')
    this.load.image('5 klaveren', 'assets/cards/wit/witklaver5.png')
    this.load.image('6 klaveren', 'assets/cards/wit/witklaver6.png')
    this.load.image('7 klaveren', 'assets/cards/wit/witklaver7.png')
    this.load.image('8 klaveren', 'assets/cards/wit/witklaver8.png')
    this.load.image('9 klaveren', 'assets/cards/wit/witklaver9.png')
    this.load.image('10 klaveren', 'assets/cards/wit/witklaver10.png')
    this.load.image('koning klaveren', 'assets/cards/wit/witklaverK.png')
    this.load.image('koningin klaveren', 'assets/cards/wit/witklaverQ.png')
    this.load.image('boer harten', 'assets/cards/wit/withartenJ.png')
    this.load.image('boer ruiten', 'assets/cards/wit/witruitenJ.png')
    this.load.image('boer schoppen', 'assets/cards/wit/witschoppenJ.png')
    this.load.image('boer klaveren', 'assets/cards/wit/witklaverJ.png')
    this.load.image('joker 1', 'assets/cards/wit/witjoker.png')
    this.load.image('joker 2', 'assets/cards/wit/witjoker2.png')
    this.load.image('Arrow', 'assets/arrow.png')
    this.load.image('Table', 'assets/table.png')
    this.load.image('gray-chair', 'assets/gray-chair.png')
    this.load.image('brown-chair', 'assets/brown-chair.png')
    this.load.image('backcard', 'assets/backcard.jpg')
    this.load.spritesheet('button', 'assets/button.png', {frameWidth: 860, frameHeight: 378})
    this.load.image('Beurt-richting', 'assets/Arrow2.png')
    this.load.spritesheet('chair', 'assets/chair.png', {frameWidth: 384, frameHeight: 393})
    this.load.image('Klaver', 'assets/klaver.png')
    this.load.image('Schop', 'assets/schop2.png')
    this.load.image('Hart', 'assets/hart.png')
    this.load.image('Ruit', 'assets/ruit.png')
    this.load.spritesheet('fullscreen', 'assets/fullscreen.png', { frameWidth: 64, frameHeight: 64 })

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
        })
    })
    this.socket.on('newPlayer', function (playerInfo) {
        addOtherPlayers(self, playerInfo)
    })

    this.socket.on('disconnect', function (playerId) {
        self.otherPlayers.getChildren().forEach(function (otherPlayer) {
            if (playerId === otherPlayer.playerId) {
                otherPlayer.destroy()
            }
        })
    })


    // zorgt ervoor dat ergens op geklikt kan worden
    var pointer = this.input.activePointer

    //maakt de achtergrond
    var background = this.add.image(640,360,'background')
    background.scale = 0.34

    // zorgt ervoor dat alles gemaakt wordt (zie de functies)
    this.updateCards()
    this.buttons()
    this.stoelen()
    
    //maakt de tafel
    var tafel = this.add.image(170, 170, 'Table')
    tafel.scale = 0.5
    tafel.depth = 3

    //maakt de pakstapel afbeelding
    backcard = this.add.image(730, 290, 'backcard')
    backcard.scale = 0.2

    //full screen button
    var fullscreen = this.add.image(1264, 16, 'fullscreen', 0).setOrigin(1, 0).setInteractive()
    fullscreen.on('pointerup', function(event) {
        if (this.scale.isFullscreen) {
            fullscreen.setFrame(0)
            this.scale.stopFullscreen()
        }else {
            fullscreen.setFrame(1)
            this.scale.startFullscreen()
        }
    }, this)
}

stoelen(){
    //zorgt ervoor dat eerst alles wordt vernietigd zodat het kan updaten en er geen dubbele stoelen ontstaan
    if (stoel1 != '') {
        stoel1.destroy(true)
        stoel2.destroy(true)
        stoel3.destroy(true)
        stoel4.destroy(true)
        aantalKaarten1.destroy(true)
        aantalKaarten2.destroy(true)
        aantalKaarten3.destroy(true)
        aantalKaarten4.destroy(true)
        speelrichtingImage.destroy(true)
    }
    //zorgt voor de pijl die de beurtrichting aangeeft
    speelrichtingImage = this.add.image(160, 370, 'Beurt-richting')
    speelrichtingImage.scale = 0.5
    speelrichtingImage.depth = 5
    if (spelrichting == 1){
        speelrichtingImage.flipX = false
        speelrichtingImage.rotation = 4.7
        speelrichtingImage.x = 160
    }else if (spelrichting == -1) {
        speelrichtingImage.rotation = 1.57
        speelrichtingImage.x = 177
        speelrichtingImage.flipX = true
    }

    //deze maakt de stoelen aan en kijk dus ook naar hoeveel spelers er zijn
    if (aantalSpelers == 2){
        stoel1 = this.add.sprite(170, 38, 'chair')
        stoel1.scale = 0.17
        stoel2 = this.add.sprite(170, 302, 'chair')
        stoel2.scale = 0.17
        stoel2.angle = 180
        aantalKaarten1 = this.add.text(164, 90, decks[0].length, {font: '25px Arial'})
        aantalKaarten1.depth = 4
        aantalKaarten2 = this.add.text(164, 228, decks[1].length, {font: '25px Arial'})
        aantalKaarten2.depth = 4
    }else if (aantalSpelers == 3) {
        stoel1 = this.add.sprite(170, 38, 'chair')
        stoel1.scale = 0.17
        stoel3 = this.add.sprite(60, 250, 'chair')
        stoel3.scale = 0.17
        stoel3.rotation = 4.19
        stoel2 = this.add.sprite(277, 250, 'chair')
        stoel2.scale = 0.17
        stoel2.rotation = 2.09
        stoel2.depth = 10
        aantalKaarten1 = this.add.text(164, 90, decks[0].length, {font: '25px Arial'})
        aantalKaarten1.depth = 4
        aantalKaarten2 = this.add.text(164, 90, decks[1].length, {font: '25px Arial'})
        aantalKaarten2.depth = 4
        aantalKaarten3 = this.add.text(164, 90, decks[2].length, {font: '25px Arial'})
        aantalKaarten3.depth = 4
    }else if (aantalSpelers == 4) {
        stoel1 = this.add.sprite(170, 38, 'chair')
        stoel1.scale = 0.17
        stoel3 = this.add.sprite(170, 302, 'chair')
        stoel3.scale = 0.17
        stoel3.angle = 180
        stoel4 = this.add.sprite(38, 170, 'chair')
        stoel4.scale = 0.17
        stoel4.angle = 270
        stoel2 = this.add.sprite(302, 170, 'chair')
        stoel2.scale = 0.17
        stoel2.angle = 90
        stoel3.depth = 100
        aantalKaarten1 = this.add.text(164, 90, decks[0].length, {font: '25px Arial'})
        aantalKaarten1.depth = 4
        aantalKaarten2 = this.add.text(228, 158, decks[1].length, {font: '25px Arial'})
        aantalKaarten2.depth = 4
        aantalKaarten3 = this.add.text(164, 228, decks[2].length, {font: '25px Arial'})
        aantalKaarten3.depth = 4
        aantalKaarten4 = this.add.text(90, 157, decks[3].length, {font: '25px Arial'})
        aantalKaarten4.depth = 4   
    }

    // zorgt ervoor dat de stoel een andere kleur wordt als de beurt wordt veranderd
    if (beurt == 1){
        stoel1.setFrame(1)
    }else if (beurt == 2) {
        stoel2.setFrame(1)
    }
    else if (beurt == 3) {
        stoel3.setFrame(1)
    }
    else if (beurt == 4) {
        stoel4.setFrame(1)
    }
    
    

}

buttons(){
    // vernietigd alle knoppen zodat er geen dubbele knoppen ontstaan
    if (buttonPass != '') {
        buttonPass.destroy(true)
        passText.destroy(true)
        if (buttonPenalty != ''){
            buttonPenalty.destroy(true)
            penaltyText.destroy(true)
            takePenaltyText.destroy(true)
        }
        if (buttonPlay != '') {
            buttonPlay.destroy(true)
            playText.destroy(true)
        }
        
        
    }
    // zorgt dat de muis kan worden gebruikt
    var pointer = this.input.activePointer

    //maakt de 'pass' button aan zodat je kaarten kan pakken als je geen kaart kan spelen
    if (jouwBeurt == true && penalty < 1) {
        buttonPass = this.add.sprite(170, 600, 'button')
        buttonPass.scale = 0.3
        buttonPass.depth = 1
        buttonPass.setInteractive()
        // zorgt ervoor dat je een kaart krijgt als je op de knop klikt
        buttonPass.on('pointerdown', function(event) {
            if (pointer.leftButtonDown()){
                buttonPass.setFrame(1)
            } 
            
        }, this)
        buttonPass.on('pointerup', function(event) {
            if (pointer.leftButtonReleased()){
                    buttonPass.setFrame(0)
                    var pakstapelKaart = pakstapel.splice(0, 1)
                    decks[beurt - 1].push(pakstapelKaart[0])  
                    if (geselecteerdeKaart != ''){
                        decks[beurt - 1].push(geselecteerdeKaart)
                        geselecteerdeKaart = ''
                        geselecteerdeKaartImage.destroy(true)
                        buttonPlay.destroy(true)
                        buttonPlay = ''
                        playText.destroy(true)
                    }
                    beurtFunctie()
                    this.updateCards()
                    this.stoelen()
                    this.buttons()
            }
        }, this)

        buttonPass.on('pointerout', function(event) {
            buttonPass.setFrame(0)
        })

        passText = this.add.text(117, 580, 'PASS', {font: '40px Arial'})
        passText.depth = 2
    }
    
    //maakt de 'play card' button aan
    if (geselecteerdeKaart != ''){
        buttonPlay = this.add.sprite(1100, 600, 'button')
        buttonPlay.scale = 0.3
        buttonPlay.depth = 1
        buttonPlay.setInteractive()
        // zorgt ervoor dat je de kaart kan spelen wanneer je op de knop klikt, hij controleert ook of je de kaart wel op kan spelen (zie de functie checken())
        buttonPlay.on('pointerdown', function(event) {
            if (pointer.leftButtonDown()){
                buttonPlay.setFrame(1) 
            } 
            
        }, this)

        buttonPlay.on('pointerup', function(event) {
            if (pointer.leftButtonReleased()){
                buttonPlay.setFrame(0)
                checken() 
                if (opgelegd == true) {
                    buttonPlay.destroy(true)
                    playText.destroy(true)
                    this.stoelen()
                    this.buttons()
                    
                }
                    geselecteerdeKaartImage.destroy(true)
                    this.updateCards()
            }
        }, this)

        buttonPlay.on('pointerout', function(event) {
            buttonPlay.setFrame(0)
        })

        playText = this.add.text(1015, 585, 'PLAY CARD', {font: '30px Arial'})
        playText.depth = 2
     }

    //maakt een knop aan om de soort te kiezen bij boer / joker
    if (gespeeldeKaart['soort'] == 'special' && penalty < 1 && jouwBeurt == true) {
        var keuzeText = this.add.text(890, 100, 'CHOOSE CARD TYPE:', {font: '25px Arial'})
        //klaver
        var keuze
        var buttonKiezenKlaver = this.add.sprite(1100, 220, 'Klaver')
        buttonKiezenKlaver.scale = 0.3
        buttonKiezenKlaver.depth = 10
        buttonKiezenKlaver.setInteractive()
        buttonKiezenKlaver.on('pointerup', function(event) {
            if (pointer.leftButtonReleased()){
                buttonKiezenHarten.destroy(true)
                buttonKiezenKlaver.destroy(true)
                buttonKiezenRuiten.destroy(true)
                buttonKiezenSchoppen.destroy(true)
                keuzeText.destroy(true)
                keuze = 'klaveren'
                if (gespeeldeKaart['trueNumber'] == 13){
                beurtFunctie()
                this.stoelen()
                }
                gespeeldeKaart['soort'] = keuze 
            }
        }, this)

        //ruiten
        var buttonKiezenRuiten = this.add.sprite(1100, 370, 'Ruit')
        buttonKiezenRuiten.scale = 0.3
        buttonKiezenRuiten.depth = 1
        buttonKiezenRuiten.setInteractive()
        buttonKiezenRuiten.on('pointerup', function(event) {
            if (pointer.leftButtonReleased()){
                buttonKiezenHarten.destroy(true)
                buttonKiezenKlaver.destroy(true)
                buttonKiezenRuiten.destroy(true)
                buttonKiezenSchoppen.destroy(true)
                keuzeText.destroy(true)
                keuze = 'ruiten'
                if (gespeeldeKaart['trueNumber'] == 13){
                    beurtFunctie()
                    this.stoelen()
                }
                gespeeldeKaart['soort'] = keuze 
            }
        }, this)

        //schoppen
        var buttonKiezenSchoppen = this.add.sprite(950, 370, 'Schop')
        buttonKiezenSchoppen.scale = 0.3
        buttonKiezenSchoppen.depth = 1
        buttonKiezenSchoppen.setInteractive()
        buttonKiezenSchoppen.on('pointerup', function(event) {
            if (pointer.leftButtonReleased()){
                buttonKiezenHarten.destroy(true)
                buttonKiezenKlaver.destroy(true)
                buttonKiezenRuiten.destroy(true)
                buttonKiezenSchoppen.destroy(true)
                keuzeText.destroy(true)
                keuze = 'schoppen'
                if (gespeeldeKaart['trueNumber'] == 13){
                    beurtFunctie()
                    this.stoelen()
                }
                gespeeldeKaart['soort'] = keuze 
            }
        }, this)
        //harten
        var buttonKiezenHarten = this.add.sprite(950, 220, 'Hart')
        buttonKiezenHarten.scale = 0.3
        buttonKiezenHarten.depth = 1
        buttonKiezenHarten.setInteractive()
        buttonKiezenHarten.on('pointerup', function(event) {
            if (pointer.leftButtonReleased()){
                buttonKiezenHarten.destroy(true)
                buttonKiezenKlaver.destroy(true)
                buttonKiezenRuiten.destroy(true)
                buttonKiezenSchoppen.destroy(true)
                keuzeText.destroy(true)
                keuze = 'harten'
                if (gespeeldeKaart['trueNumber'] == 13){
                    beurtFunctie()
                    this.stoelen()
                }
                gespeeldeKaart['soort'] = keuze 
            }
        }, this)
    }
    
    // maakt de penalty knop aan
    if (penalty > 0 && jouwBeurt == true) {
        buttonPenalty = this.add.sprite(170, 600, 'button')
        buttonPenalty.scale = 0.3
        buttonPenalty.depth = 1
        buttonPenalty.setInteractive()

        // zorgt ervoor dat je een kaart krijgt als je op de knop klikt
        buttonPenalty.on('pointerdown', function(event) {
            if (pointer.leftButtonDown()){
                buttonPenalty.setFrame(1)
            } 
            
        }, this)

        buttonPenalty.on('pointerup', function(event) {
            if (pointer.leftButtonReleased()) {
                buttonPenalty.setFrame(0)
                buttonPenalty.destroy(true)
                penaltyText.destroy(true)
                takePenaltyText.destroy(true)
                var penaltyKaarten
                penaltyKaarten = pakstapel.splice(0, penalty)
                for (var i = 0; i < penalty; i++){
                    decks[beurt - 1].push(penaltyKaarten[i])
                }
                penalty = 0
                this.updateCards()
                this.buttons()
                this.stoelen()
            }
        }, this)

        buttonPenalty.on('pointerout', function(event) {
            buttonPenalty.setFrame(0)
        })

        
        takePenaltyText = this.add.text(87, 586, 'TAKE CARDS', {font: '26px Arial'})
        takePenaltyText.depth = 2

        penaltyText = this.add.text(455, 35, 'CARDS TO GRAB: ' + penalty, {font: '40px Arial'})
        penaltyText.depth = 2

    }
}

updateCards(){
    // zorgt dat men de muis kan gebruiken
    var pointer = this.input.activePointer
    // zorgt ervoor dat de kaarten worden vernietigd zodat er geen dubbele sprites komen
    if (deck1 != ''){
        deck1.destroy(true)
    }
    // zet het deck in een groep
    deck1 = this.add.group()

    // maakt de gespeeldekaart afbeelding aan
    var gespeeldeKaartImage = this.add.image(540, 290, gespeeldeKaart['kaart'])
    gespeeldeKaartImage.scale = 0.2
    
    //maakt de decks aan
    for (var i = 0; i < decks[spelerNummer - 1].length; i++) {
        deck1.create(640 - decks[spelerNummer - 1].length*20 + 20 + i*40, 600, decks[spelerNummer - 1][i]['kaart'])
    }
    //zorgt voor de animatie van elke losse kaart 
    deck1.children.iterate((child) => {
        child.setScale(0.2, 0.2)
        child.setInteractive()
        child.on('pointerover', function(pointer, x, y) {
            child.y = 550
            
        })
            
        child.on('pointerout', function(pointer, x, y) {
            child.y = 600
            
        })
        

        //zorgt dat de geselecteerde kaart tevoorschijn komt als je erop klikt
        child.on('pointerdown', function(pointer) {
            if (pointer.leftButtonDown()  && gespeeldeKaart['soort'] != 'special' && jouwBeurt == true){
                if (geselecteerdeKaart != ''){
                    decks[spelerNummer - 1].push(geselecteerdeKaart)
                    geselecteerdeKaart = ''
                    geselecteerdeKaartImage.destroy(true)
                    buttonPlay.destroy(true)
                    playText.destroy(true)
                }
                var index
                for (var i = 0; i < decks[spelerNummer - 1].length; i++) {
                    if (decks[spelerNummer - 1][i]['kaart'] == child.texture.key) {
                        index = i
                    }
                }  
                geselecteerdeKaart = decks[spelerNummer - 1].splice(index, 1)
                geselecteerdeKaart = geselecteerdeKaart[0]
                this.updateCards()
                this.buttons()
            }
        }, this)

    })

    //maakt de geselecteerde kaart aan
    if (geselecteerdeKaart != ''){
        geselecteerdeKaartImage = this.add.sprite(920, 290, geselecteerdeKaart['kaart'])
        geselecteerdeKaartImage.setInteractive()
        geselecteerdeKaartImage.scale = 0.2
        }
    if (geselecteerdeKaart != ''){
        geselecteerdeKaartImage.on('pointerdown', function(pointer) {
            if (pointer.leftButtonDown()){
                decks[spelerNummer - 1].push(geselecteerdeKaart)
                geselecteerdeKaart = ''
                geselecteerdeKaartImage.destroy(true)
                buttonPlay.destroy(true)
                playText.destroy(true)
                this.updateCards()
                this.buttons()
            }
        }, this)
    }

}


update(){

}
}

function addPlayer(self, playerInfo) {
    for (var i = 0; i < decks[spelerNummer - 1].length; i++) {
       // self.deck1.create(640 - decks[spelerNummer - 1].length*20 + 20 + i*40, 600, decks[spelerNummer - 1][i]['kaart'])
    }
}

function addOtherPlayers(self, playerInfo) {
    
}



// variabele die nodig zijn
var deck1 = ''
var backcard
var kaartIndex = 0
var buttonPlay = ''
var playText
var geselecteerdeKaartImage
var opgelegd = false
var stoel1 = ''
var stoel2
var stoel3
var stoel4
var aantalKaarten1
var aantalKaarten2
var aantalKaarten3
var aantalKaarten4
var speelrichtingImage
var buttonPass = ''
var passText
var penaltyText
var buttonPenalty = ''
var takePenaltyText
var jouwBeurt = false
var keuzeSoort = ''

if (beurt == spelerNummer) {
    jouwBeurt = true
}
if (beurt != spelerNummer) {
    jouwBeurt = false
    
}

// code voor in de server
var beurt = 1
var spelrichting = 1
var decks = []
var pakstapel = []
var gespeeldeKaart
var aantalSpelers = 4
var penalty = 0
var spelerNummer = 1
var pestkaart = []
var geselecteerdeKaart = ''
var kaarten = [
    { kaart: 'aas harten', soort: 'harten', trueNumber: 1, number: 0 },
    { kaart: '2 harten', soort: 'harten', trueNumber: 2, number: 1 },
    { kaart: '3 harten', soort: 'harten', trueNumber: 3, number: 2 },
    { kaart: '4 harten', soort: 'harten', trueNumber: 4, number: 3 },
    { kaart: '5 harten', soort: 'harten', trueNumber: 5, number: 4 },
    { kaart: '6 harten', soort: 'harten', trueNumber: 6, number: 5 },
    { kaart: '7 harten', soort: 'harten', trueNumber: 7, number: 6 },
    { kaart: '8 harten', soort: 'harten', trueNumber: 8, number: 7 },
    { kaart: '9 harten', soort: 'harten', trueNumber: 9, number: 8 },
    { kaart: '10 harten', soort: 'harten', trueNumber: 10, number: 9 },
    { kaart: 'koning harten', soort: 'harten', trueNumber: 11, number: 10 },
    { kaart: 'koningin harten', soort: 'harten', trueNumber: 12, number: 11 },
    { kaart: 'aas ruiten', soort: 'ruiten', trueNumber: 1, number: 12 },
    { kaart: '2 ruiten', soort: 'ruiten', trueNumber: 2, number: 13 },
    { kaart: '3 ruiten', soort: 'ruiten', trueNumber: 3, number: 14 },
    { kaart: '4 ruiten', soort: 'ruiten', trueNumber: 4, number: 15 },
    { kaart: '5 ruiten', soort: 'ruiten', trueNumber: 5, number: 16 },
    { kaart: '6 ruiten', soort: 'ruiten', trueNumber: 6, number: 17 },
    { kaart: '7 ruiten', soort: 'ruiten', trueNumber: 7, number: 18 },
    { kaart: '8 ruiten', soort: 'ruiten', trueNumber: 8, number: 19 },
    { kaart: '9 ruiten', soort: 'ruiten', trueNumber: 9, number: 20 },
    { kaart: '10 ruiten', soort: 'ruiten', trueNumber: 10, number: 21 },
    { kaart: 'koning ruiten', soort: 'ruiten', trueNumber: 11, number: 22 },
    { kaart: 'koningin ruiten', soort: 'ruiten', trueNumber: 12, number: 23 },
    { kaart: 'aas schoppen', soort: 'schoppen', trueNumber: 1,  number: 24 },
    { kaart: '2 schoppen', soort: 'schoppen', trueNumber: 2, number: 25 },
    { kaart: '3 schoppen', soort: 'schoppen', trueNumber: 3, number: 26 },
    { kaart: '4 schoppen', soort: 'schoppen', trueNumber: 4, number: 27 },
    { kaart: '5 schoppen', soort: 'schoppen', trueNumber: 5, number: 28 },
    { kaart: '6 schoppen', soort: 'schoppen', trueNumber: 6, number: 29 },
    { kaart: '7 schoppen', soort: 'schoppen', trueNumber: 7, number: 30 },
    { kaart: '8 schoppen', soort: 'schoppen', trueNumber: 8, number: 31 },
    { kaart: '9 schoppen', soort: 'schoppen', trueNumber: 9, number: 32 },
    { kaart: '10 schoppen', soort: 'schoppen', trueNumber: 10, number: 33 },
    { kaart: 'koning schoppen', soort: 'schoppen', trueNumber: 11,  number: 34 },
    { kaart: 'koningin schoppen', soort: 'schoppen', trueNumber: 12,  number: 35 },
    { kaart: 'aas klaveren', soort: 'klaveren', trueNumber: 1, number: 36 },
    { kaart: '2 klaveren', soort: 'klaveren', trueNumber: 2, number: 37 },
    { kaart: '3 klaveren', soort: 'klaveren', trueNumber: 3, number: 38 },
    { kaart: '4 klaveren', soort: 'klaveren', trueNumber: 4, number: 39 },
    { kaart: '5 klaveren', soort: 'klaveren', trueNumber: 5, number: 40 },
    { kaart: '6 klaveren', soort: 'klaveren', trueNumber: 6, number: 41 },
    { kaart: '7 klaveren', soort: 'klaveren', trueNumber: 7, number: 42 },
    { kaart: '8 klaveren', soort: 'klaveren', trueNumber: 8, number: 43 },
    { kaart: '9 klaveren', soort: 'klaveren', trueNumber: 9, number: 44 },
    { kaart: '10 klaveren', soort: 'klaveren', trueNumber: 10, number: 45 },
    { kaart: 'koning klaveren', soort: 'klaveren', trueNumber: 11, number: 46 },
    { kaart: 'koningin klaveren', soort: 'klaveren', trueNumber: 12, number: 47 },
    { kaart: 'boer harten', soort: 'special',  trueNumber: 13, number: 48 },
    { kaart: 'boer ruiten', soort: 'special',  trueNumber: 13, number: 49 },
    { kaart: 'boer schoppen', soort: 'special',  trueNumber: 13, number: 50 },
    { kaart: 'boer klaveren', soort: 'special',  trueNumber: 13, number: 51 },
    { kaart: 'joker 1',  soort: 'special',  trueNumber: 0, number: 52 },
    { kaart: 'joker 2',  soort: 'special',  trueNumber: 0, number: 53 }
  ]
// husselt de kaarten
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}
shuffle(kaarten)

// maakt decks aan

for (var i = 0; i <= aantalSpelers; i++){
    decks[i] = kaarten.splice(0,7)
}

// dit is de beginnende kaart (dit mag geen pestkaart zijn), dit maakt ook de pakstapel aan.
while (kaarten[0]['trueNumber'] == "1" || kaarten[0]['trueNumber'] == "2" || kaarten[0]['trueNumber'] == "7" || kaarten[0]['trueNumber'] == "8" || kaarten[0]['trueNumber'] == "0" || kaarten[0]['trueNumber'] == "13"){
    pestkaart = kaarten[0].valueOf()
    kaarten.splice(0,1)
    pakstapel.push(pestkaart)
}
gespeeldeKaart = kaarten[0]
kaarten.splice(0,1)

while (kaarten.length > 0) {
    pakstapelKaarten = kaarten[0].valueOf()
    kaarten.splice(0, 1)
    pakstapel.push(pakstapelKaarten)
}

// regelt dat de beurt goed werkt
function beurtFunctie(){
    beurt = beurt + 1 * spelrichting
    if (beurt > aantalSpelers) {
        beurt = 1
    }else if (beurt < 1) {
        beurt = aantalSpelers
    }
    if (beurt == spelerNummer) {
        jouwBeurt = true
    }
    if (beurt != spelerNummer) {
        jouwBeurt = false
        
    }
}
function checken(){
    if (gespeeldeKaart['trueNumber'] == geselecteerdeKaart['trueNumber'] || gespeeldeKaart['soort'] == geselecteerdeKaart['soort'] || geselecteerdeKaart['soort'] == 'special' && penalty < 1){
        if (geselecteerdeKaart['trueNumber'] == 0) {
            penalty = penalty + 5
        }
        if (geselecteerdeKaart['trueNumber'] == 2) {
            penalty = penalty + 2
        }
        if (geselecteerdeKaart['trueNumber'] == 1) {
            spelrichting = spelrichting * -1
        }
        if (geselecteerdeKaart['trueNumber'] == 8) {
            beurtFunctie()
        }
        if (geselecteerdeKaart['trueNumber'] != 7 && geselecteerdeKaart['trueNumber'] != 13) {
            beurtFunctie()
        }
        pakstapel.push(gespeeldeKaart)
        gespeeldeKaart = geselecteerdeKaart
        geselecteerdeKaart = ''
        shuffle(pakstapel)
        opgelegd = true
    }else if (penalty > 0 && geselecteerdeKaart['trueNumber'] == 2){
        penalty = penalty + 2
        opgelegd = true
        pakstapel.push(gespeeldeKaart)
        gespeeldeKaart = geselecteerdeKaart
        geselecteerdeKaart = ''
        shuffle(pakstapel)
        beurtFunctie()
    }else if (penalty > 0 && geselecteerdeKaart['trueNumber'] == 0){
        penalty = penalty + 5
        opgelegd = true
        pakstapel.push(gespeeldeKaart)
        gespeeldeKaart = geselecteerdeKaart
        geselecteerdeKaart = ''
        shuffle(pakstapel)
        beurtFunctie()
    }else {
        opgelegd = false
    }

}

