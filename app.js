var express = require('express')
  , app = express()
  , http = require('http').Server(app)
  ;

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

http.listen(3000, function(){
  console.log('Server listening at port 3000');
});