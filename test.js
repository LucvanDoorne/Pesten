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

console.log(gespeeldeKaart)
console.log(decks[0].length)
console.log(decks[0][0])



/* oude code




cards(){
    let deck1Image = []
    for (var i = 0; i < decks[0].length; i++){
        let sprite = this.add.sprite(640 - decks[0].length*20 + 20 + i*40, 600, decks[0][i]).setInteractive()
        sprite.depth = 1
        sprite.scale = 0.2
        deck1Image.push(sprite)
        console.log(sprite)
    }
    console.log(deck1Image)
}*/