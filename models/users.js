const { model, Schema } = require('mongoose');

module.exports = model('user', new Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number
}));