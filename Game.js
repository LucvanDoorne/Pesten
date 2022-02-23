var theme = 'wit'
var cards
var deck1 = ''
var backcard
var huidigeDecklengte = 0
var geselecteerdeKaart = ''
var kaartIndex = 0
var buttonPlay
var playText
var geselecteerdeKaartImage
var oplgelegd = false
var stoel1 = ''
var stoel2
var stoel3
var stoel4
var aantalKaarten1
var aantalKaarten2
var aantalKaarten3
var aantalKaarten4
var speelrichtingImage

class Game extends Phaser.Scene {
    constructor() {
        super({key:"Game"})
    }

preload() {
    this.load.image('background', 'assets2/Background.jpg')
    this.load.image('H2', 'assets2/cards/wit/witharten2.png')
    this.load.image('H3', 'assets2/cards/wit/witharten3.png')
    this.load.image('H4', 'assets2/cards/wit/witharten4.png')
    this.load.image('H5', 'assets2/cards/wit/witharten5.png')
    this.load.image('H6', 'assets2/cards/wit/witharten6.png')
    this.load.image('H7', 'assets2/cards/wit/witharten7.png')
    this.load.image('H8', 'assets2/cards/wit/witharten8.png')
    this.load.image('H9', 'assets2/cards/wit/witharten9.png')
    this.load.image('H1', 'assets2/cards/wit/witharten10.png')
    this.load.image('HA', 'assets2/cards/wit/withartenA.png')
    this.load.image('HB', 'assets2/cards/wit/withartenJ.png')
    this.load.image('HH', 'assets2/cards/wit/withartenK.png')
    this.load.image('HV', 'assets2/cards/wit/withartenQ.png')
    this.load.image('K2', 'assets2/cards/wit/witklaver2.png')
    this.load.image('K3', 'assets2/cards/wit/witklaver3.png')
    this.load.image('K4', 'assets2/cards/wit/witklaver4.png')
    this.load.image('K5', 'assets2/cards/wit/witklaver5.png')
    this.load.image('K6', 'assets2/cards/wit/witklaver6.png')
    this.load.image('K7', 'assets2/cards/wit/witklaver7.png')
    this.load.image('K8', 'assets2/cards/wit/witklaver8.png')
    this.load.image('K9', 'assets2/cards/wit/witklaver9.png')
    this.load.image('K1', 'assets2/cards/wit/witklaver10.png')
    this.load.image('KA', 'assets2/cards/wit/witklaverA.png')
    this.load.image('KB', 'assets2/cards/wit/witklaverJ.png')
    this.load.image('KH', 'assets2/cards/wit/witklaverK.png')
    this.load.image('KV', 'assets2/cards/wit/witklaverQ.png')
    this.load.image('R2', 'assets2/cards/wit/witruiten2.png')
    this.load.image('R3', 'assets2/cards/wit/witruiten3.png')
    this.load.image('R4', 'assets2/cards/wit/witruiten4.png')
    this.load.image('R5', 'assets2/cards/wit/witruiten5.png')
    this.load.image('R6', 'assets2/cards/wit/witruiten6.png')
    this.load.image('R7', 'assets2/cards/wit/witruiten7.png')
    this.load.image('R8', 'assets2/cards/wit/witruiten8.png')
    this.load.image('R9', 'assets2/cards/wit/witruiten9.png')
    this.load.image('R1', 'assets2/cards/wit/witruiten10.png')
    this.load.image('RA', 'assets2/cards/wit/witruitenA.png')
    this.load.image('RB', 'assets2/cards/wit/witruitenJ.png')
    this.load.image('RH', 'assets2/cards/wit/witruitenK.png')
    this.load.image('RV', 'assets2/cards/wit/witruitenQ.png')
    this.load.image('S2', 'assets2/cards/wit/witschoppen2.png')
    this.load.image('S3', 'assets2/cards/wit/witschoppen3.png')
    this.load.image('S4', 'assets2/cards/wit/witschoppen4.png')
    this.load.image('S5', 'assets2/cards/wit/witschoppen5.png')
    this.load.image('S6', 'assets2/cards/wit/witschoppen6.png')
    this.load.image('S7', 'assets2/cards/wit/witschoppen7.png')
    this.load.image('S8', 'assets2/cards/wit/witschoppen8.png')
    this.load.image('S9', 'assets2/cards/wit/witschoppen9.png')
    this.load.image('S1', 'assets2/cards/wit/witschoppen10.png')
    this.load.image('SA', 'assets2/cards/wit/witschoppenA.png')
    this.load.image('SB', 'assets2/cards/wit/witschoppenJ.png')
    this.load.image('SH', 'assets2/cards/wit/witschoppenK.png')
    this.load.image('SV', 'assets2/cards/wit/witschoppenQ.png')
    this.load.image('JJ', 'assets2/cards/wit/witjoker.png')
    this.load.image('Arrow', 'assets2/arrow.png')
    this.load.image('Table', 'assets2/table.png')
    this.load.image('gray-chair', 'assets2/gray-chair.png')
    this.load.image('brown-chair', 'assets2/brown-chair.png')
    this.load.image('backcard', 'assets2/backcard.jpg')
    this.load.spritesheet('button', 'assets2/button.png', {frameWidth: 860, frameHeight: 378})
    this.load.image('Beurt-richting', 'assets2/Arrow2.png')
    this.load.spritesheet('chair', 'assets2/chair.png', {frameWidth: 384, frameHeight: 393})
    

}

create (){
    //achtergrond
    var background = this.add.image(640,360,'background')
    background.scale = 0.34

    
    this.updateCards()
    this.buttons()
    this.stoelen()
    var pointer = this.input.activePointer
    var cursor = { x: 0, y: 0 }
    
    //tafel
    var tafel = this.add.image(170, 170, 'Table')
    tafel.scale = 0.5
    tafel.depth = 3

    //maakt de pakstapel afbeelding
    backcard = this.add.image(730, 290, 'backcard')
    backcard.scale = 0.2


    

    
}

stoelen(){
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
    //beurtrichting
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

    //stoelen

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
    var pointer = this.input.activePointer
    //maakt de 'pass' button aan
    var buttonPass = this.add.sprite(170, 600, 'button')
    buttonPass.scale = 0.3
    buttonPass.depth = 1
    buttonPass.setInteractive()
    buttonPass.on('pointerdown', function(event) {
        if (pointer.leftButtonDown()){
            buttonPass.setFrame(1)  
            decks[0].push(pakstapel.splice(0,1))
            if (geselecteerdeKaart != ''){
                decks[0].push(geselecteerdeKaart)
                geselecteerdeKaart = ''
                geselecteerdeKaartImage.destroy(true)
                buttonPlay.destroy(true)
                playText.destroy(true)
            }
            beurtFunctie()
            this.updateCards()
            this.stoelen()
            console.log(beurt)
        } 
         
    }, this)
    buttonPass.on('pointerup', function(event) {
        buttonPass.setFrame(0)
    })
    var passText = this.add.text(117, 580, 'PASS', {font: '40px Arial'})
    passText.depth = 2
    
    //maakt de 'play card' button aan
    
    if (geselecteerdeKaart != ''){
        buttonPlay = this.add.sprite(1100, 600, 'button')
        buttonPlay.scale = 0.3
        buttonPlay.depth = 1
        buttonPlay.setInteractive()
        buttonPlay.on('pointerdown', function(event) {
            if (pointer.leftButtonDown()){
                buttonPlay.setFrame(1) 
                checken() 
                if (opgelegd == true) {
                buttonPlay.destroy(true)
                playText.destroy(true)
                this.stoelen()
                }
                geselecteerdeKaartImage.destroy(true)
                this.updateCards()
                console.log(beurt)
            } 
            
        }, this)
        buttonPlay.on('pointerup', function(event) {
            buttonPlay.setFrame(0)
        })
        playText = this.add.text(1015, 585, 'PLAY CARD', {font: '30px Arial'})
        playText.depth = 2
     }
    
}

updateCards(){
    if (deck1 != ''){
        deck1.destroy(true)
    }
    deck1 = this.add.group()
    var gespeeldeKaartImage = this.add.image(540, 290, gespeeldeKaart)
    gespeeldeKaartImage.scale = 0.2
    var pointer = this.input.activePointer
    deck1.clear(true)
    //maakt de decks aan
    for (var i = 0; i < decks[0].length; i++) {
        deck1.create(640 - decks[0].length*20 + 20 + i*40, 600, decks[0][i])
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
        

        //zorgt dat de geselecteerde kaart tevoorschijn komt
        child.on('pointerdown', function(pointer) {
            if (pointer.leftButtonDown()){
                if (geselecteerdeKaart != ''){
                    decks[0].push(geselecteerdeKaart)
                    geselecteerdeKaart = ''
                    geselecteerdeKaartImage.destroy(true)
                    buttonPlay.destroy(true)
                    playText.destroy(true)
                }
                geselecteerdeKaart = child.texture.key 
                let index = decks[0].indexOf(geselecteerdeKaart)
                decks[0].splice(index, 1)
                this.updateCards()
                this.buttons()
            }
        }, this)

    })

    //maakt de geselecteerde kaart aan
    if (geselecteerdeKaart != ''){
        geselecteerdeKaartImage = this.add.sprite(920, 290, geselecteerdeKaart)
        geselecteerdeKaartImage.setInteractive()
        geselecteerdeKaartImage.scale = 0.2
        }
    if (geselecteerdeKaart != ''){
        geselecteerdeKaartImage.on('pointerdown', function(pointer) {
            if (pointer.leftButtonDown()){
                decks[0].push(geselecteerdeKaart)
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



// variabele die nodig zijn
var aantalSpelers = 4
var beurt = 1
var gespeeldeKaart
var spelrichting = -1
let opgelegd = 'nee'
var keuzeSoort = ''
var pakstapel = []
var pestkaart = []

var kaarten = [
    'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S1', 'SB', 'SV', 'SH', 'SA', 
    'K2', 'K3', 'K4', 'K5', 'K6', 'K7', 'K8', 'K9', 'K1', 'KB', 'KV', 'KH', 'KA', 
    'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'R1', 'RB', 'RV', 'RH', 'RA', 
    'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H1', 'HB', 'HV', 'HH', 'HA', 
    'JJ', 'JJ']

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
var decks = []
for (var i = 0; i <= aantalSpelers; i++){
    decks[i] = kaarten.splice(0,7)
}
decks[0].push('K2', 'H2', 'S2', 'R2')



// dit is de beginnende kaart (dit mag geen pestkaart zijn), dit maakt ook de pakstapel aan.
var nummerKaarten = kaarten[0].charAt(1)
while (nummerKaarten == "A" || nummerKaarten == "2" || nummerKaarten == "7" || nummerKaarten == "8" || nummerKaarten == "J" || nummerKaarten == "B"){
    pestkaart = kaarten[0].valueOf()
    kaarten.splice(0,1)
    nummerKaarten = kaarten[0].charAt(1)
}
gespeeldeKaart = kaarten[0].valueOf()

kaarten.splice(0,1)
pakstapel.push(kaarten.splice(0))
pakstapel = pakstapel[0]
pakstapel.push(pestkaart)




function checken(){
    var geselecteerdeKaartNummer = geselecteerdeKaart.charAt(1)
    var geselecteerdeKaartSoort = geselecteerdeKaart.charAt(0)
    var gespeeldeKaartNummer = gespeeldeKaart.charAt(1)
    var gespeeldeKaartSoort = gespeeldeKaart.charAt(0)
    if (gespeeldeKaartNummer == geselecteerdeKaartNummer || gespeeldeKaartSoort == geselecteerdeKaartSoort || geselecteerdeKaart == 'JJ'){
        if (geselecteerdeKaartNummer == 2) {
            beurtFunctie()
            decks[beurt - 1].push(pakstapel.splice(0,1).toString())
            decks[beurt - 1].push(pakstapel.splice(0,1).toString())
        }
        if (geselecteerdeKaartNummer == 'A') {
            spelrichting = spelrichting * -1
        }
        if (geselecteerdeKaartNummer == 8) {
            beurtFunctie()
        }
        if (geselecteerdeKaartNummer != 7) {
            beurtFunctie()
        }
        pakstapel.push(gespeeldeKaart)
        gespeeldeKaart = geselecteerdeKaart
        geselecteerdeKaart = ''
        shuffle(pakstapel)
        opgelegd = true
        
    }else {
        opgelegd = false
    }

}

// regelt dat de beurt goed werkt
function beurtFunctie(){
    beurt = beurt + 1 * spelrichting
    if (aantalSpelers == 2){
        if (beurt > 2){
            beurt = 1
        }
        if (beurt < 1) {
            beurt = 2
        }
    }else if (aantalSpelers == 3) {
        if (beurt > 3) {
            beurt = 1
        }
        if (beurt < 1) {
            beurt = 3
        }
    }else if (aantalSpelers == 4) {
        if (beurt > 4){
            beurt = 1
        }
        if (beurt < 1) {
            beurt = 4
        }
    }
}
