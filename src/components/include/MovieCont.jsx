import React from "react";

const MovieText = ({ adult, backdrop_path, overview, title }) => {
  return (
    <li>
      <div className="title">{title}</div>
      <div className="adult">{adult}</div>
      <div className="backdrop_path">
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
      </div>
      <div className="overview">{overview}</div>
    </li>
  );
};

function MovieCont({ movies }) {
  console.log(movies);
  return (
    <div className="movie__cont">
      <div className="container">
        <h2>MOVIE</h2>
        <div className="movie__wrap">
          <div className="movie__inner">
            {movies.map((el, idx) => (
              <MovieText
                key={idx}
                adult={el.adult}
                backdrop_path={el.backdrop_path}
                overview={el.overview}
                title={el.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCont;
