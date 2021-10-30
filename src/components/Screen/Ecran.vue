<template>
  <div>
    <iframe
      class="iframe"
      allow="encrypted-media"
      style="-webkit-transform:scale(1);-moz-transform-scale(0.5);"
      :style="{ width: width, height: height }"
      marginwidth="0"
      marginheight="0"
      scrolling="no"
      frameborder="0"
      allowfullscreen="yes"
      :src="link"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    width: String,
    height: String,
    link: String,
  },
};
</script>

<style scoped>
.iframe {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
