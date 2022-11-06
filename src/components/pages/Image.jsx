import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ImageCont from "../include/ImageCont";

function Image() {
  const [Images, setImages] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?page=1&query=space&client_id=Z4A0XicGRKz2GK0TTtsrNqvywI8vODnxiGoNDoUhc34&per_page=20&count=30"
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Title title={["Image", "REFERENCE"]} />
      <ImageCont Images={Images} />
      <Footer />
    </>
  );
}

export default Image;
