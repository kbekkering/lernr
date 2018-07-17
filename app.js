require("dotenv").config();

var mongoose	= require("mongoose"),
	express		= require("express"),
	app			= express();

mongoose.connect(process.env.DATABASEURL);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.send("Hallo, auch Deutsch?");
})

app.listen(3000, function(req, res){
	console.log("Guten Tag, wie geht's?");
})
