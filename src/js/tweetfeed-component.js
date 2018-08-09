Vue.component("tweet-feed", {
    props: ["tweet-data"],
    data: function(){
        return{
        }
    },
    template: `
        <div>
            <tweet v-for="oneTweetObject in tweetData" :tweet-object="oneTweetObject"></tweet>
        </div>
        `
})