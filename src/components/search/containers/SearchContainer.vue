<template>
  <form class="form" @submit.prevent="handleSubmit">
    <input
      type="text"
      class="input"
      placeholder="Search Movies or Tv Shows..."
      :value="searchTerm"
      @change="updateTerm"
    />
  </form>
  <c-loader v-if="loading" />
  <div v-else class="container">
    <c-section
      v-if="movieResults && movieResults.length > 0"
      title="Movies Results"
    >
      <c-poster
        v-for="(movie, idx) in movieResults"
        :key="idx"
        :id="Number(movie.id)"
        :title="movie.original_title"
        :imageUrl="movie.poster_path"
        :rating="Number(movie.vote_average)"
        :isMovie="true"
        :year="Number(movie.release_date.substring(0, 4))"
      />
    </c-section>
    <c-section
      v-if="tvResults && tvResults.length > 0"
      title="Tv Shows Results"
    >
      <c-poster
        v-for="show in tvResults"
        :key="show.id"
        :id="Number(show.id)"
        :title="show.original_name"
        :imageUrl="show.poster_path"
        :rating="Number(show.vote_average)"
        :isMovie="false"
        :year="Number(show.first_air_date.substring(0, 4))"
      />
    </c-section>
    <c-message v-if="error" color="#e73c3c" :text="error" />
    <c-message
      v-if="
        tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0
      "
      color="#95a5a6"
      text="Not found"
    />
  </div>
</template>

<script>
import { inject } from "vue";
import CLoader from "../../common/contents/CLoader";
import CSection from "../../common/contents/CSection";
import CPoster from "../../common/contents/CPoster";
import CMessage from "../../common/contents/CMessage";
import { SearchSymbol } from "../providers/SearchProvider";

export default {
  name: "SearchContainer",
  components: {
    CLoader,
    CSection,
    CPoster,
    CMessage
  },
  setup() {
    const {
      loading,
      movieResults,
      tvResults,
      searchTerm,
      error,
      handleSubmit,
      updateTerm
    } = inject(SearchSymbol);

    return {
      handleSubmit,
      updateTerm,
      loading,
      movieResults,
      tvResults,
      searchTerm,
      error
    };
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}
.form {
  margin-bottom: 50px;
  width: 100%;
}
.input {
  all: unset;
  font-size: 28px;
  width: 100%;
}
</style>
