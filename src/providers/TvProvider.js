import { provide, reactive, toRefs, readonly, onMounted } from "vue";
import { tvApi } from "../api/index";

export const TvSymbol = Symbol("TvSymbol");

const tv = reactive({
  topRated: null,
  airingToday: null,
  popular: null,
  error: null,
  loading: true
});

const fetchedTvData = async () => {
  try {
    const {
      data: { results: topRated }
    } = await tvApi.topRated();
    const {
      data: { results: airingToday }
    } = await tvApi.airingToday();
    const {
      data: { results: popular }
    } = await tvApi.popular();
    tv.topRated = topRated;
    tv.airingToday = airingToday;
    tv.popular = popular;
  } catch (error) {
    tv.error = `Can't find Tv information.`;
  } finally {
    tv.loading = false;
  }
};

export default {
  setup() {
    onMounted(() => {
      fetchedTvData();
    });
    provide(TvSymbol, toRefs(readonly(tv)));
  },
  render() {
    return this.$slots.default();
  }
};
