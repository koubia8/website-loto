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
          style="-webkit-transform:scale(1.19);-moz-transform-scale(0.5);"
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
#iframe-content {
  position: absolute;
  top: -160px;
  left: -468px;
  right: -100px;
  width: 1450px;
  height: 2250px;
  background-color: #fff;
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
