<template>
  <div id="uchat"></div>
</template>
<script async :src="{ url }"></script>
<script>
import { uchatData } from "@/utils";
export default {
  components: {},
  mounted() {
    console.log(uchatData());
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "//client.uchat.io/uchat.js");
    document.head.appendChild(recaptchaScript);
    let uchat = document.createElement("u-chat");
    uchat.setAttribute("room", "sport-tv");
    uchat.setAttribute("style", " width:100%; height:100%;");
    uchat.setAttribute(
      "user_data",
      "auth guest|nick guest|other nosync|room sport-tv|time 1635940228|hash 9cbfc1ac5bc539a1bfcec1454bd308dc"
    );
    console.log(uchat);

    document.getElementById("uchat").appendChild(uchat);
  },
  data() {
    return {
      url: "http://client.uchat.io/uchat.js",
    };
  },
};
</script>

<style scoped>
#uchat {
  height: 200%;
}
#uchat .top .logo {
  height: 100%;
  cursor: pointer;
  float: left;
  margin-left: -44px !important;
  margin-right: 6px;
}
</style>
