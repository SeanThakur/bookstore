import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { bookDetailsProps } from "../../../typings/dtos";

const BookDetails: React.FC<{ data: bookDetailsProps }> = ({ data }) => {
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
        <button className="login-button bootDetails-cart">Add To Cart</button>
      </div>
    </div>
  );
};

export default BookDetails;
