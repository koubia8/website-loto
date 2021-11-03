<template>
  <Layout>
    <div class="home-content">
      <iframe
        src="https://copytoon219.com/embed/%EC%9B%B9%ED%88%B0"
        id="iframe-content"
        scrolling="no"
        sandbox="allow-same-origin allow-scripts allow-forms allow-top-navigation"
        allowFullScreen
        width="100%"
        height="1500px"
      ></iframe>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Virtual soccer",
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
