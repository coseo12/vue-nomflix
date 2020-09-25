<template>
  <slot />
</template>

<script>
import { provide, toRefs, readonly } from "vue";
import useDetailProvider from "@/composables/detail/providers/useDetailProvider";

export const DetailSymbol = Symbol("DetailSymbol");

export default {
  setup() {
    provide(DetailSymbol, toRefs(readonly(useDetailProvider())));
  }
};
</script>
