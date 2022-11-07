import React from "react";

const PopularMovie = ({ img, title, backimg, rank }) => {
  return (
    <a href="/" className="popular__box">
      <img src={`https://image.tmdb.org/t/p/w500/${backimg}`} alt={title} />
      <div className="title">{title}</div>
      <div className="popular__rank">{rank + 1}</div>
    </a>
  );
};

const PopularList = ({ lists }) => {
  return (
    <div className="popular__inner">
      <div className="container">
        <h2>인기영화</h2>
        <div className="popular__wrap">
          {lists.map((el, idx) =>
            idx < 5 ? (
              <PopularMovie
                key={idx}
                img={el.poster_path}
                title={el.title}
                backimg={el.backdrop_path}
                rank={idx}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularList;
