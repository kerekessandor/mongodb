const express = require('express');
const bodyParse = require('body-parser');

const mongoose = require('./db/mongoose');
var Todo = require('./models/todo');
var User = require('./models/user');


var app = express();

app.use(bodyParse.json());

app.post('/todos', function (request, response) {
    var todo = new Todo.Todo({
        text: request.body.text,
        completed: request.body.completed
    })

    todo.save().then(function (res) {
        response.send(res);
    }, function (error) {
        response.status(400);
        response.send(error);
    })
});

app.listen(5000, function () {
    console.log('App started on port 3000');
});