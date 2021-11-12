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
  height: 1280px;
  border: 1px solid #000;
  overflow: hidden;
  position: relative;
}

@media only screen and (min-width: 1800px) {
  #iframe-content {
    position: absolute;
    top: -90px;
    left: -225px;
    right: -100px;
    width: 2000px;
    height: 2250px;
    background-color: #fff;
  }
  #iframe-content {
    zoom: 0.72;
    -moz-transform: scale(0.72);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.72);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.72);
    -webkit-transform-origin: 0 0;
  }
}

@media only screen and (max-width: 1800px) {
  #iframe-content {
    position: absolute;
    top: -90px;
    left: -222px;
    right: -100px;
    width: 1800px;
    height: 2250px;
    background-color: #fff;
  }
  #iframe-content {
    zoom: 0.72;
    -moz-transform: scale(0.72);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.72);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.72);
    -webkit-transform-origin: 0 0;
  }
}

@media screen and (-webkit-min-device-pixel-ratio:0) {
  #iframe-content {
    zoom: 1;
  }
}
</style>
