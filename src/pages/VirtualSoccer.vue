<template>
  <Layout>
    <div class="home-content">
      <div id="iframe-div">
        <iframe
          src="https://vet3.com/soccer"
          id="iframe-content"
          sandbox="allow-same-origin allow-scripts allow-forms"
          scrolling="no"
          allowFullScreen
          width="1024" height="780"
          style="-webkit-transform:scale(0.77);-moz-transform-scale(0.5);"
        ></iframe>
      </div>
    </div>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: "Virtual soccer",
  },
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.home-content {
  flex-grow: 1;
}
#iframe-div {
  margin-top: 35px;
  width: 100%;
  height: 1300px;
  border: 1px solid #000;
  overflow: hidden;
  position: relative;
}
#iframe-content {
  position: absolute;
  top: -345px;
  left: -426px;
  right: -100px;
  width: 1650px;
  height: 2250px;
  background-color: #fff;
}
</style>
