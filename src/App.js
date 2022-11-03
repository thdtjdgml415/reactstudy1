import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import Movie from "./components/pages/Movie";
import Js from "./components/pages/Js";
import Css from "./components/pages/Css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Js" element={<Js />} />
        <Route path="/Css" element={<Css />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
