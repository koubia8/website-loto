<template>
  <a @click="handleLogout" class="logout">Se déconnecter</a>
</template>

<script>
import { removeToken, removeUsername } from "@/utils/storage";
export default {
  name: "Logout",
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
  methods: {
    handleLogout() {
      removeUsername();
      removeToken();
      if (this.currentRoute === "/") {
        window.location.reload();
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.logout {
  cursor: pointer;
}
</style>
