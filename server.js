var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var players = {}

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected' + socket.id);

    // maakt een nieuwe speler aan en voegt het aan het players object toe
    players[socket.id] = {
        playerId: socket.id,
    }
    
    var gespeeldeKaart
  
    // stuurt het players object naar de nieuwe speler
    socket.emit('currentPlayers', players);
    // stuurt de gespeelde kaart
    socket.emit('gespeeldeKaartUpdate', gespeeldeKaart)

    // update alle andere spelers van de nieuwe spelers
    socket.broadcast.emit('newPlayer', players[socket.id]);

    socket.on('disconnect', function () {
        console.log('user disconnected');
        // verwijdert de speler van het players object
        delete players[socket.id];
        // stuurt de informatie naar alle spelers om deze speler te verwijderen
        io.emit('disconnect', socket.id);
        });

    socket.on('gespeeldeKaartChange', function() {
        io.emit('gespeeldeKaartUpdate', gespeeldeKaart)  
        gespeeldeKaartImage = this.add.image(540, 290, gespeeldeKaart['kaart'])
    })
  });

server.listen(8081, function () {
  console.log(`Listening on ${server.address().port}`);
});