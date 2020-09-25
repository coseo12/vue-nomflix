<template>
  <slot />
</template>

<script>
import { provide, reactive, toRefs, readonly } from "vue";
import useSearchProvider from "@/composables/search/providers/useSearchProvider";

export const SearchSymbol = Symbol("SearchSymbol");

const use = reactive({
  ...useSearchProvider()
});

export default {
  setup() {
    provide(SearchSymbol, toRefs(readonly(use)));
  }
};
</script>
