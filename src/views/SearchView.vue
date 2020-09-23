<template>
  <search-provider>
    <search-container />
  </search-provider>
</template>

<script>
import SearchProvider from "../components/search/providers/SearchProvider";
import SearchContainer from "../components/search/containers/SearchContainer";

export default {
  name: "SearchView",
  components: { SearchProvider, SearchContainer }
};
</script>

<style></style>
