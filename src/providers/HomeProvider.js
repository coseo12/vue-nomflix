import { provide, reactive, toRefs, readonly, onMounted } from "vue";
import { moviesApi } from "../api/index";

export const MoviesSymbol = Symbol("MoviesSymbol");

const movies = reactive({
  nowPlaying: null,
  upcoming: null,
  popular: null,
  error: null,
  loading: true
});

const fetchedMovies = async () => {
  try {
    const {
      data: { results: nowPlaying }
    } = await moviesApi.nowPlaying();
    const {
      data: { results: upcoming }
    } = await moviesApi.upcoming();
    const {
      data: { results: popular }
    } = await moviesApi.popular();
    movies.nowPlaying = nowPlaying;
    movies.upcoming = upcoming;
    movies.popular = popular;
  } catch (error) {
    movies.error = `Can't find movies information.`;
  } finally {
    movies.loading = false;
  }
};

export default {
  setup() {
    onMounted(() => {
      fetchedMovies();
    });
    provide(MoviesSymbol, toRefs(readonly(movies)));
  },
  render() {
    return this.$slots.default();
  }
};
