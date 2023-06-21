/*import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card({logement}) {
  return (
    <div className="card">
      <Link to={`/location/${logement.id}`}>

        <img src={logement.cover} alt={logement.title} />
        <h3>{logement.title}</h3>
      </Link>
    </div>
  );
}

export default Card;*/
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

