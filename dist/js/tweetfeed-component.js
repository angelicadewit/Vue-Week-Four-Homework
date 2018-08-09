"use strict";

Vue.component("tweet-feed", {
    props: ["tweet-data"],
    data: function data() {
        return {};
    },
    template: "\n        <div>\n            <tweet v-for=\"oneTweetObject in tweetData\" :tweet-object=\"oneTweetObject\"></tweet>\n        </div>\n        "
});
//# sourceMappingURL=tweetfeed-component.js.map
