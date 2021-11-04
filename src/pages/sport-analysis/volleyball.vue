<template>
  <div id="iframe-div">
    <iframe
      src="https://sutv7.com/bbs/board.php?bo_table=o_analysis"
      id="iframe-content"
      scrolling="no"
      sandbox="allow-same-origin allow-forms allow-scripts"
      allowfullscreen
      width="100%"
      height="700px"
      style="-webkit-transform:scale(0.99);-moz-transform-scale(0.5);"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "volleyball",
  data () {
    return {
      url: 'http://localhost:3003/players-content?url='
    }
  }
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
  top: -520px;
  left: -405px;
  width: 1450px;
  height: 1980px;
  margin: auto;
}
</style>