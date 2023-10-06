enum Actions {
  // action types
GET_DATA = "getData",
GET_FAVORITE_MOVIES = "getFavoriteMovie",
GET_MOVIE_DETAIL = "getMovieDetail",
CLEAR_MOVIE_DETAIL = "clearMovieDetail",
}

enum Mutations {
  // mutation types
SET_DATA = "setDataMovie",
SET_FAVORITE_MOVIE = "setFavoriteMovie",
SET_MOVIE_DETAIL= "setMovieDetail",
SET_CLEAR_MOVIE_DETAIL = "clearMovieDetails",
}

export { Actions, Mutations };