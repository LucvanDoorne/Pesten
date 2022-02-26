var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var aantalSpelers = 0
var spelerNummer = 0

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
        spelerNummer: spelerNummer
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