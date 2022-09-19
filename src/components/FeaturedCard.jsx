import React, { useState, useEffect } from "react";

function FeaturedCard(props) {
  // const [selected, setSelected] = useState();
  // const addSelected = () => {
  //   return setSelected([props.title]);
  // };
  // // useEffect(() => {
  // //   const items = JSON.parse(window.localStorage.getItem("selected"));
  // //   if (items) {
  // //     setSelected(items);
  // //   }
  // // }, []);
  // useEffect(() => {
  //   let oldData = JSON.parse(localStorage.getItem("selected"));
  //   window.localStorage.setItem("selected", JSON.stringify([selected]));
  // }, [selected]);
  return (
    <button className="featured-card" key={props.key}>
      <img src={props.image} alt="This is an image of the book" />
      <h2>{props.title}</h2>
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
