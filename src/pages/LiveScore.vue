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
      <named v-if="menuSelect === 'named'" />
      <score v-if="menuSelect === 'live-score'" />
      <now-goal-score v-if="menuSelect === 'now-goal-score'" />
      <flash-score v-if="menuSelect === 'flash-score'" />
      <score-board v-if="menuSelect === 'score-board'" />
    </div>
  </Layout>
</template>

<script>
import Named from "./live/named";
import Score from "./live/score.vue";
import NowGoalScore from "./live/nowgoal";
import FlashScore from "./live/flashscore";
import ScoreBoard from "./live/scoreboard";

export default {
  metaInfo: {
    title: "Live score",
  },
  components: {
    Named,
    Score,
    NowGoalScore,
    FlashScore,
    ScoreBoard
  },
  data() {
    return {
      menuSelect: "named",
      menu: [
        {
          key: "named",
          name: "Named score",
        },
        {
          key: "live-score",
          name: "Live score",
        },
        {
          key: "now-goal-score",
          name: "Now goal score",
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
