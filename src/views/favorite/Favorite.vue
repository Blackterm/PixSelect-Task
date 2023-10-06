<template>
  <div class="row p-0 m-0">
    <div
      class="col-sm-12 col-md-6 col-lg-3 mb-4 mt-2"
      v-for="item in favoriteList"
      :key="item"
      @click="routerMovieDetail(item.id)"
    >
      <div
        class="card text-dark card-has-bg click-col text-opacity-25"
        :style="`background-image: url('https://image.tmdb.org/t/p/w500${item.poster_path}')`"
      >
        <img
          class="card-img d-none"
          src="https://source.unsplash.com/600x900/?tech,street"
          alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
        />
        <div class="card-img-overlay d-flex flex-column">
          <div class="card-body">
            <h4 class="card-title mt-0">
              <span class="text-warning">
                {{ item.title }}
              </span>
            </h4>

            <h6 class="text-warning">Rate: {{ item.vote_average }}</h6>
            <small class="text-warning">
              Realize ><i class="far fa-clock"></i>
              {{ item.release_date }}</small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Actions } from "@/store/enums/StoreEnums";
import { defineComponent, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "FavoritePage",
  setup() {
    const store = useStore();
    const router = useRouter();
    const favoriteList = computed(() => {
      return store.getters.getFavoriteList;
    });

    const routerMovieDetail = (id) => {
      router.push({ name: "moviedetail", params: { id } });
    };
    onMounted(() => {
      store.dispatch(Actions.GET_FAVORITE_MOVIES);
    });
    return {
      favoriteList,
      routerMovieDetail,
    };
  },
});
</script>

