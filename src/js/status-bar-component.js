Vue.component("status-bar", {
    props: ["tweet-data", "hashtag"],
    // data: function(){
    //     return{
            
    //     }
    // },
    template: `
        <div>
            Showing {{tweetData.length}} tweets containing #{{hashtag}}
        </div>
        `
})