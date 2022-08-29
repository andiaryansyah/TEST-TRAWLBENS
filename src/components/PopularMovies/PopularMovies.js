import React, { useEffect } from "react";
import { searchMovies, getMovies } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import Spinner from "../../components/Spinner/Spinner";
import "./PopularMoviesStyles.css";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const { filterMovies } = useSelector((state) => state.movies);
  const { loading } = useSelector((state) => state.movies);
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(searchMovies(movies));
    // eslint-disable-next-line
  }, [movies]);
  return (
    <>
      <div className="container">
        <h1 className="movie-heading">Popular Movies</h1>
        <div>
          <Search />
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="movie-container">
            {filterMovies.results
              ? filterMovies.results.map((movie) => (
                  <div key={movie.id} className="movie-card">
                    <Link to={`/detailmovie/${movie.id}`}>
                      <img
                        src={
                          movie.backdrop_path
                            ? `${process.env.REACT_APP_IMDB_IMAGE}${movie.backdrop_path}`
                            : movie.poster_path
                            ? `${process.env.REACT_APP_IMDB_IMAGE}${movie.poster_path}`
                            : process.env.REACT_APP_NO_IMAGE
                        }
                        alt="..."
                      />
                    </Link>
                    <h2 className="movie-title">{movie.title}</h2>
                    <div className="date">
                      <p>{movie.release_date}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        )}
      </div>
      
    </>
  );
};

export default PopularMovies;
