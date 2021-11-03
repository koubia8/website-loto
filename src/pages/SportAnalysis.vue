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
      <basketball v-if="menuSelect === 'basketball'" />
      <soccer v-if="menuSelect === 'soccer'" />
      <volleyball v-if="menuSelect === 'volleyball'" />
      <baseball v-if="menuSelect === 'baseball'" />
    </div>
  </Layout>
</template>

<script>
import Basketball from './sport-analysis/basketball'
import Soccer from './sport-analysis/soccer'
import Volleyball from './sport-analysis/volleyball'
import Baseball from './sport-analysis/basketball'

export default {
  metaInfo: {
    title: "Sport Analysis",
  },
  components: {
    Basketball,
    Soccer,
    Volleyball,
    Baseball
  },
  data() {
    return {
      menuSelect: "basketball",
      menu: [
        {
          key: "basketball",
          name: "Basketball",
        },
        {
          key: "soccer",
          name: "Soccer",
        },
        {
          key: "baseball",
          name: "Baseball",
        },
        {
          key: "volleyball",
          name: "Volleyball",
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
