import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './location.css';
import Data from '../../data';
import Carrousel from '../../components/carrousel/carrousel';
import fullStar from '../../assets/full_star.png';
import emptyStar from '../../assets/empty_star.png';
import Collapse from '../../components/collapse/collapse';

function Location() {
  const { id } = useParams();

  const getDataById = (id) => {
    return Data.find((item) => item.id === id);
  };

  const locationData = getDataById(id);
  const ValidId = locationData !== undefined;

  if (!ValidId) {
    return <Navigate to="/404" />;
  }

  const renderStars = () => {
    const rating = parseInt(locationData.rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img key={i} src={fullStar} alt="Full Star" className="star" />);
      } else {
        stars.push(<img key={i} src={emptyStar} alt="Empty Star" className="star" />);
      }
    }

    return stars;
  };

  return (
    <>
      {locationData && (
        <>
          <Carrousel carouselImg={locationData.pictures} />
          <section className="location_informations">
            <div className="location_content">
              <h2>{locationData.title}</h2>
              <h3>{locationData.location}</h3>
              <ul>
                {locationData.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="host">
              <div className="host_identity">
                <p className="host-name">{locationData.host.name}</p>
                <img src={locationData.host.picture} alt="Host" className="host-image" />
              </div>
              <div className="stars">
                {renderStars().map((star, index) => (
                  <span key={index} className="star">
                    {star}
                  </span>
                ))}
              </div>
            </div>
          </section>
          <section className="location_collapse">
            <div>
              <Collapse title="Description" className="description" content={locationData.description} />
            </div>
            <div>
              <Collapse title="Equipement" content={locationData.equipments} />
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Location;
