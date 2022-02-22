var theme = 'wit'
var cards
var deck1
var backcard
var huidigeDecklengte = 0
var geselecteerdeKaart = ''
var kaartIndex = 0

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
    deck1 = this.add.group()
    this.updateCards()
    
    cards = this.add.group()
    cards.scale = 0.1
    var pointer = this.input.activePointer
    var cursor = { x: 0, y: 0 }
    //achtergrond
    var background = this.add.image(640,360,'background')
    background.scale = 0.34


    //stoelen
    var stoel1
    var stoel2
    var stoel3
    var stoel4
    var aantalKaarten1
    var aantalKaarten2
    var aantalKaarten3
    var aantalKaarten4
    switch (aantalSpelers) {
        case 2: 
            stoel1 = this.add.sprite(170, 38, 'chair')
            stoel1.scale = 0.17
            stoel2 = this.add.sprite(170, 302, 'chair')
            stoel2.scale = 0.17
            stoel2.angle = 180
            aantalKaarten1 = this.add.text(164, 90, decks[0].length, {font: '25px Arial'})
            aantalKaarten1.depth = 1
            aantalKaarten2 = this.add.text(164, 228, decks[1].length, {font: '25px Arial'})
            aantalKaarten2.depth = 1
        case 3:
            stoel1 = this.add.sprite(170, 38, 'chair')
            stoel1.scale = 0.17
            stoel3 = this.add.sprite(60, 250, 'chair')
            stoel3.scale = 0.17
            stoel3.rotation = 4.19
            stoel2 = this.add.sprite(277, 250, 'chair')
            stoel2.scale = 0.17
            stoel2.rotation = 2.09
            aantalKaarten1 = this.add.text(164, 90, decks[0].length, {font: '25px Arial'})
            aantalKaarten1.depth = 1
            aantalKaarten2 = this.add.text(164, 90, decks[1].length, {font: '25px Arial'})
            aantalKaarten2.depth = 1
            aantalKaarten3 = this.add.text(164, 90, decks[2].length, {font: '25px Arial'})
            aantalKaarten3.depth = 1
        case 4:
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
            stoel3.depth = 2
            aantalKaarten1 = this.add.text(164, 90, decks[0].length, {font: '25px Arial'})
            aantalKaarten1.depth = 1
            aantalKaarten2 = this.add.text(228, 158, decks[1].length, {font: '25px Arial'})
            aantalKaarten2.depth = 1
            aantalKaarten3 = this.add.text(164, 228, decks[2].length, {font: '25px Arial'})
            aantalKaarten3.depth = 1
            aantalKaarten4 = this.add.text(90, 157, decks[3].length, {font: '25px Arial'})
            aantalKaarten4.depth = 2
    }
    //tafel
    var tafel = this.add.image(170, 170, 'Table')
    tafel.scale = 0.5

    //maakt de gespeelde kaart en de pakstapel afbeelding
    var gespeeldeKaartImage = this.add.image(540, 290, gespeeldeKaart)
    gespeeldeKaartImage.scale = 0.2
    cards.add(gespeeldeKaartImage)
    backcard = this.add.sprite(730, 290, 'backcard')
    backcard.scale = 0.2
    backcard.setInteractive()
    backcard.on('pointerdown', function(event) {
        if (pointer.leftButtonDown()){
        decks[0].push(pakstapel.splice(0,1))
        }
        deck1.clear(true)
        console.log(deck1)
        this.updateCards()
    },this)



    
    
    
    //buttons
    var button = this.add.sprite(1100, 600, 'button')
    button.scale = 0.3
    button.setInteractive()
    button.on('pointerdown', function(event) {
        if (pointer.leftButtonDown()){
            button.setFrame(1)  
        }     
    })
    button.on('pointerover', function(event) {
        button.setFrame(0)
    })
    button.on('pointerup', function(event) {
        button.setFrame(0)
    })
    
    //beurtrichting
    var speelrichtingImage = this.add.image(160, 305, 'Beurt-richting')
    speelrichtingImage.scale = 0.5
    speelrichtingImage.depth = 1
    if (spelrichting == 1){
        speelrichtingImage.flipX = false
        speelrichtingImage.rotation = 4.7
        speelrichtingImage.x = 160
        speelrichtingImage.depth = 1
        }else if (spelrichting == -1) {
        speelrichtingImage.rotation = 1.57
        speelrichtingImage.x = 177
        speelrichtingImage.flipX = true
        speelrichtingImage.depth = 1
    }
    
}

removeCard(card){
    var done = false;
    deck1.children.iterate((child) => {
        
        if(child == card && !done){
            child.destroy()
            done = true
        }
    })
    console.log(deck1.getChildren().length)

    //this.updateCards()
}

updateCards(){
    var pointer = this.input.activePointer
    deck1.clear()
    //maakt de decks aan
    var decklengte = decks[0].length 
    //console.log(deck1.getChildren())
    //var deck1Kaart
    for (var i = 0; i < decks[0].length; i++) {
        deck1.create(640 - decklengte*20 + 20 + i*40, 600, decks[0][i])
    }
    
    
    deck1.children.iterate((child) => {
        child.setScale(0.2, 0.2)
        child.setInteractive()
        child.depth = 1
        child.on('pointerover', function(pointer, x, y) {
            child.y = 550
            //child.depth = 2
        })
            
        child.on('pointerout', function(pointer, x, y) {
            child.y = 600
            //child.depth = 1
        })
        


        child.on('pointerdown', function(pointer) {
            if (pointer.leftButtonDown()){
                this.removeCard()
            }
        }, this)
    })
}

update(){
    var pointer = this.input.activePointer
    var decklengte = decks[0].length
    deck1
    /*while (kaartIndex < huidigeDecklengte) {
        kaartIndex++
    }
    if (kaartIndex >= huidigeDecklengte){
        kaartIndex = 0
    }
    backcard.on('pointerdown', function(event) {
        
        for (huidigeDecklengte; huidigeDecklengte < decks[0].length; huidigeDecklengte++) {
            deck1.children.iterate((child) => {
                child.x = child.x - 20
            })
            deck1.create(640 + huidigeDecklengte*20 , 600, decks[0][huidigeDecklengte])
        }
        deck1.children.iterate((child) => {
            child.setScale(0.2, 0.2)
            //child.depth = 1
            child.setInteractive()
            child.on('pointerover', function(event) {
                child.y = 550
                //child.depth = 2
            })
                
            child.on('pointerout', function(event) {
                //child.y = 600
                //child.depth = 1
            })
        })
    })*/
        

}
}



// variabele die nodig zijn
var aantalSpelers = 4
var beurt = 1
var gespeeldeKaart
var spelrichting = 1
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


// zorgt ervoor dat de soort en nummer van een bepaalde kaart gescheiden wordt
const soortGespeeldeKaart = gespeeldeKaart[0].charAt(0)
const nummerGespeeldeKaart = gespeeldeKaart[0].charAt(1)
const soortGeselecteerdeKaart = geselecteerdeKaart[0].charAt(0)
const nummerGeselecteerdeKaart = geselecteerdeKaart[0].charAt(1)


// regelt wie er aan de beurt is
switch (aantalSpelers) {
    case 2:
        if (beurt > 2){
            beurt = 1
        }
        if (beurt < 1) {
            beurt = 2
        }
    case 3: 
        if (beurt > 3) {
            beurt = 1
        }
        if (beurt < 1) {
            beurt = 3
        }
    case 4: 
        if (beurt > 4){
            beurt = 1
        }
        if (beurt < 1) {
            beurt = 4
        }
}

// checkt of de geselecteerde kaart opgegooid kan worden en gooit deze op als het kan met de benodigde actie van een eventuele speciale kaart
function checken() {
    switch (beurt){
        case 1: 
            if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'A') {
                spelrichting = spelrichting * -1
                opgelegd = 'ja'

            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '2'){
                opgelegd = 'ja'
                if (spelrichting == -1 && aantalSpelers == 4){
                    decks[3].push(pakstapel.splice(0,2))
                }else if (spelrichting == -1 && aantalSpelers == 3){
                    decks[2].push(pakstapel.splice(0,2))
                }else {
                    decks[1].push(pakstapel.splice(0,2))
                }
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '8') {
                opgelegd = 'ja'
                if (aantalSpelers == '4') {
                    beurt = 3
                }else if (aantalSpelers == '3' && spelrichting == -1) {
                    beurt = 3
                }else if (aantalSpelers == '3' && spelrichting == -1) {
                    beurt = 2
                }    
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'B') {
                const index = decks[0].indexOf(geselecteerdeKaart)
                pakstapel.push(decks[0].splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                soortGespeeldeKaart = keuzeSoort
                beurt = beurt + spelrichting
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'J') {
                const index = decks[0].indexOf(geselecteerdeKaart)
                pakstapel.push(decks[0].splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (spelrichting == -1 && aantalSpelers == 4){
                    dekcs[3].push(pakstapel.splice(0,5))
                }else if (spelrichting == -1 && aantalSpelers == 3){
                    decks[2].push(pakstapel.splice(0,5))
                }else {
                    decks[1].push(pakstapel.splice(0,5))
                }
                beurt = beurt + spelrichting
                soortGespeeldeKaart = keuzeSoort
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart) {
                opgelegd = 'ja'
            } else {
                return 'Deze kaart kan niet gespeeld worden'
            }
            if (opgelegd == 'ja'){
                const index = decks[0].indexOf(geselecteerdeKaart)
                pakstapel.push(decks[0].splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (nummerGeselecteerdeKaart != '7' || nummerGeselecteerdeKaart != '8'){ 
                    beurt = beurt + spelrichting
                }
                opgelegd = 'nee'
                winnaar()
            }
        case 2:
            if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'A') {
                opgelegd = 'ja'
                spelrichting = spelrichting * -1
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '2'){
                opgelegd = 'ja'
                if (spelrichting == 1 && aantalSpelers == 3){
                    decks[2].push(pakstapel.splice(0,2))
                }else if (spelrichting == 1 && aantalSpelers == 4){
                    decks[3].push(pakstapel.splice(0,2))
                }else {
                    decks[0].push(pakstapel.splice(0,2))
                }
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '8') {
                opgelegd = 'ja'
                if (aantalSpelers == '4') {
                    beurt = 4
                }else if (aantalSpelers == '3' && spelrichting == 1) {
                    beurt = 1
                }else if (aantalSpelers == '3' && spelrichting == -1) {
                    beurt = 3
                }    
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'B') {
                const index = decks[1].indexOf(geselecteerdeKaart)
                pakstapel.push(decks[1].splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                soortGespeeldeKaart = keuzeSoort
                beurt = beurt + spelrichting
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'J') {
                const index = decks[1].indexOf(geselecteerdeKaart)
                pakstapel.push(decks[1].splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (spelrichting == 1 && aantalSpelers == 4){
                    decks[2].push(pakstapel.splice(0,5))
                }else if (spelrichting == 1 && aantalSpelers == 3){
                    deck[2].push(pakstapel.splice(0,5))
                }else {
                    deck[0].push(pakstapel.splice(0,5))
                }
                beurt = beurt + spelrichting
                soortGespeeldeKaart = keuzeSoort
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart) {
                opgelegd = 'ja'
            } else {
                return 'Deze kaart kan niet gespeeld worden'
            }
            if (opgelegd == 'ja'){
                const index = dekcs[1].indexOf(geselecteerdeKaart)
                pakstapel.push(decks[1].splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (nummerGeselecteerdeKaart != '7' || nummerGeselecteerdeKaart != '8'){ 
                    beurt = beurt + spelrichting
                }
                opgelegd = 'nee'
                winnaar()
            }
        case 3:
            if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'A') {
                opgelegd = 'ja'
                spelrichting = spelrichting * -1
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '2'){
                opgelegd = 'ja'
                if (spelrichting == 1 && aantalSpelers == 4){
                    decks[3].push(pakstapel.splice(0,2))
                }else if (spelrichting == 1 && aantalSpelers == 3){
                    decks[0].push(pakstapel.splice(0,2))
                }else {
                    decks[1].push(pakstapel.splice(0,2))
                }
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '8') {
                opgelegd = 'ja'
                if (aantalSpelers == '4') {
                    beurt = 1
                }else if (aantalSpelers == '3' && spelrichting == 1) {
                    beurt = 2
                }else if (aantalSpelers == '3' && spelrichting == -1) {
                    beurt = 1
                }    
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'B') {
                const index = dekcs[2].indexOf(geselecteerdeKaart)
                pakstapel.push(decks[2].splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                soortGespeeldeKaart = keuzeSoort
                beurt = beurt + spelrichting
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'J') {
                const index = decks[2].indexOf(geselecteerdeKaart)
                pakstapel.push(decks[2].splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (spelrichting == 1 && aantalSpelers == 4){
                    decks[3].push(pakstapel.splice(0,5))
                }else if (spelrichting == 1 && aantalSpelers == 3){
                    decks[0].push(pakstapel.splice(0,5))
                }else {
                    decks[1].push(pakstapel.splice(0,5))
                }
                beurt = beurt + spelrichting
                soortGespeeldeKaart = keuzeSoort
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart) {
                opgelegd = 'ja'
            } else {
                return 'Deze kaart kan niet gespeeld worden'
            }
            if (opgelegd == 'ja'){
                const index = decks[2].indexOf(geselecteerdeKaart)
                pakstapel.push(decks[2].splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (nummerGeselecteerdeKaart != '7' || nummerGeselecteerdeKaart != '8'){ 
                    beurt = beurt + spelrichting
                }
                winnaar()
                opgelegd = 'nee'
            }
        case 4:
            if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'A') {
                opgelegd = 'ja'
                spelrichting = spelrichting * -1
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '2'){
                opgelegd = 'ja'
                if (spelrichting == 1){
                    deck[0].push(pakstapel.splice(0,2))
                }else {
                    deck[2].push(pakstapel.splice(0,2))
                }
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '8') {
                opgelegd = 'ja'
                beurt = 2    
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'B') {
                const index = decks[3].indexOf(geselecteerdeKaart)
                pakstapel.push(decks[3].splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                soortGespeeldeKaart = keuzeSoort
                beurt = beurt + spelrichting
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'J') {
                const index = decks[3].indexOf(geselecteerdeKaart)
                pakstapel.push(decks[3].splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (spelrichting == 1){
                    decks[0].push(pakstapel.splice(0,5))
                }else {
                    decks[2].push(pakstapel.splice(0,5))
                }
                beurt = beurt + spelrichting
                soortGespeeldeKaart = keuzeSoort
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart) {
                opgelegd = 'ja'
            } else {
                return 'Deze kaart kan niet gespeeld worden'
            }
            if (opgelegd == 'ja'){
                const index = decks[3].indexOf(geselecteerdeKaart)
                pakstapel.push(decks[3].splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (nummerGeselecteerdeKaart != '7' || nummerGeselecteerdeKaart != '8'){ 
                    beurt = beurt + spelrichting
                }
                winnaar()
                opgelegd = 'nee'
            }        
    }   
}

// zorgt dat er een kaart bij komt wanneer deze gepakt wordt 
function kaartPakken() {
    switch (beurt) {
        case 1: 
            decks[0].push(pakstapel.splice(0, 1)) 
        case 2:
            decks[1].push(pakstapel.splice(0, 1))
        case 3:
            decks[2].push(pakstapel.splice(0, 1))
        case 4:
            decks[3].push(pakstapel.splice(0, 1))  
    }
    beurt = beurt + spelrichting
}
// controleert of er een winnaar is en wie dit is
let gameOver = false
positieWinnaar = 0
function winnaar(){
    if (decks[0].length == 0) {
        positieWinnaar =+ 1
        switch (aantalSpelers) {
            case 2: 
                gameOver = true
                return 'Gefeliciteerd met de ' + positieWinnaar + 'e plek'
            case 3:
                deck1 = deck4
                aantalSpelers = 2
                return 'Gefeliciteerd met de ' + positieWinnaar + 'e plek'
            case 4:
                deck1 = deck4
                aantalSpelers = 3
                return 'Gefeliciteerd met de ' + positieWinnaar + 'e plek'
                
        }

    }else if (decks[1].length == 0){
        positieWinnaar =+ 1
        switch (aantalSpelers) {
            case 2:
                gameOver = true
                return 'Gefeliciteerd met de ' + positieWinnaar + 'e plek'
            case 3:
                deck2 = deck3
                aantalSpelers = 2
                return 'Gefeliciteerd met de ' + positieWinnaar + 'e plek'
            case 4:
                deck2 = deck4
                aantalSpelers = 3
                return 'Gefeliciteerd met de ' + positieWinnaar + 'e plek'
        }

    }else if (decks[2].length == 0){
        positieWinnaar =+ 1
        switch (aantalSpelers) {
            case 3: 
                aantalSpelers = 2
                return 'Gefeliciteerd met de ' + positieWinnaar + 'e plek'
            case 4:
                deck3 = deck4
                aantalSpelers = 3
                return 'Gefeliciteerd met de ' + positieWinnaar + 'e plek'
        }

    }else if (decks[3].length == 0){
        positieWinnaar =+ 1
        aantalSpelers = 3
        return 'Gefeliciteerd met de ' + positieWinnaar + 'e plek'
    } 
}

//console.log(deck1.length)
console.log('geselecteerdeKaart: ' + geselecteerdeKaart)
console.log('Beurt: ' + beurt)
console.log('gespeelde kaart = ' + gespeeldeKaart)

console.log('Beurt: ' + beurt)
console.log('geselecteerdeKaart: ' + geselecteerdeKaart)
console.log('gespeelde kaart = ' + gespeeldeKaart)
//console.log(deck2)
console.log(kaarten)
