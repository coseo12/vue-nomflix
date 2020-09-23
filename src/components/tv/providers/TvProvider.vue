<template>
  <slot />
</template>

<script>
import { provide, reactive, toRefs, readonly } from "vue";
import useTvProvider from "@/composables/tv/providers/useTvProvider";

export const TvSymbol = Symbol("TvSymbol");

const use = reactive({
  ...useTvProvider()
});

export default {
  setup() {
    provide(TvSymbol, toRefs(readonly(use)));
  }
};
</script>
