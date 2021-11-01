<template>
  <div class="screen-content">
    <div class="screen">
      <iframe
        class="iframe"
        allow="encrypted-media"
        style="-webkit-transform:scale(1);-moz-transform-scale(0.5);"
        :style="{ width: width, height: '100%' }"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        frameborder="0"
        allowfullscreen="yes"
        :src="src"
      ></iframe>
    </div>

    <div class="type-screen">
      <div class="item" @click="handleScreen(1)">
        1 ecran <img src="@/assets/smart-tv-icon.png" alt="" />
      </div>
      <div class="item" @click="handleScreen(2)">
        2 ecrans <img src="@/assets/two-tv.png" alt="" />
      </div>
      <div class="item" @click="handleScreen(3)">
        3 ecrans <img src="@/assets/tree-tv.png" alt="" />
      </div>
      <div class="item" @click="handleScreen(4)">
        4 ecrans <img src="@/assets/4-tv.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Ecran from "./Ecran";
export default {
  name: "Screen",
  props: {
    src: {
      type: String,
    },
  },
  components: {
    Ecran,
  },
  computed: {
    width() {
      if (this.srcs !== undefined) {
        let count = this.srcs.length;
        if (count === 1) return "100%";
        if (count >= 2) return "50%";
        if (count > 3) return "25%";
      } else {
        return "100%";
      }
    },
  },
  data() {
    return {
      countScreen: [1, 2, 3, 4],
    };
  },
  methods: {
    handleScreen(e) {},
  },
};
</script>

<style>
.screen-content {
  position: relative;
  display: flex;
  flex-direction: column;
}
.screen {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 499px;
  background: black;
}
.screen > div {
  background: green;
  flex-grow: 1;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btnplay {
  position: absolute;
  top: 30%;
  right: 45%;
}
.categorie .item {
  flex-grow: 1;
  border-radius: 6px;
  width: 50px;
  height: 50px;
  display: flex;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  cursor: pointer;
}
.categorie .item:nth-of-type(11) {
  margin-right: 10px;
}
.categorie {
  margin-top: 8px;
  display: flex;
  align-items: center;
}
.type-screen {
  display: flex;
  margin-top: 26px;
}
.type-screen .item {
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-left: 12px;
  border-radius: 34px;
  justify-content: space-between;
  background-color: #171c29;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 3px 20px;
  flex-grow: 1;
  cursor: pointer;
}
.type-screen .item:nth-of-type(4) {
  margin-right: 10px;
}
</style>
