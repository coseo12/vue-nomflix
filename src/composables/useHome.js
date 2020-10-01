import { onMounted } from "vue";
import { useState } from "@/utils";
import { moviesApi } from "@/api";

export default function useHomeProvider() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upComing, setUpComing] = useState(null);
  const [popular, setPopular] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchedMovies = async () => {
    try {
      const {
        data: { results: nowPlayingData }
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upComingData }
      } = await moviesApi.upcoming();
      const {
        data: { results: popularData }
      } = await moviesApi.popular();
      setNowPlaying(nowPlayingData);
      setUpComing(upComingData);
      setPopular(popularData);
    } catch (e) {
      setError(`Can't find movies information.`);
    } finally {
      setLoading(false);
    }
  };

  onMounted(() => {
    fetchedMovies();
  });

  return {
    nowPlaying,
    setNowPlaying,
    upComing,
    setUpComing,
    popular,
    setPopular,
    loading,
    setLoading,
    error,
    setError,
    fetchedMovies
  };
}
