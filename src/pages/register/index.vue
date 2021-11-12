<template>
  <Layout>
    <div class="home-content">
      <form @submit="saveUser" class="form">
        <h1>Register</h1>
        <label>
          FirstName - LastName:
          <input v-model="newUser.name" type="text" name="name" required />
        </label>
        <label>
          Username:
          <input v-model="newUser.username" type="text" name="name" required />
        </label>
        <label>
          NickName:
          <input v-model="newUser.nickname" type="text" name="name" required />
        </label>
        <label>
          Email:
          <input v-model="newUser.email" type="email" name="name" required />
        </label>
        <label>
          Password:
          <input
            v-model="newUser.password"
            type="password"
            name="name"
            required
          />
        </label>

        <label>
          <button>Register</button>
        </label>
      </form>
    </div>
  </Layout>
</template>

<script>
import { newUser } from "@/api/user";

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {},
  data() {
    return {
      errors: [],
      newUser: {
        name: "",
        username: "",
        nickname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    saveUser(e) {
      e.preventDefault();
      this.errors = [];
      if (!this.newUser.username) {
        this.errors.push("Username required.");
      }
      if (!this.newUser.name) {
        this.errors.push("LastName et FirstName required.");
      }
      if (!this.newUser.nickname) {
        this.errors.push("LastName et FirstName required.");
      }
      if (!this.newUser.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.newUser.email.trim())) {
        this.errors.push("Email required.");
      }
      if (!this.newUser.password) {
        this.errors.push("Password  required.");
      }
      console.log(this.errors);
      if (!this.errors.length) {
        console.log("helllo");
        newUser(this.newUser)
          .then((res) => {
            this.$router.push("/");
          })
          .catch((err) => {
            console.log(err.data);
          });
      }
    },
  },
};
</script>

<style lang="scss" scope>
.home-content {
  flex-grow: 1;
  color: white;
}
.form {
  width: 100%;
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  label {
    width: 60%;
    input {
      width: 100%;
    }
  }
}
</style>
