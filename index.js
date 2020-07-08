
let express = require('express'),
    path = require('path');
var app = express();
let server = require('http').Server(app);
const PORT = process.env.PORT||'8080'



server.listen(PORT,() => {
	console.log("App is running on port" + PORT);
});

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res, next){
    res.sendStatus(200);
});

app.get('/blog.html', function(req, res,next){
    res.sendFile(path.join(__dirname+"/blog.html"));
});


app.post('/contact', function(req, res, next){

});