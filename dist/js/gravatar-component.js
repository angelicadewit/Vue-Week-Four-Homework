"use strict";

Vue.component("gravatar", {
    props: ["email"],
    data: function data() {
        return {
            gravatarURL: "https://www.gravatar.com/avatar/" + md5(this.email) + "d=robohash"
        };
    },
    template: "<div><img v-bind:src='gravatarURL'></div>"
});
//# sourceMappingURL=gravatar-component.js.map
