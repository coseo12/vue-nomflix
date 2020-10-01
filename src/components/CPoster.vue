<template>
  <div class="container" @click="toDetail(props, Router)">
    <div class="image-container">
      <div
        class="image"
        :style="{
          backgroundImage: `url(
            ${
              imageUrl
                ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                : require('@/assets/noPosterSmall.png')
            }
          )`
        }"
      ></div>
      <span class="rating">
        <span role="img" aria-label="rating">⭐️</span>
        {{ " " }} {{ rating }}/10
      </span>
    </div>
    <span class="title">
      {{ title && title.length > 15 ? `${title.substring(0, 15)}...` : title }}
    </span>
    <span class="year">
      {{ year }}
    </span>
  </div>
</template>

<script>
import Router from "@/router";

export default {
  name: "CPoster",
  props: {
    id: {
      type: Number,
      required: false
    },
    imageUrl: {
      type: String,
      required: false,
      default: ""
    },
    title: {
      type: String,
      required: false
    },
    rating: {
      type: Number,
      required: false
    },
    year: {
      type: Number,
      required: false
    },
    isMovie: {
      type: Boolean,
      required: false
    }
  },
  setup(props) {
    const toDetail = ({ isMovie, id }, { push }) => {
      if (isMovie) push(`/movie/${id}`);
      else push(`/show/${id}`);
    };

    return {
      toDetail,
      props,
      Router
    };
  }
};
</script>

<style scoped>
.container {
  font-size: 12px;
}
.image-container {
  margin-bottom: 5px;
  position: relative;
}
.image-container:hover .image {
  opacity: 0.3;
}
.image-container:hover .rating {
  opacity: 1;
}
.image {
  width: 130px;
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
}
.rating {
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
}
.title {
  display: block;
  margin-bottom: 3px;
  text-overflow: ellipsis;
}
.year {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
}
</style>
