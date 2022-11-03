import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";

function Movie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=0466376d0c5ab578b755f58c7beec394&language=en-US&page=1&include_adult=false&query=마블"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Title title={["Movie", "REFERENCE"]} />
      <MovieCont movies={movies} />
      <Footer />
    </>
  );
}

export default Movie;
