import { provide, reactive, toRefs, readonly } from "vue";
import { moviesApi, tvApi } from "../api/index";

export const SearchSymbol = Symbol("SearchSymbol");

const search = reactive({
  movieResults: null,
  tvResults: null,
  searchTerm: null,
  error: null,
  loading: false,
  handleSubmit: null,
  updateTerm: null
});

const fetchedSearchByTerm = async () => {
  search.loading = true;
  try {
    const {
      data: { results: movieResults }
    } = await moviesApi.search(search.searchTerm);
    const {
      data: { results: tvResults }
    } = await tvApi.search(search.searchTerm);
    search.movieResults = movieResults;
    search.tvResults = tvResults;
  } catch (error) {
    search.error = `Can't find results.`;
  } finally {
    search.loading = false;
  }
};

search.handleSubmit = () => {
  if (search.searchTerm !== "") fetchedSearchByTerm();
};
search.updateTerm = event => {
  const {
    target: { value }
  } = event;
  search.searchTerm = value;
};

export default {
  setup() {
    provide(SearchSymbol, toRefs(readonly(search)));
  },
  render() {
    return this.$slots.default();
  }
};
