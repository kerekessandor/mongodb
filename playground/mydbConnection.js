const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Learn', function (error, db) {
    if (error) {
        console.log(error);
        return;
    }

    console.log('Connected to mongodb');

    var users = db.collection('Users');

    // users.insertOne(
    //     {
    //         name: 'Kerekes Sandor',
    //         email: 'kerekessandor@yahoo.com',
    //         phone: '0747984921'
    //     }
    // ).then(function (response) {
    //     console.log(JSON.stringify(response.ops, undefined, 2));
    // }, function (error) {
    //     console.log(error);
    // })

    //delete one
    // db.collection('Users').deleteOne({name: 'Kerekes Sandor'}).then(function (res){
    //     console.log(res);
    // }, function (error) {
    //     console.log(error);
    // })

    // users.find().toArray().then(function (res) {
    //     console.log(JSON.stringify(res, undefined, 2));
    // }, function (error) {
    //     console.log(error);
    // });

    // users.find().count().then(function (res) {
    //     console.log(res);
    // }, function (error) {
    //     console.log(error);
    // });

    // users.deleteMany({ name: 'Kerekes Sandor'}).then(function (res) {
    //     console.log(res.deletedCount);
    // }, function (error) {
    //     console.log(error);
    // })

    users.findOneAndUpdate(
        {
            _id: new ObjectID("59a4047f37a5b77818fd82fb")
        }, {
            $set: { email: 'kerekessandor87@gmail.com'},
            $inc: { age: 1 }
        }, {
            returnOriginal: false
        }
    ).then(function (res) {
        console.log(res);
    }, function (error) {
        console.log(error);
    })


    db.close();
})