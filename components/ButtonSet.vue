<template>
  <component :is="component" class="btn-primary">
    <nuxt-icon v-if="iconLeft" :name="iconLeft" :class="iconClass" />
    <slot />
    <nuxt-icon v-if="iconRight" :name="iconRight" :class="iconClass" />
  </component>
</template>

<script>
export default {
  props: {
    link: Boolean,
    iconLeft: String,
    iconRight: String,
    iconClass: Object,
  },
  data() {
    return {
      component: "button",
    };
  },
  created() {
    this.component = this.props?.link ? "NuxtLink" : "button";
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: var(--primary-color);
  height: 58px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-inline: 40px;
  color: white;
  border-radius: 58px;
  border: 0;
  font-size: 16px;
  font-weight: medium;
  text-decoration: none;

  & .nuxt-icon svg {
    width: 22px;
    height: 22px;
  }
}

.btn-primary:hover {
  filter: brightness(90%);
}
</style>
