import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../actions/userActions";

function ProductsScreen(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [numReview, setNumReview] = useState("");

  const dispatch = useDispatch();
  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description,
        rating,
        numReview,
      })
    );
  };

  useEffect(() => {}, [userInfo]);

  return (
    <>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Create Product</h2>
            </li>
            <li>
              {loading && <div>loading...</div>}
              {error && <div>{error}</div>}
            </li>
            <li>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image"
                id="image"
                onChange={(e) => setImage(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                name="brand"
                id="brand"
                onChange={(e) => setBrand(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                name="rating"
                id="rating"
                onChange={(e) => setRating(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="numReview">Num Reviews</label>
              <input
                type="text"
                name="numReview"
                id="numReview"
                onChange={(e) => setNumReview(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </li>
            <li>
              <button type="submit" className="button primary">
                Create
              </button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
export default ProductsScreen;
