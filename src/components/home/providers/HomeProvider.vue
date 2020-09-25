<template>
  <slot />
</template>

<script>
import { provide, toRefs, readonly } from "vue";
import useHomeProvider from "@/composables/home/providers/useHomeProvider";

export const MoviesSymbol = Symbol("MoviesSymbol");

export default {
  setup() {
    provide(MoviesSymbol, toRefs(readonly(useHomeProvider())));
  }
};
</script>
