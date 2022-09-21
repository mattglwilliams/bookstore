import React, { useState, useEffect } from "react";

function FeaturedCard(props) {
  const [selected, setSelected] = useState(
    localStorage.getItem(`selected-${props.title}`)
  );

  const handleClick = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    const data = window.localStorage.getItem(`selected-${props.title}`);
    if (data !== null) setSelected(JSON.parse(data));
  }, []);

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
