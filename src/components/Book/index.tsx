import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { booksProps } from "typings/dtos";
import { genreData } from "services/genreData";

const Book = ({
  id,
  description,
  name,
  image,
  price,
  genre_id,
}: booksProps) => {
  const navigate = useNavigate();
  const [genre, setGenre] = useState<string | undefined>("");

  const onBookClick = () => {
    navigate(`/book/${id}`);
  };

  useEffect(() => {
    const findGenre = genreData.find((item) => item.id === genre_id);
    setGenre(findGenre?.name);
  }, [genre_id]);

  return (
    <div className="book-container" onClick={onBookClick}>
      <img src={image} alt="book" className="book-img" />
      <div className="book-info">
        <h4>{name}</h4>
        <p className="book-info-desc">{description}</p>
        <b>Genre: {genre}</b>
      </div>
      <span className="book-price">
        <b>Price:</b> {price}$
      </span>
    </div>
  );
};

export default Book;
