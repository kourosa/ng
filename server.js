
/*try {
    // a path we KNOW is totally bogus and not a module
    var express= require('express')
   }
   catch (e) {
    console.log('oh no big error')
    console.log(e)
   }*/
var express = require('express')
var path = require('path')
//var bodyParser = require('body-parser') 
//var index = require('./server/routes/index')
var questions = require('./server/routes/questions')

var port=3000;

var app = express();

app.use(express.static(path.join(__dirname,'dist')));
app.use('/api',questions);

app.get('/',function(req,res){

    res.sendFile(path.join(__dirname,'dist/index.html'));
})

//app.set('views', path.join(__dirname,'views'));
//app.set('view engine', 'ejs');
//app.engine('html',require('ejs').renderFile);


//app.use(express.static(path.join(__dirname,'client')));
//app.use(express.static(path.join(__dirname,'client/src')));

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));


//app.use('/',index);


app.listen(port, function(){
    console.log('server is working at port '+port);
});





