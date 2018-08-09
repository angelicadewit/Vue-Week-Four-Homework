"use strict";

Vue.component("status-bar", {
    props: ["tweet-data", "hashtag"],
    // data: function(){
    //     return{

    //     }
    // },
    template: "\n        <div>\n            Showing {{tweetData.length}} tweets containing #{{hashtag}}\n        </div>\n        "
});
//# sourceMappingURL=status-bar-component.js.map
