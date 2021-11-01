<template>
  <Layout>
    <div class="home-content">
      <ul>
        <li v-for="(menu, index) in menu" :key="index">
          <a
            :class="{ active: menuSelect === menu.key }"
            @click="handleSelectMenu(menu.key)"
          >{{ menu.name }}</a>
        </li>
      </ul>
      <premier v-if="menuSelect === 'premier'" />
      <super-league v-if="menuSelect === 'super-league'" />
      <euro-cup v-if="menuSelect === 'euro-cup'" />
      <world-cup v-if="menuSelect === 'world-cup'" />
    </div>
  </Layout>
</template>

<script>
import Premier from './virtual-soccer/premier'
import SuperLeague from './virtual-soccer/super-league'
import EuroCup from  './virtual-soccer/euro-cup'
import WorldCup from './virtual-soccer/world-cup'

export default {
  metaInfo: {
    title: "Virtual soccer",
  },
  components: {
    Premier,
    SuperLeague,
    EuroCup,
    WorldCup
  },
  data() {
    return {
      menuSelect: "premier",
      menu: [
        {
          key: "premier",
          name: "Premier",
        },
        {
          key: "super-league",
          name: "Super League",
        },
        {
          key: "euro-cup",
          name: "Euro Cup",
        },
        {
          key: "world-cup",
          name: "World Cup",
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
