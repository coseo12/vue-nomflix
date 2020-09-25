<template>
  <slot />
</template>

<script>
import { provide, toRefs, readonly } from "vue";
import useSearchProvider from "@/composables/search/providers/useSearchProvider";

export const SearchSymbol = Symbol("SearchSymbol");

export default {
  setup() {
    provide(SearchSymbol, toRefs(readonly(useSearchProvider())));
  }
};
</script>
