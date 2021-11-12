<template>
  <div class="login">
    <input
      type="email"
      name=""
      v-model="login.email"
      id=""
      placeholder="Username"
    />
    <input
      type="password"
      name=""
      v-model="login.password"
      id=""
      placeholder="Password"
    />
    <button @click="handleLogin">
      <i v-if="loading" class="fa fa-spinner fa-spin"></i> Connexion
    </button>
    <div class="checkbox-box">
      <input class="checkbox" type="checkbox" name="" id="souvient" />
      <label for="souvient">Me souvenir</label>
    </div>
    <div class="register">
      <g-link class="nav__link" to="/register">S'inscrire</g-link>
      <a>Mot de passe oublié</a>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/user";
import jwt_decode from "jwt-decode";
import Loading from "@/components/Loading";
import { setToken, setUsername } from "@/utils/storage";
export default {
  name: "Login",
  components: {
    Loading,
  },
  data() {
    return {
      loading: false,
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      this.loading = true;
      login(this.login)
        .then((res) => {
          let token = res.data.token;
          let infoToken = jwt_decode(token);
          console.log(infoToken);
          setToken(token);
          console.log(token);
          setUsername({ ...infoToken });

          this.loading = false;
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.checkbox-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.checkbox {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(242, 246, 255, 0.65);
  box-sizing: border-box;
  border-radius: 4px;
}
.register {
  display: flex;
  justify-content: space-between;
}
.register a {
  cursor: pointer;
}
.register {
  text-decoration: none;
}
.login {
  display: flex;
  flex-direction: column;
  padding: 12px;

  border-bottom: 1px solid #ffffff;
  background: #1a1a1a;
}
</style>
