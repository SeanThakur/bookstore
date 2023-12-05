import React from "react";
import "./styles.css";
import { authorType } from "../../typings/dtos";
import { useNavigate } from "react-router-dom";

const Index: React.FC<{ data: authorType }> = ({ data }) => {
  const navigate = useNavigate();

  const onAuthorClick = () => {
    navigate(`/author/${data.name}`);
  };

  return (
    <div className="author-container" onClick={onAuthorClick}>
      <img
        src={data.cover_image}
        alt="book-author-img"
        className="author-img"
      />

      <div className="author-info-wrapper">
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Index;
