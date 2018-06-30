var exp = require('express');
var http = require('http'); 
var path = require('path'); 

var app = exp(); 
var serv = http.createServer(app); 

var port = 1234; 
serv.listen(port, ()=> {
	console.log('listening on port:' + port); 
}); 

app.use(exp.static(path.join(__dirname, 'www')));
app.use(exp.static(path.join(__dirname, 'node_modules/phaser/dist')));
app.use(exp.static(path.join(__dirname, 'www')));
