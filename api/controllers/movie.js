import { Movies } from "../models/movie.js";

// Get All Products
export const getAllMovie = async (req, res) => {
  try {
    const data = await Movies.find();
    if (!data) {
      return res.json({ message: "Get all Data not found" });
    }
    res.json({ message: "Successfully get all data", success: true, data });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// get movie by id
export const getMovieById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Movies.findById(id);
    if (!data) {
      return res.json({ message: "Get Id data not found" });
    }
    res.json({ message: "Successfully get id data", success: true, data });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// Add movie by
export const addMovie = async (req, res) => {
  const { name, title, description, category, imgSrc } = req.body;
  try {
    const data = await Movies.create({
      name,
      title,
      description,
      category,
      imgSrc,
    });
    res.json({ message: "Successfully add data", success: true, data });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// delete movie by id
export const deleteData = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Movies.findByIdAndDelete(id);
    res.json({ message: "Successfully Delete data", success: true });
  } catch (error) {
    res.json({ message: error.message });
  }
};
