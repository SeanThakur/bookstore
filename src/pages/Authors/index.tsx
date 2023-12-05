import React, { Fragment, useEffect, useState } from "react";
import "./styles.css";
import { authorType } from "typings/dtos";
import { authorData } from "services/authorData";
import Author from "components/Author";

const Authors = () => {
  const [authors, setAuthorData] = useState<authorType[]>([]);

  useEffect(() => {
    setAuthorData(authorData);
  }, []);
  return (
    <Fragment>
      <h2 className="authors-list">List of all Authors</h2>
      <div className="authors-wrapper">
        {authors.map((data, idx) => (
          <Author key={idx} data={data} />
        ))}
      </div>
    </Fragment>
  );
};

export default Authors;
