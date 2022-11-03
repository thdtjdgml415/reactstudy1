import React from "react";

const Title = (props) => {
  return (
    <section className="cont__title">
      <div className="container">
        <h1>
          <em>{props.title[0]}</em>
          <strong>{props.title[1]}</strong>
        </h1>
      </div>
    </section>
  );
};

export default Title;
