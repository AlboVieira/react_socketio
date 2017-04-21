
const app = require('express')();
const http = require('http').Server(app);

//passing the http to socket.io
const io = require('socket.io')(http);

//set a url default
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('user connected');
    socket.on('disconnect', function () {
       console.log('user disconnected');
    });

    socket.on('init', function () {
        console.log('init');
        io.emit('load', { currentUser: {id:1,name:"Albo"},  users:[{id:1,name: "Albo"},{id:2,name: "Jonas"}]});
    });

    socket.on('send:message', function (msg) {
        console.log('Message: ' + msg);
        //io.emit('send:message', msg);
    });
    //emits for a socket connection
    //socket.broadcast.emit('hi');
    //emits for everyone

});



//starts to listen port 3000
http.listen(3000, function(){
    console.log('listening on *:3000');
});