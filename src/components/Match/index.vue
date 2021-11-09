<template>
  <div id="iframe-div">
    <iframe
      src="http://localhost:3003/players-content?url=https://pick-365.com/broadcast/"
      id="iframe-content"
      sandbox="allow-same-origin allow-top-navigation allow-scripts"
      allowfullscreen
      width="100%"
      height="5500px"
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
  width: 100%;
  height: 5485px;
  overflow: hidden;
  position: relative;
}
#iframe-content {
  position: absolute;
  top: -100px;
  left: -380px;
  width: 1400px;
  height: 5800px;
}
</style>