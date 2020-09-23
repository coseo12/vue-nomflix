import { provide, reactive, toRefs, readonly, onMounted } from "vue";
import { useState } from "@/utils";
import { tvApi } from "@/api";

export const TvSymbol = Symbol("TvSymbol");

const [topRated, setTopRated] = useState(null);
const [airingToday, setAiringToday] = useState(null);
const [popular, setPopular] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

const fetchedTvData = async () => {
  try {
    const {
      data: { results: topRatedData }
    } = await tvApi.topRated();
    const {
      data: { results: airingTodayData }
    } = await tvApi.airingToday();
    const {
      data: { results: popularData }
    } = await tvApi.popular();
    setTopRated(topRatedData);
    setAiringToday(airingTodayData);
    setPopular(popularData);
  } catch (e) {
    setError(`Can't find Tv information.`);
  } finally {
    setLoading(false);
  }
};

const use = reactive({
  topRated,
  airingToday,
  popular,
  error,
  loading,
  setTopRated,
  setAiringToday,
  setPopular,
  setError,
  setLoading
});

export default {
  setup() {
    onMounted(() => {
      fetchedTvData();
    });
    provide(TvSymbol, toRefs(readonly(use)));
  },
  render() {
    return this.$slots.default();
  }
};
