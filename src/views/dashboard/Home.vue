<template>
  <div class="row p-0 m-0">
    <div class="search mt-2">
      <input
        class="form-control"
        type="text"
        v-model="searchQuery"
        placeholder="Search"
      />
    </div>

    <div v-if="searchQuery == ''" class="row mt-3">
      <div
        class="col-sm-12 col-md-6 col-lg-3 mb-4"
        v-for="item in movieList"
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

    <div v-else class="row mt-3">
      <div
        class="col-sm-12 col-md-6 col-lg-3 mb-4"
        v-for="item in searchQueryList"
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
  </div>
</template>

<script lang="ts">
import { Actions } from "@/store/enums/StoreEnums";
import { defineComponent, onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export interface IMovie {
  title: string;
}

export default defineComponent({
  name: "HomePage",
  setup() {
    const store = useStore();
    const router = useRouter();
    const searchQuery = ref("");
    const movieList = computed(() => {
      return store.getters.getMovieList;
    });

    const searchQueryList = computed(() => {
      return movieList.value.filter((item) => {
        return searchQuery.value
          .toLowerCase()
          .split(" ")
          .every((v) => item.title.toLowerCase().includes(v));
      });
    });

    onMounted(() => {
      store.dispatch(Actions.GET_DATA);
    });

    const routerMovieDetail = (id) => {
      router.push({ name: "moviedetail", params: { id } });
    };
    return {
      movieList,
      routerMovieDetail,
      searchQueryList,
      searchQuery,
    };
  },
});
</script>



<style>
h1 {
  color: #fff;
}
.lead {
  color: #aaa;
}

.wrapper {
  margin: 10vh;
}

.card {
  border: none;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  border-radius: 20px;
  min-height: 450px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 420px) {
    min-height: 300px;
  }

  &.card-has-bg {
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    background-size: 120%;
    background-repeat: no-repeat;
    background-position: center center;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      -webkit-filter: grayscale(1);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
    }

    &:hover {
      transform: scale(0.98);
      box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
      background-size: 130%;
      transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

      .card-img-overlay {
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);

        background: linear-gradient(0deg);
      }
    }
  }
  .card-footer {
    background: none;
    border-top: none;
    .media {
      img {
        border: solid 3px rgba(255, 255, 255, 0.3);
      }
    }
  }
  .card-title {
    font-weight: 800;
  }
  .card-meta {
    color: rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .card-body {
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover {
    .card-body {
      margin-top: 30px;
      transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    }
    cursor: pointer;
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
}
@media (max-width: 767px) {
}
</style>