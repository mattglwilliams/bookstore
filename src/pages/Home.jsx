import React, { useState, useEffect } from "react";
import "../App.css";
import FeaturedCard from "../components/FeaturedCard";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const featuredBooks = [];

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
      featuredBooks.push(data.items[i]);
    }
  }

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
        quibusdam earum odio ducimus! Odit expedita laboriosam provident
        praesentium quidem cupiditate, voluptatum omnis? Omnis deserunt neque
        perspiciatis adipisci unde, numquam odit. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Quisquam quibusdam earum odio ducimus!
        Odit expedita laboriosam provident praesentium quidem cupiditate,
        voluptatum omnis? Omnis deserunt neque perspiciatis adipisci unde,
        numquam odit.
      </p>
      <section className="featured-container">
        <h2>Featured</h2>
        <div className="featured-cards">
          {featuredBooks.map((card) => {
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
    </div>
  );
}

export default Home;
