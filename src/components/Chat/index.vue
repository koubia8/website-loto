<template>
  <div id="uchat"></div>
</template>
<script async :src="{ url }"></script>
<script>
import { uchatData } from "@/utils";
export default {
  components: {},
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute("src", "//client.uchat.io/uchat.js");
    document.head.appendChild(recaptchaScript);
    let uchat = document.createElement("u-chat");
    uchat.setAttribute("room", "sport-tv");
    uchat.setAttribute("style", " width:100%; height:100%;");
    uchat.setAttribute("user_data", uchatData());

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
  height: 500px;
}
#uchat .top .logo {
  height: 100%;
  cursor: pointer;
  float: left;
  margin-left: -44px !important;
  margin-right: 6px;
}
</style>
