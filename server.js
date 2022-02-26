var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var players = {};

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    aantalSpelers++
    spelerNummer++
    console.log('Speler ' + spelerNummer + ' is verbonden   aantal spelers verbonden: ' + aantalSpelers);
    // create a new player and add it to our players object
    players[socket.id] = {
        playerId: socket.id,
        spelerNummer: spelerNummer,
        deck: decks[spelerNummer - 1]
    };
    // send the players object to the new player
    socket.emit('currentPlayers', players);

    // update all other players of the new player
    socket.broadcast.emit('newPlayer', players[socket.id]);

    // when a player disconnects, remove them from our players object
    socket.on('disconnect', function () {
        aantalSpelers--
        console.log('Speler ' + players[socket.id]['spelerNummer'] + ' is niet meer verbonden   aantal spelers nog verbonden: ' + aantalSpelers);
        delete players[socket.id]
        
        // remove this player from our players object
        delete players[socket.id];
        // emit a message to all players to remove this player

        //io.emit('disconnect', socket.id);
    });
});

server.listen(8748, function () {
    console.log(`Listening on ${server.address().port}`);
});

// code voor in de server
var beurt = 1
var spelrichting = 1
var decks = []
var pakstapel = []
var gespeeldeKaart
var aantalSpelers = 0
var penalty = 0
var spelerNummer = 0
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
