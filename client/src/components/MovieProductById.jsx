import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieProductById = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/api/movie";

  const [idData, setIdData] = useState([]);

  // get movie by id
  const getMovieById = async (id) => {
    const data = await axios.get(`${url}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    // console.log(data.data.data);
    setIdData(data.data.data);
  };
  getMovieById(id);

  return (
    <div className="d-flex justify-content-center align-items-center w-100  mt-5">
      <div className=" d-flex  w-50 gap-5">
        <img
          src={idData.imgSrc}
          style={{ width: "18rem" }}
          class="card-img-top"
          alt="see you soon"
        />
        <div class="card-body d-flex flex-column gap-2">
          <h5 class="card-title">{idData.name}</h5>
          <h6 >{idData.description}</h6>
          <a href="#" class="btn btn-warning">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieProductById;
