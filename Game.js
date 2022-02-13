var theme = 'wit'
var cards
class Game extends Phaser.Scene {
    constructor() {
        super({key:"Game"})
    }


preload() {
    this.load.image('background', 'assets3/Background.jpg')
    this.load.image('H2', 'assets3/cards/wit/witharten2.png')
    this.load.image('H3', 'assets3/cards/wit/witharten3.png')
    this.load.image('H4', 'assets3/cards/wit/witharten4.png')
    this.load.image('H5', 'assets3/cards/wit/witharten5.png')
    this.load.image('H6', 'assets3/cards/wit/witharten6.png')
    this.load.image('H7', 'assets3/cards/wit/witharten7.png')
    this.load.image('H8', 'assets3/cards/wit/witharten8.png')
    this.load.image('H9', 'assets3/cards/wit/witharten9.png')
    this.load.image('H1', 'assets3/cards/wit/witharten10.png')
    this.load.image('HA', 'assets3/cards/wit/withartenA.png')
    this.load.image('HB', 'assets3/cards/wit/withartenJ.png')
    this.load.image('HH', 'assets3/cards/wit/withartenK.png')
    this.load.image('HV', 'assets3/cards/wit/withartenQ.png')
    this.load.image('K2', 'assets3/cards/wit/witklaver2.png')
    this.load.image('K3', 'assets3/cards/wit/witklaver3.png')
    this.load.image('K4', 'assets3/cards/wit/witklaver4.png')
    this.load.image('K5', 'assets3/cards/wit/witklaver5.png')
    this.load.image('K6', 'assets3/cards/wit/witklaver6.png')
    this.load.image('K7', 'assets3/cards/wit/witklaver7.png')
    this.load.image('K8', 'assets3/cards/wit/witklaver8.png')
    this.load.image('K9', 'assets3/cards/wit/witklaver9.png')
    this.load.image('K1', 'assets3/cards/wit/witklaver10.png')
    this.load.image('KA', 'assets3/cards/wit/witklaverA.png')
    this.load.image('KB', 'assets3/cards/wit/witklaverJ.png')
    this.load.image('KH', 'assets3/cards/wit/witklaverK.png')
    this.load.image('KV', 'assets3/cards/wit/witklaverQ.png')
    this.load.image('R2', 'assets3/cards/wit/witruiten2.png')
    this.load.image('R3', 'assets3/cards/wit/witruiten3.png')
    this.load.image('R4', 'assets3/cards/wit/witruiten4.png')
    this.load.image('R5', 'assets3/cards/wit/witruiten5.png')
    this.load.image('R6', 'assets3/cards/wit/witruiten6.png')
    this.load.image('R7', 'assets3/cards/wit/witruiten7.png')
    this.load.image('R8', 'assets3/cards/wit/witruiten8.png')
    this.load.image('R9', 'assets3/cards/wit/witruiten9.png')
    this.load.image('R1', 'assets3/cards/wit/witruiten10.png')
    this.load.image('RA', 'assets3/cards/wit/witruitenA.png')
    this.load.image('RB', 'assets3/cards/wit/witruitenJ.png')
    this.load.image('RH', 'assets3/cards/wit/witruitenK.png')
    this.load.image('RV', 'assets3/cards/wit/witruitenQ.png')
    this.load.image('S2', 'assets3/cards/wit/witschoppen2.png')
    this.load.image('S3', 'assets3/cards/wit/witschoppen3.png')
    this.load.image('S4', 'assets3/cards/wit/witschoppen4.png')
    this.load.image('S5', 'assets3/cards/wit/witschoppen5.png')
    this.load.image('S6', 'assets3/cards/wit/witschoppen6.png')
    this.load.image('S7', 'assets3/cards/wit/witschoppen7.png')
    this.load.image('S8', 'assets3/cards/wit/witschoppen8.png')
    this.load.image('S9', 'assets3/cards/wit/witschoppen9.png')
    this.load.image('S1', 'assets3/cards/wit/witschoppen10.png')
    this.load.image('SA', 'assets3/cards/wit/witschoppenA.png')
    this.load.image('SB', 'assets3/cards/wit/witschoppenJ.png')
    this.load.image('SH', 'assets3/cards/wit/witschoppenK.png')
    this.load.image('SV', 'assets3/cards/wit/witschoppenQ.png')
    this.load.image('JJ', 'assets3/cards/wit/witjoker.png')
    this.load.image('Arrow', 'assets3/arrow.png')
    this.load.image('Table', 'assets3/table.png')
    this.load.image('gray-chair', 'assets3/gray-chair.png')
    this.load.image('brown-chair', 'assets3/brown-chair.png')
    this.load.image('backcard', 'assets3/backcard.jpg')
    this.load.spritesheet('button', 'assets3/button.png', {frameWidth: 860, frameHeight: 378})
    //this.load.image('button-pushed', 'asstets3/button-pushed.png')

}

create (){
    cards = this.add.group()
    cards.scale = 0.1
    var pointer = this.input.activePointer
    //achtergrond
    var background = this.add.image(640,360,'background')
    background.scale = 0.34

    //stoelen
    switch (aantalSpelers) {
        case 2: 
            var stoel1 = this.add.image(170, 38, 'gray-chair')
            stoel1.scale = 0.17
            var stoel2 = this.add.image(170, 302, 'gray-chair')
            stoel2.scale = 0.17
            stoel2.rotation = 3.13
        case 3:
            var stoel1 = this.add.image(170, 38, 'gray-chair')
            stoel1.scale = 0.17
            var stoel2 = this.add.image(60, 250, 'gray-chair')
            stoel2.scale = 0.17
            stoel2.rotation = 4.1
            var stoel3 = this.add.image(277, 250, 'gray-chair')
            stoel3.scale = 0.17
            stoel3.rotation = 2.2
        case 4:
            var stoel1 = this.add.image(170, 38, 'gray-chair')
            stoel1.scale = 0.17
            var stoel2 = this.add.image(170, 302, 'gray-chair')
            stoel2.scale = 0.17
            stoel2.rotation = 3.13
            var stoel3 = this.add.image(38, 170, 'gray-chair')
            stoel3.scale = 0.17
            stoel3.rotation = 4.7
            var stoel4 = this.add.image(302, 170, 'gray-chair')
            stoel4.scale = 0.17
            stoel4.rotation = 1.57
    }
    //tafel
    var tafel = this.add.image(170, 170, 'Table')
    tafel.scale = 0.5

    //maakt de gespeelde kaart en de pakstapel afbeelding
    var gespeeldeKaartImage = this.add.image(540, 360, gespeeldeKaart)
    gespeeldeKaartImage.scale = 0.2
    cards.add(gespeeldeKaartImage)
    var backcard = this.add.sprite(730, 360, 'backcard')
    backcard.scale = 0.2
    backcard.setInteractive()
        backcard.on('pointerdown', function(event) {
            if (pointer.leftButtonDown()){
            decks[0].push(pakstapel.splice(0,1))
            }
        })

    //laad het deck in
    var decklengte = decks[0].length 
    var deck1 = []
    for (var i = 0; i <= decks[0].length - 1; i++) {
        deck1.push(this.add.sprite(640 - decklengte*20 + 20 + i*40, 600, decks[0][i]).setInteractive())
        deck1[i].scale = 0.2
    }
    
    deck1[i].on('pointerover', function(event) {
        deck1[i].y = 560
        
    })
    deck1[i].on('pointerout', function(event) {
        deck1[i].y = 600
    })
    
    
    
    //buttons
    var button = this.add.sprite(1100, 600, 'button')
    button.scale = 0.3
    button.setInteractive()
    button.on('pointerover', function(event) {
        button.setFrame(1)
    })
    button.on('pointerout', function(event) {
        button.setFrame(0)
    })

}

update(){
    var decklengte = decks[0].length
    var deck1 = []
    for (var i = 0; i <= decks[0].length - 1; i++) {
        deck1.push(this.add.sprite(640 - decklengte*20 + 20 + i*40, 600, decks[0][i]))
        deck1[i].scale = 0.2
        deck1[i].setInteractive()
    }
}

}



// variabele die nodig zijn
var aantalSpelers = 4
let beurt = 1
var gespeeldeKaart
let spelrichting = 1
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







/*
// zet overige kaarten in 'pakstapel'
var pakstapel = kaarten

// verandert de speelrichting
function aas() {
    if (spelrichting == 'rechts') {
        spelrichting = 'links'
    } else {
        spelrichting = 'rechts'
    }
}
var geselecteerdeKaart = 'K9'

// zorgt ervoor dat de soort en nummer van een bepaalde kaart gescheiden wordt
const soortGespeeldeKaart = gespeeldeKaart[0].charAt(0)
const nummerGespeeldeKaart = gespeeldeKaart[0].charAt(1)
const soortGeselecteerdeKaart = geselecteerdeKaart[0].charAt(0)
const nummerGeselecteerdeKaart = geselecteerdeKaart[0].charAt(1)

// regelt wie er aan de beurt is
function beurt1() {
    if (spelrichting == 'links' && aantalSpelers == 4) {
        beurt = 4
    }else if (spelrichting == 'links' && aantalSpelers == 3) {
        beurt = 3
    }else {
        beurt = 2
    }
}
function beurt2(){
    if (spelrichting == 'rechts' && aantalSpelers >= 3){
        beurt = 3
    }else {
        beurt = 1
    }
}

function beurt3(){
    if (spelrichting == 'rechts' && aantalSpelers == 4) {
        beurt = 4
    }else if (spelrichting == 'rechts' && aantalSpelers == 3) {
        beurt = 1
    }else {
        beurt = 2
    }
}
function beurt4(){
    if (spelrichting == 'rechts') {
        beurt = 1
    }else { 
        beurt = 3
    }
}

// checkt of de geselecteerde kaart opgegooid kan worden en gooit deze op als het kan met de benodigde actie van een eventuele speciale kaart
function checken() {
    switch (beurt){
        case 1: 
            if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'A') {
                aas()
                if (aantalSpelers == '4' && spelrichting == 'rechts') {
                    beurt = 2
                }else if (aantalSpelers == '4' && spelrichting == 'links') {
                    beurt = 4
                }else if (aantalSpelers == '3' && spelrichting == 'rechts') {
                    beurt = 2
                }else if (aantalSpelers == '3' && spelrichting == 'links') {
                    beurt = 3
                }
                opgelegd = 'ja'

            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '2'){
                opgelegd = 'ja'
                if (spelrichting == 'links' && aantalSpelers == 4){
                    deck4.push(pakstapel.splice(0,2))
                }else if (spelrichting == 'links' && aantalSpelers == 3){
                    deck3.push(pakstapel.splice(0,2))
                }else {
                    deck2.push(pakstapel.splice(0,2))
                }
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '8') {
                opgelegd = 'ja'
                if (aantalSpelers == '4') {
                    beurt = 3
                }else if (aantalSpelers == '3' && spelrichting == 'rechts') {
                    beurt = 3
                }else if (aantalSpelers == '3' && spelrichting == 'links') {
                    beurt = 2
                }    
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'B') {
                const index = deck1.indexOf(geselecteerdeKaart)
                pakstapel.push(deck1.splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                soortGespeeldeKaart = keuzeSoort
                beurt1()
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'J') {
                const index = deck1.indexOf(geselecteerdeKaart)
                pakstapel.push(deck1.splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (spelrichting == 'links' && aantalSpelers == 4){
                    deck4.push(pakstapel.splice(0,5))
                }else if (spelrichting == 'links' && aantalSpelers == 3){
                    deck3.push(pakstapel.splice(0,5))
                }else {
                    deck2.push(pakstapel.splice(0,5))
                }
                beurt1()
                soortGespeeldeKaart = keuzeSoort
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart) {
                opgelegd = 'ja'
            } else {
                return 'Deze kaart kan niet gespeeld worden'
            }
            if (opgelegd == 'ja'){
                const index = deck1.indexOf(geselecteerdeKaart)
                pakstapel.push(deck1.splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (nummerGeselecteerdeKaart != '7' || nummerGeselecteerdeKaart != '8' || nummerGeselecteerdeKaart != 'A'){ 
                    beurt1()
                }
                opgelegd = 'nee'
                winnaar()
            }
        case 2:
            if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'A') {
                opgelegd = 'ja'
                aas()
                if (aantalSpelers == '4' && spelrichting == 'rechts') {
                    beurt = 3
                }else if (aantalSpelers == '4' && spelrichting == 'links') {
                    beurt = 1
                }else if (aantalSpelers == '3' && spelrichting == 'rechts') {
                    beurt = 3
                }else if (aantalSpelers == '3' && spelrichting == 'links') {
                    beurt = 1
                }
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '2'){
                opgelegd = 'ja'
                if (spelrichting == 'rechts' && aantalSpelers == 3){
                    deck3.push(pakstapel.splice(0,2))
                }else if (spelrichting == 'rechts' && aantalSpelers == 4){
                    deck4.push(pakstapel.splice(0,2))
                }else {
                    deck1.push(pakstapel.splice(0,2))
                }
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '8') {
                opgelegd = 'ja'
                if (aantalSpelers == '4') {
                    beurt = 4
                }else if (aantalSpelers == '3' && spelrichting == 'rechts') {
                    beurt = 1
                }else if (aantalSpelers == '3' && spelrichting == 'links') {
                    beurt = 3
                }    
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'B') {
                const index = deck2.indexOf(geselecteerdeKaart)
                pakstapel.push(deck2.splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                soortGespeeldeKaart = keuzeSoort
                beurt2()
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'J') {
                const index = deck2.indexOf(geselecteerdeKaart)
                pakstapel.push(deck2.splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (spelrichting == 'rechts' && aantalSpelers == 4){
                    deck3.push(pakstapel.splice(0,5))
                }else if (spelrichting == 'rechts' && aantalSpelers == 3){
                    deck3.push(pakstapel.splice(0,5))
                }else {
                    deck1.push(pakstapel.splice(0,5))
                }
                beurt2()
                soortGespeeldeKaart = keuzeSoort
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart) {
                opgelegd = 'ja'
            } else {
                return 'Deze kaart kan niet gespeeld worden'
            }
            if (opgelegd == 'ja'){
                const index = deck2.indexOf(geselecteerdeKaart)
                pakstapel.push(deck2.splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (nummerGeselecteerdeKaart != '7' || nummerGeselecteerdeKaart != '8' || nummerGeselecteerdeKaart != 'A'){ 
                    beurt2()
                }
                opgelegd = 'nee'
                winnaar()
            }
        case 3:
            if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'A') {
                opgelegd = 'ja'
                aas()
                if (aantalSpelers == '4' && spelrichting == 'rechts') {
                    beurt = 4
                }else if (aantalSpelers == '3' && spelrichting == 'rechts') {
                    beurt = 1
                }else { 
                    beurt = 2
                }
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '2'){
                opgelegd = 'ja'
                if (spelrichting == 'rechts' && aantalSpelers == 4){
                    deck4.push(pakstapel.splice(0,2))
                }else if (spelrichting == 'rechts' && aantalSpelers == 3){
                    deck1.push(pakstapel.splice(0,2))
                }else {
                    deck2.push(pakstapel.splice(0,2))
                }
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '8') {
                opgelegd = 'ja'
                if (aantalSpelers == '4') {
                    beurt = 1
                }else if (aantalSpelers == '3' && spelrichting == 'rechts') {
                    beurt = 2
                }else if (aantalSpelers == '3' && spelrichting == 'links') {
                    beurt = 1
                }    
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'B') {
                const index = deck3.indexOf(geselecteerdeKaart)
                pakstapel.push(deck3.splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                soortGespeeldeKaart = keuzeSoort
                beurt3()
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'J') {
                const index = deck3.indexOf(geselecteerdeKaart)
                pakstapel.push(deck3.splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (spelrichting == 'rechts' && aantalSpelers == 4){
                    deck4.push(pakstapel.splice(0,5))
                }else if (spelrichting == 'rechts' && aantalSpelers == 3){
                    deck1.push(pakstapel.splice(0,5))
                }else {
                    deck2.push(pakstapel.splice(0,5))
                }
                beurt3()
                soortGespeeldeKaart = keuzeSoort
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart) {
                opgelegd = 'ja'
            } else {
                return 'Deze kaart kan niet gespeeld worden'
            }
            if (opgelegd == 'ja'){
                const index = deck3.indexOf(geselecteerdeKaart)
                pakstapel.push(deck3.splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (nummerGeselecteerdeKaart != '7' || nummerGeselecteerdeKaart != '8' || nummerGeselecteerdeKaart != 'A'){ 
                    beurt3()
                }
                winnaar()
                opgelegd = 'nee'
            }
        case 4:
            if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'A') {
                opgelegd = 'ja'
                aas()
                if (spelrichting == 'rechts') {
                    beurt = 1
                }else { 
                    beurt = 3
                }
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '2'){
                opgelegd = 'ja'
                if (spelrichting == 'rechts'){
                    deck1.push(pakstapel.splice(0,2))
                }else {
                    deck3.push(pakstapel.splice(0,2))
                }
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == '8') {
                opgelegd = 'ja'
                beurt = 2    
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'B') {
                const index = deck4.indexOf(geselecteerdeKaart)
                pakstapel.push(deck4.splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                soortGespeeldeKaart = keuzeSoort
                beurt4()
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart && nummerGeselecteerdeKaart == 'J') {
                const index = deck4.indexOf(geselecteerdeKaart)
                pakstapel.push(deck4.splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (spelrichting == 'rechts'){
                    deck1.push(pakstapel.splice(0,5))
                }else {
                    deck3.push(pakstapel.splice(0,5))
                }
                beurt4()
                soortGespeeldeKaart = keuzeSoort
                winnaar()
            }else if (soortGespeeldeKaart == soortGeselecteerdeKaart || nummerGespeeldeKaart == nummerGeselecteerdeKaart) {
                opgelegd = 'ja'
            } else {
                return 'Deze kaart kan niet gespeeld worden'
            }
            if (opgelegd == 'ja'){
                const index = deck4.indexOf(geselecteerdeKaart)
                pakstapel.push(deck4.splice(index, 1))
                shuffle(pakstapel)
                gespeeldeKaart = geselecteerdeKaart
                if (nummerGeselecteerdeKaart != '7' || nummerGeselecteerdeKaart != '8' || nummerGeselecteerdeKaart != 'A'){ 
                    beurt4()
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
            deck1.push(pakstapel.splice(0, 1)) 
            beurt1()
        case 2:
            deck2.push(pakstapel.splice(0, 1))
            beurt2()
        case 3:
            deck3.push(pakstapel.splice(0, 1))
            beurt3()
        case 4:
            deck4.push(pakstapel.splice(0, 1))
            beurt4()
    }
}
// controleert of er een winnaar is en wie dit is
let gameOver = false
positieWinnaar = 0
function winnaar(){
    if (deck1.length == 0) {
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

    }else if (deck2.length == 0){
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

    }else if (deck3.length == 0){
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

    }else if (deck4.length == 0){
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
*/