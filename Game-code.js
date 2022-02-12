
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
console.log(decks[0])
//console.log(deck1.length)
console.log('geselecteerdeKaart: ' + geselecteerdeKaart)
console.log('Beurt: ' + beurt)
console.log('gespeelde kaart = ' + gespeeldeKaart)

console.log('Beurt: ' + beurt)
console.log('geselecteerdeKaart: ' + geselecteerdeKaart)
console.log('gespeelde kaart = ' + gespeeldeKaart)
//console.log(deck2)
console.log(kaarten)