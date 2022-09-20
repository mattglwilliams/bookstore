import React, { useState, useEffect } from "react";
import "../App.css";
import Data from "./../data.json";

function Ebooks() {
  const [bookData] = useState(Data);
  const [selected, setSelected] = useState();
  const featuredItems = [];
  const remainingItems = [];
  for (let i = bookData.items.length - 2; i < bookData.items.length; i++) {
    featuredItems.push(bookData.items[i]);
  }
  for (let i = 0; i < bookData.items.length - 2; i++) {
    remainingItems.push(bookData.items[i]);
  }

  const handleClick = (event) => {
    event.currentTarget.classList.toggle("bg-salmon");
  };

  return (
    <div className="container">
      <p className="category-content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
        quibusdam earum odio ducimus! Odit expedita laboriosam provident
        praesentium quidem cupiditate, voluptatum omnis? Omnis deserunt neque
        perspiciatis adipisci unde, numquam odit.
      </p>
      <section className="all-items-container">
        <section className="featured-container">
          <h2>Featured</h2>
          <div className="featured-cards">
            {featuredItems.map((card) => {
              return (
                <button
                  className="featured-card"
                  key={card.volumeInfo.title}
                  onClick={handleClick}
                >
                  <img
                    src={card.volumeInfo.imageLinks.thumbnail}
                    alt="This is an image of the book"
                  />
                  <h3>{card.volumeInfo.title}</h3>
                  <p className="featured-authors">
                    Authors: {card.volumeInfo.authors}
                  </p>
                  <p className="featured-pages">
                    Pages: {card.volumeInfo.pageCount}
                  </p>
                  <p className="featured-description">
                    {card.volumeInfo.description
                      ? card.volumeInfo.description.substring(0, 140) + "..."
                      : "No description"}
                  </p>
                </button>
              );
            })}
          </div>
        </section>
        <section className="items-container">
          <div className="items-cards">
            {remainingItems.map((card) => {
              return (
                <button className="item-card" key={card.volumeInfo.title}>
                  <img
                    src={card.volumeInfo.imageLinks.thumbnail}
                    alt="This is an image of the Item"
                  />
                  <div className="item-content">
                    <h3>{card.volumeInfo.title}</h3>
                    <p className="item-authors">
                      Authors: {card.volumeInfo.authors}
                    </p>
                    <p className="item-pages">
                      Pages: {card.volumeInfo.pageCount}
                    </p>
                    <p className="item-description">
                      {card.volumeInfo.description
                        ? card.volumeInfo.description.substring(0, 140) + "..."
                        : "No description"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
}

export default Ebooks;
