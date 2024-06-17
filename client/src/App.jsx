import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieProduct from "./components/MovieProduct";
import MovieProductById from "./components/MovieProductById";
import AddMovie from "./components/AddMovie";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieProduct />} />
        <Route path="/addMovie" element={<AddMovie />} />
        <Route path="/:id" element={<MovieProductById />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
