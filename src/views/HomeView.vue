<template>
  <home-provider>
    <home-container></home-container>
  </home-provider>
</template>

<script>
import HomeProvider from "../providers/HomeProvider";
import HomeContainer from "../container/HomeContainer";

export default {
  name: "HomeView",
  components: {
    HomeProvider,
    HomeContainer
  }
};
</script>
