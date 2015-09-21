var express = require('express')
  , app = express()
  , http = require('http').Server(app)
  , io = require('socket.io')(http);
  ;

app.use('/public', express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
  console.log('A user connected');
  socket.on('disconnect', function(){
    console.log('A user disconnected')
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('Server listening at port 3000');
});