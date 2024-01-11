<template>
  <p class="subtitle">
    <slot />
  </p>
</template>

<script>
export default {};
</script>

<style scoped>
.subtitle {
  color: var(--primary-color);
  font-size: 20px;
  line-height: 1.5;
  font-weight: medium;
  margin: 0;
}
</style>
