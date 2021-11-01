<template>
  <div id="iframe-div">
    <iframe
      src="https://pick-365.com/game/bet365vSoccer/eurocup/"
      id="iframe-content"
      scrolling="no"
      sandbox="allow-same-origin allow-forms allow-scripts"
      allowFullScreen
      width="100%"
      height="1500px"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "euro-cup",
};
</script>

<style scoped>
#iframe-div {
  width: 100%;
  height: 1990px;
  overflow: hidden;
  position: relative;
}

#iframe-content {
  position: absolute;
  top: -150px;
  left: -282px;
  width: 1450px;
  height: 1980px;
}
</style>