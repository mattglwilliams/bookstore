import React from "react";

function ItemCard(props) {
  return (
    <button className="item-card">
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
