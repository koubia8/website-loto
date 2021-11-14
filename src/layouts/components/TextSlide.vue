<template>
  <div class="wrapper">
    <div class="marquee">
      <p
        v-for="(item, index) in messageData"
        :key="index"
        :style="{ color: colors[index] }"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "#fdff35",
        "#49e3ff",
        "#ff9e35",
        "#53AC8B",
        "#9F616A",
        "526CBE",
        "00607F",
      ],
      messageData: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laborum voluptates.",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laborum voluptates.",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laborum voluptates.",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laborum voluptates.",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laborum voluptates.",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laborum voluptates.",
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laborum voluptates.",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 100%;
  color: white;
  overflow: hidden;
}

.marquee {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: marquee 20s linear infinite;
}

.marquee p {
  margin-left: 72px;
  font-weight: 700;
  font-size: 1.2rem;
  display: inline-block;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
