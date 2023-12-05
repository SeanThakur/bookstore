import React, { Fragment, useEffect, useState } from "react";
import Book from "../../components/Book";
import FilterBy from "../../components/Book/FilterBy";
import "./styles.css";
import { booksType } from "../../typings/dtos";
import { booksData } from "../../services/bookData";

const Books = () => {
  const genres: string[] = ["Ficton", "Drama", "Science"];
  const author: string[] = ["alksdf", "adsf"];

  const [books, setBookData] = useState<booksType[]>([]);

  useEffect(() => {
    setBookData(booksData);
  }, []);

  const handleGenreChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedGenre: string = event.target.value;
    // if (selectedGenre === '') {
    //   setFilteredBooks(books);
    // } else {
    //   const filtered = books.filter((book) => book.genre === selectedGenre);
    //   setFilteredBooks(filtered);
    // }
  };

  const handleAuthorChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const selectedGenre: string = event.target.value;
    // if (selectedGenre === '') {
    //   setFilteredBooks(books);
    // } else {
    //   const filtered = books.filter((book) => book.genre === selectedGenre);
    //   setFilteredBooks(filtered);
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
          <FilterBy
            name="Author"
            title="Filter by Author:"
            data={author}
            handleChange={handleAuthorChange}
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
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Books;
