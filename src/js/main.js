const TWITTER_SEARCH_URL = "http://circuslabs.net/~chris.silich/twitter-proxy/twitter-proxy.php?op=search_tweets&q="


var app = new Vue({
	el: '#app',
	data: {
		tweetData: [],
		hashtag: `kittens`, // MAKE DATA AT THE TOP
	},
	created: function() {
		console.log(this.hashtag)
		axios.get(TWITTER_SEARCH_URL + this.hashtag)
		.then((response) => {
			this.tweetData = response.data.statuses;
			console.log(this.tweetData)
		})
		.catch((error) => {
			console.warn(error)
		})
	},
	methods: {
	}
})