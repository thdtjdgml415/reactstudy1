import React from "react";

const MovieText = ({ adult, poster_path, title, vote }) => {
  return (
    <a href="/">
      <div className="title">{title}</div>
      <div className="adult">{adult}</div>
      <div className="backdrop_path">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </div>
      <div className="vote">{vote}</div>
    </a>
  );
};

function MovieCont({ movies }) {
  // console.log(movies);
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
                poster_path={el.poster_path}
                overview={el.overview}
                title={el.title}
                vote={el.vote_average}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCont;
