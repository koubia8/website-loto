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
      <movie v-if="menuSelect ==='movie'" />
      <drama v-if="menuSelect ==='drama'" />
      <entertainment v-if="menuSelect === 'entertainment'" />
      <documentary v-if="menuSelect === 'documentary'" />
    </div>
  </Layout>
</template>

<script>
import Movie from './vod-tube/movie';
import Drama from './vod-tube/drama';
import Entertainment from './vod-tube/entertainment';
import Documentary from  './vod-tube/documentary';

export default {
  metaInfo: {
    title: "VOD Tube",
  },
  components: {
    Movie,
    Drama,
    Entertainment,
    Documentary
  },
  data() {
    return {
      menuSelect: "movie",
      menu: [
        {
          key: "movie",
          name: "Movie",
        },
        {
          key: "drama",
          name: "Drama",
        },
        {
          key: "entertainment",
          name: "Entertainment",
        },
        {
          key: "documentary",
          name: "Documentary",
        }
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
