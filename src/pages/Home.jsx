import React, { useState, useEffect } from "react";
import FeaturedCard from "../components/FeaturedCard";
import ItemCard from "../components/ItemCard";
import "../App.css";

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // empty arrays to store the 2 featured books and then the rest of the books
  const featuredItems = [];
  const remainingItems = [];

  // fetching the api data and storing it in the data state variable
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
    // looping through the last two items in the data and pushing them to the featuredItems array
    for (let i = data.items.length - 2; i < data.items.length; i++) {
      featuredItems.push(data.items[i]);
    }
    // looping through the rest of the items in the data and pushing them to the remainingItems array
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
      <section className="all-items-container">
        <section className="featured-container">
          <h2>Featured</h2>
          <div className="featured-cards">
            {featuredItems.map((card) => {
              return (
                <FeaturedCard
                  title={card.volumeInfo.title}
                  key={card.volumeInfo.title}
                  image={card.volumeInfo.imageLinks.thumbnail}
                  description={card.volumeInfo.description}
                  authors={card.volumeInfo.authors}
                  pages={card.volumeInfo.pageCount}
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
                  image={card.volumeInfo.imageLinks.thumbnail}
                  description={card.volumeInfo.description}
                  authors={card.volumeInfo.authors}
                  pages={card.volumeInfo.pageCount}
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
