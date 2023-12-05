import React, { Fragment, useEffect, useState } from "react";
import "./styles.css";

import AuthorDetail from "../../components/Author/Detail";
import Book from "../../components/Book";
import { authorType, booksType } from "../../typings/dtos";
import { booksData } from "../../services/bookData";
import { useParams } from "react-router-dom";
import { authorData } from "../../services/authorData";

const Index = () => {
  let { name } = useParams();
  const [books, setBookData] = useState<booksType[]>([]);
  const [authorInfo, setAuthorInfo] = useState<authorType | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const authorDetails = authorData.find((item) => item.name === name);
    const authorBooks = booksData.filter(
      (item) => item.author_id === authorDetails?.id
    );
    setBookData(authorBooks);
    setAuthorInfo(authorDetails);
    setLoading(false);
  }, [name]);

  return (
    <Fragment>
      {loading ? (
        "Loading...."
      ) : (
        <Fragment>
          {authorInfo && <AuthorDetail data={authorInfo} />}
          <h2 className="authorDetails-title">Best Sellings</h2>
          <div className="authorDtails-book-wrapper">
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
      )}
    </Fragment>
  );
};

export default Index;
