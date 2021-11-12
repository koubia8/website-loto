<template>
  <div>
    <posts
      v-if="editing && !comtShow"
      @cancel="handleCancelForm"
      @info-data="handleSend"
    />

    <div v-if="!editing && !comtShow" class="match">
      <table>
        <thead>
        <th class="text-left" width="25">N°</th>
        <th class="text-left" witdh="50">Title</th>
        <th class="text-left">name</th>
        <th class="text-center">date</th>
        <th class="text-center">View</th>
        </thead>
        <tbody>
        <tr
          v-for="(item, index) in posts"
          :key="index"
          style="cursor:pointer;"
          @click="handleSelected(item)"
        >
          <td>{{ ++index }}</td>
          <td class="text-left">{{ item.title }}</td>
          <td class="text-left">{{ item.author.name }}</td>
          <td class="text-center">{{ item.createdAt | formatDate }}</td>
          <td class="text-center">{{ item.views }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <button v-if="!editing && existToken && !comtShow" @click="handlePost">
      <i class="fa fa-edit"></i> New post
    </button>
    <Comment @next="handleNext" v-if="comtShow" :post="post" />
  </div>
</template>

<script>
import Posts from "@/components/form/Post.vue";
import { listPostCommunity, savePostCommunity } from "@/api/post";
import { getToken, getUsername } from "@/utils/storage";
import { parseTime } from "@/Filters";
import Comment from "@/components/form/PostDetails.vue";
import moment from 'moment';
export default {
  name: 'Sport video',
  components: { Posts, Comment },
  filters: {
    dateFormat: parseTime,
    formatDate (value) {
      moment.locale('en')
      if (value) {
        return moment(String(value)).format('LLL')
      }
    },
  },
  data() {
    return {
      editing: false,
      posts: [],
      post: "",
      comtShow: false,
      categoryId: "sports-video"
    };
  },
  computed: {
    existToken() {
      if (getToken() !== undefined) {
        return true;
      }
      return false;
    },
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    handlePost() {
      this.editing = true;
    },
    handleSend(e) {
      let post = {
        author: e.author,
        title: e.title,
        text: e.text,
        tag: e.tag,
        category: this.categoryId,
      };
      savePostCommunity(post)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.getPosts();
      this.editing = false;
    },
    getPosts() {
      listPostCommunity(this.categoryId).then((res) => {
        this.posts = res.data.posts;
      });
    },
    handleSelected(item) {
      this.post = { ...item };
      this.comtShow = true;
    },
    handleCancelForm(e) {
      console.log(e);
      this.editing = false;
    },
    handleNext() {
      this.comtShow = false;
      this.editing = false;
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
