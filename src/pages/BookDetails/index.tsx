import BookDetails from "components/Book/Details";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authorData } from "services/authorData";
import { booksData } from "services/bookData";
import { genreData } from "services/genreData";
import { bookDetailsProps } from "typings/dtos";

const BooksDetails = () => {
  let { id } = useParams();
  const [bookDetails, setBookDetails] = useState<bookDetailsProps | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const findBook = booksData.find((item) => item.id === Number(id));
    const author = authorData.find(
      (item) => item.id === Number(findBook?.author_id)
    );
    const genre = genreData.find(
      (item) => item.id === Number(findBook?.genre_id)
    );
    if (findBook && author && genre) {
      const detailsData: bookDetailsProps = {
        ...findBook,
        author: author.name,
        genre: genre.name,
      };
      setBookDetails(detailsData);
    }
    setLoading(false);
  }, [id]);

  return (
    <Fragment>
      {loading
        ? "Loading....."
        : bookDetails && <BookDetails data={bookDetails} />}
    </Fragment>
  );
};

export default BooksDetails;
