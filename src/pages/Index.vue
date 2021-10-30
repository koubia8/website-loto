<template>
  <Layout>
    <div class="home-content">
      <!--       <VirtualSoocer /> -->
      <Screen :src="linkStream" />
      <MatchList @linkValue="handleLinkValue" />
    </div>
  </Layout>
</template>

<script>
import Screen from "@/components/Screen";
import MatchList from "@/components/Match";

// import VirtualSoocer from "@/components/VirtualSoocer";
import { getStream } from "@/api";
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Screen,
    MatchList,
    /* VirtualSoocer, */
  },
  data() {
    return {
      linkStream: "",
    };
  },
  methods: {
    handleLinkValue(e) {
      getStream(e).then((res) => {
        console.log(res.data);
        let link = res.data[0].media;
        this.linkStream = link;
      });
    },
  },
};
</script>

<style>
.home-content {
  flex-grow: 1;
}
</style>
