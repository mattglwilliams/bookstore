import React, { useState, useEffect } from "react";
import "../App.css";
import ItemCard from "../components/ItemCard";

function Ebooks() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ebooks = [];

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
    for (let i = 0; i < data.items.length; i++) {
      if (data.items[i].saleInfo.isEbook === true) {
        ebooks.push(data.items[i]);
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
      <section className="books-container">
        <section className="items-container">
          <div className="items-cards">
            {ebooks.map((card) => {
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
      {ebooks < 1 && (
        <div className="none-available-content">
          No ebooks available currently
        </div>
      )}
    </div>
  );
}

export default Ebooks;
