import { provide, reactive, toRefs, readonly, onMounted, computed } from "vue";
import { moviesApi } from "../api/index";

export const MoviesSymbol = Symbol("MoviesSymbol");

const movies = reactive({
  nowPlaying: null,
  upcoming: null,
  popular: null,
  error: null,
  loading: true
});

const useMovieDate = async () => {
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

export const useGetLoading = () => computed(() => movies.loading);
export const useGetNowPlaying = () => computed(() => movies.nowPlaying);
export const useGetUpcoming = () => computed(() => movies.upcoming);
export const useGetPopular = () => computed(() => movies.popular);
export const useGetError = () => computed(() => movies.error);

export default {
  setup() {
    onMounted(() => {
      useMovieDate();
    });
    provide(MoviesSymbol, toRefs(readonly(movies)));
  },
  render() {
    return this.$slots.default();
  }
};
