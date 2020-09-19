<template>
  <c-loader v-if="loading" />
  <div v-else class="container">
    <c-section v-if="nowPlaying && nowPlaying.length > 0" title="Now Playing">
      <c-poster
        v-for="(movie, idx) in nowPlaying"
        :key="idx"
        :id="Number(movie.id)"
        :title="movie.original_title"
        :imageUrl="movie.poster_path"
        :rating="Number(movie.vote_average)"
        :isMovie="true"
        :year="Number(movie.release_date.substring(0, 4))"
      />
    </c-section>
    <c-section v-if="upComing && upComing.length > 0" title="Upcoming Movies">
      <c-poster
        v-for="(movie, idx) in upComing"
        :key="idx"
        :id="Number(movie.id)"
        :title="movie.original_title"
        :imageUrl="movie.poster_path"
        :rating="Number(movie.vote_average)"
        :isMovie="true"
        :year="Number(movie.release_date.substring(0, 4))"
      />
    </c-section>
    <c-section v-if="popular && popular.length > 0" title="Popular Movies">
      <c-poster
        v-for="(movie, idx) in popular"
        :key="idx"
        :id="Number(movie.id)"
        :title="movie.original_title"
        :imageUrl="movie.poster_path"
        :rating="Number(movie.vote_average)"
        :isMovie="true"
        :year="Number(movie.release_date.substring(0, 4))"
      />
    </c-section>
  </div>
</template>

<script>
import { inject } from "vue";
import CLoader from "../components/CLoader";
import CSection from "../components/CSection";
import CPoster from "../components/CPoster";
import { MoviesSymbol } from "../providers/HomeProvider";

export default {
  name: "HomeContainer",
  components: {
    CLoader,
    CSection,
    CPoster
  },
  setup() {
    const { loading, nowPlaying, upComing, popular, error } = inject(
      MoviesSymbol
    );

    return { loading, nowPlaying, upComing, popular, error };
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
