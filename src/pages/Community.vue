<template>
  <Layout>
    <div class="home-content">
      <ul>
        <li v-for="(menu, index) in menu" :key="index">
          <a
            :class="{ active: menuSelect === menu.key }"
            @click="handleSelectMenu(menu.key)"
            >{{ menu.name }}</a
          >
        </li>
      </ul>
      <free-analysis v-if="menuSelect === 'free-analysis'" />
      <humor-story v-if="menuSelect === 'humor-story'" />
      <hot-picture v-if="menuSelect === 'hot-picture'" />
      <sports-video v-if="menuSelect === 'sports-video'" />
    </div>
  </Layout>
</template>

<script>
import FreeAnalysis from "./community/freeAnalysis";
import HumorStory from "./community/humorStory";
import HotPicture from "./community/hotPicture";
import SportsVideo from "./community/sportsVideo";

export default {
  metaInfo: {
    title: "community",
  },
  components: {
    FreeAnalysis,
    HumorStory,
    HotPicture,
    SportsVideo
  },
  data() {
    return {
      menuSelect: "free-analysis",
      menu: [
        {
          key: "free-analysis",
          name: "Free analysis & pick",
        },
        {
          key: "humor-story",
          name: "Humor & story",
        },
        {
          key: "hot-picture",
          name: "Hot picture",
        },
        {
          key: "sports-video",
          name: "Sports video",
        },
      ],
    };
  },
  methods: {
    handleSelectMenu(menu) {
      this.menuSelect = menu;
    },
  },
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
