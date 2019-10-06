const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let User = new Schema({
    user_description: {
        type: String
    },
    user_responsible: {
        type: String
    },
    user_priority: {
        type: String
    },
    user_completed: {
        type: Boolean
    }
});
module.exports = mongoose.model('User', User);