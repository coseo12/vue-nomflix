import { ref, readonly } from "vue";
export const useState = value => {
  const arr = [];
  const r = ref(value);
  const fn = v => {
    r.value = v;
  };
  arr.push(readonly(r));
  arr.push(fn);
  return arr;
};
