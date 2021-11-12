<template>
  <Layout>
    <div class="home-content">
      <div id="iframe-div">
        <iframe
          src="https://www.powerballgame.co.kr/"
          id="iframe-content"
          sandbox="allow-same-origin allow-scripts allow-forms"
          scrolling="no"
          allowFullScreen
          width="1024" height="3500"
        ></iframe>
      </div>
    </div>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: "Porwerball",
  },
  components: {
  },
  data() {
    return {
    };
  },
  async mounted () {
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
  height: 2220px;
  border: 1px solid #000;
  overflow: hidden;
  position: relative;
}
@media only screen and (min-width: 1800px) {
  #iframe-content {
    position: absolute;
    top: -380px;
    left: -945px;
    width: 2000px;
    height: 2000px;
    background-color: #fff;
  }
  #iframe-content {
    zoom: 1.2;
    -moz-transform: scale(1.2);
    -moz-transform-origin: 0 0;
    -o-transform: scale(1.2);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(1.2);
    -webkit-transform-origin: 0 0;
  }
}
@media only screen and (max-width: 1800px) {
  #iframe-content {
    position: absolute;
    top: -350px;
    left: -750px;
    right: -100px;
    width: 1800px;
    height: 2000px;
    background-color: #fff;
  }
  #iframe-content {
    zoom: 1.1;
    -moz-transform: scale(1.1);
    -moz-transform-origin: 0 0;
    -o-transform: scale(1.1);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(1.1);
    -webkit-transform-origin: 0 0;
  }
}
@media screen and (-webkit-min-device-pixel-ratio:0) {
  #iframe-content {
    zoom: 2;
  }
}
ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0;
}
ul li {
  flex-grow: 1;
  background: white;
  border-left: 1px solid black;
  cursor: pointer;
  display: flex;
}
ul li a {
  padding: 6px;
  flex-grow: 1;

  font-weight: 600;
  text-align: center;
}
ul li:first-child {
  border-left: none;
}
ul li:hover,
.active {
  background-color: #3b3b3b;
  color: #ffffff;
}
ul li a {
  width: 100%;
}
</style>
