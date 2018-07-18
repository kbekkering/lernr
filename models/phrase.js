var mongoose = require("mongoose");

// DB SCHEMA SETUP
var phraseSchema = new mongoose.Schema({
    german: String,
    english: String
});

module.exports = mongoose.model("Phrase", phraseSchema);