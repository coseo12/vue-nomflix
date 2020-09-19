<template>
  <tv-provider>
    <tv-container />
  </tv-provider>
</template>

<script>
import TvContainer from "../container/TvContainer";
import TvProvider from "../providers/TvProvider";

export default {
  name: "TvView",
  components: {
    TvContainer,
    TvProvider
  }
};
</script>
