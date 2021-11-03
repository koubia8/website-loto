<template>
  <iframe
    id="pick"
    class="peak"
    src="https://pick-365.com/broadcast/"
    sandbox="allow-same-origin allow-forms allow-scripts"
    scrolling
    allowfullscreen
    width="100%"
    height="2500px"
  ></iframe>
</template>

<script>
export default {
  mounted() {
    var doc = document.getElementById("pick");
    doc.style.display = "none";
  },
};
</script>

<style>
.peak > html {
  display: none !important;
  width: 50%;
}
</style>
