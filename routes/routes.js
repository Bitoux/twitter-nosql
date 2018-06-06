var Twitter = require('twitter');
var router = express.Router();
var assert = require('assert');

// Configure the database
let dbConfig = require('./config/database.config.js');
let mongoose = require('mongoose');
app.set('superSecret', dbConfig.secret);

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
    scrapper.scrapper();
});


var appRouter = function (app) {
    app.get("/", function(req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    app.get("/tweets", function(req, res){
        require('dotenv').load();

        var client = new Twitter({
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        });

        client.get('search/tweets', {q: 'NBAFinals'})
        .then(function (tweet) {
            console.log(tweet);
            res.status(200).send(tweet);
        })
        .catch(function (error) {
            throw error;
        });

    });
}
  
module.exports = appRouter;