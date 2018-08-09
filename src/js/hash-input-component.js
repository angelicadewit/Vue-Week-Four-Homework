Vue.component("hashtag-input", {
    props: ["hashtag"],
    data: function(){
        return {
            // tweetData:[], // we're getting it from the parent, so we sholdnt define it here
            // hashtag: hashtag, // we're getting it from the parent, so we sholdnt define it here
        }        
    },
    template: `
        <div>
            <input type="text" :value="hashtag">
            <button>Go</button>
        </div>
        `
})