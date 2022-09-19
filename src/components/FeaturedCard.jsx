import React from "react";

function FeaturedCard(props) {
  const desc = props.description.slice(0, 140);
  return (
    <div>
      <img src={props.image} alt="This is an image of the book" />
      <h2>{props.title}</h2>
      <p>Authors: {props.authors}</p>
      <p>Pages: {props.pages}</p>
      <p>{desc}...</p>
    </div>
  );
}

export default FeaturedCard;
