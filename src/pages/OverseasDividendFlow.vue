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
      <oz-portal v-if="menuSelect === 'oz-portal'" />
      <bet-explorer v-if="menuSelect === 'bet-explorer'" />
      <vitibet v-if="menuSelect === 'vitibet'" />
      <soccer-vista v-if="menuSelect === 'soccer-vista'" />

    </div>
  </Layout>
</template>

<script>
import OzPortal from './overseas/oz-portal';
import BetExplorer from './overseas/bet-explorer';
import Vitibet from './overseas/vitibet';
import SoccerVista from './overseas/soccer-vista';

export default {
  metaInfo: {
    title: "Overseas Dividend Flow",
  },
  components: {
    OzPortal,
    BetExplorer,
    Vitibet,
    SoccerVista
  },
  data() {
    return {
      menuSelect: "oz-portal",
      menu: [
        {
          key: "oz-portal",
          name: "OZ Portal",
        },
        {
          key: "bet-explorer",
          name: "Bet Explorer",
        },
        {
          key: "vitibet",
          name: "Vitibet",
        },
        {
          key: "soccer-vista",
          name: "Soccer Vista",
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
