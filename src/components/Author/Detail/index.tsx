import React from "react";
import "./styles.css";
import { authorType } from "typings/dtos";

const AuthorDetail: React.FC<{ data: authorType }> = ({ data }) => {
  return (
    <div className="authorDetail-container">
      <img
        src={data.cover_image}
        alt="author-cover-img"
        className="author-img"
      />
      <div className="authorDetail-info-wrapper">
        <h3>{data.name}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default AuthorDetail;
