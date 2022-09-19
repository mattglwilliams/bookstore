import React, { useState } from "react";
import "../App.css";
import data from "../data.json";
import FeaturedCard from "../components/FeaturedCard";

function Home() {
  const [cardData] = useState(data.items);
  const featuredBooks = [];
  for (let i = cardData.length - 2; i < cardData.length; i++) {
    featuredBooks.push(cardData[i]);
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
      <section className="featured">
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
