// Import mongo tools / library
const {MongoClient, ServerApiVersion} = require('mongodb');

// connect to Mongo/Atlas USING a URL Connection string
// const uri = 'mongodb+srv://jonathanvegas:jonathanvegas@jonathancluster.ttwfp.mongodb.net/?retryWrites=true&w=majority';

const {uri} = require('./dbsecrets.js');

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});

// connet to sample_mflix database
const db = client.db('sample_mflix');

// Query    

// let's get a specific movie from the "movies" collection
// search by title for "Back to the Future"

db.collection('movies')
    .findOne({ title: "Back to the Future"}, (err, results) => {
    if(err) {
        console.error(err);
    }
    // let's output the results
    console.log(results);
    client.close(); //close connection
});
