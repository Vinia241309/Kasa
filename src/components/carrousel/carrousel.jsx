import React, { useState } from 'react';
import CarouselArrowRight from '../../assets/CarouselArrowRight.png';
import CarouselArrowLeft from '../../assets/CarouselArrowLeft.png';
import './carrousel.css';

const Carousel = ({ carouselImg }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPicture = () => {

     setCurrentIndex( currentIndex === carouselImg.length - 1 ? 0 : currentIndex + 1)
    
  };

  const previousPicture = () => {
    setCurrentIndex( currentIndex === 0? carouselImg.length - 1 :currentIndex -1 )
  };

  return (
    <section className="carousel">
      {carouselImg.length > 0 && (
        <>
          {carouselImg.length >1?(
            <>
            <img
              className="carousel_arrow_left"
              src={CarouselArrowLeft}
              alt="show previous slider"
              onClick={previousPicture}
            />
         
          <div className="carousel_image">
            {carouselImg.length > 0 && (
              <img src={carouselImg[currentIndex]} alt="image" />
            )}
          </div>
       
            <img
              className="carousel_arrow_right"
              src={CarouselArrowRight}
              alt="show next slider"
              onClick={nextPicture}
            />
        
          <p className="imgCounter">
            {currentIndex + 1}/{carouselImg.length}
          </p>
          </>
        ):(
        
          <div className="carousel_image">
            {carouselImg.length > 0 && (
              <img src={carouselImg[currentIndex]} alt="image" />
            )}
          </div>
        )}</>
      )}
    </section>
  );
};

export default Carousel;
