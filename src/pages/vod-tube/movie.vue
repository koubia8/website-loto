<template>
  <div>
    <posts
      v-if="editing && !comtShow"
      @cancel="handleCancelForm"
      @info-data="handleSend"
    />

    <!-- New card for movie -->

    <div
      v-if="!editing && !comtShow"
      class="movie_card"
      v-for="(post, index) in posts"
      :key="index"
      style="cursor:pointer;"
      @click="handleSelected(post)"
    >
      <div class="info_section">
        <div class="movie_header">
          <img class="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"/>
          <h1>{{ post.title }}</h1>
          <h4>2017, David Ayer</h4>
          <span class="minutes">117 min</span>
          <p class="type">{{ post.tag }}</p>
        </div>
        <div class="movie_desc">
          <p class="text" v-html="post.text">
          </p>
        </div>
        <div class="movie_social">
          <ul>
            <li><i class="fa fa-user"></i> {{ post.author.name }}</li>
            <li><i class="fas fa-clock"></i> {{ post.createdAt | formatDate }}</li>
            <li><i class="fa fa-eye"></i> {{ post.views }}</li>
          </ul>
        </div>
      </div>
      <div class="blur_back bright_back"></div>
    </div>

    <!-- End of movie card -->

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
import sanitizeHtml from 'sanitize-html';
export default {
  name: 'Movie',
  components: { Posts, Comment },
  filters: {
    cleanHtml (value) {
      const sanitize = require('sanitize-html')
      return sanitize(value, { allowedTags: false, allowedAttributes: false })
    },
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
      categoryId: "movie"
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
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');

*{
  box-sizing: border-box;
  margin: 0;
}

html, body{
  margin: 0;
  background: black;
  font-family: 'Montserrat', helvetica, arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
}

.movie_card{
  position: relative;
  display: block;
  width: 850px;
  height: 300px;
  margin: 30px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  &:hover{
    transform: scale(1.02);
    transition: all 0.4s;
  }
  .info_section{
    position: relative;
    width: 100%;
    height: 100%;
    background-blend-mode: multiply;
    z-index: 2;
    border-radius: 10px;
    .movie_header{
      position: relative;
      padding: 25px;
      height: 40%;
      h1{
        color: #fff;
        font-weight: 400;
      }
      h4{
        color: #9ac7fa;
        font-weight: 400;
      }
      .minutes{
        display: inline-block;
        margin-top: 10px;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid rgba(255,255,255,0.13);
      }
      .type{
        display: inline-block;
        color: #cee4fd;
        margin-left: 10px;
      }
      .locandina{
        position: relative;
        float: left;
        margin-right: 20px;
        height: 120px;
        box-shadow: 0 0 20px -10px rgba(0,0,0,0.5);
      }
    }
    .movie_desc{
      padding: 25px;
      height: 50%;
      .text{
        color: #cfd6e1;
      }
    }
    .movie_social{
      height: 10%;
      padding-left: 15px;
      padding-bottom: 20px;
      ul{
        list-style: none;
        padding: 0;
        li{
          display: inline-block;
          color: rgba(255,255,255,0.4);
          transition: color 0.3s;
          transition-delay: 0.15s;
          margin: 0 10px;
          &:hover{
            transition: color 0.3s;
            color: rgba(255,255,255,0.8);
          }
          i{
            font-size: 19px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .blur_back{
    position: absolute;
    top: 0;
    z-index: 1;
    height: 100%; right: 0;
    background-size: cover;
    border-radius: 11px;
  }
}

@media screen and (min-width: 768px) {
  .movie_header{
    width: 60%;
  }

  .movie_desc{
    width: 50%;
  }

  .info_section{
    background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
  }

  .blur_back{
    width: 80%;
    background-position: -100% 10% !important;
  }
}

@media screen and (max-width: 768px) {
  .movie_card{
    width: 95%;
    margin: 70px auto;
    min-height: 350px;
    height: auto;
  }

  .blur_back{
    width: 100%;
    background-position: 50% 50% !important;
  }

  .movie_header{
    width: 100%;
    margin-top: 85px;
  }

  .movie_desc{
    width: 100%;
  }

  .info_section{
    background: linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%);
    display: inline-grid;
  }
}

.bright_back{
  background: url("https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg");
}

#ave{
  box-shadow: 0px 0px 150px -45px rgba(199,147,75, 0.7);
  margin-bottom: 200px;
  &:hover{
    box-shadow: 0px 0px 120px -55px rgba(199,147,75, 0.7);
  }
}

.ave_back{
  background: url("https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg");
}

// End of test design

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
