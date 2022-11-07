import React, { useRef } from "react";

const MovieSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  //키워드 입력
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  //검색
  const onClick = () => {
    handleSearch();
  };
  return (
    <div className="movie__search">
      <div className="container">
        <h2>검색하기</h2>
        <input
          ref={inputRef}
          type="search"
          placeholder="영화제목을 입력하세요!"
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          검색
        </button>
      </div>
    </div>
  );
};

export default MovieSearch;
