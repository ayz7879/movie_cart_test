import React, { useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import axios from "axios";

const AppState = (props) => {
  const url = "http://localhost:3000/api/movie";
  const [MovieProduct, setMovieProduct] = useState([]);

  // get all movie data
  useEffect(() => {
    const getAllMovie = async () => {
      const data = await axios.get(`${url}/getAllMovie`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setMovieProduct(data.data.data);
    };
    getAllMovie();
  }, [MovieProduct]);

  // add movie request
  const addMovie = async (name, title, description, imgSrc, category) => {
    const data = await axios.post(
      `${url}/addMovie`,
      {
        name,
        title,
        description,
        imgSrc,
        category,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  };


  return (
    <AppContext.Provider value={{ MovieProduct, addMovie }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
