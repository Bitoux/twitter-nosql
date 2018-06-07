let Twitter = require('../model/twitterFeed.model');

exports.create = function(twitterAPIFeed){

    let twitter = new Twitter({
        id: twitterAPIFeed.id,
        created_at: twitterAPIFeed.created_at,
        retweet_count: twitterAPIFeed.retweet_count,
        favorite_count: twitterAPIFeed.favorite_count,
        followers_count: twitterAPIFeed.user.followers_count,
        friends_count: twitterAPIFeed.user.friends_count,
        lang: twitterAPIFeed.user.lang,
        country: twitterAPIFeed.user.location
    });

    this.findOne(twitter.id).then(function(data){
        let newTwitter = data;
        console.log('recuperation', newTwitter);
        if(newTwitter === true){
            twitter.save(function(err, data){
                if(err){
                    return 'Some error occured while creating the Pokemon';
                }else{
                    console.log('saved');
                    return data;
                }
            });
        }
    });
}

// Find one Tweet by idTweet
this.findOne = function(id){
    return new Promise((resolve) => {
        Twitter.find({id: id}, function(err, twitter){
            if(err) resolve(false);
            console.log('The tweet:', twitter);
            (twitter.length === 0) ? resolve(true) : resolve(false);
        });
    });
};

exports.getTweetMoy = function(){
    return new Promise((resolve) => {
        Twitter.find(function(err, twitters){
            if(err){
                return false;
            }else{
                let tweetsCount = twitters.length;
                let totalRetweet = 0;
                let totalFollowers = 0;
                twitters.forEach(element => {
                    totalRetweet = totalRetweet + element.retweet_count;
                    totalFollowers = totalFollowers + element.followers_count;
                });
                let moyRetweet = totalFollowers / tweetsCount;
                let moyFollowers = totalRetweet / tweetsCount;
                let moyCoverage = moyRetweet * moyFollowers + totalFollowers;
                let tweetsInfo = {
                    totalTweets: tweetsCount,
                    moyRetweet: moyRetweet,
                    totalFollowers: totalFollowers,
                    moyFollowers: moyFollowers,
                    moyCoverage: moyCoverage
                }
                resolve(tweetsInfo);
            }
        });
    });
};

