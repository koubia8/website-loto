<template>
  <div id="iframe-div">
    <iframe
      src="https://sutv7.com/bbs/board.php?bo_table=b_analysis"
      id="iframe-content"
      scrolling="no"
      sandbox="allow-same-origin allow-forms allow-scripts"
      allowfullscreen
      width="100%"
      height="700px"
      style="-webkit-transform:scale(1.1);-moz-transform-scale(0.5);"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "baseball",
};
</script>

<style scoped>
#iframe-div {
  padding-top: 35px;
  width: 100%;
  height: 800px;
  overflow: hidden;
  position: relative;
}

#iframe-content {
  position: absolute;
  top: -475px;
  left: -350px;
  width: 1450px;
  height: 1980px;
}
</style>