const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User.js');
const Message = require('./message.js');

//nsql schema represents json like object

const ChannelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    private: {
        type: Boolean,
        required: true
    }
    users: [User],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('channels', ChannelSchema);