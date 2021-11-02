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
    </div>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: "community",
  },
  components: {
  },
  data() {
    return {
      menuSelect: "temporary-1",
      menu: [
        {
          key: "temporary-1",
          name: "Temporary 1",
        },
        {
          key: "temporary-2",
          name: "Temporary 2",
        },
        {
          key: "temporary-3",
          name: "Temporary 3",
        },
        {
          key: "temporary-4",
          name: "Temporary 4",
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
