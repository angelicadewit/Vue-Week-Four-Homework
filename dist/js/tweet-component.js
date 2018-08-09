"use strict";

Vue.component("tweet", {
    props: ["tweet-object"],
    data: function data() {
        return {};
    },
    template: "\n        <div>\n            im a tweet\n            {{tweetObject.text}}<br>\n            @{{tweetObject.user.screen_name}}<br><br>\n        </div>\n        "
});
//# sourceMappingURL=tweet-component.js.map
