<template>
  <div id="uchat"></div>
</template>
<!--<script async :src="{ url }"></script>-->
<script>
import { uchatData } from "@/utils";
export default {
  components: {},
  created() {},
  async mounted() {
    this.$nextTick(function() {
      let recaptchaScript = document.createElement("script");
      recaptchaScript.setAttribute("src", "//client.uchat.io/uchat.js");
      document.head.appendChild(recaptchaScript);
      let uchat = document.createElement("u-chat");
      uchat.setAttribute("room", "sport-tv");
      uchat.setAttribute("style", " width:100%; height:100%;");
      uchat.setAttribute("user_data", uchatData());

      // this.uchat = uchat.outerHTML;
      document.getElementById('uchat').appendChild(uchat)
      console.log(uchat);
    });
  },
  data() {
    return {
      loaded: false,
      uchat: null,
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
