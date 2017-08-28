// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function (error, db) {
    if (error) {
        console.log('Unable to connect to mongodb server.');
        return;
    }

    console.log('Connected to the mongodb server');

    // db.collection('Todos').insertOne(
    //     {
    //         text: 'Something to do',
    //         completed: false
    //     },
    //     function (error, result) {
    //         if (error) {
    //             console.log('Unable to insert todo', error);
    //             return;
    //         }

    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // );

    // var users = db.collection('Users').insertOne(
    //     {
    //         name: 'Kerekes Sandor',
    //         age: 29,
    //         location: 'Kolozsvar'
    //     },
    //     function (error, result) {
    //         if (error) {
    //             console.log('Unable to insert user', error);
    //             return;
    //         }
    //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    //     }
    // );

    db.close();
});
