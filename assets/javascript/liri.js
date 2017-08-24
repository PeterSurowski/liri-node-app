var keys = require('./keys');
var fs = require('fs');
var commands = process.argv[2];

switch (commands) {
	case 'my-tweets':
		twitter();
		break;
	case 'spotify-this-song':
		spotify();
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
			console.log('-------------');
			console.log('Most recent Tweets: ')
			console.log('--------------')
			for (i = 0; i < tweets.length; i++) {
				console.log('RoboZombieNinja: ' + tweets[i].text);
				console.log('Tweet Date: ' + tweets[i].created_at);
				console.log('--------------')
			}
		}
	});
}

function spotify() {
	var Spotify = require('node-spotify-api');
	var songTitle = process.argv[3];
	var spotify = new Spotify ({
		id: process.env.SPOTIFY_ID,
		secret: process.env.SPOTIFY_SECRET
	});
	spotify.search({ type: 'track', query: songTitle, limit: 5}, function(err, data) {
		if (err) {
			return console.log('Error occurred: ' + err);
		} else {
			console.log('-------------');
			console.log('Artist: ' + data.tracks.items[0].artists[0].name);
			console.log('Song name: ' + data.tracks.items[0].name);
			console.log('Preview Link: ' + data.tracks.items[0].url);
			console.log('Album: ' + data.tracks.items[0].album.name);
			console.log('--------------');
		}

	});
}