var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EnemySchema = new Schema(
{
    name: String,
    health: Number
}
);

var Enemy = mongoose.model('Enemy',EnemySchema);

module.exports = Enemy;
