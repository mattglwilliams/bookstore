import React from "react";

function FeaturedCard(props) {
  // const desc = props.description.slice(0, 140);
  return (
    <div className="featured-card">
      <img src={props.image} alt="This is an image of the book" />
      <h2>{props.title}</h2>
      <p className="featured-authors">Authors: {props.authors}</p>
      <p className="featured-pages">Pages: {props.pages}</p>
      <p className="featured-description">
        {props.description
          ? props.description.substring(0, 140) + "..."
          : "No description"}
      </p>
    </div>
  );
}

export default FeaturedCard;
