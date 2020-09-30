import { useState } from "@/utils";
import { moviesApi, tvApi } from "@/api";

export default function useSearchProvider() {
  const [movieResults, setMovieResults] = useState(null);
  const [tvResults, setTvResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchedSearchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { results: movieResultsData }
      } = await moviesApi.search(searchTerm.value);
      const {
        data: { results: tvResultsData }
      } = await tvApi.search(searchTerm);
      setMovieResults(movieResultsData);
      setTvResults(tvResultsData);
    } catch (e) {
      setError(`Can't find results.`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (searchTerm.value !== "") fetchedSearchByTerm();
  };
  const updateTerm = event => {
    const {
      target: { value }
    } = event;
    setSearchTerm(value);
  };

  return {
    movieResults,
    setMovieResults,
    tvResults,
    setTvResults,
    searchTerm,
    setSearchTerm,
    error,
    setError,
    loading,
    setLoading,
    handleSubmit,
    updateTerm
  };
}
