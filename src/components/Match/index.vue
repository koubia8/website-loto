<template>
  <div id="iframe-div">
    <iframe
      src="https://pick-365.com/broadcast/"
      id="iframe-content"
      referrerpolicy="same-origin"
      sandbox="allow-same-origin allow-scripts"
      allowfullscreen
      width="1024"
      height="1500px"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "home player",
};
</script>

<style scoped>
#iframe-div {
  margin-top: 30px;
  vertical-align: middle;
  width: 100%;
  height: 3800px;
  overflow: hidden;
  position: relative;
}
#iframe-content {
  position: absolute;
  top: -110px;
  left: -295px;
  width: 1800px;
  height: 5000px;
  border: 0px;
}
#iframe-content {
  zoom: 0.82;
  -moz-transform: scale(0.82);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.82);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.82);
  -webkit-transform-origin: 0 0;
}
@media screen and (-webkit-min-device-pixel-ratio:0) {
  #iframe-content {
    zoom: 1;
  }
}
</style>