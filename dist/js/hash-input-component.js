"use strict";

Vue.component("hashtag-input", {
    props: ["hashtag"],
    data: function data() {
        return {
            // tweetData:[], // we're getting it from the parent, so we sholdnt define it here
            // hashtag: hashtag, // we're getting it from the parent, so we sholdnt define it here
        };
    },
    template: "\n        <div>\n            <input type=\"text\" :value=\"hashtag\">\n            <button>Go</button>\n        </div>\n        "
});
//# sourceMappingURL=hash-input-component.js.map
