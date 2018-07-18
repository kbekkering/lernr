var mongoose = require("mongoose");
var Phrase = require("./models/phrase");

var data = [
  {
    german: "sitzen",
    english: "to sit"
  },
  {
    german: "laufen",
    english: "to walk"
  }
];

function seedDB(){
  Phrase.remove({}, function(err){
    data.forEach(function(data){
      Phrase.create(data, function(err, newPhrase){
        if(err){
          console.log(err);
        } else {
          //console.log(newPhrase);
        }
      });
    });  
  });
  
}

module.exports = seedDB;
