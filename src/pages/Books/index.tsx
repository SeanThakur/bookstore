import React, { Fragment, useEffect, useState } from "react";
import Book from "../../components/Book";
import FilterBy from "../../components/Book/FilterBy";
import "./styles.css";
import { booksType } from "../../typings/dtos";
import { booksData } from "../../services/bookData";
import { genreData } from "../../services/genreData";
import { getNames } from "../../helpers/utils";

const Books = () => {
  const [genres, setGenres] = useState<string[]>([]);

  const [books, setBookData] = useState<booksType[]>([]);

  useEffect(() => {
    const genreNames = getNames(genreData);
    setGenres(genreNames);
    setBookData(booksData);
  }, []);

  const handleGenreChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedGenre: string = event.target.value;
    if (selectedGenre === "") {
      setBookData(booksData);
    } else {
      const findGenre = genreData.find((item) => item.name === selectedGenre);
      const filtered = booksData.filter(
        (book) => book.genre_id === findGenre?.id
      );
      setBookData(filtered);
    }
  };

  return (
    <Fragment>
      <div className="books-list-wrapper">
        <h2>All Books</h2>
        <div className="books-filterby-container">
          <FilterBy
            name="Genre"
            title="Filter by Genre:"
            data={genres}
            handleChange={handleGenreChange}
          />
        </div>
      </div>
      <div className="books-collection">
        {books.map((item, idx) => (
          <Book
            key={idx}
            id={item.id}
            name={item.title}
            description={item.describe}
            image={item.cover_image}
            price={item.price}
            genre_id={item.genre_id}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Books;
