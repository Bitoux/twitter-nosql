var Twitter = require('twitter');

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