<template>
  <c-loader v-if="loading" />
  <div v-else class="container">
    <c-section v-if="topRated && topRated.length > 0" title="Top Rate Shows">
      <c-poster
        v-for="(show, idx) in topRated"
        :key="idx"
        :id="Number(show.id)"
        :title="show.original_name"
        :imageUrl="show.poster_path"
        :rating="Number(show.vote_average)"
        :isMovie="false"
        :year="Number(show.first_air_date.substring(0, 4))"
      />
    </c-section>
    <c-section v-if="popular && popular.length > 0" title="Popular Shows">
      <c-poster
        v-for="(show, idx) in popular"
        :key="idx"
        :id="Number(show.id)"
        :title="show.original_name"
        :imageUrl="show.poster_path"
        :rating="Number(show.vote_average)"
        :isMovie="false"
        :year="Number(show.first_air_date.substring(0, 4))"
      />
    </c-section>
    <c-section
      v-if="airingToday && airingToday.length > 0"
      title="AiringToday Shows"
    >
      <c-poster
        v-for="(show, idx) in airingToday"
        :key="idx"
        :id="Number(show.id)"
        :title="show.original_name"
        :imageUrl="show.poster_path"
        :rating="Number(show.vote_average)"
        :isMovie="false"
        :year="Number(show.first_air_date.substring(0, 4))"
      />
    </c-section>
  </div>
</template>

<script>
import { inject } from "vue";
import CLoader from "../../common/contents/CLoader";
import CSection from "../../common/contents/CSection";
import CPoster from "../../common/contents/CPoster";
import { TvSymbol } from "../providers/TvProvider";

export default {
  name: "TvContainer",
  components: {
    CLoader,
    CSection,
    CPoster
  },
  setup() {
    const { loading, topRated, airingToday, popular, error } = inject(TvSymbol);

    return { loading, topRated, airingToday, popular, error };
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
