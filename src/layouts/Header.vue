<template>
  <header class="header">
    <slot />
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  width: 100%;
  color: #ffffff;
}
</style>
