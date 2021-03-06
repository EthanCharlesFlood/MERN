const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//nsql schema represents json like object

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    online: {
        type: Boolean,
        default: false
    },
    channels: {
        type: array,
        ref: "Channel",
    }
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('users', UserSchema);