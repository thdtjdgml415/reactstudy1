import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieSearch from "../include/MovieSearch";
import MovieCont from "../include/MovieCont";
import PopularList from "../include/PopularList";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [lists, setlists] = useState([]);

  //검색영화
  const search = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0466376d0c5ab578b755f58c7beec394&language=en-US&page=1&include_adult=false&query=${query}`
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.results))
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };
  //인기영화
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0466376d0c5ab578b755f58c7beec394&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((result) => setlists(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  //영화리스트
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
      <MovieSearch onSearch={search} />
      <MovieCont movies={movies} />
      <PopularList lists={lists} />
      <Footer />
    </>
  );
}

export default Movie;
