<template>
  <div class="row p-2 m-0">
    <div class="card border-0 bg-dark mt-2 p-2" style="height: 550px">
      <div class="d-flex justify-content-center">
        <img
          :src="`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`"
          style="height: 250px; width: 650px; opacity: 0.5"
        />
      </div>

      <div class="card-body">
        <h2 class="card-title text-warning">{{ movieDetail.title }}</h2>

        <p class="card-text text-warning">
          {{ movieDetail.tagline }}
        </p>

        <p class="card-text text-warning">
          {{ movieDetail.overview }}
        </p>

        <h6 class="text-warning">Rate: {{ movieDetail.vote_average }}</h6>
        <small class="text-warning">
          Realize ><i class="far fa-clock"></i>
          {{ movieDetail.release_date }}</small
        >

        <p class="card-text">
          <small class="text-warning me-2">
            Time > {{ movieDetail.runtime }}</small
          >
        </p>
        <p class="card-text">
          <small
            v-for="item in movieDetail.genres"
            :key="item"
            class="text-warning me-2"
          >
            {{ item.name }}</small
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";
export default defineComponent({
  name: "MovieDetailPage",
  setup() {
    const store = useStore();
    const route = useRoute();

    const movieDetail = computed(() => {
      return store.getters.getMovieDetails;
    });

    onMounted(() => {
      store.dispatch(Actions.GET_MOVIE_DETAIL, route.params["id"]);
    });
    onUnmounted(() => {
      store.dispatch(Actions.CLEAR_MOVIE_DETAIL);
    });

    return {
      movieDetail,
    };
  },
});
</script>
