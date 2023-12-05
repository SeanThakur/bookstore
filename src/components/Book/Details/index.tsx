import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { bookDetailsProps } from "../../../typings/dtos";
import { RootState, actions, useAppSelector } from "../../../store/root.store";

const BookDetails: React.FC<{ data: bookDetailsProps }> = ({ data }) => {
  const auth = useAppSelector((state: RootState) => state.auth.auth);

  const addProdcutToCart = async () => {
    if (auth.isAuth) {
      const cartData = {
        ...data,
        qty: 1,
      };
      await actions.cart.productAdd(cartData);
    } else {
      window.alert("Please login to access cart feature!");
    }
  };

  return (
    <div className="bookDetails-container">
      <img
        src={data.cover_image}
        alt="book-cover-img"
        className="bookDetails-img"
      />

      <div className="bookDetails-info-wrapper">
        <h3>{data.title}</h3>
        <p>{data.describe}</p>
        <h4>{data.pages} pages</h4>
        <div>
          <p>
            Author: <Link to={`/author/${data.author}`}>{data.author}</Link>
          </p>
          <p>
            Genre: <span>{data.genre}</span>
          </p>
        </div>
        <h2>Price: {data.price}$</h2>
        <button
          className="login-button bootDetails-cart"
          onClick={addProdcutToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
