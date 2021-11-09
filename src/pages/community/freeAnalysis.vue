<template>
  <div>
    <post v-if="editing" @info-data="handleSend" />

    <div v-if="!editing" class="match">
      <table>
        <thead>
          <th class="text-left">Number</th>
          <th class="text-left" witdh="50">Title</th>
          <th class="text-center">name</th>
          <th class="text-center">date</th>
          <th class="text-center">View</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in posts" :key="index">
            <td>{{ ++index }}</td>
            <td class="text-left">{{ item.title }}</td>
            <td class="text-left">{{ item.author.name }}</td>
            <td class="text-center">{{ item.createdAt }}</td>
            <td class="text-center">{{ item.views }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button v-if="!editing" @click="handlePost">
      <i class="fa fa-edit"></i> New post
    </button>
  </div>
</template>

<script>
import Post from "@/components/form/Post.vue";
import { listPostCommunity, savePostCommunity } from "@/api/post";
export default {
  components: { Post },
  data() {
    return {
      editing: false,
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    handlePost() {
      this.editing = true;
    },
    handleSend(e) {
      console.log(e);

      let post = {
        author: "61891cc7bb3f8cb6b9a4a302",
        title: e.title,
        text: e.text,
        tag: e.tag,
        category: "test category",
      };
      savePostCommunity(post).then((res) => {});
    },
    getPosts() {
      listPostCommunity().then((res) => {
        this.posts = res.data.posts;
      });
    },
  },
};
</script>

<style scoped>
.match {
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin: 10px 0px;
}
td {
  color: #ffffff;
  padding: 4px;
  font-weight: 200;
  font-size: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

h1 {
  color: #ffffff;
}
.user {
  margin: 0px 30px;
}
.match table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  width: 100%;
  color: #ffffff;
}

.match thead th {
  padding: 4px;
  border-bottom: 1px solid #ffffff;
  background-color: #333333;
}
thead:first-child {
  width: 12%;
}
thead :nth-child(2) {
  text-align: left;
  width: 16%;
}
thead :nth-child(3) {
  width: 16%;
}
.match tbody {
  /*background: rgba(255, 255, 255, 0.2);*/
  background: rgba(255, 255, 255, -0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
}
.match tbody tr td {
  color: #ffffff;
  padding: 6px 3px;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
</style>
