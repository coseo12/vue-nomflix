import { onMounted } from "vue";
import { useState } from "@/utils";
import { tvApi } from "@/api";

export default function useTvProvider() {
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

  onMounted(() => {
    fetchedTvData();
  });

  return {
    topRated,
    setTopRated,
    airingToday,
    setAiringToday,
    popular,
    setPopular,
    error,
    setError,
    loading,
    setLoading,
    fetchedTvData
  };
}
