const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user: {
        type: Schema.Types.ObjectID,
        ref: 'users'
    },
    channel: {
        type: Schema.Types.ObjectID,
        ref: 'channels'
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Message = mongoose.model('messages', MessageSchema);