import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import axios from "axios";

const MovieProduct = () => {
  const { MovieProduct } = useContext(AppContext);
  
  const url = "http://localhost:3000/api/movie";

  const handleDelete = async (id) => {
    const data = await axios.delete(`${url}/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    alert("done")
  };

  return (
    <div className="d-flex justify-content-center flex-wrap gap-3 mt-5">
      {MovieProduct.map((e) => (
        <div key={e._id} className="card col-md-4" style={{ width: "18rem" }}>
          <Link to={`/${e._id}`}>
            <img src={e.imgSrc} class="card-img-top" alt="see you soon" />
          </Link>
          <div class="card-body">
            <h5 class="card-title">{e.name}</h5>
            <p class="card-text">{e.description}</p>
            <div className="d-flex gap-2">
              <a href="#" class="btn btn-warning">
                Add to Cart
              </a>
              <button
                onClick={() => handleDelete(e._id)}
                href="#"
                class="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieProduct;
