<template>
  <tv-provider>
    <tv-container />
  </tv-provider>
</template>

<script>
import TvContainer from "../components/tv/containers/TvContainer";
import TvProvider from "../components/tv/providers/TvProvider";

export default {
  name: "TvView",
  components: {
    TvContainer,
    TvProvider
  }
};
</script>
