import React, {useState, useEffect} from "react";

function ListingCard({ card, onDelete }) {
  
  const [likeButton, setLikeButton] = useState(true)

  function likeHandler(){
    setLikeButton(!likeButton)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${card.id}`, {
      method: "DELETE"
    })
    onDelete(card.id)
  }

  return (
    <li className="card" id={card.id} >
      <div className="image">
        <span className="price">$0</span>
        <img src={card.image} alt={card.description} />
      </div>
      <div className="details">
        {likeButton ? (
          <button className="emoji-button favorite active" onClick={likeHandler}>★</button>
        ) : (
            <button className="emoji-button favorite" onClick={likeHandler}>☆</button>
        )}
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}


export default ListingCard;
