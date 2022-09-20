import React, { useState, useEffect } from "react";
import "../App.css";
import FeaturedCard from "../components/FeaturedCard";
import ItemCard from "../components/ItemCard";

function Magazines() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const featuredMags = [];
  const mags = [];

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=HTML5`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (!loading) {
    if (data.items.length < 2) {
      for (let i = data.items.length - 2; i < data.items.length; i++) {
        featuredMags.push(data.items[i]);
      }
      for (let i = 0; i < data.items.length - 2; i++) {
        if (data.items[i].volumeInfo.printType === "MAGAZINE") {
          mags.push(data.items[i]);
        }
      }
    } else {
      for (let i = 0; i < data.items.length; i++) {
        if (data.items[i].volumeInfo.printType === "MAGAZINE") {
          featuredMags.push(data.items[i]);
        }
      }
    }
  }

  return (
    <div className="container">
      <p className="category-content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
        quibusdam earum odio ducimus! Odit expedita laboriosam provident
        praesentium quidem cupiditate, voluptatum omnis? Omnis deserunt neque
        perspiciatis adipisci unde, numquam odit.
      </p>
      {featuredMags > 0 && mags > 0 ? (
        <section className="books-container">
          <section className="featured-container">
            <h2>Featured</h2>
            <div className="featured-cards">
              {featuredMags.map((card) => {
                return (
                  <FeaturedCard
                    title={card.volumeInfo.title}
                    key={card.volumeInfo.title}
                    authors={card.volumeInfo.authors}
                    pages={card.volumeInfo.pageCount}
                    image={card.volumeInfo.imageLinks.thumbnail}
                    description={card.volumeInfo.description}
                  />
                );
              })}
            </div>
          </section>
          <section className="items-container">
            <div className="items-cards">
              {mags.map((card) => {
                return (
                  <ItemCard
                    title={card.volumeInfo.title}
                    key={card.volumeInfo.title}
                    authors={card.volumeInfo.authors}
                    pages={card.volumeInfo.pageCount}
                    image={card.volumeInfo.imageLinks.thumbnail}
                    description={card.volumeInfo.description}
                  />
                );
              })}
            </div>
          </section>
        </section>
      ) : (
        <div className="none-available-content">
          No mags available currently
        </div>
      )}
    </div>
  );
}

export default Magazines;
