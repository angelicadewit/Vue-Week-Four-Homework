"use strict";

var TWITTER_SEARCH_URL = "http://circuslabs.net/~chris.silich/twitter-proxy/twitter-proxy.php?op=search_tweets&q=";

var app = new Vue({
	el: '#app',
	data: {
		tweetData: [],
		hashtag: "kittens" // MAKE DATA AT THE TOP
	},
	created: function created() {
		var _this = this;

		console.log(this.hashtag);
		axios.get(TWITTER_SEARCH_URL + this.hashtag).then(function (response) {
			_this.tweetData = response.data.statuses;
			console.log(_this.tweetData);
		}).catch(function (error) {
			console.warn(error);
		});
	},
	methods: {}
});
//# sourceMappingURL=main.js.map
