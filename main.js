
console.log("Organism Abathur with you");


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  var Enemy = require('./js/Models/Enemy.js')

  var ninja = new Enemy({name: "Ninja2", health: 10})
  ninja.save(function(error,ninja)
  {
    if (error) return console.error("Error saving ninja");
    console.log("Save complete");

  })
});






console.log("~ Mutation Complete ~");
