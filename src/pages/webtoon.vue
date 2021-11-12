<template>
  <Layout>
    <div class="home-content">
      <div id="iframe-div">
        <iframe
          src="http://localhost:3003/webtoon?url=https://copytoon221.com/%EC%9B%B9%ED%88%B0"
          id="iframe-content"
          allowFullScreen
          width="1028"
          height="15500px"
        ></iframe>
      </div>
    </div>
  </Layout>
</template>

<script>
import $ from 'jquery';

export default {
  metaInfo: {
    title: "Webtoon",
  },
  components: {},
  data() {
    return {};
  },
  async mounted() {
  },
  methods: {},
};
</script>

<style scoped>
.home-content {
  flex-grow: 1;
}
#iframe-div {
  margin-top: 35px;
  width: 100%;
  height: 18500px;
  overflow: hidden;
  position: relative;
}
@media only screen and (min-width: 1800px) {
  #iframe-content {
    position: absolute;
    top: -1215px;
    left: -455px;
    width: 2000px;
    height: 20000px;
    margin: auto;
  }
  #iframe-content {
    zoom: 0.95;
    -moz-transform: scale(0.95);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.95);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.95);
    -webkit-transform-origin: 0 0;
  }
}

@media only screen and (max-width: 1800px) {
  #iframe-content {
    position: absolute;
    top: -1150px;
    left: -350px;
    width: 1800px;
    height: 20000px;
    margin: auto;
  }
  #iframe-content {
    zoom: 0.90;
    -moz-transform: scale(0.90);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.90);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.90);
    -webkit-transform-origin: 0 0;
  }
}

@media screen and (-webkit-min-device-pixel-ratio:0) {
  #iframe-content {
    zoom: 1;
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
