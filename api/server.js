import bodyParser from "express";
import express from "express";
import mongoose from "mongoose";
import movieRoute from "./routes/movie.js";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect(
    "mongodb+srv://yashish393:ZVBOaxPLyNAVlZST@cluster0.yk6flzk.mongodb.net/",
    {
      dbName: "MOVIE_CART",
    }
  )
  .then(() => {
    console.log("mongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

// Movie Cart
app.use("/api/movie", movieRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
