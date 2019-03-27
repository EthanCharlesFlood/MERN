const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//nsql schema represents json like object

const WorkspaceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('users', WorkspaceSchema);