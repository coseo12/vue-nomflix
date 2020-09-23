<template>
  <slot />
</template>

<script>
import { provide, reactive, toRefs, readonly } from "vue";
import useDetailProvider from "@/composables/detail/providers/useDetailProvider";

export const DetailSymbol = Symbol("DetailSymbol");

const use = reactive({
  ...useDetailProvider()
});

export default {
  setup() {
    provide(DetailSymbol, toRefs(readonly(use)));
  }
};
</script>
