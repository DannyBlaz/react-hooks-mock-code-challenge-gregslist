import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ data, onDelete }) {
  const cardArray = data.map((cardData) => <ListingCard card={cardData} key={cardData.id} onDelete={onDelete}/>)
  return (
    <main>``
      <ul className="cards">
        { cardArray }
      </ul>
    </main>
  );
}

export default ListingsContainer;
