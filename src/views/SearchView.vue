<template>
  <search-provider>
    <search-container />
  </search-provider>
</template>

<script>
import SearchProvider from "../providers/SearchProvider";
import SearchContainer from "../container/SearchContainer";

export default {
  name: "SearchView",
  components: { SearchProvider, SearchContainer }
};
</script>

<style></style>
