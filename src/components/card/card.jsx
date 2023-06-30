
import React from 'react';
import './card.css';

function Card({ logement }) {
  const handleClick = () => {
    window.location.href = `/location/${logement.id}`;
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={logement.cover} alt={logement.title} />
      <h3>{logement.title}</h3>
    </div>
  );
}

export default Card;

