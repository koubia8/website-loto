<template>
  <div id="uchat"></div>
</template>
<!--<script async :src="{ url }"></script>-->
<script>
import { uchatData } from "@/utils";
export default {
  components: {},
  created() {
    let script = document.createElement('script');
    script.src = 'http://client.uchat.io/uchat.js';
    document.getElementsByTagName('head')[0].appendChild(script)
  },
  mounted() {
    this.$nextTick(function() {
      let recaptchaScript = document.createElement("script");
      recaptchaScript.setAttribute("src", "//client.uchat.io/uchat.js");
      document.head.appendChild(recaptchaScript);
      let uchat = document.createElement("u-chat");
      uchat.setAttribute("room", "sport-tv");
      uchat.setAttribute("style", " width:100%; height:100%;");
      uchat.setAttribute("user_data", uchatData());

      document.getElementById("uchat").appendChild(uchat);
    });
  },
  data() {
    return {
      loaded: false,
      url: "http://client.uchat.io/uchat.js",
    };
  },
};
</script>

<style>
#uchat {
  height: 500px;
}
</style>
