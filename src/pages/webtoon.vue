<template>
  <Layout>
    <div class="home-content">
      <div id="iframe-div">
        <iframe
          src="https://206.189.187.30:3001/players-content?url=https://copytoon219.com/"
          id="iframe-content"
          sandbox="allow-same-origin allow-scripts allow-forms"
          allowFullScreen
          width="100%"
          height="5500px"
          style="-webkit-transform:scale(0.96);-moz-transform-scale(0.5);"
        ></iframe>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Webtoon",
  },
  components: {},
  data() {
    return {};
  },
  async mounted() {},
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
  height: 8500px;
  overflow: hidden;
  position: relative;
}

#iframe-content {
  position: absolute;
  top: -1425px;
  left: -230px;
  width: 1450px;
  height: 10000px;
  margin: auto;
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
