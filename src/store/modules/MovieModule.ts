import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import axios from "axios";

@Module
export default class MovieModule extends VuexModule {
    movieList = {}; 
    favoriteList = {}; 
    movieDetail="";

   get getMovieList(){
    return this.movieList;
  }

  get getFavoriteList(){
    return this.favoriteList;
  }

  get getMovieDetails(){
    return this.movieDetail;
  }

   @Mutation
   [Mutations.SET_DATA](data) {
    this.movieList = data;
  }

   @Mutation
   [Mutations.SET_FAVORITE_MOVIE](data) {
    this.favoriteList = data;
  }

  @Mutation
   [Mutations.SET_MOVIE_DETAIL](data) {
    
    this.movieDetail = data;
  }

  @Mutation
   [Mutations.SET_CLEAR_MOVIE_DETAIL]() {
    this.movieDetail = "";
  }


  @Action
  [Actions.GET_DATA]() {
    return axios.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", {
            headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTY4NWY0ODQ0NjVlZGU4MmVjM2QzMjA3NDBhZjc1YyIsInN1YiI6IjY1MWQ4ZmVhOGMyMmMwMDBjOTA4YTgwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.znHL00V2X-vQHh0_fhmRI4NJ3oew-YhnPBXsNOH6A50 '
            }}).then((res) => {
                this.context.commit(Mutations.SET_DATA,res.data.results)
            }).catch((e) => {
            console.log(e.response)
            });
  }


  @Action
  [Actions.GET_FAVORITE_MOVIES]() {
    return axios.get("https://api.themoviedb.org/3/account/20530441/favorite/movies?language=en-US&page=1&sort_by=created_at.asc", {
            headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTY4NWY0ODQ0NjVlZGU4MmVjM2QzMjA3NDBhZjc1YyIsInN1YiI6IjY1MWQ4ZmVhOGMyMmMwMDBjOTA4YTgwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.znHL00V2X-vQHh0_fhmRI4NJ3oew-YhnPBXsNOH6A50 '
            }}).then((res) => {
                this.context.commit(Mutations.SET_FAVORITE_MOVIE,res.data.results)
            }).catch((e) => {
            console.log(e.response)
            });
  }

  @Action
  [Actions.GET_MOVIE_DETAIL](movieId) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
            headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTY4NWY0ODQ0NjVlZGU4MmVjM2QzMjA3NDBhZjc1YyIsInN1YiI6IjY1MWQ4ZmVhOGMyMmMwMDBjOTA4YTgwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.znHL00V2X-vQHh0_fhmRI4NJ3oew-YhnPBXsNOH6A50 '
            }}).then((res) => {
                this.context.commit(Mutations.SET_MOVIE_DETAIL,res.data)
            }).catch((e) => {
            console.log(e.response)
            });
  }
  @Action
  [Actions.CLEAR_MOVIE_DETAIL]() {
    this.context.commit(Mutations.SET_CLEAR_MOVIE_DETAIL);
  }

}
                                                                                                                                                                                                