<template>
  <div>
    <posts
      v-if="editing && !comtShow"
      @cancel="handleCancelForm"
      @info-data="handleSend"
    />

    <!-- New card for movie -->
    <div v-if="!editing && !comtShow">
      <ul class="group-card">
        <li
          class="card"
          v-for="(post, index) in posts"
          :key="index"
          @click="handleSelected(post)"
        >
          <img
            class="locandina"
            src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
          />
          <span style="font-size:16px;color:#ccc">{{ post.title }}</span>

          <div class="movie_desc">
            <p class="text" v-html="post.text"></p>
            <ul class="post-nav-item">
              <li><i class="fa fa-user"></i> {{ post.author.nickname }}</li>
              <li><i class="fa fa-eye"></i> {{ post.views }}</li>
              <li>
                <i class="fa fa-clock-o"></i> {{ post.createdAt | formatDate }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!-- End of movie card -->

    <!--  <div v-if="!editing && !comtShow" class="match">
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
    </div> -->
    <div class="footer-bottom">
      <button v-if="!editing && existToken && !comtShow" @click="handlePost">
        <i class="fa fa-edit"></i> New post
      </button>
    </div>

    <Comment @next="handleNext" v-if="comtShow" :post="post" />
  </div>
</template>

<script>
import Posts from "@/components/form/Post.vue";
import { listPostCommunity, savePostCommunity } from "@/api/post";
import { getToken, getUsername } from "@/utils/storage";
import { parseTime } from "@/Filters";
import Comment from "@/components/form/PostDetails.vue";
import moment from "moment";
import sanitizeHtml from "sanitize-html";
export default {
  name: "Movie",
  components: { Posts, Comment },
  filters: {
    cleanHtml(value) {
      const sanitize = require("sanitize-html");
      return sanitize(value, { allowedTags: false, allowedAttributes: false });
    },
    formatDate(value) {
      moment.locale("en");
      if (value) {
        return moment(String(value)).format("LLL");
      }
    },
  },
  data() {
    return {
      editing: false,
      posts: [],
      post: "",
      comtShow: false,
      categoryId: "movie",
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

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800");

* {
  box-sizing: border-box;
  margin: 0;
}

html,
body {
  margin: 0;
  background: black;
  font-family: "Montserrat", helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
}
.card {
  display: flex;
}
.footer-bottom {
  margin-top: 20px;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  padding: 12px;
}
.group-card {
  display: flex;
  flex-wrap: wrap;
  color: white;
  .card {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 10px;
    margin-bottom: 10px;
    align-items: center;
    img {
      // min-width: 100%;
    }
    .movie_desc {
      text-align: center;
      font-size: 12px;
      color: #acacac;
      overflow: hidden;
      .text {
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 200px;
        height: 50px;
        display: block;
        overflow: hidden;
        padding: 0;
      }
      p {
        margin: 0;
      }

      ul {
        display: flex;
        justify-content: center;
        margin: 0;
        flex-wrap: wrap;
        padding: 0;
        li {
          display: flex;
          align-items: center;
          padding: 6px;
          i {
            margin-right: 4px;
          }
        }
      }
    }
  }
}
post-body {
  min-height: 150px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  padding: 6px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.post-nav-item .item {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

@media screen and (min-width: 768px) {
  .group-card {
    display: flex;
    flex-wrap: wrap;
    color: white;
    .card {
      display: flex;
      flex-direction: column;
      width: 25%;

      padding-left: 10px;
      margin-bottom: 10px;
    }
  }
}
@media screen and (min-width: 600px) {
  .group-card {
    display: flex;
    flex-wrap: wrap;
    color: white;
    .card {
      display: flex;
      flex-direction: column;
      width: 25%;

      padding-left: 10px;
      margin-bottom: 10px;
    }
  }
}
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
