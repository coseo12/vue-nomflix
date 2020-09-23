<template>
  <home-provider>
    <home-container></home-container>
  </home-provider>
</template>

<script>
import HomeProvider from "@/components/home/providers/HomeProvider";
import HomeContainer from "@/components/home/containers/HomeContainer";

export default {
  name: "HomeView",
  components: {
    HomeProvider,
    HomeContainer
  }
};
</script>
