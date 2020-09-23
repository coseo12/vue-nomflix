<template>
  <detail-provider>
    <detail-container />
  </detail-provider>
</template>

<script>
import DetailContainer from "@/components/detail/containers/DetailContainer";
import DetailProvider from "@/components/detail/providers/DetailProvider";

export default {
  name: "DetailView",
  components: {
    DetailContainer,
    DetailProvider
  }
};
</script>
