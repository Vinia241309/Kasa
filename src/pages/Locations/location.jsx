import React from 'react';
import { useParams } from 'react-router-dom';
import './location.css';
import Data from '../../data';
import Carrousel from '../../components/carrousel/carrousel';
import fullStar from '../../assets/red_star.png';
import emptyStar from '../../assets/grey_star.png';
import Collapse from '../../components/collapse/collapse';

function Location() {
  const { id } = useParams();

  let locationData = null;
  let carouselImg = [];

  // Trouver l'objet correspondant à l'ID
  for (let i = 0; i < Data.length; i++) {
    if (Data[i].id === id) {
      locationData = Data[i];
      carouselImg = locationData.pictures;
    }
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
          <Carrousel carouselImg={carouselImg} />
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
                <p>{locationData.host.name}</p>
                <img src={locationData.host.picture} alt="Host" />
              </div>
              <div className="stars">{renderStars()}</div>
            </div>
          </section>
          <section className='location_collapse'>
          
  <Collapse title="Description" content={locationData.description} />
  <Collapse title="Equipment" content={locationData.equipments} />
</section>

      
        </>
      )}
    </>
  );
}

export default Location;

  
