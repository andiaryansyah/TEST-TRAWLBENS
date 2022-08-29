import React, { useEffect, useState } from "react";
import { getDetailsMovie } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { FaShare, FaStar } from "react-icons/fa";
import Spinner from "../../components/Spinner/Spinner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./DetailMovieStyles.css";
import Popup from "../../components/Popup/Popup";
import Rating from "react-rating";

const DetailMovie = () => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const { getDetails } = useSelector((state) => state.movies);
  const { loading } = useSelector((state) => state.movies);
  const { id } = useParams();
  const stars = Array(5).fill(5);

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(getDetailsMovie(id));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Header />
          <div className="hero-img"></div>
          <div className="details">
            <div className="left">
              <h1>{getDetails.title}</h1>
              {getDetails.production_companies &&
              getDetails.production_companies.length ? (
                <>
                  <h4 style={{ marginTop: "1rem" }}>
                    {getDetails.production_companies[0].name}
                  </h4>
                </>
              ) : null}
              <p>
                {stars.map((_, index) => (
                  <FaStar
                    key={index}
                    style={{ color: "orange", paddingTop: "6px" }}
                  />
                ))}
                {getDetails.vote_average}
              </p>
              <p>Duration : {getDetails.runtime} Minutes</p>
              {getDetails.genres &&
                getDetails.genres.map((genre, index) => (
                  <div key={index}>
                    <h4>{genre.name}</h4>
                  </div>
                ))}
              <div className="pro-btns">
                <Link to="#" className="btn btn-light">
                  WATCH TRAILER
                </Link>
                <Link to="#" className="btn">
                  WATCH FULL MOVIES
                </Link>
              </div>
            </div>
            <div className="right">
              <div className="img-container">
                <div className="img-stack top">
                  <img
                    src={
                      getDetails.poster_path
                        ? `${process.env.REACT_APP_IMDB_IMAGE}${getDetails.poster_path}`
                        : getDetails.backdrop_path
                        ? `${process.env.REACT_APP_IMDB_IMAGE}${getDetails.backdrop_path}`
                        : process.env.REACT_APP_NO_IMAGE
                    }
                    alt="..."
                    className="img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <div>
                <h1 className="card-title">OVERVIEW</h1>
                <p>{getDetails.overview}</p>
              </div>
              <div className="share">
                <button onClick="#" className="btn-share">
                    <FaShare size={20} /> SHARE
                </button>
                <button className="btn-rate" onClick={togglePopup}>
                    <FaStar size={20} /> RATE THIS
                </button>
                {isOpen && (
                  <Popup
                    handleClose={togglePopup}
                    content={
                      <div>
                      <div className="rating">
                        <Rating
                          
                          fractions={2}
                          emptySymbol={
                            <FaStar
                              color={"grey"}
                              size={'70'}
                            />
                          }
                          fullSymbol={
                            <FaStar
                              color={"orange"}
                              size={'70'}
                              
                            />
                          }
                          initialRating={rating}
                          onClick={(rate) => setRating(rate)}
                        />
                        </div>
                        <div className="score">
                          <h1>Rating: {rating}</h1>
                        </div>
                      </div>
                    }
                  />
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default DetailMovie;
