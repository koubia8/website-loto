<template>
  <div class="post-detail">
    <i
      @click="handleNext"
      style="font-size: 1.2rem;cursor:pointer;"
      class="fa fa-arrow-left"
    >
      Retour</i
    >

    <h3>{{ post.title }}</h3>
    <div class="post-header">
      <img src="@/assets/avatar-cn.gif" class="post-avatar" />
      <div class="post-nav">
        <span>{{ post.author.name }}</span>
        <ul class="post-nav-item">
          <li><i class="fa fa-comment-o"></i> 0</li>
          <li><i class="fa fa-eye"></i> {{ post.views }}</li>
          <li>
            <i class="fa fa-clock-o"></i> {{ post.createdAt | formatDate }}
          </li>
        </ul>
      </div>
    </div>
    <div class="post-body" v-html="post.text"></div>
    <div class="comment">
      <div v-show="existToken" class="comment-input">
        <input
          style="width:100%;height:70px;"
          required
          placeholder="Saisir un commentaire ..."
          v-model="comment"
          @keydown.enter="newComment"
        />
        <!--  <button><i class="fa fa-send"></i> Send</button> -->
      </div>
      <div v-for="(item, index) in comments" :key="index" class="comment-item">
        <span style="color:#ffff00; ">{{ item.author.name }}</span>
        <p>
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { postComment, getCommentPost, saveView } from "@/api/post";
import { getToken, getUsername } from "@/utils/storage";
import moment from "moment";
export default {
  props: {
    post: Object,
  },
  filters: {
    formatDate(value) {
      moment.locale("en");
      if (value) {
        return moment(String(value)).format("LLL");
      }
    },
  },
  computed: {
    user() {
      return JSON.parse(getUsername());
    },
    existToken() {
      return getToken() !== undefined;
    },
  },

  data() {
    return {
      comment: "",
      comments: [],
    };
  },
  mounted() {
    this.getComments();
    this.saveView();
  },
  methods: {
    handleNext() {
      this.$emit("next", true);
    },
    newComment() {
      let comment = {
        author: this.user.userId,
        published: true,
        post: this.post._id,
        text: this.comment,
      };
      postComment(comment)
        .then((res) => {
          this.getComments();
          this.comment = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getComments() {
      getCommentPost(this.post._id)
        .then((res) => {
          this.comments = res.data.comment;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    saveView() {
      saveView(this.post._id)
        .then((res) => {
          this.post.views += 1;
        })
        .catch((err) => {
          console.log("hello");
        });
    },
  },
};
</script>

<style scoped>
.post-detail {
  color: rgba(255, 255, 255, 0.7);
}
.post-detail .comment {
  display: flex;
  flex-direction: column;
}
.post-detail .comment-item {
  border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
}
.post-detail .comment-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.post-detail .comment-input button {
  margin-top: 12px;
  margin-bottom: 12px;
}
.post-body {
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
.post-nav-item li {
  display: flex;
  align-items: center;
}
.post-header {
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.post-nav {
  display: flex;
  flex-direction: column;
}
.post-nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 12px;
}
.post-nav ul,
.post-nav span {
  margin-left: 8px;
}
.post-nav ul li {
  display: inline;
  padding-left: 12px;
}
.post-nav ul li {
  display: inline;
  padding-left: 12px;
}
.post-avatar {
  border-radius: 30px;
  width: 45px;
}
</style>
