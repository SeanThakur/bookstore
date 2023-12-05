import React from "react";
import "./styles.css";
import { booksProps } from "../../typings/dtos";
import { useNavigate } from "react-router-dom";

const Book = ({ id, description, name, image, price }: booksProps) => {
  const navigate = useNavigate();

  const onBookClick = () => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="book-container" onClick={onBookClick}>
      <img src={image} alt="book" className="book-img" />
      <div className="book-info">
        <h4>{name}</h4>
        <div className="book-info-desc">{description}</div>
      </div>
      <span className="book-price">Price: {price}$</span>
    </div>
  );
};

export default Book;
