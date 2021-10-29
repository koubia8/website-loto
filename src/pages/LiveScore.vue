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
      <nemed v-if="menuSelect === 'nemed'" />
      <score v-if="menuSelect === 'live-score'" />
    </div>
  </Layout>
</template>

<script>
import Nemed from "./live/nemed";
import Score from "./live/score.vue";

export default {
  metaInfo: {
    title: "About us",
  },
  components: {
    Nemed,
    Score,
  },
  data() {
    return {
      menuSelect: "nemed",
      menu: [
        {
          key: "nemed",
          name: "Nemed score",
        },
        {
          key: "live-score",
          name: "Live score",
        },
        {
          key: "naugol-score",
          name: "Naugol score",
        },
        {
          key: "flash-score",
          name: "Flash score",
        },
        {
          key: "score-board",
          name: "Score board",
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
