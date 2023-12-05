import React, { Fragment, useEffect, useState } from "react";
import "./styles.css";

import Banner from "../../components/Banner";
import Book from "../../components/Book";
import { booksType } from "../../typings/dtos";
import { booksData } from "../../services/bookData";

const Home = () => {
  const [books, setBookData] = useState<booksType[]>([]);

  useEffect(() => {
    setBookData(booksData);
  }, []);

  return (
    <Fragment>
      <Banner />
      <h2 className="books-collection-title">Best Seller Books</h2>
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

export default Home;
