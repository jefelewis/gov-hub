// Imports: Mongoose
const MONGOOSE = require('mongoose');


// Mongoose: Schema
const SCHEMA = MONGOOSE.Schema;

// Mongoose: Book Schema
const BOOKSCHEMA = new SCHEMA({
  name: {type: String, required: true},
  genre: {type: String, required: true},
  authorId: {type: String, required: true},
});


// Exports
module.exports = MONGOOSE.model('Book', BOOKSCHEMA);