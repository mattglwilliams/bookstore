import React from "react";

function BookCard(props) {
  return (
    <a href="#" className="book-card">
      <img src={props.image} alt="This is an image of the book" />
      <h2>{props.title}</h2>
      <p className="book-authors">Authors: {props.authors}</p>
      <p className="book-pages">Pages: {props.pages}</p>
      <p className="book-description">
        {props.description
          ? props.description.substring(0, 140) + "..."
          : "No description"}
      </p>
    </a>
  );
}

export default BookCard;
