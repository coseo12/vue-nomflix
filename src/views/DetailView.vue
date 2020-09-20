<template>
  <detail-provider>
    <detail-container />
  </detail-provider>
</template>

<script>
import DetailContainer from "../container/DetailContainer";
import DetailProvider from "../providers/DetailProvider";

export default {
  name: "DetailView",
  components: {
    DetailContainer,
    DetailProvider
  }
};
</script>
