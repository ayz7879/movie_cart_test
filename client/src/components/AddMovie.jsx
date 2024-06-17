import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/AppContext";

const AddMovie = () => {
  const { addMovie } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, title, description, imgSrc, category } = data;
    addMovie(name, title, description, imgSrc, category);
    reset();
  };
  return (
    <>
      <h3 className="d-flex justify-content-center align-items-center bg-black text-light">
        Add Movie
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column justify-content-center mx-5  gap-3 mt-1 w-100"
      >
        {errors.name && (
          <span className="text-danger">This field is required</span>
        )}
        <input
          className="w-50 p-2"
          placeholder="Name "
          {...register("name", { required: true })}
        />

        {errors.title && (
          <span className="text-danger">This field is required</span>
        )}
        <input
          className="w-50 p-2"
          placeholder="Title "
          {...register("title", { required: true })}
        />

        {errors.description && (
          <span className="text-danger">This field is required</span>
        )}
        <input
          className="w-50 p-2"
          placeholder="Description "
          {...register("description", { required: true })}
        />

        {errors.imgSrc && (
          <span className="text-danger">This field is required</span>
        )}
        <input
          className="w-50 p-2"
          placeholder="Image Url "
          {...register("imgSrc", { required: true })}
        />

        {errors.category && (
          <span className="text-danger">This field is required</span>
        )}
        <input
          className="w-50 p-2"
          placeholder="Category "
          {...register("category", { required: true })}
        />

        <input className="btn btn-danger w-25" type="submit" />
      </form>
    </>
  );
};

export default AddMovie;
