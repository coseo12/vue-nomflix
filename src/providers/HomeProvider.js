import { provide, reactive, toRefs, readonly, onMounted } from "vue";
import { useState } from "../utils";
import { moviesApi } from "../api/index";

export const MoviesSymbol = Symbol("MoviesSymbol");

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

const use = reactive({
  nowPlaying,
  upcoming,
  popular,
  loading,
  error,
  setPopular,
  setUpcoming,
  setNowPlaying,
  setError
});

export default {
  setup() {
    onMounted(() => {
      fetchedMovies();
    });
    provide(MoviesSymbol, toRefs(readonly(use)));
  },
  render() {
    return this.$slots.default();
  }
};
