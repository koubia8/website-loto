<template>
  <a @click="handleLogout" class="logout">Se déconnecter</a>
</template>

<script>
import { removeToken, removeUsername } from "@/utils/storage";
export default {
  name: "Logout",
  methods: {
    handleLogout() {
      removeUsername();
      removeToken();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.logout {
  cursor: pointer;
}
</style>
