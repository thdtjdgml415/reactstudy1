import React from "react";

const ImageText = ({ id, link, user, src, alt }) => {
  return (
    <div className="image__box">
      <img key={id} src={src} alt={`${alt}`} />
      <p className="image__desc">{user}</p>
    </div>
  );
};

function ImageCont({ Images }) {
  console.log(Images);
  return (
    <div className="image__cont">
      <div className="container">
        <h2>Images</h2>
        <div className="image__wrap">
          <div className="image__inner">
            {Images.map((el, idx) => (
              <ImageText
                key={idx}
                id={el.id}
                link={el.links}
                user={el.user.name}
                src={el.urls.thumb}
                alt={el.alt_description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCont;
