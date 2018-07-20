// Imports: Mongoose
const MONGOOSE = require('mongoose');


// Mongoose: Schema
const SCHEMA = MONGOOSE.Schema;

// Mongoose: Author Schema
const AUTHORSCHEMA = new SCHEMA({
  name: {type: String, required: true},
  age: {type: Number, required: true}
});


// Exports
module.exports = MONGOOSE.model('Author', AUTHORSCHEMA);