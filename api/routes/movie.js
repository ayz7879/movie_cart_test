import express from "express";
import {
  addMovie,
  deleteData,
  getAllMovie,
  getMovieById,
} from "../controllers/movie.js";

const route = express.Router();

// get all movie
route.get("/getAllMovie", getAllMovie);

// get movie by id
route.get("/:id", getMovieById);

// add movie
route.post("/addMovie", addMovie);

// add movie
route.delete("/delete/:id", deleteData);

export default route;
