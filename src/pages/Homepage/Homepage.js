import React from "react";
import HeroImg from "../../components/HeroImg/HeroImg";
import Header from "../../components/Header/Header";
import PopularMovies from "../../components/PopularMovies/PopularMovies";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <>
    <Header />
    <HeroImg />
    <PopularMovies />
    <Footer />
    </>
  );
};

export default Homepage;
