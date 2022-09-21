import React, { useState, useEffect } from "react";

function FeaturedCard(props) {
  // setting the selected state of this specific card with the value found in local storage
  const [selected, setSelected] = useState(
    localStorage.getItem(`selected-${props.title}`)
  );

  // if this card is clicked, set the selected state to the opposite of what it currently is
  const handleClick = () => {
    setSelected(!selected);
  };

  // on every re-render, get the selected state of this card from local storage
  useEffect(() => {
    const data = window.localStorage.getItem(`selected-${props.title}`);
    if (data !== null) setSelected(JSON.parse(data));
  }, []);

  // when the selected state changes, update local storage
  useEffect(() => {
    window.localStorage.setItem(`selected-${props.title}`, selected);
  }, [selected]);

  return (
    <button
      className={`featured-card ${selected ? "is-selected" : ""}`}
      onClick={handleClick}
    >
      <img src={props.image} alt="This is an image of the book" />
      <h3>{props.title}</h3>
      <p className="featured-authors">Authors: {props.authors}</p>
      <p className="featured-pages">Pages: {props.pages}</p>
      <p className="featured-description">
        {props.description
          ? props.description.substring(0, 140) + "..."
          : "No description"}
      </p>
    </button>
  );
}

export default FeaturedCard;
