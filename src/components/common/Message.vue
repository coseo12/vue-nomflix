<template>
  <div class="container">
    <span :style="{ color }">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.container {
  width: 100vw;
  display: flex;
  justify-content: center;
}
</style>
