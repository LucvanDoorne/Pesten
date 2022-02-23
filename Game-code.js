
// variabele die nodig zijn
var aantalSpelers = 4
let beurt = 1
let gespeeldeKaart = ""
let spelrichting = 1
let opgelegd = 'nee'
var keuzeSoort = ''


/*
if (aantalSpelers >= 2) {
    var deck1 = []
    var deck2 = []
} else if (aantalSpelers >= 3) {
    var deck3 = []
} else if (aantalSpelers == 4) {
    var deck4 = []
}
*/
// de kaarten (let op: alle kaarten met 10 zijn genummerd als 1)
const kaarten = [
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
// geeft de spelers 7 kaarten
// maakt maakt decks aan
var decks = []
for (var i = 0; i <= aantalSpelers; i++){
    decks[i] = [kaarten.splice(0,7)]
}

/*
if (aantalSpelers >= 2) {
    var deck1 = kaarten.splice(0, 7)
    var deck2 = kaarten.splice(0, 7)
} 
if (aantalSpelers >= 3) {
    var deck3 = kaarten.splice(0, 7)
} 
if (aantalSpelers == 4) {
    var deck4 = kaarten.splice(0, 7)
}
*/

// dit is de beginnende kaart (dit mag geen pestkaart zijn)
const nummerKaarten = kaarten[0].charAt(1)
while (nummerKaarten == "A" || nummerKaarten == "2" || nummerKaarten == "7" || nummerKaarten == "8" || nummerKaarten == "J" || nummerKaarten == "B"){
    pakstapel = pakstapel.push(kaarten.splice(0,1))
    nummerKaarten = kaarten[0].charAt(1)
}
gespeeldeKaart = kaarten.splice(0,1)

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
