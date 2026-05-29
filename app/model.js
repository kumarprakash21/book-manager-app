var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    name: String,
    isbn: String,
    author: String,
    pages: Number
});

module.exports = mongoose.model('Book', bookSchema);
