import axios from "axios";

export const setMovies = (payload) => {
    return {type: 'MOVIES/GETALLMOVIES', payload};
}

export const searchMovies = (payload) => {
    return {type: 'MOVIES/FILTERMOVIES', payload};
}

export const setLoading = (payload) => {
    return {type: 'MOVIES/MOVIESLOADING', payload};
}

export const setDetails = (payload) => {
    return {type: 'MOVIES/GETDETAILS', payload};
}

export const getMovies = () => {
    return async(dispatch) => {
        try {
            dispatch(setLoading(true));
            await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d9c006d75c5c8bfa5b741557dce9bf49')
            .then((res) => {
            dispatch(setLoading(false));
                dispatch(setMovies(res.data))
            })
            .catch((err) => {
            dispatch(setLoading(false));
            console.log(err);
            })
        } catch (error) {
            dispatch(setLoading(false));
            console.log(error);
        }
    }
}

export const Cari = (search) => {
    return async(dispatch) => {
        try {
            dispatch(setLoading(true));
            await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d9c006d75c5c8bfa5b741557dce9bf49&query=${search}`)
            .then((res) => {
            dispatch(setLoading(false));
                dispatch(searchMovies(res.data))
            })
            .catch((err) => {
            dispatch(setLoading(false));
            console.log(err);
            })
        } catch (error) {
            dispatch(setLoading(false));
            console.log(error);
        }
    }
}

export const getDetailsMovie = (movie_id) => {
    return async(dispatch) => {
        try {
            dispatch(setLoading(true));
            await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=d9c006d75c5c8bfa5b741557dce9bf49`)
            .then((res) => {
            dispatch(setLoading(false));
                dispatch(setDetails(res.data))
            })
            .catch((err) => {
            dispatch(setLoading(false));
            console.log(err);
            })
        } catch (error) {
            dispatch(setLoading(false));
            console.log(error);
        }
    }
}