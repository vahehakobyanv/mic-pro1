const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todosSchema = Schema ({
    content_type: {
        type: String,
        index: {require:true}
    },
    creation_date: {
      type: Date,
      default: Date.now()
    }
});

module.exports = mongoose.model('todos', todosSchema);
