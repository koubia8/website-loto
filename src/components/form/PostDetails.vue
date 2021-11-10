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
          <li><i class="fa fa-clock-o"></i> {{ post.createdAt }}</li>
        </ul>
      </div>
    </div>
    <div class="post-body" v-html="post.text"></div>
    <div class="comment">
      <div class="comment-input">
        <textarea placeholder="Comment..." cols="100" rows="3"></textarea>
        <button><i class="fa fa-send"></i> Send</button>
      </div>
      <div class="comment-item">
        <span style="color:#ffff00; ">Author</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
          pariatur, eaque illum quibusdam deleniti vero fuga, distinctio
          dignissimos ex quam non commodi nesciunt adipisci. Veritatis officiis
          voluptates a. Magni, modi.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  methods: {
    handleNext() {
      this.$emit("next", true);
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
