<template>
  <c-loader v-if="loading" />
  <div v-else class="container">
    <div
      v-if="result.backdrop_path"
      class="backdrop"
      :style="{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${result.backdrop_path})`
      }"
    ></div>
    <div class="content">
      <div
        class="cover"
        :style="{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${result.poster_path})`
        }"
      ></div>
      <div class="data">
        <h3 class="title">
          {{ result.original_title }}
        </h3>
        <div class="item-container">
          <span class="item">
            {{
              result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)
            }}
          </span>
          <span class="divider">•</span>
          <span class="item">
            {{ result.runtime ? result.runtime : result.episode_run_time[0] }}
          </span>
          <span class="divider">•</span>
          <span class="item">
            {{
              result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )
            }}
          </span>
        </div>
        <div class="imdb">
          <a
            class="imdb-link"
            :href="`https://www.imdb.com/title/${result.imdb_id}/`"
            target="_blank"
          >
            {{
              `https://www.imdb.com/
              ${
                result.original_title
                  ? result.original_title
                  : result.original_name
              }`
            }}
          </a>
        </div>
        <p class="overview">
          {{ result.overview }}
        </p>
        <div class="tab-bar">
          <div class="tab-btn"></div>
          <div class="tab-btn"></div>
          <div class="tab-btn"></div>
        </div>
        <div class="tab">
          <div class="tab-box">
            <div class="box">
              <div class="logo"></div>
              <div class="contents">
                <div class="item"></div>
                <div class="item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";
import Router from "@/router";
import CLoader from "@/components/common/contents/CLoader";
import { DetailSymbol } from "../providers/DetailProvider";

export default {
  name: "DetailContainer",
  components: {
    CLoader
  },
  setup() {
    const { loading, result, error, fetchedDetail } = inject(DetailSymbol);

    onMounted(() => {
      fetchedDetail.value(Router);
    });

    return { loading, result, error };
  }
};
</script>

<style scoped>
.container {
  height: calc(100vh - 50px);
  width: 100%;
  position: absolute;
  padding: 15px;
}
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
}
.content {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 50px;
  z-index: 1;
}
.cover {
  width: 30%;
  height: 100%;
  background-position: center center;
  background-size: cover;
}
.data {
  width: 70%;
  margin-left: 10px;
}
.title {
  font-size: 32px;
  margin-bottom: 10px;
}
.item-container {
  margin: 20px 0;
}
.divider {
  margin: 0 10px;
}
.overview {
  font-size: 12px;
  opacity: 0.7;
  line-height: 2;
  width: 50%;
}
.imdb {
  margin-bottom: 15px;
}
.imdb-link {
  text-decoration: underline;
  cursor: pointer;
}
</style>
