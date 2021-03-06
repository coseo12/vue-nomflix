import { onMounted } from "vue";
import Router from "@/router";
import { useState } from "@/utils";
import { moviesApi, tvApi } from "@/api";

export default function useDetailProvider() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchedDetail = async ({ currentRoute: { value } }) => {
    const isMovie = value.path.includes("/movie");
    const parseId = parseInt(value.params.id);
    setResult(null);
    setLoading(true);
    try {
      if (isMovie) {
        const { data: resultData } = await moviesApi.movieDetail(parseId);
        setResult(resultData);
      } else {
        const { data: resultData } = await tvApi.showDetail(parseId);
        setResult(resultData);
      }
    } catch (e) {
      setError(`Can't find anything.`);
    } finally {
      setLoading(false);
    }
  };

  onMounted(() => {
    fetchedDetail(Router);
  });

  return {
    result,
    setResult,
    loading,
    setLoading,
    error,
    setError,
    fetchedDetail
  };
}
