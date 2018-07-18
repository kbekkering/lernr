require("dotenv").config();                       // wouldn't want anything sensitive to end up on github

var methodOverride = require("method-override"),  // overide form actions
    bodyParser = require("body-parser"),          // bodyparser makes it possible to access the body from POST messages
    mongoose = require("mongoose"),               // mongoose allows express to connect to MongoDB
    seedDB  = require("./seeds"),                 // drops and then fills the database with dummy info
    express = require("express"),
    app = express();

mongoose.connect(process.env.DATABASEURL);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var Phrase = require("./models/phrase");

// seedDB(); // Seed the DB

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/language", function(req, res){
	Phrase.find({}, function(err, allPhrases){
    if(err){
      console.log(err);
    } else {
      console.log(allPhrases);
      res.render("index", {phrases: allPhrases});
    }
  });
  
});

app.listen(3000, function(req, res){
	console.log("Guten Tag, wie geht's? Ich bin am Port 3000");
});
