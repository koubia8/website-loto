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
      <eat-and-run v-if="menuSelect === 'eat-and-run'" />
      <eating-site v-if="menuSelect === 'eating-site'" />
    </div>
  </Layout>
</template>

<script>
import EatAndRun from "./eat-an-run/eatAndRun";
import EatingSite from "./eat-an-run/eatingSite";

export default {
  metaInfo: {
    title: "Eat and run verification",
  },
  components: {
    EatAndRun,
    EatingSite
  },
  data() {
    return {
      menuSelect: "eat-and-run",
      menu: [
        {
          key: "eat-and-run",
          name: "Eat & run verification",
        },
        {
          key: "eating-site",
          name: "Eating site",
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
