import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, Required: true },
  title: { type: String, Required: true },
  description: { type: String, Required: true },
  imgSrc: { type: String, Required: true },
  category: { type: String, Required: true },
});

export const Movies = mongoose.model("movies", movieSchema);
