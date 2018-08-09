Vue.component("tweet", {
    props: ["tweet-object"],
    data: function(){
        return{
        }
    },
    template: `
        <div>
            im a tweet
            {{tweetObject.text}}<br>
            @{{tweetObject.user.screen_name}}<br><br>
        </div>
        `
})