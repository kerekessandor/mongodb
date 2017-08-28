const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

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

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then(function (res){
//     console.log('Saved todo', res);
// }, function (error) {
//     console.log('Unable to save todo');
// });


// var otherTodo = new Todo({
//     text: '               ez egy proba                 '
// });

// otherTodo.save().then(function (res) {
//     console.log(res);
// }, function (error) {
//     console.log(JSON.stringify(error.errors.text.message, undefined, 2));
// });

//User model {email, password}
//email - requiered, trim, string, min length - 1

var User = mongoose.model('User', {
    email: {
        type: String,
        required: [ true, 'Email address is required' ],
        minLength: 1,
        trim: true
    }
});

var newUser = new User({
    email: 'kerekessandor@yahoo.com'
});

newUser.save().then(function (res) {
    console.log(res);
}, function (error) {
    console.log(JSON.stringify(error.message, undefined, 2));
});