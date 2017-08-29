const mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: [ true, 'Email address is required' ],
        minLength: 1,
        trim: true
    }
});

module.exports = {
    User : User
}
