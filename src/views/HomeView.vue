<template>
  <home-provider>
    <home-component></home-component>
  </home-provider>
</template>

<script>
import HomeProvider from "../providers/HomeProvider";
import HomeComponent from "../components/container/HomeComponent";

export default {
  name: "HomeView",
  components: {
    HomeProvider,
    HomeComponent
  }
};
</script>
