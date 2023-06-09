import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card({ cover, title , id }) {
  return (
    <div className="card">
      <Link to={`/location/${id}`}>

        <img src={cover} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default Card;
