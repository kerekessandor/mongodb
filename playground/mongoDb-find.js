const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function (error, db) {
    if (error) {
        console.log('Unable to connect to db');
        return;
    }
    console.log('Connected to db');

    // db.collection('Todos').find({ _id: new ObjectID("59a2f42f88ab7807f8c0ea99") }).toArray().then(function (docs) {
    //     console.log('Todos');
    //     if (docs.length == 0) {
    //         console.log('No data found.');
    //     } else {
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }
    // }, function (error) {
    //     console.log('unable to fetch data', error);
    // });

    // db.collection('Todos').find().count().then(function (response) {
    //     console.log(response);
    // }, function (error) {
    //     console.log(error);
    // });

    db.collection('Users').find({ name: 'Kerekes' }).toArray().then(function (response) {
        if (response.length == 0) {
            console.log('no data found');
            return;
        }
        console.log(JSON.stringify(response, undefined, 2));
    }, function (error) {
        console.log(error);
    });

    db.collection('Users').find({name : 'Kerekes'}).count().then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    })

    db.close();
});