import { provide, reactive, toRefs, readonly, onMounted } from "vue";
import Router from "../router";
import { moviesApi, tvApi } from "../api/index";

export const DetailSymbol = Symbol("DetailSymbol");

const detail = reactive({
  result: null,
  current: "/Production",
  isMovie: true,
  loading: true,
  parseId: null,
  error: null
});

const fetchedDetail = async ({ currentRoute: { value } }) => {
  detail.isMovie = value.path.includes("/movie");
  detail.parseId = parseInt(value.params.id);
  try {
    if (detail.isMovie) {
      const { data: result } = await moviesApi.movieDetail(detail.parseId);
      detail.result = result;
    } else {
      const { data: result } = await tvApi.showDetail(detail.parseId);
      detail.result = result;
    }
  } catch (error) {
    detail.error = `Can't find anything.`;
  } finally {
    detail.loading = false;
  }
};

export default {
  setup() {
    onMounted(() => {
      fetchedDetail(Router);
    });
    provide(DetailSymbol, toRefs(readonly(detail)));
  },
  render() {
    return this.$slots.default();
  }
};
