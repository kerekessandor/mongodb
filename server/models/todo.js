const mongoose = require('mongoose');

var Todo = mongoose.model('Todo',
{
    text: {
        type: String,
        required: [true, 'todo is missing'],
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
}
);

module.exports = {
    Todo
}