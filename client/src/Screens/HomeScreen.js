import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
// import AxiosApi from "../api/AxiosApi";

function HomeScreen(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <Link to={`/product/${product.id}`}>
                <img
                  className="product-image"
                  src={product.image}
                  alt="product"
                />
              </Link>
              <div className="product-name">
                <Link to={`/product/${product.id}`}> {product.name} </Link>
              </div>
              <div className="product-brand"> {product.brand} </div>
              <div className="product-price"> {product.price} </div>
              <div className="product-rating">
                {" "}
                {product.rating} Stars {product.numReviews}{" "}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeScreen;
