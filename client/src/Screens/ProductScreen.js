import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

function ProductScreen(props) {
  //   console.log(props.match.params.id, "ID here");
  const product = data.products.find((x) => x.id === props.match.params.id);
  return (
    <div>
      <div>
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <h1>{product.name}</h1>
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              <h4>
                {product.rating} Stars {product.numReviews} Reviews
              </h4>
            </li>
            <li>
              <b>{product.price}</b>
            </li>
            <li>
              Description:
              <div>
                <b>{product.description}</b>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
