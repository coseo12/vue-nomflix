<template>
  <div class="container">
    <span class="title">
      {{ title }}
    </span>
    <div class="grid">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "CSection",
  props: {
    title: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style scoped>
.container {
  margin-bottom: 50px;
}
.title {
  font-size: 14px;
  font-weight: 600;
}
.grid {
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
}
</style>
