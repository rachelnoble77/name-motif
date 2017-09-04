var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var cors = require('cors');
var vowels = require('./vowels');

//

app.use(cors());
app.use(bodyParser.json());

app.get('/api/hello', function(request, response) {
    console.log('i am getting called')
     response.send('ginger')
 })

 app.post('/api/vowels', function(req, res){
     var first = req.body.first;
     var last = req.body.last;
     var notes = {
         firstVowels: vowels.vowelGenerator(first),

     };

     //process data
     res.json(notes)
 })

app.listen(3030, function(){
    console.log("I am connected")
})

