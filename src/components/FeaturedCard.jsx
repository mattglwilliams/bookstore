import React, { useState, useEffect } from "react";

function FeaturedCard(props) {
  const [selected, setSelected] = useState("white");
  const addSelected = () => {
    return setSelected("green");
  };
  useEffect(() => {
    const items = localStorage.getItem("selected");
    if (items) {
      const storedItems = JSON.parse(window.localStorage.getItem("selected"));
      setSelected(storedItems);
    }
  }, []);
  useEffect(() => {
    const oldData = localStorage.getItem("selected");
    if (oldData) {
      const parsedOldData = JSON.parse(window.localStorage.getItem("selected"));
      window.localStorage.setItem(
        "selected",
        JSON.stringify([...parsedOldData, selected])
      );
    } else {
      window.localStorage.setItem("selected", JSON.stringify(selected));
    }
  }, [selected]);

  return (
    <button className="featured-card" onClick={addSelected}>
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
