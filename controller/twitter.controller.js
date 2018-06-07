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
        if(newTwitter === false){
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
        Twitter.findOne({id: id}, function(err, twitter){
            if(err) resolve(false);
            console.log('The tweet:', twitter);
            (twitter.length === 0) ? resolve(false) : resolve(true);
        });
    });
};

exports.getTweetMoy = function(){
    Twitter.find(function(err, twitters){
        if(err){
            return false;
        }else{
            let tweetsCount = twitters.length;
            console.log(twitters);
            return tweetsCount;
        }
    });
};