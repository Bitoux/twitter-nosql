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
    Twitter.find(function(err, twitters){
        if(err){
            return false;
        }else{
            let tweetsCount = twitters.length;
            let totalRetweet = 0;
            twitters.forEach(element => {
                totalRetweet = totalRetweet + element.retweet_count;
            });
            let moyRetweet = totalRetweet / tweetsCount;
            console.log(moyRetweet);
            return tweetsCount;
        }
    });
};

exports.getNbPays = function(){
    Twitter.find(function(err, twitters){
        if(err){
            return false;
        } else {
            let totalNbPays = 0;
            let countries = [];
            let totalTweetParPays = 0;
            twitters.forEach(element => {
                if (element.country == '') {
                    totalTweetParPays = totalTweetParPays + 1;
                } else {
                    countries.push({"name": element.country, "value": totalTweetParPays});
                }
            });
            countries.push({"name": "Country is not defined", value: totalTweetParPays});
            console.log(countries);
            
            return countries;
            return totalNbPays;
        }
    })
}