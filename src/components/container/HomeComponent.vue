<template>
  <Loader v-if="getLoading" />
  <div v-else class="container">
    <Section title="Now Playing">
      <Poster
        v-for="(movie, idx) in getNowPlaying"
        :key="idx"
        :id="Number(movie.id)"
        :title="movie.original_title"
        :imageUrl="movie.poster_path"
        :rating="Number(movie.vote_average)"
        :isMovie="true"
        :year="Number(movie.release_date.substring(0, 4))"
      />
    </Section>
    <Section title="Upcoming Movies">
      <Poster
        v-for="(movie, idx) in getUpcoming"
        :key="idx"
        :id="Number(movie.id)"
        :title="movie.original_title"
        :imageUrl="movie.poster_path"
        :rating="Number(movie.vote_average)"
        :isMovie="true"
        :year="Number(movie.release_date.substring(0, 4))"
      />
    </Section>
    <Section title="Popular Movies">
      <Poster
        v-for="(movie, idx) in getPopular"
        :key="idx"
        :id="Number(movie.id)"
        :title="movie.original_title"
        :imageUrl="movie.poster_path"
        :rating="Number(movie.vote_average)"
        :isMovie="true"
        :year="Number(movie.release_date.substring(0, 4))"
      />
    </Section>
  </div>
</template>

<script>
import Loader from "../common/Loader";
import Section from "../common/Section";
import Poster from "../common/Poster";
import {
  useGetLoading,
  useGetNowPlaying,
  useGetUpcoming,
  useGetPopular,
  useGetError
} from "../../providers/HomeProvider";

export default {
  name: "HomeComponent",
  components: {
    Loader,
    Section,
    Poster
  },
  setup() {
    const getLoading = useGetLoading();
    const getNowPlaying = useGetNowPlaying();
    const getUpcoming = useGetUpcoming();
    const getPopular = useGetPopular();
    const getError = useGetError();

    return { getLoading, getNowPlaying, getUpcoming, getPopular, getError };
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
