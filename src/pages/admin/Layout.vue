<template>
  <div class="admin">
    <sidebar />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import Sidebar from "./component/Sidebar.vue";
export default {
  components: { Sidebar },
};
</script>

<style scoped>
.admin {
  color: white;
  display: flex;
}
.admin .sidebar {
  padding-top: 32px;
  width: 12%;
  background-color: #333333;
  height: 100vh;
  color: rgba(255, 255, 255, 0.8);
}
.admin .content {
  flex-grow: 1;
}
</style>
