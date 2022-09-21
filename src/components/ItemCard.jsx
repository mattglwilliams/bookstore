import React, { useState, useEffect } from "react";

function ItemCard(props) {
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
      className={`item-card-${selected ? "selected" : "not-selected"}`}
      onClick={handleClick}
    >
      <img src={props.image} alt="This is an image of the Item" />
      <div className="item-content">
        <h3>{props.title}</h3>
        <p className="item-authors">Authors: {props.authors}</p>
        <p className="item-pages">Pages: {props.pages}</p>
        <p className="item-description">
          {props.description
            ? props.description.substring(0, 140) + "..."
            : "No description"}
        </p>
      </div>
    </button>
  );
}

export default ItemCard;
