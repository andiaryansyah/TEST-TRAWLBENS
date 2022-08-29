const initialState = {
  movies: [],
  filterMovies: [],
  getDetails:[],
  loading: false,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "MOVIES/GETALLMOVIES":
      return { ...state, movies: payload };
    case "MOVIES/FILTERMOVIES":
      return { ...state, filterMovies: payload };
    case "MOVIES/MOVIESLOADING":
      return { ...state, loading: payload };
      case "MOVIES/GETDETAILS":
      return { ...state, getDetails: payload };
    default:
      return state;
  }
}
