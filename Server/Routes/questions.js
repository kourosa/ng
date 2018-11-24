var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.send('sasa works');
})

var mongojs= require('mongojs');

//
var dburl = '127.0.0.1:27017/mydb';// or just mydb
var collection = 'questions';




var da;
var db = mongojs('mydb');
var mycollection = db.collection('aaa');
db.aaa.insert([{name: 'kouros'},{user:'aaa', pass:'oo'}], function(err,docs){
if(err) console.log(err)
else console.log('data added')
da= docs;
});

db.questions.find( function(err,docs){
    if(err) console.log(err) 

    da= docs;
    });
///end
/*
router.get('/questions', function(req, res, next){
    db.questions.find(function(err,questions){
        //if(err) console.log(err)
        res.json(questions)
        });
  
});

router.get('/question/:id', function(req, res, next){
    db.questions.findOne({ __id : mongojs.ObjectId(req.params.id)} ,function(err,question){
       // if(err) console.log(err)
        res.json(question)
        });
  
});

router.get('/test', function(req, res, next){
    db.questions.findOne({name : "kouros"} ,function(err,question){
       // if(err) console.log(err)
        res.json(question)
        });
  
});
*/
module.exports=router;