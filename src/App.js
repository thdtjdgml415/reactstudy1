import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import Movie from "./components/pages/Movie";
import Js from "./components/pages/Js";
import Image from "./components/pages/Image";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Js" element={<Js />} />
        <Route path="/Image" element={<Image />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
