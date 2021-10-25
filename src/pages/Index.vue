<template>
  <Layout>
    <div class="sidebar-left">
      <Login />
    </div>
    <div class="home-content">
      <Screen />
      <MatchList />
    </div>
    <div class="sidebar-right">right</div>
  </Layout>
</template>

<script>
import Login from "@/components/Login";
import Screen from "@/components/Screen";
import MatchList from "@/components/Match";
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Login,
    Screen,
    MatchList,
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
  background-color: beige;
}
.home-content {
  flex-grow: 1;
}
</style>
