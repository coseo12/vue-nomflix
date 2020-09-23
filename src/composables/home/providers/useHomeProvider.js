import { useState } from "@/utils";
import { moviesApi } from "@/api";

export default function useHomeProvider() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchedMovies = async () => {
    try {
      const {
        data: { results: nowPlayingData }
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcomingData }
      } = await moviesApi.upcoming();
      const {
        data: { results: popularData }
      } = await moviesApi.popular();
      setNowPlaying(nowPlayingData);
      setUpcoming(upcomingData);
      setPopular(popularData);
    } catch (e) {
      setError(`Can't find movies information.`);
    } finally {
      setLoading(false);
    }
  };
  return {
    nowPlaying,
    setNowPlaying,
    upcoming,
    setUpcoming,
    popular,
    setPopular,
    loading,
    setLoading,
    error,
    setError,
    fetchedMovies
  };
}
