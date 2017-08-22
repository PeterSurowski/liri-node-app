var keys = require('./keys');
var fs = require('fs');
var commands = process.argv[2];

switch (commands) {
	case 'my-tweets':
		twitter();
		break;
}


function twitter() {
	var Twitter = require('twitter');
	var client = new Twitter ({
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	});

	var params = {
		screen_name: 'RoboZombieNinja',
		count: 10
	};

	client.get('statuses/user_timeline', params, function(err, tweets, response) {
		if(!err) {
			console.log(tweets)
			
			
			/*console.log('-------------');
			console.log('Most recent Tweets: ')
			console.log('--------------')
			for (i = 0; i < tweets.length; i++) {
				console.log('RoboZombieNinja: ' + tweets[i].text);
				console.log('Tweet Date: ' + tweets[i].created_at);
				console.log('--------------')
			}*/
		}
	});
}

//I made it to step 8, substep 1 and I can't figure out how to make an ajax call to the Twitter API.