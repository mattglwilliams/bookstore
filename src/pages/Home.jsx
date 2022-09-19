import React, { useState, useEffect } from "react";
import "../App.css";
import FeaturedCard from "../components/FeaturedCard";
import ItemCard from "../components/ItemCard";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const featuredItems = [];
  const remainingItems = [];

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
    for (let i = data.items.length - 2; i < data.items.length; i++) {
      featuredItems.push(data.items[i]);
    }
    for (let i = 0; i < data.items.length - 2; i++) {
      remainingItems.push(data.items[i]);
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
      <section className="items-container">
        <section className="featured-container">
          <h2>Featured</h2>
          <div className="featured-cards">
            {featuredItems.map((card) => {
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
            {remainingItems.map((card) => {
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
    </div>
  );
}

export default Home;
