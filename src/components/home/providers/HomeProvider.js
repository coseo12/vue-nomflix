import { provide, reactive, toRefs, readonly } from "vue";
import useHomeProvider from "@/composables/home/providers/useHomeProvider";

export const MoviesSymbol = Symbol("MoviesSymbol");

const use = reactive({
  ...useHomeProvider()
});

export default {
  setup() {
    provide(MoviesSymbol, toRefs(readonly(use)));
  },
  render() {
    return this.$slots.default();
  }
};
