var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();
server.use(jsonParser);

server.use(express.static(__dirname));

server.get("/", function (req, resp) {
    console.log('Lesson 19');
    resp.send("<h1>Welcom to Lesson 17</h1>")
});

server.get('/user-data', function (request, response) {
    var obj = request.query;
    
    for (var k in obj) {
        console.log(obj[k] + ' ValidatedByGET');
    };
    
    //console.log(obj);
    response.send(obj);
});

server.use(bodyParser.urlencoded({
extended: true
}));

server.post('/user-data', function (request, response) {
    var obj = request.body;
    for (var k in obj) {
        console.log(obj[k] + ' ValidatedByGET');
    };
    response.send(obj);
});


server.listen(3001);

