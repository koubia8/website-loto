<template>
  <Layout>
    <div class="sidebar-left">
      <Login />
    </div>
    <div class="home-content">
      <VirtualSoocer />
      <Screen :url="linkStream" />
      <MatchList @linkValue="handleLinkValue" />
    </div>
    <div class="sidebar-right">
      <!--  <ClasseWorld /> -->
      <ClasseMatch />
    </div>
  </Layout>
</template>

<script>
import Login from "@/components/Login";
import Screen from "@/components/Screen";
import MatchList from "@/components/Match";
import ClasseWorld from "@/components/Match/ClasseWorld.vue";
import ClasseMatch from "@/components/Match/ClasseMatch.vue";
import VirtualSoocer from "@/components/VirtualSoocer";
import { getStream } from "@/api";
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Login,
    Screen,
    MatchList,
    ClasseWorld,
    ClasseMatch,
    VirtualSoocer,
  },
  data() {
    return {
      linkStream: "",
    };
  },
  methods: {
    handleLinkValue(e) {
      getStream(e).then((res) => {
        console.log(res.data);
        let link = res.data[0].link;
        this.linkStream = link;
      });
    },
  },
};
</script>

<style>
.main {
  display: flex;
}

.sidebar-left,
.sidebar-right {
  width: 20%;
  display: flex;
}
.sidebar-left {
  padding: 35px 20px 5px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
}

.sidebar-right {
  padding: 35px 20px 5px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
}
.home-content {
  flex-grow: 1;
}
</style>
