const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//nsql schema represents json like object

const ChannelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('channels', ChannelSchema);