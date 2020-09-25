<template>
  <slot />
</template>

<script>
import { provide, toRefs, readonly } from "vue";
import useTvProvider from "@/composables/tv/providers/useTvProvider";

export const TvSymbol = Symbol("TvSymbol");

export default {
  setup() {
    provide(TvSymbol, toRefs(readonly(useTvProvider())));
  }
};
</script>
